import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../views/Layout'
import Admin from './modules/coframe'

const _import = require('./_import_' + process.env.NODE_ENV);
Vue.use(Router);

export const constantRouterMap = [{
        path: '/login',
        name: 'login',
        component: _import('login/index'),
        hidden: true
    },
    {
        path: '/404',
        component: _import('errorPage/404'),
        hidden: true
    },
    {
        path: '/401',
        component: _import('errorPage/401'),
        hidden: true
    }
]

export const asyncRouterMap = [{
        path: '',
        component: Layout,
        redirect: 'dashboard',
        children: [{
            path: 'dashboard',
            component: _import('dashboard/index'),
            name: 'dashboard',
            meta: {
                title: '工作台',
                icon: 'dashboard'
            }
        }]
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true
    },
    ...Admin
]

export default new Router({
    // mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap.concat(asyncRouterMap)
});