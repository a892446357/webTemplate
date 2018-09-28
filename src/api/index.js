import axios from 'axios'
import JsCookies from 'js-cookie'

const DOMAIN = process.env.NODE_ENV === 'development' ? `http://dev.tinkey.net/` : '/'

axios.defaults.baseURL = DOMAIN

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  var apiToken = JsCookies.get('api_token')
  apiToken && (config.headers.common['Authorization'] = apiToken)
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  if (typeof response.data === 'string') {
    let error = {response: response}
    return Promise.reject(error)
  }
  if (response.data && response.data.rst === 401) {
    console.error(response.config.url)
    console.log('用户不存在，退出登录')
    // 用户不存在，退出登录
    window.localStorage.removeItem('userInfo')
    JsCookies.remove('api_token')
    window.location.reload()
    return null
  }
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

let api = {}
api.domain = DOMAIN

const successCatch = function (res, success, error) {
  if (!res) { return }
  res = res.data
  if (res.rst === 1) {
    success && success(res.data, res)
  } else {
    error && error(res.msg)
  }
}

const errorCatch = function (res, error) {
  if (res.response && res.response.status === 403) {
    console.log('用户不存在，退出登录')
    // 用户不存在，退出登录
    window.localStorage.removeItem('userInfo')
    JsCookies.remove('api_token')
    window.location.reload()
    return
  }
  console.warn(res)
  error && error(res.response && res.response.data && res.response.data.length < 500 ? res.response.data : 'Server_Error', res)
}

const get = function (url, data, success, error) {
  if (typeof data === 'function') {
    error = success
    success = data
    data = {}
  }
  axios.get(url, {
    params: data
  }).then((res) => {
    successCatch(res, success, error)
  }).catch((res) => {
    errorCatch(res, error)
  })
}
api.get = get

const post = function (url, data, success, error) {
  if (typeof data === 'function') {
    error = success
    success = data
    data = {}
  }
  axios.post(url, data).then((res) => {
    successCatch(res, success, error)
  }).catch((res) => {
    errorCatch(res, error)
  })
}
api.post = post

const del = function (url, data, success, error) {
  if (typeof data === 'function') {
    error = success
    success = data
    data = {}
  }
  axios.delete(url, {
    data: data
  }).then((res) => {
    successCatch(res, success, error)
  }).catch((res) => {
    errorCatch(res, error)
  })
}
api.delete = del

const put = function (url, data, success, error) {
  if (typeof data === 'function') {
    error = success
    success = data
    data = {}
  }
  axios.put(url, data).then((res) => {
    successCatch(res, success, error)
  }).catch((res) => {
    errorCatch(res, error)
  })
}
api.put = put

export default api
