import fetches from './fetches'

export default {
    ValidateCodeLogin (params) {
    return fetches('post', '/merchant/passport/isExitMobile', params)
  },
  getValidateCode(params){
    return fetches('get', '/merchant/validateCode/send', params)
  }
}