import { Validator } from 'vee-validate'
import reg from '@/assets/js/regex'

Validator.extend('email', {
  getMessage: (field, args) => {
    return 'error_code.email' // 邮箱格式错误
  },
  validate: (value, args) => {
    return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value )
  }
})

Validator.extend('password', {
  getMessage: (field, args) => {
    return 'error_code.password' // 请输入6~16位数字+字母组合的密码
  },
  validate: (value, args) => {
    return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(value)
  }
})

Validator.extend('confirmPassword', {
  getMessage: (field, args) => 'error_code.passwordAgain', // 密码不匹配，请重新输入
  validate: (value, args) => {
    return value === document.querySelector('input[uid="bitark-password"]').value
  }
})

Validator.extend('telphone', {
  getMessage: (field, args) => 'error_code.telephone', // 请输入有效的手机号码
  validate: (value, args) => {
    return /^1(3|4|5|7|8)\d{9}$/.test(value)
  }
})
