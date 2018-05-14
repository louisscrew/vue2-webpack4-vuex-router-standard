const path  = require('path');
const config = require("./config.js");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const CopyWebpackPlugin = require('copy-webpack-plugin');+
//VueLoader 在15版本之后需要应用这个插件在webpack中才能正常解析vue文件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = {
    entry:'./src/main.js',
    output:{
        path:config.webpack.outputPath, 
        filename:'[name].js',
    },
    resolve:{
        modules: [
            "node_modules"
        ],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        },
        extensions:[".js",".json",".jsx",".css",'.vue']
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['env'],
                        plugins:['transform-runtime']
                    }
                }
            },
            {
                test:/\.vue$/
                ,use:{
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            'less': 'vue-style-loader!css-loader!less-loader'
                        }
                    }
                }
            },
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader', // 回滚
                    publicPath:'../', //解决css背景图的路径问题
                    use:[{
                        loader: 'css-loader',
                        options: {
                            autoprefixer: false
                        }
                    },{
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    }]
                })
            },
            {
                test:/\.less$/,
                use:ExtractTextPlugin.extract({ //分离less编译后的css文件
                    fallback:'style-loader',
                    publicPath:'../', //解决css背景图的路径问题
                    use:[{
                        loader: 'css-loader',
                        options: {
                            autoprefixer: false
                        }
                    },{
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },{
                        loader: 'less-loader'
                    }]
                })
            },
            {
                test:/\.(sass|scss)$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    publicPath:'../', //解决css背景图的路径问题
                    use:[{
                        loader: 'css-loader',
                        options: {
                            autoprefixer: false
                        }
                    },{
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },{
                        loader: 'sass-loader'
                    }]
                })
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|svgz)$/,
                use:{
                    loader: 'file-loader',
                    options: {
                      name: 'assets/images/[name].[ext]?[hash]'
                    }
                }
            },
        ]
           
    },
    performance: {
        hints: false
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({template:'./src/index.html'}),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('./css/[name].css')
    ]
}

module.exports = webpackConfig;