'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('./config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssTextPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')



const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true,
            usePostCSS: true
        })
    },
    devtool: config.build.productionSourceMap ? config.build.devtool : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('[name].[chunkhash].js'),
        chunkFilename: '[name].[chunkhash].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            name: true,
            cacheGroups: {
                common: {
                    name: 'common',
                    chunks: 'initial',
                    minChunks: 2
                },
                vendor: {
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        // extract css into its own file
        new MiniCssTextPlugin({
            filename: utils.assetsPath('css/[name].[contenthash].css')
        }),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin({
            cssProcessorOptions: config.build.productionSourceMap ? {
                safe: true,
                map: {
                    inline: false
                }
            } : {
                safe: true
            }
        }),

        new HtmlWebpackPlugin({
            filename: path.join(config.build.assetsRoot, `index.html`),
            template: './src/index.html',
            chunksSortMode: 'dependency'
        }),

        //拷贝插件
        new CopyWebpackPlugin([{
                from: path.resolve(__dirname, '../src/AppConfig.js'),
                to: config.build.assetsRoot,
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



module.exports = webpackConfig