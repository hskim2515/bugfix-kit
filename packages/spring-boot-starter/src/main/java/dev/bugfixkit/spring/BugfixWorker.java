package dev.bugfixkit.spring;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.SmartLifecycle;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.attribute.PosixFilePermissions;
import java.security.SecureRandom;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HexFormat;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import java.util.stream.Stream;

/**
 * 앱과 같이 뜨는 bugfix-kit 워커. 기동 때:
 *   1. node 를 찾는다(bugfix.worker.node → PATH → ~/.nvm)
 *   2. <dataDir>/kit 에 bugfix-kit 이 (같은 버전으로) 없으면 npm 으로 설치한다 - 한 번만
 *   3. <dataDir>/bugfix-kit.yml 이 없으면 만든다(저장소·브랜치·검증 명령은 속성 → git.properties → 작업 디렉터리의 git)
 *   4. `node bin/bugfix-server.mjs --config … --port …` 를 자식 프로세스로 띄우고, 죽으면 다시 띄운다
 * 앱이 내려가면 같이 내려간다. 프록시 컨트롤러는 이 워커의 주소로 넘긴다.
 * Node 나 git 이 없으면 경고만 남기고 앱은 그대로 뜬다(신고 저장·수정은 bugfix.server 를 주면 된다).
 */
public class BugfixWorker implements SmartLifecycle {

    private static final Logger log = LoggerFactory.getLogger("bugfix-kit");
    private final BugfixProperties props;
    private final String appName;
    private final String starterVersion;
    private volatile Process process;
    private volatile String url = "";
    private volatile boolean running;
    private Thread supervisor;

    public BugfixWorker(BugfixProperties props, String appName, String starterVersion) {
        this.props = props;
        this.appName = appName;
        this.starterVersion = starterVersion;
    }

    /** 프록시가 넘길 주소 - 준비 전엔 빈 문자열 */
    public String url() { return url; }

    @Override
    public void start() {
        if (running) return;
        // 외부 인스턴스(bugfix.server)를 쓰거나 워커를 껐으면 아무것도 안 띄운다
        if (props.getServer() != null && !props.getServer().isBlank()) { log.info("[bugfix-kit] 외부 인스턴스 {} 로 프록시합니다 (워커 없음)", props.getServer()); return; }
        if (!props.getWorker().isEnabled()) return;
        running = true;
        supervisor = new Thread(this::supervise, "bugfix-kit-worker");
        supervisor.setDaemon(true);
        supervisor.start();
    }

    private void supervise() {
        try {
            String node = findNode();
            if (node == null) { log.warn("[bugfix-kit] node 를 찾지 못해 워커를 띄우지 않습니다 (bugfix.worker.node 로 지정하거나 bugfix.server 로 외부 인스턴스를 쓰세요)"); return; }
            Path dataDir = dataDir();
            Files.createDirectories(dataDir);
            Path kitBin = ensureKit(node, dataDir);
            Path yml = ensureConfig(dataDir);
            int port = props.getWorker().getPort() > 0 ? props.getWorker().getPort() : freePort();
            String adminKey = ensureAdminKey(dataDir);
            int backoff = 2;
            while (running) {
                ProcessBuilder pb = new ProcessBuilder(node, kitBin.toString(), "--config", yml.toString(), "--port", String.valueOf(port));
                pb.directory(kitBin.getParent().getParent().toFile());
                pb.redirectErrorStream(true);
                Map<String, String> env = pb.environment();
                env.put("BUGFIX_ADMIN_KEY", adminKey);
                env.putIfAbsent("BUGFIX_CONFIG", yml.toString());
                Process p = pb.start();
                process = p;
                url = "http://127.0.0.1:" + port;
                log.info("[bugfix-kit] 워커 시작 pid={} port={} config={}", p.pid(), port, yml);
                pipe(p);
                int code = p.waitFor();
                process = null;
                if (!running) break;
                log.warn("[bugfix-kit] 워커가 종료됨(exit {}) - {}초 뒤 다시 띄웁니다", code, backoff);
                url = "";
                Thread.sleep(backoff * 1000L);
                backoff = Math.min(backoff * 2, 60);
            }
        } catch (InterruptedException ignored) {
            Thread.currentThread().interrupt();
        } catch (Exception e) {
            log.warn("[bugfix-kit] 워커를 띄우지 못했습니다: {}", e.toString());
        }
    }

    private void pipe(Process p) {
        Thread t = new Thread(() -> {
            try (BufferedReader r = new BufferedReader(new InputStreamReader(p.getInputStream(), StandardCharsets.UTF_8))) {
                String line;
                while ((line = r.readLine()) != null) log.info("[bugfix-kit] {}", line);
            } catch (IOException ignored) { /* 종료 */ }
        }, "bugfix-kit-worker-log");
        t.setDaemon(true);
        t.start();
    }

    @Override
    public void stop() {
        running = false;
        Process p = process;
        if (p != null) {
            p.destroy();
            try { if (!p.waitFor(20, TimeUnit.SECONDS)) p.destroyForcibly(); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }
        }
        url = "";
    }

    @Override public boolean isRunning() { return running; }
    @Override public int getPhase() { return Integer.MAX_VALUE - 100; }   // 웹 서버보다 늦게 시작, 먼저 멈춤

    // ── 준비 ─────────────────────────────────────────────────────────────

    private Path dataDir() {
        String d = props.getDataDir();
        if (d != null && !d.isBlank()) return Path.of(expandHome(d)).toAbsolutePath();
        return Path.of(System.getProperty("user.home"), ".bugfix-data", projectName()).toAbsolutePath();
    }

    private String projectName() {
        if (!props.getProject().isBlank()) return props.getProject();
        if (appName != null && !appName.isBlank()) return appName.replaceAll("[^a-zA-Z0-9_-]", "-").toLowerCase();
        String repo = repoUrl();
        if (!repo.isBlank()) return repo.replaceAll("\\.git$", "").replaceAll(".*/", "").toLowerCase();
        return "app";
    }

    /** bugfix-kit 설치(같은 버전이 있으면 건너뜀) → bin/bugfix-server.mjs 경로 */
    private Path ensureKit(String node, Path dataDir) throws IOException, InterruptedException {
        String version = props.getWorker().getKitVersion().isBlank() ? "v" + starterVersion : props.getWorker().getKitVersion();
        Path kitDir = dataDir.resolve("kit");
        Path pkgJson = kitDir.resolve("node_modules/bugfix-kit/package.json");
        Path bin = kitDir.resolve("node_modules/bugfix-kit/packages/server/bin/bugfix-server.mjs");
        if (Files.exists(pkgJson) && Files.exists(bin) && Files.readString(pkgJson).contains("\"version\": \"" + version.replaceFirst("^v", "") + "\"")) return bin;
        Files.createDirectories(kitDir);
        if (!Files.exists(kitDir.resolve("package.json"))) Files.writeString(kitDir.resolve("package.json"), "{ \"name\": \"bugfix-kit-worker\", \"private\": true }\n");
        String npm = Path.of(node).getParent() != null ? Path.of(node).getParent().resolve("npm").toString() : "npm";
        if (!Files.exists(Path.of(npm))) npm = "npm";
        log.info("[bugfix-kit] bugfix-kit {} 설치 중… ({})", version, kitDir);
        Process p = new ProcessBuilder(npm, "install", "--no-audit", "--no-fund", "--no-save", props.getWorker().getKitSource() + "#" + version)
                .directory(kitDir.toFile()).redirectErrorStream(true).start();
        String out = new String(p.getInputStream().readAllBytes(), StandardCharsets.UTF_8);
        if (p.waitFor() != 0 || !Files.exists(bin)) throw new IOException("bugfix-kit 설치 실패: " + out.lines().reduce((a, b) -> b).orElse(""));
        return bin;
    }

    /** 첫 설정 파일 - 있으면 그대로(콘솔에서 고친 내용 유지) */
    private Path ensureConfig(Path dataDir) throws IOException {
        Path yml = dataDir.resolve("bugfix-kit.yml");
        if (Files.exists(yml)) return yml;
        String repo = repoUrl();
        if (repo.isBlank()) throw new IOException("저장소 주소를 모릅니다 - application.properties 에 bugfix.repo 를 적거나 git.properties(gradle-git-properties)를 넣으세요");
        String branch = branch();
        String name = projectName();
        List<String> verify = new ArrayList<>(props.getVerify());
        if (verify.isEmpty()) verify.add("./gradlew compileJava -x test --no-daemon -q");
        StringBuilder sb = new StringBuilder();
        sb.append("# bugfix-kit 설정 - Spring 스타터가 첫 기동 때 만들었다. 콘솔(<REST 경로>").append(props.getPath()).append("/ui/ → 프로젝트 탭)에서 고치면 여기에 저장된다\n");
        sb.append("server:\n  port: 0\n  dataDir: ").append(dataDir.resolve("data")).append("\n  workDir: ").append(dataDir.resolve("work")).append("\n");
        sb.append("projects:\n  ").append(name).append(":\n    repo: ").append(repo).append("\n    baseBranch: ").append(branch).append("\n");
        if (repo.contains("github.com/")) sb.append("    githubRepo: ").append(repo.replaceAll("^https?://github\\.com/", "").replaceAll("\\.git$", "")).append("\n");
        sb.append("    autoMerge: ").append(props.isAutoMerge()).append("\n    fixFrom: app\n");
        if (!props.getDescription().isBlank()) sb.append("    description: ").append(quote(props.getDescription())).append("\n");
        if (!props.getCors().isEmpty()) sb.append("    cors: [").append(String.join(", ", props.getCors())).append("]\n");
        if (!props.getProtectedPaths().isEmpty()) sb.append("    protectedPaths: [").append(String.join(", ", props.getProtectedPaths())).append("]\n");
        sb.append("    modules:\n      - name: back\n        match: ''\n        dir: .\n        verify:\n");
        for (String v : verify) sb.append("          - ").append(quote(v)).append("\n");
        Files.writeString(yml, sb.toString());
        try { Files.setPosixFilePermissions(yml, PosixFilePermissions.fromString("rw-------")); } catch (Exception ignored) { /* 윈도우 */ }
        log.info("[bugfix-kit] 설정을 만들었습니다: {} (프로젝트 {}, {} @ {})", yml, name, repo, branch);
        return yml;
    }

    private String ensureAdminKey(Path dataDir) throws IOException {
        if (!props.getAdminKey().isBlank()) return props.getAdminKey();
        String env = System.getenv("BUGFIX_ADMIN_KEY");
        if (env != null && !env.isBlank()) return env;
        Path home = Path.of(System.getProperty("user.home"), ".config", "bugfix-kit", "default.env");
        if (Files.exists(home)) {
            Properties p = new Properties();
            try (var in = Files.newBufferedReader(home)) { p.load(in); }
            String k = p.getProperty("ADMIN_KEY");
            if (k != null && !k.isBlank()) return k.trim();
        }
        Path f = dataDir.resolve("admin-key");
        if (Files.exists(f)) return Files.readString(f).trim();
        byte[] b = new byte[16];
        new SecureRandom().nextBytes(b);
        String key = HexFormat.of().formatHex(b);
        Files.writeString(f, key + "\n");
        try { Files.setPosixFilePermissions(f, PosixFilePermissions.fromString("rw-------")); } catch (Exception ignored) { /* 윈도우 */ }
        log.info("[bugfix-kit] 운영자 키를 만들었습니다: {} (콘솔 로그인에 씁니다: {})", f, key);
        return key;
    }

    // ── 저장소 정보: 속성 → git.properties → 작업 디렉터리 git ──
    private String repoUrl() {
        if (!props.getRepo().isBlank()) return toHttps(props.getRepo());
        String g = gitProperty("git.remote.origin.url");
        if (g != null) return toHttps(g);
        String out = run("git", "remote", "get-url", "origin");
        return out == null ? "" : toHttps(out);
    }

    private String branch() {
        if (!props.getBaseBranch().isBlank()) return props.getBaseBranch();
        String g = gitProperty("git.branch");
        if (g != null && !g.isBlank() && !"HEAD".equals(g)) return g;
        String head = run("git", "symbolic-ref", "--short", "refs/remotes/origin/HEAD");
        if (head != null) return head.replaceFirst("^origin/", "");
        String cur = run("git", "rev-parse", "--abbrev-ref", "HEAD");
        return cur == null || "HEAD".equals(cur) ? "main" : cur;
    }

    private String gitProperty(String key) {
        try (var in = getClass().getClassLoader().getResourceAsStream("git.properties")) {
            if (in == null) return null;
            Properties p = new Properties();
            p.load(in);
            String v = p.getProperty(key);
            return v == null || v.isBlank() ? null : v.trim();
        } catch (IOException e) { return null; }
    }

    private static String toHttps(String url) {
        var m = java.util.regex.Pattern.compile("^git@([^:]+):(.+)$").matcher(url.trim());
        return m.matches() ? "https://" + m.group(1) + "/" + m.group(2) : url.trim();
    }

    private static String run(String... cmd) {
        try {
            Process p = new ProcessBuilder(cmd).redirectErrorStream(true).start();
            String out = new String(p.getInputStream().readAllBytes(), StandardCharsets.UTF_8).trim();
            return p.waitFor(20, TimeUnit.SECONDS) && p.exitValue() == 0 && !out.isBlank() ? out : null;
        } catch (Exception e) { return null; }
    }

    private String findNode() {
        String n = props.getWorker().getNode();
        if (n != null && !n.isBlank()) return expandHome(n);
        String path = System.getenv("PATH");
        if (path != null) for (String dir : path.split(java.io.File.pathSeparator)) { Path c = Path.of(dir, "node"); if (Files.isExecutable(c)) return c.toString(); }
        for (String base : new String[] { "/usr/local/bin/node", "/opt/homebrew/bin/node" }) if (Files.isExecutable(Path.of(base))) return base;
        Path nvm = Path.of(System.getProperty("user.home"), ".nvm", "versions", "node");
        if (Files.isDirectory(nvm)) {
            try (Stream<Path> s = Files.list(nvm)) {
                return s.filter(Files::isDirectory).sorted(Comparator.reverseOrder()).map(p -> p.resolve("bin/node")).filter(Files::isExecutable).map(Path::toString).findFirst().orElse(null);
            } catch (IOException ignored) { /* 없음 */ }
        }
        return null;
    }

    private static int freePort() throws IOException { try (ServerSocket s = new ServerSocket(0)) { return s.getLocalPort(); } }
    private static String expandHome(String p) { return p.startsWith("~/") ? System.getProperty("user.home") + p.substring(1) : p; }
    private static String quote(String s) { return "\"" + s.replace("\\", "\\\\").replace("\"", "\\\"") + "\""; }

    /** 워커가 응답하는지 (점검용) */
    public boolean healthy() {
        if (url.isBlank()) return false;
        try {
            HttpResponse<String> r = HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url + "/api/health")).timeout(Duration.ofSeconds(3)).build(), HttpResponse.BodyHandlers.ofString());
            return r.statusCode() == 200;
        } catch (Exception e) { return false; }
    }
}
