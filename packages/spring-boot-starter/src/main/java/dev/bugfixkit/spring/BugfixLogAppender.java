package dev.bugfixkit.spring;

import ch.qos.logback.classic.Logger;
import ch.qos.logback.classic.LoggerContext;
import ch.qos.logback.classic.spi.ILoggingEvent;
import ch.qos.logback.core.AppenderBase;
import org.slf4j.LoggerFactory;

import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;
import java.util.concurrent.ConcurrentLinkedDeque;

/** 최근 로그 링 버퍼 - 스타터가 기동 때 루트 로거에 붙인다(logback 설정 파일을 안 건드린다) */
public class BugfixLogAppender extends AppenderBase<ILoggingEvent> {

    public static final String NAME = "BUGFIX";
    private static final DateTimeFormatter FMT = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS").withZone(ZoneId.systemDefault());
    private static final Deque<Entry> BUFFER = new ConcurrentLinkedDeque<>();
    private static volatile int max = 500;

    public record Entry(String time, String level, String logger, String message) {}

    /** 루트 로거에 한 번만 붙인다. logback 이 아니면(다른 로깅 구현) 조용히 건너뛴다 */
    public static void attach(int bufferSize) {
        max = bufferSize;
        try {
            if (!(LoggerFactory.getILoggerFactory() instanceof LoggerContext ctx)) return;
            Logger root = ctx.getLogger(Logger.ROOT_LOGGER_NAME);
            if (root.getAppender(NAME) != null) return;
            BugfixLogAppender a = new BugfixLogAppender();
            a.setName(NAME);
            a.setContext(ctx);
            a.start();
            root.addAppender(a);
        } catch (Throwable ignored) { /* 로깅 구현이 다르면 최근 로그 없이 동작 */ }
    }

    @Override
    protected void append(ILoggingEvent event) {
        String message = event.getFormattedMessage();
        if (event.getThrowableProxy() != null) message = message + " | " + event.getThrowableProxy().getClassName() + ": " + event.getThrowableProxy().getMessage();
        BUFFER.addLast(new Entry(FMT.format(Instant.ofEpochMilli(event.getTimeStamp())), event.getLevel().toString(), abbreviate(event.getLoggerName()), message));
        while (BUFFER.size() > max) BUFFER.pollFirst();
    }

    public static List<Entry> recent(String minLevel, int limit) {
        List<Entry> all = new ArrayList<>(BUFFER);
        int min = ordinal(minLevel);
        List<Entry> out = new ArrayList<>();
        for (int i = all.size() - 1; i >= 0 && out.size() < limit; i--) if (ordinal(all.get(i).level()) >= min) out.add(all.get(i));
        return out;
    }

    private static int ordinal(String level) {
        if (level == null) return 0;
        return switch (level.toUpperCase()) { case "ERROR" -> 4; case "WARN" -> 3; case "INFO" -> 2; case "DEBUG" -> 1; default -> 0; };
    }

    private static String abbreviate(String name) {
        if (name == null) return "";
        String[] parts = name.split("\\.");
        if (parts.length <= 1) return name;
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < parts.length - 1; i++) sb.append(parts[i].charAt(0)).append('.');
        return sb.append(parts[parts.length - 1]).toString();
    }
}
