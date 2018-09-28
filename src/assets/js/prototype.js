String.prototype.format = function () {
    var args = arguments
    return this.replace(/{(\d+)}/g, function (m, i) {
      return args[i] || ''
    })
  }
  
  String.prototype.toMoney = function () {
    let s = this.split('.')
    let s0 = s[0]
    let end = s0.length % 3
    let arr = []
    if (end != 0) {
      arr.push(s0.substring(0, end))
    }
    let count = Math.floor(s0.length / 3)
    if (count > 0) {
      s0 = s0.substring(end)
      do {
        arr.push(s0.substring(0, 3))
        s0 = s0.substring(3)
      } while (s0.length)
    }
    s[0] = arr.join(',')
    return s.join('.')
  }
  
  Date.prototype.format = function (format) {
    format = format || 'yyyy-MM-dd HH:mm:ss'
    let f = function (m) {
      return m < 10 ? `0${m}` : m
    }
    let str = format.replace('yyyy', this.getFullYear())
    str = str.replace('MM', f(this.getMonth() + 1))
    str = str.replace('dd', f(this.getDate()))
    str = str.replace('HH', f(this.getHours()))
    str = str.replace('mm', f(this.getMinutes()))
    str = str.replace('ss', f(this.getSeconds()))
    return str
  }