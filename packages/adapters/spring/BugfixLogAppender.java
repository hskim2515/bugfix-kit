package __PACKAGE__;

import ch.qos.logback.classic.spi.ILoggingEvent;
import ch.qos.logback.core.AppenderBase;

import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;
import java.util.concurrent.ConcurrentLinkedDeque;

/**
 * bugfix-kit 백엔드 로그 어댑터 - 최근 로그를 메모리에 링 버퍼로 들고 있다가 신고 화면이 가져간다.
 * logback-spring.xml 에 appender 로 등록한다(같은 디렉터리의 logback-spring.xml 예시 참고).
 */
public class BugfixLogAppender extends AppenderBase<ILoggingEvent> {

    private static final int MAX_ENTRIES = 500;
    private static final DateTimeFormatter FMT =
            DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS").withZone(ZoneId.systemDefault());

    // static: Logback 이 appender 를 다시 만들어도 버퍼는 하나
    private static final Deque<BugfixLogEntry> BUFFER = new ConcurrentLinkedDeque<>();

    @Override
    protected void append(ILoggingEvent event) {
        String message = event.getFormattedMessage();
        if (event.getThrowableProxy() != null) {
            message = message + " | " + event.getThrowableProxy().getClassName() + ": " + event.getThrowableProxy().getMessage();
        }
        BUFFER.addLast(new BugfixLogEntry(
                FMT.format(Instant.ofEpochMilli(event.getTimeStamp())),
                event.getLevel().toString(),
                abbreviate(event.getLoggerName()),
                message
        ));
        while (BUFFER.size() > MAX_ENTRIES) BUFFER.pollFirst();
    }

    /** 최근 것부터, minLevel 이상만, 최대 limit 개 */
    public static List<BugfixLogEntry> recent(String minLevel, int limit) {
        List<BugfixLogEntry> all = new ArrayList<>(BUFFER);
        int min = ordinal(minLevel);
        List<BugfixLogEntry> out = new ArrayList<>();
        for (int i = all.size() - 1; i >= 0 && out.size() < limit; i--) {
            if (ordinal(all.get(i).level()) >= min) out.add(all.get(i));
        }
        return out;
    }

    private static int ordinal(String level) {
        if (level == null) return 0;
        switch (level.toUpperCase()) {
            case "ERROR": return 4;
            case "WARN": return 3;
            case "INFO": return 2;
            case "DEBUG": return 1;
            default: return 0;
        }
    }

    /** org.springframework.web.servlet.DispatcherServlet → o.s.w.s.DispatcherServlet */
    private static String abbreviate(String name) {
        if (name == null) return "";
        String[] parts = name.split("\\.");
        if (parts.length <= 1) return name;
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < parts.length - 1; i++) sb.append(parts[i].charAt(0)).append('.');
        return sb.append(parts[parts.length - 1]).toString();
    }

    public record BugfixLogEntry(String time, String level, String logger, String message) {}
}
