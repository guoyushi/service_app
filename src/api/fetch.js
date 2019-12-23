/** 完整版fetch，所有请求拼接gunsToken字段，返回接口数据中的data */
import axios from './http'
import {getCookie} from './cookie'

export default function fetch (method = 'GET', url, params = {}) {
  let data = {...params, gunsToken: getCookie('gunsToken')}
  let options = {
    url: url,
    method: method,
    params: data
  }
  if (method.toLocaleLowerCase() === 'post') {
    options = {
      url: url,
      method: method,
      data: data
    }
  }
  return new Promise((resolve, reject) => {
    axios(options).then(res => {
      if (res.status === 200 && res.data) {
        if (res.data.code === 200) {
          if (res.data.data == null) {
            resolve({})
          } else {
            resolve(res.data.data)
          }
        } else {
          reject(res.data.message)
        }
      } else {
        reject('接口返回数据有误！')
      }
    }).catch(error => {
      reject(error)
    })
  })
}
