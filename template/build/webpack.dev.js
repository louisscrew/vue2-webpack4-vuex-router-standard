const merge = require('webpack-merge');
const common = require('./webpack.base.config.js');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const HOST = process.env.HOST
const PORT = (process.env.PORT && Number(process.env.PORT)) || '8080'
const utils = require('./utils')
const webpack = require('webpack')



const devWebpackConfig = merge(common, {
    devtool: 'inline-source-map',
    mode: 'development',
    devServer:{
        clientLogLevel: 'warning',
        historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        noInfo: false,
        hot: true, // 热加载
        host: HOST||'localhost',
        port: PORT,
        inline: true, //自动刷新
        open: true, //自动打开浏览器
        overlay: { warnings: false, errors: true }, // 在浏览器上全屏显示编译的errors或warnings。
        quiet: true, // necessary for FriendlyErrorsPlugin // 终端输出的只有初始启动信息。 webpack 的警告和错误是不输出到终端的
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //显示模块相对路径
        new webpack.NamedModulesPlugin(),
        //不显示错误信息
        new webpack.NoEmitOnErrorsPlugin(),
    ]
});

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = PORT
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port
      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: utils.createNotifierCallback(),
      }))
      resolve(devWebpackConfig)
    }
  })
})