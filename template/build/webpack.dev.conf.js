'use strict'
const utils = require('./utils')
const webpack = require('webpack');
const path = require('path');
const config = require('./config'); //配置键
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

//得到开发的配置
let devWebpackConfig = merge(webpackBaseConfig, {
    mode: 'development',
    module: {
        rules: utils.styleLoaders({//加载样式配置
            hotReload: true,
            extract: false,
            sourceMap: config.dev.cssSourceMap,
            usePostCSS: true
        })
    },
    devtool: config.build.devtool,
    output: {
        path: config.dev.assetsRoot,
        filename: '[name].js',
        chunkFilename: '[name].[contenthash].js',
        publicPath: config.dev.assetsPublicPath
    },
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [{
                from: /.*/,
                to: path.posix.join(config.dev.assetsPublicPath, 'index.html')
            }, ]
        },
        hot: true,
        contentBase: false, // since we use CopyWebpackPlugin.
        compress: true,
        //inline: true,
        //progress: true,
        host: config.dev.host,
        port: config.dev.port,
        open: config.dev.autoOpenBrowser,
        overlay: config.dev.errorOverlay ? {
            warnings: false,
            errors: true
        } : false,
        publicPath: config.dev.assetsPublicPath,
        proxy: config.dev.proxyTable,
        quiet: false, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            poll: config.dev.poll,
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        //html插件
        new HtmlWebpackPlugin({
            filename: path.join(config.dev.assetsRoot, `index.html`),
            chunks: ['index'],
            template: './src/index.html'
        }),
        //拷贝插件
        new CopyWebpackPlugin([{
                from: path.resolve(__dirname, '../src/AppConfig.js'),
                to: config.dev.assetsRoot,
                ignore: ['.*']
            },
            {
                from: path.resolve(__dirname, '../public'),
                to: config.assetsSubDirectory,
                ignore: ['.*']
            }
        ])
    ]
})


module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err)
        } else {
            process.env.PORT = port
            devWebpackConfig.devServer.port = port
            // Add FriendlyErrorsPlugin
            devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
                },
                onErrors: config.dev.notifyOnErrors ?
                    utils.createNotifierCallback() : undefined
            }))
            resolve(devWebpackConfig)
        }
    })
});