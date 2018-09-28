import ajax from './index'

let api = {}

/**
 * 用户登录
 * @param {*} data 参数{username:用户名，password:密码}
 * @param {*} success 成功回调函数
 * @param {*} error 失败回调函数
 */
const login = function (data, success, error) {
  ajax.post(`tinkey/api/login/jwt`, data, success, error)
}
api.login = login

/**
 * 获取用户信息
 * @param {*} data 参数{username:用户名，password:密码}
 * @param {*} success 成功回调函数
 * @param {*} error 失败回调函数
 */
const getUserInfo = function (data, success, error) {
  ajax.get(`tinkey/api/tinkeyUser/findUserByToken`, data, success, error)
}
api.getUserInfo = getUserInfo

/**
 * 修改基本信息
 * @param {*} data 参数{email:邮箱，ethAddress:eth地址}
 * @param {*} success 成功回调函数
 * @param {*} error 失败回调函数
 */
const updateUserInfo = function (data, success, error) {
  ajax.post(`tinkey/api/tinkeyUser/updateUser`, data, success, error)
}
api.updateUserInfo = updateUserInfo

const registerUser = function (data, success, error) {
  ajax.post(`tinkey/api/tinkeyUser/addUser`, data, success, error)
}
api.registerUser = registerUser

// 发送验证码
const sendSmsUser = function (data, success, error) {
  ajax.post(`tinkey/api/tinkeyUser/sendSms`, data, success, error)
}
api.sendSmsUser = sendSmsUser

// 获取极速验证信息
const getGtInfo = function (data, success, error) {
  ajax.get(`tinkey/api/tinkeyUser/startCaptchaServlet`, data, success, error)
}
api.getGtInfo = getGtInfo

// 订阅
const addEmailSubscriber = function (data, success, error) {
  ajax.post(`tinkey/api/tinkeyEmailSubscribe/addEmailSubscriber`, data, success, error)
}
api.addEmailSubscriber = addEmailSubscriber

// 发送短信验证码
const sendSms = function (data, success, error) {
  ajax.post(`http://10.0.1.34:8080/tinkey/api/tinkeyUser/sendSms`, data, success, error)
}
api.sendSms = sendSms

//  手机找回密码
const updatePwdByMobile = function (data, success, error) {
  ajax.post(`http://10.0.1.34:8080/tinkey/api/tinkeyUser/updatePwdByMobile`, data, success, error)
}
api.updatePwdByMobile = updatePwdByMobile

// 邮件发送验证码
const resetPwdReq = function (emailData, success, error) {
  ajax.get(`http://10.0.1.34:8080/tinkey/api/tinkeyUser/resetPwdReq/${emailData}`, success, error)
}
api.resetPwdReq = resetPwdReq

// 邮件找回密码
const updatePwdByEmail = function (data, success, error) {
  ajax.post(`http://10.0.1.34:8080/tinkey/api/tinkeyUser/updatePwdByEmail`, data, success, error)
}
api.updatePwdByEmail = updatePwdByEmail

export default api
