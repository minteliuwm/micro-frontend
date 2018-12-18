module.exports = {
	devServer: {
		historyApiFallback: true,
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		},
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
			"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
		},
		proxy: {
			"/vue": {
				target: "http://localhost:8087",
				pathRewrite: {
					"^/vue": ""
				}
			},
			"/react": {
				target: "http://localhost:8088",
				pathRewrite: {
					"^/react": ""
				}
			}
		}
	}
};
