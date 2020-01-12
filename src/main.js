import Vue from 'vue';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import '@babel/polyfill';

import Element from 'element-ui';

import '@/styles/index.scss'; // global css
import App from './App.vue';
import router from './router';

import store from './store';

Vue.use(Element, {
    size: 'mini' // set element-ui default size
});
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#snms-ui');
