<template>
    <div class="login">
        <div class="login-img">
            <img src="../assets/images/biglogo.png" />
            <p>
                {{$t('common.login')}}
            </p>
        </div>
        <div class="from">
            <div class="number name">
                <!--电话号码-->
                <input type="text"  autofocus="autofocus" v-validate="'required'" data-vv-name="username" v-model="formData.username" :placeholder="`${$t('common.email')}/${$t('common.phoneNumber')}`" @keyup.enter="login"/>
                <em class="error" v-if="errors.has('username')">{{$t('error_code.emailOrPhoneRequired')}}</em>
            </div>
            <div class="number password">
                <!--密码-->
                <input type="password" v-validate="'required'" data-vv-name="password" v-model="formData.password" :placeholder="$t('common.password')" @keyup.enter="login"/>
                <em class="error" v-if="errors.has('password')">{{$t('validate.password')}}</em>
            </div>
            <div class="forget">
                <!-- <a href="javascript:;"> -->
                  <router-link :to="{name: 'updatapwd'}">
                    {{$t('login.forgotPassword')}}<!--忘记密码-->
                  </router-link>
                <!-- </a> -->
            </div>
            <div class="number btn-login" @click="login">
              <!--登录-->
              {{$t('common.login')}}
            </div>
            <div class="number btn-register" @click="register">
                <!--注册账户-->
                {{$t('common.registe')}}
            </div>
        </div>
        <div class="copy">©2018-2019  TINKEY 1.10 All right reserved</div>
    </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import utils from '@/assets/js/utils'
import api from '@/api/api'
export default {
  data () {
    return {
      locked: false,
      formData: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters(['getApiToken'])
  },
  created () {
    if (this.getApiToken) {
      this.$router.push({name: 'index'})
    }
  },
  methods: {
    ...mapActions(['setApiToken', 'setUserInfo']),
    login (successCallback) {
      if (this.locked) {
        return
      }
      this.$validator.validateAll().then((valid) => {
        if (!valid) {
          return
        }
        utils.gtValidate((gtParams) => {
          this.locked = true
          let formData = {}
          for (let i in this.formData) {
            formData[i] = this.formData[i]
          }
          formData.password = utils.encryptPwd(formData.password)
          for (let i in gtParams) {
            formData[i] = gtParams[i]
          }
          api.login(formData, (res) => {
            this.locked = false
            this.setApiToken(res.Authorization)
            this.$router.push({name: 'index'})
          }, (msg) => {
            this.locked = false
            Vue.$koallTipBox({icon: 'notification', message: this.$t(`error_code.${msg}`)})
          })
        })
      })
    },
    register () {
      this.$router.push({name: 'register'})
    }
  }
}
</script>

<style scoped>
.login{overflow: hidden}
.login-img{margin-top: 104px;text-align:center;}
.login-img p{line-height: 36px;margin-bottom: 60px;color: #5f606a;}
.from{width: 388px;margin:0 auto;}
.number{position: relative;}
.error{position:absolute;color:#ff0000;left:0px;top:84px;}
.number input{height: 50px;border:1px solid #bfbfbf;width:calc(100% - 10px);margin-top: 30px}
.name input, .password input{text-indent: 15px;}
.forget{text-align: right;font-size: 14px;color: #88829b;line-height: 36px;text-decoration: underline;}
.forget a{color:#88829B;}
.btn-login{height: 50px;line-height: 50px; background: #443f54;color: #fff;margin-top: 20px; text-align: center;cursor: pointer}
.btn-register{height: 50px;line-height: 50px;border:1px solid #bfbfbf;margin-top: 30px; color: #5f606a;text-align: center;cursor: pointer}
.copy{text-align: center;color: #a3a3a3;margin-top: 192px;}

@media only screen and (min-width: 320px) and (max-width: 736px) {
  .from {width: auto;margin: 0 auto;margin-left: 5px;margin-right: 5px;}
  .btn-login{width: auto;margin: 0 auto;}
}
</style>
