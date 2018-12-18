import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import './scss/index.scss';

import App from './pages/app';


const reactLifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: App,
	domElementGetter
});

export function bootstrap(props) {
	return reactLifecycles.bootstrap(props);
}

export function mount(props) {
	return reactLifecycles.mount(props);
}

export function unmount(props) {
	return reactLifecycles.unmount(props);
}

function domElementGetter() {
	let el = document.getElementById('demo-react');

	if (!el) {
		el = document.createElement('div');
		el.id = 'demo-react';
		const dom = document.getElementById('content');
		dom && dom.appendChild(el);
	}

	return el;
}
