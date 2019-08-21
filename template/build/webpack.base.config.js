'use strict'
const utils = require('./utils')
const webpack = require('webpack');
const path = require('path');
const config = require('./config')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	entry: {
        index: './src/index.js'
    },
	context: path.resolve(__dirname, '../'),
	resolve: {
		modules: [
			"node_modules",
			resolve('src')
		],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('src')
		},
		extensions: ['.js', '.vue', '.json']
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
		}, {
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				transformAssetUrls: {
					video: ['src', 'poster'],
					source: 'src',
					img: 'src',
					image: 'xlink:href'
				}
			}
		}, {
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				limit: 10000,
				name: utils.assetsPath('img/[name].[hash:7].[ext]')
			}
		}, {
			test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				limit: 10000,
				name: utils.assetsPath('media/[name].[hash:7].[ext]')
			}
		}, {
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				limit: 10000,
				name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
			}
		}, {
			test: /\.xhtml$/,
			loader: 'html-loader'
		}]
	},
	plugins: [
		new VueLoaderPlugin(),
		// 解决vender后面的hash每次都改变
		new webpack.HashedModuleIdsPlugin()
	]
}