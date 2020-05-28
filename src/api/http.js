/** axios封装 */
import axios from 'axios'

// axios.defaults.baseURL = '/api'
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = ''
}
// 请求超时时间
axios.defaults.timeout = 10000

// 允许携带cookie
axios.defaults.withCredentials = true

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

export default axios