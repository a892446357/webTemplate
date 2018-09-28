import Vue from 'vue'
import store from '@/vuex'
import QRCode from '@/assets/js/qrcode'
import api from '@/api/api'

let utils = {
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)
}

const setDialog = function (component, opts) {
  opts = opts || {}
  if (opts.id && document.getElementById(opts.id)) {
    return
  }
  let i18n = window.$i18n
  const DialogComponent = Vue.extend(component)
  var dialogComponent = new DialogComponent({
    store,
    i18n,
    el: document.createElement('div'),
    propsData: opts
  })
  opts.component = dialogComponent
  dialogComponent.$dialog = Vue.$koallDialog(opts)
  dialogComponent.$on('okCallback', opts.okCallback || function () {})
  dialogComponent.$on('errCallback', opts.errCallback || function () {})
  dialogComponent.$on('removeDialog', dialogComponent.$dialog.removeDialog)
  return dialogComponent
}
utils.setDialog = setDialog

/**
 * var qrcode = new QRCode(document.getElementById("qrcode"), {
 * text: "http://jindo.dev.naver.com/collie",
 * width: 128,
 * height: 128,
 * colorDark : "#000000",
 * colorLight : "#ffffff",
 * correctLevel : QRCode.CorrectLevel.H
 * })
 * qrcode.clear()
 * qrcode.makeCode("http://naver.com")
 */
const qrcode = function (dom, opts) {
  if (!dom) {
    return
  }
  dom.innerHTML = ''
  opts = opts || {}
  opts.width = opts.width || 120
  opts.height = opts.height || 120
  var qrcode = new QRCode(dom, opts)
  return qrcode
}
utils.qrcode = qrcode

let isGtDialogOpen = false
const gtValidate = function (okCallback) {
  if (isGtDialogOpen) {
    return
  }
  isGtDialogOpen = true
  const handler = function (captcha) {
    captcha.onReady(() => {
      captcha.verify()
    })
    captcha.onSuccess(() => {
      isGtDialogOpen = false
      let params = captcha.getValidate()
      typeof okCallback === 'function' && okCallback({
        geetestChallenge: params.geetest_challenge,
        geetestSeccode: params.geetest_seccode,
        geetestValidate: params.geetest_validate
      })
    })
    captcha.onClose(() => {
      isGtDialogOpen = false
    })
    captcha.onError(() => {
      isGtDialogOpen = false
    })
  }
  // 调用 initGeetest 初始化参数
  // 参数1：配置参数
  // 参数2：回调，回调的第一个参数验证码对象，之后可以使用它调用相应的接口
  api.getGtInfo((res) => {
    res = JSON.parse(res)
    window.initGeetest({
      gt: res.gt,
      challenge: res.challenge,
      offline: !res.success, // 表示用户后台检测极验服务器是否宕机，一般不需要关注
      new_captcha: false,
      product: 'bind', // 产品形式，包括：float，popup
      width: '260px',
      height: '44px',
      lang: window.localStorage.getItem('lang') === 'zh' ? 'zh-cn' : 'en'
    }, handler)
  }, (msg) => {
    isGtDialogOpen = false
    Vue.$koallTipBox({icon: 'notification', message: window.$i18n.t(`error_code.${msg}`)})
  })
}
utils.gtValidate = gtValidate

// 获取URL参数
const getUrlHashParams = function () {
  let hash = location.hash
  if (!hash) {
    return {}
  }
  if (hash.indexOf('?') === -1) {
    return {}
  }
  let ps = hash.substring(hash.indexOf('?') + 1)
  if (!ps) {
    return {}
  }
  ps = ps.split('&')
  let params = {}
  for (let i = 0; i < ps.length; i++) {
    let p = ps[i].split('=')
    if (p[0]) {
      params[p[0]] = p[1] || ''
    }
  }
  return params
}
utils.getUrlHashParams = getUrlHashParams

/**
 * 加密密码
 * @param {*} pwd 密码
 * @param {*} okCallback 成功回调函数
 */
const publickey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCI0+KZEQJ4eiT42gOZfVaIMMwD0neLsh1/BQlwVMJgXJUom6U/DkGPxY+1QOt8dnvjWZg+gNebblxe9N0oJp4grJSKdqNoj4P6Vmo3GnmFa6oDOpxOjBMSBBWMMU21ppssirPUDCESic8ND2FvsHTcTUWMzLzINh52CFTZCQuI/QIDAQAB'
const encryptPwd = function (pwd) {
  var encrypt = new JSEncrypt()
  encrypt.setPublicKey(publickey)
  pwd = encrypt.encrypt(pwd)
  return pwd
}
utils.encryptPwd = encryptPwd

export default utils
