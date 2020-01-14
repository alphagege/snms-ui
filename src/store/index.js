import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import settings from './modules/settings'
import getters from './getters';
import tagsView from './modules/tagsView';
import user from './modules/user'

Vue.use(Vuex);

const store = new Vuex.Store({
    // namespaced: true,
    modules: {
        app,
        settings,
        tagsView,
        user
    },
    getters
});

export default store