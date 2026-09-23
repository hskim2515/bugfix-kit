package dev.bugfixkit.spring;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 최근 서버 로그 - 앱 프론트의 신고 설정(backendLogs)이 부른다.
 *   GET ${bugfix.logs-path}?level=WARN&limit=200 → [{ time, level, logger, message }, …] (최근 것부터)
 */
@RestController
public class BugfixLogController {

    @GetMapping("${bugfix.logs-path:/debug/recent-logs}")
    public List<BugfixLogAppender.Entry> recentLogs(@RequestParam(defaultValue = "WARN") String level, @RequestParam(defaultValue = "200") int limit) {
        return BugfixLogAppender.recent(level, Math.min(Math.max(limit, 1), 500));
    }
}
