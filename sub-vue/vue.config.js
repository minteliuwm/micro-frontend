module.exports = {
	configureWebpack: {
		output: {
			libraryTarget: 'umd'
		}
	},
	chainWebpack: config => {
		config.module
			.rule('images')
			.use('url-loader')
			.loader('url-loader')
			.tap(options => Object.assign(options, {
				publicPath: '/vue/'
			}));
	}
};
