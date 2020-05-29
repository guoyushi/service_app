import fetches from './fetches'
import request from '../utils/request'
export default {
  ValidateCodeLogin (params) {
    return fetches('post', '/api/merchant/passport/isExitMobile', params)
  },
  getValidateCode(params){
    return fetches('get', '/api/merchant/validateCode/send', params)
  }
}


/**
 * 自建服务查询一级分类
 * @param query
 * @returns {AxiosPromise}
 */
export function listOneCategory(query) {
  return request({
    url: '/merchant/serviceCategory/listOneCategory',
    method: 'get',
    params: query
  })
}

/**
 * 自建服务查询二三级分类
 * @param query
 * @returns {AxiosPromise}
 */
export function listOtherCategory(query) {
  return request({
    url: '/merchant/serviceCategory/listOtherCategory',
    method: 'get',
    params: query
  })
}
