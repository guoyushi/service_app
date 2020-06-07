import request from '../utils/request'
//验证码登录
export function ValidateCodeLogin(params){
  return request({
    url: '/merchant/passport/login',
    method: 'post',
    data: params
  })
}
//获取验证码
export function getValidateCode(params){
  return request({
    url: '/merchant/validateCode/send',
    method: 'get',
    params: params
  })
}
//验证手机号
export function isExitMobile(params){
  return request({
    url: '/merchant/passport/isExitMobile',
    method: 'get',
    params: params
  })
}
//注册接口
export function regist(params){
  return request ({
    url: '/merchant/passport/regist',
    method: 'post',
    data: params
  })
}
//忘记密码
export function updatePassword(params){
  return request({
    url:'/merchant/passport/updatePassword',
    method: 'post',
    data:params
  })
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
