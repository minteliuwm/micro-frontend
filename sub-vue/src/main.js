import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
	Vue,
	appOptions: {
		el: '#demo-vue',
		router,
		render: h => h(App)
	}
});

export const bootstrap = [vueLifecycles.bootstrap];

export function mount(props) {
	createDomElement();
	return vueLifecycles.mount(props);
};

export const unmount = [vueLifecycles.unmount];

function createDomElement() {
	let el = document.getElementById('demo-vue');

	if (!el) {
		el = document.createElement('div');
		el.id = 'demo-vue';
		const dom = document.getElementById('content');
		dom && dom.appendChild(el);
	}

	return el;
}
