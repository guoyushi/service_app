/** 阉割版fetch，直接返回接口返回的数据 */
import axios from './http'

export default function fetch (method = 'GET', url, params = {}) {
  let options = {
    url: url,
    method: method
  }
  if (method.toLocaleLowerCase() === 'post') {
    options.data = params
  } else {
    options.params = params
  }
  return new Promise((resolve, reject) => {
    axios(options).then(res => {
      if (res.status === 200 && res.data) {
        resolve(res.data)
      } else {
        reject('接口返回数据有误！')
      }
    }).catch(error => {
      reject(error)
    })
  })
}
