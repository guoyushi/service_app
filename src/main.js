import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import BaiduMap from 'vue-baidu-map'
Vue.config.productionTip = false

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'ZBkSjKKvGepsptp5VpbzH9BMFPTR3St6'
})
// let modules = process.env.MODULES.split(',')
// console.log(modules)
// modules.map(item => {
//   try {
//     let config = require('@/views/' + item + '/index.js')
//     if (config.default.routers) {
//       router.addRoutes(config.default.routers)
//     }
//     if (config.default.store) {
//       store.registerModule(item, config.default.store)
//     }
//   } catch (e) {
//     // e
//    }
// })
// router.addRoutes([{ path: '*', component: () => import('@/views/404.vue') }])

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
