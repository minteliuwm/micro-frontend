'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/main.js'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: "[name].js",
		libraryTarget: 'amd'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json']
	},
	module: {
		rules: [{
			test: /\.js|jsx$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader'
		}, {
			test: /\.scss$/,
			use: [{
				loader: "style-loader"
			}, {
				loader: "css-loader"
			}, {
				loader: "sass-loader"
			}]
		}, {
			test: /\.js[x]?$/,
			enforce: 'pre',
			use: [{
				loader: 'eslint-loader',
				options: {
					fix: true
				}
			}],
			include: path.resolve(__dirname, './src/**/*.js'),
			exclude: /node_modules/
		}, {
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				limit: 30000,
				name: 'images/[name].[ext]?[hash]',
				publicPath: '/react/'
			}
		}, {
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: "url-loader",
			options: {
				limit: 10000,
				name: 'font/[name].[ext]?[hash]',
				publicPath: '/react/'
			}
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body'
		})
	]
};
