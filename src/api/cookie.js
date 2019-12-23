// 获取指定名称的cookie值
export function getCookie (name) {
    let arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
    if (arr != null) {
      return unescape(arr[2])
    }
    return null
  }
  
  // 删除指定名称的cookie值
  export function delCookie (name) {
    let date = new Date()
    date.setTime(date.getTime() - 10 * 24 * 3600 * 1000)
    document.cookie = name + '=a; expires=' + date.toGMTString() + '; path = /'
  }
  
  // 存储cookie值并且设置cookie过期时间
  export function setCookie (name, value, time) {
    if (time && time > 0) {
      let date = new Date()
      date.setTime(date.getTime() + time * 24 * 3600 * 1000)
      document.cookie = name + '=' + escape(value) + '; expires=' + date.toGMTString() + '; path = /'
    } else {
      document.cookie = name + '=' + escape(value) + '; path = /'
    }
  }
  