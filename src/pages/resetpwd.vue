<template>
  <div class="container">
    <div class="resetpwd-title">
      <img src="../assets/images/danlogo.png" />重置密码</div>
    <div class="resetpwd-cont">
      <input id="bitark-password" v-validate="'required|password'" type="password" name="password" :msgs="msgs.password" :errs="errors" v-model="formData.password" title="新密码"/>
      <input v-validate="'required|passwordAgain'" type="password" name="passwordAgain" :msgs="msgs.passwordAgain" :errs="errors" v-model="formData.passwordConfirm" title="旧密码"/>
      <div class="comfig"  @click="resetPwd">确定</div>
      <!-- <inputbox id="bitark-password" v-validate="'required|password'" type="password" name="password" :msgs="msgs.password" :errs="errors" v-model="formData.password" :title="$t('account.user_center_new_password')"/>
      <inputbox v-validate="'required|passwordAgain'" type="password" name="passwordAgain" :msgs="msgs.passwordAgain" :errs="errors" v-model="formData.passwordConfirm" :title="$t('account.user_center_confirm_password')"/>
      <buttonbox :text="$t('exchange.exchange_determine')" @click="resetPwd"/> -->
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import userApi from '@/api/user'
import utils from '@/assets/js/utils'
export default {
  data () {
    return {
      locked: false,
      formData: {
        resetCode: utils.getUrlHashParams().code,
        password: '',
        passwordConfirm: ''
      }
    }
  },
  computed: {
    msgs () {
      return {
        password: {required: '请输入新密码'}, // 请输入新密码
        passwordAgain: {required: '请再次输入新密码'} // 请输入新密码
      }
    }
  },
  methods: {
    resetPwd () {
      this.$validator.validateAll().then((validResult) => {
        if (!validResult) {
          return
        }
        if (this.locked) {
          return
        }
        this.locked = true
        let formData = {}
        for (let i in this.formData) {
          formData[i] = this.formData[i]
        }
        formData.password = utils.encryptPwd(formData.password)
        formData.passwordConfirm = utils.encryptPwd(formData.passwordConfirm)
        userApi.updatePwdByEmail(formData, () => {
          Vue.$koallTipBox({icon: 'success', message: '操作成功'}) // 操作成功
          setTimeout(() => {
            this.$router.push({name: 'login'})
          }, 1500)
        }, (msg) => {
          this.locked = false
          Vue.$koallTipBox({icon: 'notification', message: this.$t(`error_code.${typeof msg === 'string' ? msg : msg[0]}`)})
          setTimeout(() => {
            this.$router.push({name: 'findpwd'})
          }, 1500)
        })
      })
    }
  }
}
</script>

<style scoped>
.container{width: 388px;margin-left: auto;margin-right: auto;padding-top: 10px;}
.resetpwd-title{height: 24px;line-height: 24px;color: #2c3e50;text-indent: 8px;margin-top: 100px;font-size: 20px;text-align: center;}
.resetpwd-title img{vertical-align: top;margin-right: 20px;}
.resetpwd-cont{display: flex;flex-flow: column;align-items: center;justify-content: center;height: 320px;}
.resetpwd-cont /deep/ .button{margin-top: 12px;}
.resetpwd-cont input{height: 50px;margin-bottom: 20px;border: 1px solid #bfbfbf;width: 98%;text-indent: 15px;}
.comfig{height: 50px;line-height: 50px;background: #443f54;color: #fff;margin-top: 20px;text-align: center;cursor: pointer;width: 100%;}
</style>
