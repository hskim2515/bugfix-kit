package __PACKAGE__;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * bugfix-kit 이 신고에 붙일 최근 서버 로그. 앱의 신고 설정(backendLogs)에서 이 주소를 부른다.
 *   GET __BASE__/recent-logs?level=WARN&limit=200  →  [{ time, level, logger, message }, …] (최근 것부터)
 * 보안 설정이 있는 앱이면 인증된 사용자만 부르게 두는 것이 좋다(개발서버 전용이라면 열어 둬도 된다).
 */
@RestController
@RequestMapping("__BASE__")
public class BugfixLogController {

    @GetMapping("/recent-logs")
    public List<BugfixLogAppender.BugfixLogEntry> recentLogs(
            @RequestParam(defaultValue = "WARN") String level,
            @RequestParam(defaultValue = "200") int limit) {
        return BugfixLogAppender.recent(level, Math.min(Math.max(limit, 1), 500));
    }
}
