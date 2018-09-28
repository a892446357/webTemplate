import Vue from 'vue'
import Vuex from 'vuex'
import JsCookies from 'js-cookie'

Vue.use(Vuex)

let userInfo = null
try {
  userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
} catch (ex) {}

export default new Vuex.Store({
  state: {
    userInfo: userInfo || {},
    api_token: JsCookies.get('api_token'),
    lang: window.localStorage.getItem('lang') || 'en',
    languages: [
      {id: 'en', name: 'English'},
      {id: 'zh', name: '中文'},
      {id: 'ko', name: '한국어.'}
    ]
  },
  getters: {
    getUserInfo (state) {
      return state.userInfo
    },
    getApiToken (state) {
      return state.api_token
    },
    getLang (state) {
      for (let i = 0; i < state.languages.length; i++) {
        let l = state.languages[i]
        if (l.id === state.lang) {
          return state.lang
        }
      }
      return 'en'
    },
    languages (state) {
      return state.languages
    }
  },
  mutations: {
    updateUserInfo (state, userInfo) {
      state.userInfo = userInfo
    },
    updateApiToken (state, apiToken) {
      state.api_token = apiToken
    },
    updateLang (state, lang) {
      state.lang = lang
    }
  },
  actions: {
    setUserInfo (context, userInfo) {
      if (userInfo) {
        window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
      }
      context.commit('updateUserInfo', userInfo)
    },
    setApiToken (context, apiToken) {
      if (apiToken) {
        JsCookies.set('api_token', apiToken)
      } else {
        window.localStorage.removeItem('userInfo')
        JsCookies.remove('api_token')
      }
      context.commit('updateApiToken', apiToken)
    },
    setLang (context, lang) {
      window.localStorage.setItem('lang', lang)
      context.commit('updateLang', lang)
    }
  }
})
