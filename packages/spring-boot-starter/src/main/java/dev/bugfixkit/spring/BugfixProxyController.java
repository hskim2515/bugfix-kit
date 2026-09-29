package dev.bugfixkit.spring;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.Part;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.Enumeration;
import java.util.Set;
import java.util.function.Supplier;

/**
 * `${bugfix.path}/**` 를 bugfix-kit 인스턴스로 넘긴다 - 앱 프론트는 이미 REST 서버에 닿는 경로가 있으니 nginx 없이 `<REST 경로>/bugfix` 로 신고 서버·콘솔에 닿는다.
 * 대상은 bugfix.server 또는 이 앱이 띄운 워커(BugfixWorker).
 */
@RestController
public class BugfixProxyController {

    private static final Set<String> SKIP = Set.of("host", "content-length", "connection", "transfer-encoding", "expect", "accept-encoding");
    private final HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();
    private final String path;
    private final Supplier<String> target;

    private final java.util.function.BooleanSupplier starting;

    private final int timeoutSeconds;

    public BugfixProxyController(String path, Supplier<String> target) { this(path, target, () -> false); }
    public BugfixProxyController(String path, Supplier<String> target, java.util.function.BooleanSupplier starting) { this(path, target, starting, 600); }
    /** timeoutSeconds: 워커·미리보기 백엔드 응답 대기 상한(긴 가져오기·변환이 끊기지 않게, 기본 600) */
    public BugfixProxyController(String path, Supplier<String> target, java.util.function.BooleanSupplier starting, int timeoutSeconds) {
        this.path = path.replaceAll("/+$", "");
        this.target = target;
        this.starting = starting;
        this.timeoutSeconds = timeoutSeconds > 0 ? timeoutSeconds : 600;
    }

    @RequestMapping("${bugfix.path:/bugfix}/**")
    public ResponseEntity<byte[]> proxy(HttpServletRequest req) throws IOException, InterruptedException {
        String server = target.get();
        if (server == null || server.isBlank()) {
            boolean win = System.getProperty("os.name", "").toLowerCase().contains("win");
            String msg = starting.getAsBoolean()
                ? "bugfix-kit 워커가 시작 중입니다 (앱 재배포 직후 10초~1분). 잠시 뒤 자동으로 다시 시도합니다."
                : win
                ? "bugfix-kit: Windows 에서는 로컬 워커를 띄우지 않습니다. 로컬 프로파일에 bugfix.server=http://<개발서버>:<워커 포트> 를 적어 개발서버 워커를 쓰거나, WSL2 에서 앱을 실행하세요."
                : "bugfix-kit 이 아직 준비되지 않았습니다 - 워커가 시작 중이거나(앱 로그의 [bugfix-kit] 줄 확인) bugfix.server 가 비어 있고 node 가 없습니다. 로컬에서는 bugfix.server=http://<개발서버>:<워커 포트> 가 가장 간단합니다.";
            String json = "{\"message\":\"" + msg.replace("\"", "'") + "\",\"starting\":" + starting.getAsBoolean() + "}";
            return ResponseEntity.status(503).header("Retry-After", "5").contentType(org.springframework.http.MediaType.APPLICATION_JSON).body(json.getBytes(StandardCharsets.UTF_8));
        }
        String uri = req.getRequestURI().substring(req.getContextPath().length());
        String rest = uri.startsWith(path) ? uri.substring(path.length()) : uri;
        String url = server.replaceAll("/+$", "") + "/api" + (rest.isEmpty() ? "/" : rest) + (req.getQueryString() != null ? "?" + req.getQueryString() : "");

        byte[] body = req.getInputStream().readAllBytes();
        // multipart(파일 업로드·폼)는 Spring 의 MultipartResolver 가 컨트롤러에 오기 전에 이미 본문을 다 읽어 버려 입력 스트림이 비어 있다
        // → 파싱된 파트로 본문을 다시 조립해 넘긴다(미리보기 백엔드로 가는 폼 요청이 "필수 파라미터 없음" 500 이 되던 문제)
        String contentTypeOverride = null;
        String ct = req.getContentType();
        if (body.length == 0 && ct != null && ct.toLowerCase().startsWith("multipart/")) {
            try {
                String boundary = "----bugfixkit" + Long.toHexString(System.nanoTime());
                ByteArrayOutputStream bo = new ByteArrayOutputStream();
                for (Part part : req.getParts()) {
                    bo.write(("--" + boundary + "\r\n").getBytes(StandardCharsets.UTF_8));
                    String fn = part.getSubmittedFileName();
                    bo.write(("Content-Disposition: form-data; name=\"" + part.getName().replace("\"", "%22") + "\""
                            + (fn != null ? "; filename=\"" + fn.replace("\"", "%22") + "\"" : "") + "\r\n").getBytes(StandardCharsets.UTF_8));
                    if (part.getContentType() != null) bo.write(("Content-Type: " + part.getContentType() + "\r\n").getBytes(StandardCharsets.UTF_8));
                    bo.write("\r\n".getBytes(StandardCharsets.UTF_8));
                    try (InputStream in = part.getInputStream()) { in.transferTo(bo); }
                    bo.write("\r\n".getBytes(StandardCharsets.UTF_8));
                }
                bo.write(("--" + boundary + "--\r\n").getBytes(StandardCharsets.UTF_8));
                body = bo.toByteArray();
                contentTypeOverride = "multipart/form-data; boundary=" + boundary;
            } catch (ServletException | IllegalStateException e) {
                // 멀티파트 파싱이 꺼져 있으면 여기 오지 않는다(스트림에 본문이 그대로 있음) - 그 밖의 실패는 빈 본문으로 넘긴다
            }
        }
        // x-www-form-urlencoded 도 앞선 필터(CSRF·HiddenHttpMethod 등)가 getParameter 로 본문을 읽어 버렸을 수 있다 → 파라미터로 다시 만든다
        if (body.length == 0 && ct != null && ct.toLowerCase().startsWith("application/x-www-form-urlencoded") && !req.getParameterMap().isEmpty()) {
            StringBuilder sb = new StringBuilder();
            req.getParameterMap().forEach((k, vs) -> { for (String v : vs) { if (sb.length() > 0) sb.append('&'); sb.append(java.net.URLEncoder.encode(k, StandardCharsets.UTF_8)).append('=').append(java.net.URLEncoder.encode(v == null ? "" : v, StandardCharsets.UTF_8)); } });
            body = sb.toString().getBytes(StandardCharsets.UTF_8);
        }
        HttpRequest.Builder b = HttpRequest.newBuilder(URI.create(url)).timeout(Duration.ofSeconds(timeoutSeconds))
                .method(req.getMethod(), body.length > 0 ? HttpRequest.BodyPublishers.ofByteArray(body) : HttpRequest.BodyPublishers.noBody());
        if (contentTypeOverride != null) b.header("Content-Type", contentTypeOverride);
        Enumeration<String> names = req.getHeaderNames();
        while (names.hasMoreElements()) {
            String n = names.nextElement();
            if (SKIP.contains(n.toLowerCase())) continue;
            if (contentTypeOverride != null && n.equalsIgnoreCase("content-type")) continue;
            Enumeration<String> vs = req.getHeaders(n);
            while (vs.hasMoreElements()) { try { b.header(n, vs.nextElement()); } catch (IllegalArgumentException ignored) { /* 제한 헤더 */ } }
        }
        b.header("X-Forwarded-For", req.getRemoteAddr());
        b.header("X-Forwarded-Proto", req.getScheme());

        HttpResponse<byte[]> res = client.send(b.build(), HttpResponse.BodyHandlers.ofByteArray());
        HttpHeaders out = new HttpHeaders();
        res.headers().map().forEach((k, v) -> { if (!SKIP.contains(k.toLowerCase())) out.put(k, v); });
        return ResponseEntity.status(res.statusCode()).headers(out).body(res.body());
    }
}
