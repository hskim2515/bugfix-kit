package dev.bugfixkit.spring;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

import java.io.InputStream;
import java.util.Properties;

/**
 * bugfix-kit Spring Boot 스타터 - 의존성 한 줄로:
 *   - 최근 로그 링 버퍼(루트 로거에 붙임) + GET ${bugfix.logs-path}
 *   - ${bugfix.path}/** 를 bugfix-kit 인스턴스로 프록시 (앱 REST 경로 뒤에 /bugfix 를 붙여 닿는다 - nginx 불필요)
 *   - Node 가 있으면 bugfix-kit 워커를 앱과 같이 띄운다 (bugfix.server 를 주면 외부 인스턴스로 프록시만)
 *   - Spring Security 가 있으면 ${bugfix.path}/** 를 허용 목록에 (BugfixSecurityAutoConfiguration)
 * 끄기: bugfix.enabled=false
 */
@AutoConfiguration
@EnableConfigurationProperties(BugfixProperties.class)
@ConditionalOnProperty(prefix = "bugfix", name = "enabled", havingValue = "true", matchIfMissing = true)
public class BugfixAutoConfiguration {

    @Bean
    @ConditionalOnMissingBean
    public BugfixLogController bugfixLogController(BugfixProperties props) {
        BugfixLogAppender.attach(props.getLogBuffer());
        return new BugfixLogController();
    }

    /** SmartLifecycle 빈 - 컨텍스트가 start/stop 을 부른다. bugfix.server 가 있거나 worker.enabled=false 면 start 가 아무것도 안 한다 */
    @Bean
    @ConditionalOnMissingBean
    public BugfixWorker bugfixWorker(BugfixProperties props, @Value("${spring.application.name:}") String appName) {
        return new BugfixWorker(props, appName, starterVersion());
    }

    @Bean
    @ConditionalOnMissingBean
    public BugfixProxyController bugfixProxyController(BugfixProperties props, BugfixWorker worker) {
        return new BugfixProxyController(props.getPath(), () -> props.getServer().isBlank() ? worker.url() : props.getServer());
    }

    static String starterVersion() {
        try (InputStream in = BugfixAutoConfiguration.class.getClassLoader().getResourceAsStream("bugfix-kit.properties")) {
            if (in == null) return "";
            Properties p = new Properties();
            p.load(in);
            return p.getProperty("version", "").trim();
        } catch (Exception e) { return ""; }
    }
}
