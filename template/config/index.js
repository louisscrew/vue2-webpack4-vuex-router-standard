'use strict'
const path = require('path');
const appConfig = require("../src/appConfig.js");


let proxyTable = {};
//组装proxyTable
for (let pkey in appConfig.apiServer) {
	let item = (appConfig.apiServer)[pkey];
	let proxyTarget = `${item.protocol}://${item.host}:${item.post}/`;
	let tk = `${item.path}/*`;
	proxyTable[tk]={
		target: proxyTarget,
		ws: true,
		changeOrigin: true
	};
}
module.exports = {
	dev: {
		// Paths
		assetsSubDirectory: 'public',
		assetsPublicPath: '/',
		proxyTable: proxyTable,//开发跨域配置
		// Various Dev Server settings
		host: 'localhost', // can be overwritten by process.env.HOST
		port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
		autoOpenBrowser: false,
		errorOverlay: true,
		notifyOnErrors: true,
		poll: false,
		cacheBusting: false,
		devtool: 'eval-source-map'
	},

	build: {
		// Template for index.html
		index: path.resolve(__dirname, '../dist/index.html'),
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'public',
		assetsPublicPath: '',
		productionSourceMap: true,
		devtool: '#source-map'
	}
}