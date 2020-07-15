const webpack = require('webpack')

const glob = require('glob')
const path = require('path')
const fs = require('fs')
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  // pages,
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
  },
  configureWebpack: () => ({
    //   plugins: [new webpack.DefinePlugin({
    //     'process.env.MODULES': '"' + pages + '"'
    //   })],
    // externals: {
    // }
  }),
  devServer: {
    host: 'test.shandindong.com',
    // host: 'localhost',
    port: 8080,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://39.99.142.225',
        changeOrigin: true,
        pathRewrite: {
          '^/ api': ''
        }
      }
    }
  }
}
