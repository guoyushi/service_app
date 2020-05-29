import { Loadings } from "../components/index"

/**
 *
 * @param {boolean} show 是否显示
 * @param {string} message 提示语
 */
export function loading (show, message = '加载中...') {
  return Loadings(show, message)
}
function install (Vue) {
  Vue.prototype.$loading = loading
}

export default { install }
