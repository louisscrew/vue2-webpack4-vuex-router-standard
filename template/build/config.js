'use strict'
const path = require('path');
const appConfig = require("../src/AppConfig.js");

//代理列表
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
	assetsSubDirectory:'public',
	dev: {
		// Paths
		assetsRoot: path.resolve(__dirname, '../dist'),//开发时的最终生成目录
		assetsPublicPath: '/',
		proxyTable: proxyTable,//开发跨域配置
		// Various Dev Server settings
		host:  "0.0.0.0", // 访问地址，开发时可以用localhost也可以用ip
		port: 8080, // 开发时使用的端口号
		autoOpenBrowser: false,
		errorOverlay: true,
		notifyOnErrors: true,
		poll: false,
		cacheBusting: false,
		devtool: '#source-map',
		cssSourceMap:true
	},

	//编译分为两个入口，打包两个
	build: {
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsPublicPath: '',
		productionSourceMap: true,
		devtool: '#source-map'
	}
}