package dev.devloop.spring;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

import java.io.InputStream;
import java.util.Properties;

/**
 * devloop Spring Boot 스타터 - 의존성 한 줄로:
 *   - 최근 로그 링 버퍼(루트 로거에 붙임) + GET ${devloop.logs-path}
 *   - ${devloop.path}/** 를 devloop 인스턴스로 프록시 (앱 REST 경로 뒤에 /devloop 를 붙여 닿는다 - nginx 불필요)
 *   - Node 가 있으면 devloop 워커를 앱과 같이 띄운다 (devloop.server 를 주면 외부 인스턴스로 프록시만)
 *   - Spring Security 가 있으면 ${devloop.path}/** 를 허용 목록에 (DevloopSecurityAutoConfiguration)
 * 끄기: devloop.enabled=false
 */
@AutoConfiguration
@EnableConfigurationProperties(DevloopProperties.class)
@ConditionalOnProperty(prefix = "devloop", name = "enabled", havingValue = "true", matchIfMissing = true)
public class DevloopAutoConfiguration {

    @Bean
    @ConditionalOnMissingBean
    public DevloopLogController devloopLogController(DevloopProperties props) {
        DevloopLogAppender.attach(props.getLogBuffer());
        return new DevloopLogController();
    }

    /** SmartLifecycle 빈 - 컨텍스트가 start/stop 을 부른다. devloop.server 가 있거나 worker.enabled=false 면 start 가 아무것도 안 한다 */
    @Bean
    @ConditionalOnMissingBean
    public DevloopWorker devloopWorker(DevloopProperties props, @Value("${spring.application.name:}") String appName) {
        return new DevloopWorker(props, appName, starterVersion());
    }

    @Bean
    @ConditionalOnMissingBean
    public DevloopProxyController devloopProxyController(DevloopProperties props, DevloopWorker worker) {
        return new DevloopProxyController(props.getPath(), () -> props.getServer().isBlank() ? worker.url() : props.getServer(), worker::starting, props.getProxyTimeoutSeconds());
    }

    static String starterVersion() {
        try (InputStream in = DevloopAutoConfiguration.class.getClassLoader().getResourceAsStream("devloop.properties")) {
            if (in == null) return "";
            Properties p = new Properties();
            p.load(in);
            return p.getProperty("version", "").trim();
        } catch (Exception e) { return ""; }
    }
}
