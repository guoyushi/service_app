import Vue from 'vue'
import LoadingComponent from './loading.vue'

let instance
const LoadingConstructor = Vue.extend(LoadingComponent)

/**
 * 显示ActionSheet
 * @param {boolean} show 是否显示
 * @param {string} message 提示语
 */
export default function (show, message = '加载中...') {
  if (!instance) {
    instance = new LoadingConstructor({
      el: document.createElement('div')
    })
    document.body.appendChild(instance.$el)
  }

  if (show) {
    instance.message = message

    Vue.nextTick(() => {
      instance.show = true
    })
  } else {
    instance.show = false
  }
}
