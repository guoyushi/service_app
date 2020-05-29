import axios from 'axios'
import { getCookie } from '../api/cookie'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://39.99.142.225',
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {

    // if (getCookie('gunsToken')) {
    //   config.headers['Token'] = getCookie('gunsToken')
    // }
    config.headers['token'] = 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZGQiLCJ1c2VySWQiOiIxIn0.rBW3zMPTWRhkDjBtvpU7yny5dbZw-bKffy7Xz_sstng7JhaRKaD8sWOffGfdjlMn_dvQz8EvLkWAra7gI67ZEA'
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.status !== 200) {
      // if (res.status === 502) {
      // }
      return Promise.reject(res.msg)
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
