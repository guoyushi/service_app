import Vue from 'vue'
import Router from 'vue-router'
// import api from './api/api'
// import { getCookie } from '@/api/cookie'
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

Vue.use(Router)
const router = new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
			name: 'login',
      component: () => import('./views/login/login.vue')
    },
    //消息详情页面
    {
      path:'/messageDetail',
      name:'messageDetail',
      component: () => import('./views/message/detail')
    },
    //认证页面
    {
      path:'/authentication_regiser',
      name:'authentication_regiser',
      component: () => import('./views/authentication_regiser/authentication_regiser.vue')
    },
    //实名认证
    {
      path:'/real_name_authentication',
      name:'real_name_authentication',
      component: () => import('./views/real_name_authentication/real_name_authentication.vue')
    },
    //行业证书认证
    {
      path:'/Industry_certificate',
      name:'Industry_certificate',
      component: () => import('./views/Industry_certificate/Industry_certificate.vue')
    },
    {
			path: '/',
      name: 'homeNav',
      component: () => import('./views/homeNav/index.vue'),
      children:[
        //首次登录去认证页面
        {
          path:'/authentication',
          name:'authentication',
          component: ()=> import('./views/homeNav/home/authentication.vue')
        },
        //首页
        {
          path: '/home',
          name: 'home',
          component: () => import('./views/homeNav/home/home.vue')
        },
        //订单页
        {
          path: '/order',
          name: 'order',
          component: () => import('./views/order/order.vue')
        },
        //我的
        {
          path: '/my',
          name: 'my',
          component: () => import('./views/my/my.vue')
        },
        //消息
        {
          path: '/message',
          name: 'message',
          component: () => import('./views/message/message.vue')
        }
      ]
    },
    {
      path: '*',
      component: () => import('./views/404.vue')
    }
  ]
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
