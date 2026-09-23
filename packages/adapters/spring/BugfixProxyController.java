package __PACKAGE__;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.Enumeration;
import java.util.Set;

/**
 * bugfix-kit 프록시 - 앱의 REST 서버가 `__PROXY__/**` 를 bugfix-kit 인스턴스로 넘긴다.
 * 앱 프론트는 이미 REST 서버에 닿는 경로(예: /rest, /api)를 갖고 있으므로, nginx 를 손대지 않고
 * `endpoint: '<REST 경로>__PROXY__'` 로 신고 서버에 닿는다. 콘솔도 `<REST 경로>__PROXY__/ui/` 로 열린다.
 *
 * 설정(application.properties): bugfix.server=http://127.0.0.1:8790   (인스턴스 주소, /api 없이)
 * 보안 필터가 있는 앱이면 이 경로를 허용 목록에 넣는다(인증은 bugfix-kit 이 API 키·운영자 키로 따로 한다).
 */
@RestController
public class BugfixProxyController {

    private static final Set<String> SKIP = Set.of("host", "content-length", "connection", "transfer-encoding", "expect", "accept-encoding");
    private final HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build();

    @Value("${bugfix.server:}")
    private String server;

    @RequestMapping("__PROXY__/**")
    public ResponseEntity<byte[]> proxy(HttpServletRequest req) throws IOException, InterruptedException {
        if (server == null || server.isBlank()) return ResponseEntity.status(503).body("bugfix.server 가 설정되지 않았습니다".getBytes());
        String rest = req.getRequestURI().substring(req.getContextPath().length() + "__PROXY__".length());
        String target = server.replaceAll("/+$", "") + "/api" + (rest.isEmpty() ? "/" : rest) + (req.getQueryString() != null ? "?" + req.getQueryString() : "");

        byte[] body = req.getInputStream().readAllBytes();
        HttpRequest.Builder b = HttpRequest.newBuilder(URI.create(target)).timeout(Duration.ofSeconds(120))
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
