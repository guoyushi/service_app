import fetches from './fetches'

export default {
  ValidateCodeLogin (params) {
    return fetches('post', '/api/merchant/passport/isExitMobile', params)
  },
  getValidateCode(params){
    return fetches('get', '/api/merchant/validateCode/send', params)
  }
}