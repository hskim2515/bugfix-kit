package dev.bugfixkit.spring;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
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

    public BugfixProxyController(String path, Supplier<String> target) {
        this.path = path.replaceAll("/+$", "");
        this.target = target;
    }

    @RequestMapping("${bugfix.path:/bugfix}/**")
    public ResponseEntity<byte[]> proxy(HttpServletRequest req) throws IOException, InterruptedException {
        String server = target.get();
        if (server == null || server.isBlank()) return ResponseEntity.status(503).body("bugfix-kit 이 아직 준비되지 않았습니다(워커 시작 중이거나 bugfix.server 미설정)".getBytes(StandardCharsets.UTF_8));
        String uri = req.getRequestURI().substring(req.getContextPath().length());
        String rest = uri.startsWith(path) ? uri.substring(path.length()) : uri;
        String url = server.replaceAll("/+$", "") + "/api" + (rest.isEmpty() ? "/" : rest) + (req.getQueryString() != null ? "?" + req.getQueryString() : "");

        byte[] body = req.getInputStream().readAllBytes();
        HttpRequest.Builder b = HttpRequest.newBuilder(URI.create(url)).timeout(Duration.ofSeconds(120))
                .method(req.getMethod(), body.length > 0 ? HttpRequest.BodyPublishers.ofByteArray(body) : HttpRequest.BodyPublishers.noBody());
        Enumeration<String> names = req.getHeaderNames();
        while (names.hasMoreElements()) {
            String n = names.nextElement();
            if (SKIP.contains(n.toLowerCase())) continue;
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
