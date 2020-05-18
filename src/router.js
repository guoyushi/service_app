import Vue from 'vue'
import Router from 'vue-router'
// import api from './api/api'
// import { getCookie } from '@/api/cookie'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)
const router = new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [{
    path: '/home',
    name: 'home',
    component: () => import('./views/homeNav/index.vue')
  }]
})
// router.beforeEach((to, from, next) => {
//   let url = document.location.href
//   // 页面的登录验证（除了登录页）
//   api.checkoutGunsToken({gunsToken: getCookie('gunsToken')}).then((res) => {
//     if (res.code !== 200) {
//       window.location.href = url.substring(0,url.indexOf('/')) + '/sso/?redirectUrl=' + url
//     } else {
//       if (to.meta.title) document.title = to.meta.title
//       next()
//     }
//   })
// })
export default router