import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { init } from './utils/singleSpaEntry';
import './scss/index.scss';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');

init();
