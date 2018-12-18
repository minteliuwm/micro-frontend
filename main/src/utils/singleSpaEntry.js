import 'zone.js';
import * as singleSpa from 'single-spa';

function hashPrefix(prefix) {
	return function (location) {
		return location.hash.startsWith(`#${prefix}`);
	};
}

async function loadApp(name, hash, appURL) {
	singleSpa.registerApplication(name, () => SystemJS.import(appURL), hashPrefix(hash), {});
}

export async function init() {
	const loadingPromises = [];

	loadingPromises.push(loadApp('react', '/react', '/react/app.js'));

	loadingPromises.push(loadApp('vue', '/vue', '/vue/app.js'));

	await Promise.all(loadingPromises);

	singleSpa.start();
}
