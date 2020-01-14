import Vue from 'vue';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

// flex 布局库
import 'flex.css'
import '@babel/polyfill';

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/index.scss';
import '@/styles/variables.scss';
import '@/styles/mixin.scss';
import '@/styles/transition.scss';
import '@/styles/element-ui.scss';
import '@/styles/sidebar.scss';
import '@/styles/btn.scss';
import '@/styles/position.scss';
import '@/styles/font.scss';

import App from './App.vue';
import router from './router';

import store from './store';

import './icons';

Vue.use(Element, {
    size: 'small' // set element-ui default size
});
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');