const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { PROJECT_HOST,PROJECT_PORT } = require('../constant')


module.exports = merge(common, {
  mode:'development',
  devtool:'eval-source-map',
  devServer: {
    host: PROJECT_HOST, // 指定 host，不设置的话默认是 localhost
    port: PROJECT_PORT, // 指定端口，默认是8080
    compress: true, // 是否启用 gzip 压缩
    open: true, // 打开默认浏览器
    hot: true, // 热更新
  },
})