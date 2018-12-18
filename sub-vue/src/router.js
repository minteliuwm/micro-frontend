import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
	routes: [{
		path: '/vue',
		name: 'home',
		component: Home
	}, {
		path: '/vue/about',
		name: 'about',
		component: About
	}]
});
