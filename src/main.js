/* eslint-disable */
import './bootstrap';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

router.afterEach((to, from) => {
	if (to.name === from.name) return;
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	window.scrollTo(0, 1);
});

/* ============
 * axios
 * ============
 *
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 *
 * https://github.com/mzabriskie/axios
 */
window.axios = require('axios');
window.axios.defaults.headers.common = {
	'X-Requested-With': 'XMLHttpRequest',
};

// 全局api接口请求处理
import Api from './api';

window.API = new Api('/');

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
