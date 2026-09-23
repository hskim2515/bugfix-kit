package dev.bugfixkit.spring;

import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.ArrayList;
import java.util.List;

/**
 * application.properties 의 `bugfix.*`. 전부 선택이다.
 *
 *   bugfix.server=http://127.0.0.1:8790     이미 떠 있는 인스턴스로 프록시만 (워커는 안 띄움)
 *   bugfix.worker.enabled=true              Node 가 있으면 앱과 같이 워커를 띄운다(기본 true, server 가 비어 있을 때만)
 *   bugfix.repo / bugfix.base-branch        저장소 주소·브랜치 (없으면 git.properties 나 작업 디렉터리의 git 에서)
 *   bugfix.project                          프로젝트 이름 (없으면 spring.application.name → 저장소 이름)
 *   bugfix.verify                           검증 명령 목록 (없으면 gradlew 가 있으면 `./gradlew compileJava -x test`)
 *   bugfix.data-dir                         데이터 위치 (기본 ~/.bugfix-data/<프로젝트>)
 */
@ConfigurationProperties(prefix = "bugfix")
public class BugfixProperties {

    /** 이미 떠 있는 bugfix-kit 인스턴스 주소(/api 없이). 비어 있으면 워커를 직접 띄운다 */
    private String server = "";
    /** 앱 REST 에서 인스턴스로 넘기는 경로 */
    private String path = "/bugfix";
    /** 최근 로그 끝점 경로 (앱 프론트의 backendLogs 가 부른다) */
    private String logsPath = "/debug/recent-logs";
    /** 메모리 로그 버퍼 크기 */
    private int logBuffer = 500;
    /** Spring Security 가 있으면 path 를 허용 목록에 넣는다(인증은 bugfix-kit 이 따로 한다) */
    private boolean securityIgnore = true;

    private String project = "";
    private String repo = "";
    private String baseBranch = "";
    private String description = "";
    private List<String> verify = new ArrayList<>();
    private List<String> cors = new ArrayList<>();
    private List<String> protectedPaths = new ArrayList<>();
    private boolean autoMerge = true;
    private String dataDir = "";
    private String adminKey = "";

    private final Worker worker = new Worker();

    public static class Worker {
        /** server 가 비어 있을 때 워커를 띄울지 */
        private boolean enabled = true;
        /** node 실행 파일 (비어 있으면 PATH 와 ~/.nvm 에서 찾는다) */
        private String node = "";
        /** 워커가 들을 포트 (0 이면 빈 포트) */
        private int port = 0;
        /** 설치할 bugfix-kit 버전(git 태그). 비어 있으면 이 스타터와 같은 버전 */
        private String kitVersion = "";
        /** bugfix-kit 패키지 주소 */
        private String kitSource = "github:hskim2515/bugfix-kit";

        public boolean isEnabled() { return enabled; }
        public void setEnabled(boolean enabled) { this.enabled = enabled; }
        public String getNode() { return node; }
        public void setNode(String node) { this.node = node; }
        public int getPort() { return port; }
        public void setPort(int port) { this.port = port; }
        public String getKitVersion() { return kitVersion; }
        public void setKitVersion(String kitVersion) { this.kitVersion = kitVersion; }
        public String getKitSource() { return kitSource; }
        public void setKitSource(String kitSource) { this.kitSource = kitSource; }
    }

    public String getServer() { return server; }
    public void setServer(String server) { this.server = server; }
    public String getPath() { return path; }
    public void setPath(String path) { this.path = path; }
    public String getLogsPath() { return logsPath; }
    public void setLogsPath(String logsPath) { this.logsPath = logsPath; }
    public int getLogBuffer() { return logBuffer; }
    public void setLogBuffer(int logBuffer) { this.logBuffer = logBuffer; }
    public boolean isSecurityIgnore() { return securityIgnore; }
    public void setSecurityIgnore(boolean securityIgnore) { this.securityIgnore = securityIgnore; }
    public String getProject() { return project; }
    public void setProject(String project) { this.project = project; }
    public String getRepo() { return repo; }
    public void setRepo(String repo) { this.repo = repo; }
    public String getBaseBranch() { return baseBranch; }
    public void setBaseBranch(String baseBranch) { this.baseBranch = baseBranch; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public List<String> getVerify() { return verify; }
    public void setVerify(List<String> verify) { this.verify = verify; }
    public List<String> getCors() { return cors; }
    public void setCors(List<String> cors) { this.cors = cors; }
    public List<String> getProtectedPaths() { return protectedPaths; }
    public void setProtectedPaths(List<String> protectedPaths) { this.protectedPaths = protectedPaths; }
    public boolean isAutoMerge() { return autoMerge; }
    public void setAutoMerge(boolean autoMerge) { this.autoMerge = autoMerge; }
    public String getDataDir() { return dataDir; }
    public void setDataDir(String dataDir) { this.dataDir = dataDir; }
    public String getAdminKey() { return adminKey; }
    public void setAdminKey(String adminKey) { this.adminKey = adminKey; }
    public Worker getWorker() { return worker; }
}
