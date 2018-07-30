const path = require('path')
const merge = require('webpack-merge');
const common = require('./webpack.base.config.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require("./config.js");

module.exports = merge(common, {
    devtool: 'source-map',
    mode: 'production',
    //4.0≈‰÷√
    optimization: {
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, '../dist/*'), {
            root: path.resolve(__dirname, '../'),
            verbose: true,
            dry: false
        }),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.optimize.SplitChunksPlugin({
            chunks: "all",
            minSize: 20000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true
        }),
    ]
});