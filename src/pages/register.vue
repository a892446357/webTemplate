<template>
    <div class="register">
        <div class="register-img">
            <img src="../assets/images/danlogo.png" />
            <span>
                <!--注册-->
                {{$t('common.registe')}}
            </span>
        </div>
        <div class="from">
            <div class="number select-tabs">
              <label>
                <input v-model="formData.registerType" type="radio" value="0"/>
                {{$t('common.phoneNumber')}}
              </label>
              <label>
                <input v-model="formData.registerType" type="radio" value="1"/>
                {{$t('common.email')}}
              </label>
            </div>
            <template v-if="formData.registerType!==1">
            <div class="number name">
                <select v-model="formData.phoneNumberType">
                  <option value="1">China+86</option>
                </select>
                <!--电话号码-->
                <input type="text"  autofocus="autofocus" v-validate="'required|telphone'" data-vv-name="phoneNumber" v-model="formData.phoneNumber" :placeholder="$t('common.phoneNumber')"/>
                <em class="error" v-if="errors.has('phoneNumber')">
                    <template v-if="errors.firstRule('phoneNumber')==='required'">{{$t('validate.phone')}}</template>
                    <template v-if="errors.firstRule('phoneNumber')==='telphone'">{{$t(errors.first('phoneNumber'))}}</template>
                </em>
            </div>
            <div class="number password">
                <!--验证码-->
                <input type="text" v-validate="'required'" data-vv-name="smsCode"  v-model="formData.smsCode" :placeholder="$t('register.verificationCode')"/>
                <span class="sendCode" @click="send()" :class="{disabled:btnDisabled}">{{$t('register.sendSMS')}}<template v-if="disabled">({{time}}s)</template></span>
                <em class="error" v-if="errors.has('smsCode')">{{$t('validate.smsCode')}}</em>
            </div>
            </template>
            <div class="number password" v-if="formData.registerType===1">
                <!--Email-->
                <input type="text" v-validate="'required|email'" data-vv-name="email" v-model="formData.email" :placeholder="$t('common.email')"/>
                <em class="error" v-if="errors.has('email')">
                    <template v-if="errors.firstRule('email')==='required'">{{$t('error_code.emailRequired')}}</template>
                    <template v-if="errors.firstRule('email')==='email'">{{$t(errors.first('email'))}}</template>
                </em>
            </div>
            <div class="number password">
                <!--密码-->
                <input type="password" uid="bitark-password" v-validate="'required|password'" data-vv-name="password" v-model="formData.password" :placeholder="$t('common.password')"/>
                <em class="error" v-if="errors.has('password')">
                    <template v-if="errors.firstRule('password')==='required'">{{$t('validate.password')}}</template>
                    <template v-if="errors.firstRule('password')==='password'">{{$t(errors.first('password'))}}</template>
                </em>
            </div>
            <div class="number password">
                <!--重复密码-->
                 <input type="password"  v-validate="'required|confirmPassword'" data-vv-name="confirmPassword" v-model="formData.confirmPassword" :placeholder="$t('register.confirmPassword')"/>
                <em class="error" v-if="errors.has('confirmPassword')">
                    <template v-if="errors.firstRule('confirmPassword')==='required'">{{$t('validate.password')}}</template>
                    <template v-if="errors.firstRule('confirmPassword')==='confirmPassword'">{{$t(errors.first('confirmPassword'))}}</template>
                </em>
            </div>
            <div class="number password">
                <!--邀请码（可选）-->
                <input type="text" v-model="formData.invitedCode"  :placeholder="$t('register.inviteCode')"/>
            </div>
            <div class="agree">
                <span :class="[checked?'icon-checkbox-checked':'icon-checkbox-unchecked']" @click="checked=!checked"></span>
                <!--注册意味着你同意我们的服务条款。-->
                {{$t('register.registration')}}
            </div>
             <div class="number btn-login" @click="register">
                <!--注册-->
                {{$t('common.registe')}}
            </div>
            <div class="number btn-register" @click="login">
                <!--登录-->
                {{$t('common.login')}}
            </div>
            <div class="copy">©2018-2019  TINKEY 1.10 All right reserved</div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { mapActions } from 'vuex'
import userApi from '../api/user'
import utils from '@/assets/js/utils'
export default {
  data () {
    return {
      formData: {
        registerType: 0,
        email: '',
        phoneNumberType: 1,
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        invitedCode: '',
        smsCode: ''
      },
      time: 60,
      checked: false,
      disabled: false,
      invitatedCode: ''
    }
  },
  computed: {
    btnDisabled () {
      if (this.formData.phoneNumber === '') {
        return true
      } else if (this.errors.has('phoneNumber')) {
        return true
      } else {
        return this.disabled
      }
    }
  },
  watch: {
    'formData.registerType' (val) {
      this.formData.registerType = Number(val)
    }
  },
  created () {
    this.formData.invitedCode = utils.getUrlHashParams().invitedCode
  },
  methods: {
    ...mapActions(['setUserInfo', 'setApiToken']),
    register () {
      let formData = {}
      for (let i in this.formData) {
        formData[i] = this.formData[i]
      }
      if (formData.registerType === 1) {
        delete formData.phoneNumber
        delete formData.phoneNumberType
        delete formData.smsCode
      } else {
        delete formData.email
      }
      this.$validator.validateAll(formData).then((validResult) => {
        if (!validResult) {
          return
        }
        if (!this.checked) {
          Vue.$koallTipBox({icon: 'notification', message: this.$t('register.server')})
          return
        }
        formData.password = utils.encryptPwd(formData.password)
        formData.confirmPassword = utils.encryptPwd(formData.confirmPassword)
        userApi.registerUser(formData, (apiToken) => {
          this.setApiToken(apiToken)
          Vue.$koallTipBox({icon: 'success', message: this.$t('register.registration_success')})
          if (utils.isMobile && this.formData.invitedCode) {
            this.$router.push({name: 'download'})
            return
          }
          this.$router.push({name: 'login'})
        }, (msg) => {
          Vue.$koallTipBox({icon: 'notification', message: this.$t(`error_code.${msg}`)})
        })
      })
    },
    send () {
      if (this.btnDisabled) {
        return
      }
      if (this.formData.phoneNumber === '') {
        Vue.$koallTipBox({icon: 'notification', message: this.$t('register.first')})
        return
      }
      this.disabled = true
      userApi.sendSmsUser({
        phoneNumber: this.formData.phoneNumber,
        phoneNumberType: this.formData.phoneNumberType
      }, (res) => {
        let timeOut = () => {
          if (this.time === 0) {
            this.disabled = false
            this.time = 60
            return
          }
          this.time--
          setTimeout(timeOut, 1000)
        }
        setTimeout(timeOut, 1000)
        Vue.$koallTipBox({icon: 'success', message: this.$t('register.codeSuccess')})
      }, (msg) => {
        this.disabled = false
        Vue.$koallTipBox({icon: 'notification', message: msg})
      })
    },
    login () {
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style scoped>
input,select{vertical-align:middle;}
.register{overflow: hidden;}
.from{width: 388px;margin: 0 auto;}
.register-img{margin-top: 120px;margin-bottom: 10px;text-align:center;}
.register-img img{vertical-align: bottom;}
.register-img span{font-size: 20px;margin-left: 20px;}
.name{font-size: 0;margin-top: 30px;}
select{height: 52px;border:1px solid #bfbfbf;}
.name input.phone{height: 50px;border:1px solid #bfbfbf;text-indent: 15px;width: 292px;border-left: transparent}
.number{margin-top: 30px;display:flex;align-items:center;justify-content:center;position: relative;}
.number input{height: 50px;border:1px solid #bfbfbf;width: 98%;text-indent: 15px;}
.number.select-tabs{justify-content:flex-start;margin-bottom:-15px;}
.number.select-tabs input{width:18px;height:18px;margin:0;}
.number.select-tabs label{vertical-align:middle;margin-right:20px;color:#999;font-size:14px;cursor:pointer;}
.btn-login{height: 50px;line-height: 50px; background: #443f54;color: #fff;margin-top: 20px; text-align: center;cursor: pointer}
.btn-register{height: 50px;line-height: 50px;border:1px solid #bfbfbf;margin-top: 30px; color: #5f606a;text-align: center;cursor: pointer}
.agree{font-size:13px;color:#88829b;margin-top: 30px;line-height: 28px;}
.copy{text-align: center;color: #a3a3a3;margin-top: 60px;}
.error{position:absolute;color:#ff0000;left:0px;top:60px;font-size: 13px;}
.sendCode{position: absolute;right: 9px;color: #333;cursor:pointer;height: 22px;line-height: 22px;top: calc(50% - 11px);}
span.disabled{cursor: not-allowed;color: #bfbfbf;}
@media only screen and (min-width: 320px) and (max-width: 736px) {
  .from {width: auto;margin: 0 auto;margin-left: 5px;margin-right: 5px;}
  /* .btn-login{width: auto;margin: 0 auto;} */
}
</style>
