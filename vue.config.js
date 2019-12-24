const webpack = require('webpack')

const glob = require('glob')
const path = require('path')
const fs = require('fs')
const resolve = (dir) => path.join(__dirname, dir);
// const PAGES_PATH = path.resolve(__dirname, './src/views')
// let pages = ''
// glob.sync(PAGES_PATH + '/*/index.js').forEach(filepath => {
//   const pageName = path.basename(path.dirname(filepath))
//   // console.log('PageName:' + pageName)
//   pages += pageName + ','
// })
/* fs.writeFile('./.env', 'MODULES=' + pages, function (err) {
  console.log(err)
}) */
module.exports = {
  // pages,
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
     .set('@', resolve('src'))
    //  .set('assets', resolve('src/assets'))
    //  .set('components', resolve('src/components'))
    //  .set('layout', resolve('src/layout'))
    //  .set('base', resolve('src/base'))
    //  .set('static', resolve('src/static'));
  },
  configureWebpack:()=>({
    //   plugins: [new webpack.DefinePlugin({
    //     'process.env.MODULES': '"' + pages + '"'
    //   })],
    externals: {
      'BMap':'BMap'
    //   'jquery': 'jQuery',
    //   'echarts': 'echarts',
    //   'Cesium': 'Cesium',
    //   'cs3d': 'cs3d'
    }
  }),
  //   pwa: { 
  //     iconPaths: {
  //       favicon32: 'favicon.ico',
  //       favicon16: 'favicon.ico',
  //       appleTouchIcon: 'favicon.ico',
  //       maskIcon: 'favicon.ico',
  //       msTileImage: 'favicon.ico'
  //     } 
  //   },
  //   devServer: {
  //     host: 'dev.jdcloud.com',
  //     port: 8080,
  //     hot: true,
  //     proxy: {
  //       '/aioc-api': {
  //         target: 'http://hebi-cloud.xjoycity.com',
  //         changeOrigin: true,
  //         pathRewrite: {
  //           '^/aioc-api': ''
  //         }
  //       }
  //     }
  //   }
}
