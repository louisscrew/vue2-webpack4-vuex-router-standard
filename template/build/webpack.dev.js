const merge = require('webpack-merge');
const common = require('./webpack.base.config.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    mode: 'development',
    devServer:{
        historyApiFallback: true,
        noInfo: false,
        // hot: true
    }
});