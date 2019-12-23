import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
Vue.config.productionTip = false

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
