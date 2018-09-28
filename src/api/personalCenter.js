import ajax from './index'

let api = {}

/**
 * 获取我的默认地址
 * @param {*} data 参数
 * @param {*} success 成功回调函数
 * @param {*} error 失败回调函数
 */
const getMyAddress = function (data, success, error) {
  ajax.post(`tinkey/api/tinkeyUserAddress/findDefaultUserAddress`, data, success, error)
}
api.getMyAddress = getMyAddress

/**
 * 添加新地址
 * @param {*} data 参数
 * @param {*} success 成功回调函数
 * @param {*} error 失败回调函数
 */
const createMyAddress = function (data, success, error) {
  ajax.post(`tinkey/api/tinkeyUserAddress/addUserAddress`, data, success, error)
}
api.createMyAddress = createMyAddress

/**
 * 更新地址
 * @param {*} data 参数
 * @param {*} success 成功回调函数
 * @param {*} error 失败回调函数
 */
const updateMyAddress = function (data, success, error) {
  ajax.post(`tinkey/api/tinkeyUserAddress/updateUserAddress`, data, success, error)
}
api.updateMyAddress = updateMyAddress

/**
 * 我的Tinkey
 * @param {*} data 参数
 * @param {*} success 成功回调函数
 * @param {*} error 失败回调函数
 */
const getMyTinkeyList = function (page, show, data, success, error) {
  ajax.get(`tinkey/api/my/tinkeyList/${page}/${show}`, data, success, error)
}
api.getMyTinkeyList = getMyTinkeyList

/**
 * 我的购买记录
 * @param {*} data 参数
 * @param {*} success 成功回调函数
 * @param {*} error 失败回调函数
 */
const getMyOrderList = function (page, show, data, success, error) {
  ajax.get(`tinkey/api/my/orderList/${page}/${show}`, data, success, error)
}
api.getMyOrderList = getMyOrderList

// 邀请活动
const getInvitationActivity = function (success, error) {
  ajax.post(`tinkey/api/userManage/invitationActivity/findUserInvitationActivity`, success, error)
}
api.getInvitationActivity = getInvitationActivity

/**
 * 订单验收
 * @param {*} orderId 订单ID
 * @param {*} success 成功回调函数
 * @param {*} error 失败回调函数
 */
const orderAccept = function (orderId, success, error) {
  ajax.put(`tinkey/api/my/order/accept/${orderId}`, success, error)
}
api.orderAccept = orderAccept

export default api
