package dev.devloop.spring;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 최근 서버 로그 - 앱 프론트의 신고 설정(backendLogs)이 부른다.
 *   GET ${devloop.logs-path}?level=WARN&limit=200 → [{ time, level, logger, message }, …] (최근 것부터)
 */
@RestController
public class DevloopLogController {

    @GetMapping("${devloop.logs-path:/debug/recent-logs}")
    public List<DevloopLogAppender.Entry> recentLogs(@RequestParam(name = "level", defaultValue = "WARN") String level, @RequestParam(name = "limit", defaultValue = "200") int limit) {
        return DevloopLogAppender.recent(level, Math.min(Math.max(limit, 1), 500));
    }
}
