import Vue from 'vue';
import vuex from 'vuex';
import app from './modules/app.js';

Vue.use(vuex);

export default new vuex.Store({
	modules: {
		app
	}
})
