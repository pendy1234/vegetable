import Vue from 'vue';
import Router from 'vue-router';
// import App from './App.vue';

function lazyLoading(name) {
    return function () {
        return import(`./views/${name}.vue`);
    };
}

Vue.use(Router);

export default new Router({
    base: '/',
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: lazyLoading('Home'),
            meta: {
                title: '首页',
            },
        },
        {
            path: '*',
            redirect: '/',
        },
    ],
});
