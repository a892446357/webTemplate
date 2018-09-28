// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex'
import VeeValidate from 'vee-validate'
import VueI18n from 'vue-i18n'
import '@/assets/js/vee-validate'
import 'es6-promise'

// 引入css
import '@/assets/css/mian.css'
import '@/assets/css/style.css'

// 导入国际化
import zh from '@/languages/zh'
import en from '@/languages/en'
import ko from '@/languages/ko'

// 导入扩展
import '@/assets/js/prototype'

// 导入组件
import '@/components/dialog'
import '@/components/messageTipBox'
import '@/components/confirm'

Vue.config.productionTip = false

Vue.use(VeeValidate)
Vue.use(VueI18n)

let lang = localStorage.getItem('lang') || 'en'
if ('zh|en|ko'.indexOf(lang) === -1) {
  lang = 'en'
}
let i18n = window.$i18n = new VueI18n({
  locale: lang,
  messages: {
    'zh': zh,
    'en': en,
    'ko': ko
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
