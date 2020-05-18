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
  routes: [{
      path: '/login',
      name: 'login',
      component: () => import('./views/login/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/register/register.vue')
    },
    //消息详情页面
    {
      path: '/messageDetail',
      name: 'messageDetail',
      component: () => import('./views/message/detail')
    },
    //认证页面
    {
      path: '/authentication_regiser',
      name: 'authentication_regiser',
      component: () => import('./views/authentication_regiser/authentication_regiser.vue')
    },
    //实名认证
    {
      path: '/real_name_authentication',
      name: 'real_name_authentication',
      component: () => import('./views/real_name_authentication/real_name_authentication.vue')
    },
    //行业证书认证
    {
      path: '/Industry_certificate',
      name: 'Industry_certificate',
      component: () => import('./views/Industry_certificate/Industry_certificate.vue')
    },
    //我的认证
    {
      path: '/my_certification',
      name: 'my_certification',
      component: () => import('./views/my_certification/my_certification.vue')
    },
    {
      path: '/',
      name: 'homeNav',
      component: () => import('./views/homeNav/index.vue'),
      children: [
        //首次登录去认证页面
        {
          path: '/authentication',
          name: 'authentication',
          component: () => import('./views/homeNav/home/authentication.vue')
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
    //服务页面首页
    {
      path: '/servePage',
      name: 'ServePage',
      component: () => import('./views/servePage/index.vue')
    },
    //服务页面tab选择
    {
      path: '/serveTab',
      name: 'ServeTab',
      component: () => import('./views/servePage/serve/serveTab')
    },
    //服务页面发布服务
    {
      path: '/ssue',
      name: 'Ssue',
      component: () => import('./views/servePage/serve/ssue')
    },
    //服务描述
    {
      path: '/description',
      name: 'description',
      component: () => import('./views/servePage/serve/description.vue')
    },
    //服务描述
    {
      path: '/charge',
      name: 'charge',
      component: () => import('./views/servePage/serve/charge.vue')
    },
    {
      path: '/chargeList',
      name: 'chargeList',
      component: () => import('./views/servePage/serve/chargeList.vue')
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