import ajax from './index'

let api = {}

/**
 * 获取产品列表
 * @param {*} data 参数
 * @param {*} success 成功回调函数
 * @param {*} error 失败回调函数
 */
const getProductList = function (data, success, error) {
  ajax.get(`tinkey/api/sell/product`, data, success, error)
}
api.getProductList = getProductList

/**
 * 获取国家列表
 * @param {*} data 参数
 * @param {*} success 成功回调函数
 * @param {*} error 失败回调函数
 */
const getCountriesList = function (data, success, error) {
  ajax.get(`tinkey/api/country`, data, success, error)
}
api.getCountriesList = getCountriesList

/**
 * 我的购物车
 * @param {*} data 参数
 * @param {*} success 成功回调函数
 * @param {*} error 失败回调函数
 */
const getCartsList = function (data, success, error) {
  ajax.get(`tinkey/api/cart`, data, success, error)
}
api.getCartsList = getCartsList

/**
 * 创建购物车
 * @param {*} data 参数
 * @param {*} success 成功回调函数
 * @param {*} error 失败回调函数
 */
const createCart = function (data, success, error) {
  ajax.post(`tinkey/api/cart`, data, success, error)
}
api.createCart = createCart

/**
 * 更新购物车
 * @param {*} data 参数
 * @param {*} success 成功回调函数
 * @param {*} error 失败回调函数
 */
const updateCart = function (data, success, error) {
  ajax.put(`tinkey/api/cart`, data, success, error)
}
api.updateCart = updateCart

// 我已付款
const paid = function (data, success, error) {
  ajax.post(`tinkey/api/sell/paid`, data, success, error)
}
api.paid = paid

// 创建订单
const conOrder = function (data, success, error) {
  ajax.post(`tinkey/api/order`, data, success, error)
}
api.conOrder = conOrder

// 获取订单详情
const getOrderDetail = function (data, success, error) {
  ajax.get(`tinkey/api/order`, data, success, error)
}
api.getOrderDetail = getOrderDetail

// 获取支付方式
const conPaytype = function (success, error) {
  ajax.get(`tinkey/api/paytype`, (res) => {
    let pays = []
    res.forEach((item) => {
      if ((item.paytypeName || '').toUpperCase().indexOf('SUPER_NODE') !== -1) {
        return
      }
      pays.push(item)
    })
    success && success(pays)
  }, error)
}
api.conPaytype = conPaytype

// 查询油费
const conpostage = function (data, success, error) {
  ajax.get(`tinkey/api/sell/postage`, data, success, error)
}
api.conpostage = conpostage

export default api
