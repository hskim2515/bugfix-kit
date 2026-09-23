// webpack 플러그인이 앱 엔트리 뒤에 붙이는 자동 마운트 모듈. 값은 DefinePlugin(__BUGFIX_AUTO__)으로 들어온다
import { autoMount } from 'bugfix-kit/client/auto';
/* global __BUGFIX_AUTO__ */
autoMount(typeof __BUGFIX_AUTO__ !== 'undefined' ? __BUGFIX_AUTO__ : {});
