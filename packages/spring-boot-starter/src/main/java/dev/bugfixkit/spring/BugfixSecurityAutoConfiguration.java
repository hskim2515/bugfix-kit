package dev.bugfixkit.spring;

import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.web.SecurityFilterChain;

/** Spring Security 가 있으면 프록시 경로와 최근 로그 끝점을 필터 체인에서 뺀다 - 인증은 bugfix-kit 이 API 키·운영자 키로 따로 한다. 끄기: bugfix.security-ignore=false */
@AutoConfiguration(after = BugfixAutoConfiguration.class)
@ConditionalOnClass(SecurityFilterChain.class)
@ConditionalOnProperty(prefix = "bugfix", name = "security-ignore", havingValue = "true", matchIfMissing = true)
// bugfix.enabled=false 면 BugfixAutoConfiguration(=BugfixProperties 빈)이 없으므로 이쪽도 같이 빠져야 한다 - 안 그러면 기동 실패
@ConditionalOnBean(BugfixProperties.class)
public class BugfixSecurityAutoConfiguration {

    @Bean
    public WebSecurityCustomizer bugfixSecurityCustomizer(BugfixProperties props) {
        String p = props.getPath().replaceAll("/+$", "");
        return web -> web.ignoring().requestMatchers(p + "/**", props.getLogsPath());
    }
}
