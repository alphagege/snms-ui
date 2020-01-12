import Vue from 'vue';
import Router from 'vue-router';


const _import = require('./_import_' + process.env.NODE_ENV);
Vue.use(Router);
const routes = [{
    path: '/login',
    name: 'login',
    component: _import('login/index')
}];
export default new Router({
    // mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
    routes: routes
});
