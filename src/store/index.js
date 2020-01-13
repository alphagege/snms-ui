import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import settings from './modules/settings'
import getters from './getters';
import tagsView from './modules/tagsView';

Vue.use(Vuex);

const store = new Vuex.Store({
    // namespaced: true,
    modules: {
        app,
        settings,
        tagsView
    },
    getters
});

export default store
