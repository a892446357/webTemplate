<template>
    <div class="myproflie">
        <div class="person-data">
            <div class="data">{{$t('personalCenter.myProfile')}}</div>
            <p>
                <span>{{$t('myProfile.basic')}}</span>
                <i>
                  <a class="btn modify" v-if="!show" @click="switch_tabs()">{{$t('common.modify')}}</a>
                  <span class="btn cancel" v-if="show" @click="show=false">{{$t('common.cancel')}}</span>
                  <span class="btn" v-if="show" @click="updateUserInfo">{{$t('common.save')}}</span>
                </i>
            </p>
            <template v-if="!show">
                <div class="contct">{{$t('myProfile.account')}}：{{getUserInfo.username}}</div>
                <div class="contct" v-if="registerType===0">{{$t('myProfile.email')}}：{{userInfo.email}}</div>
                <div class="contct">{{$t('myProfile.ethAddress')}}：{{userInfo.ethAddress}}</div>
            </template>
            <div class="save" v-if="show">
                <template v-if="registerType===0">
                <div>
                    <input type="text" v-model="userInfo.email" :placeholder="$t('myProfile.email')" v-validate="'required|email'" data-vv-name="email"/>
                    <em class="error" v-if="errors.has('email')">
                      <template v-if="errors.firstRule('email')==='required'">
                        <!--请输入邮箱地址-->
                        {{$t('error_code.emailRequired')}}
                      </template>
                      <template v-if="errors.firstRule('email')==='email'">{{$t(errors.first('email'))}}</template>
                    </em>
                </div>
                <div class="save-notice">
                  {{$t('myProfile.intro1')}}
                </div>
                </template>
                 <div>
                    <input type="text" v-model="userInfo.ethAddress" :placeholder="$t('myProfile.ethAddress')" v-validate="'required'" data-vv-name="ethAddress"/>
                    <em class="error" v-if="errors.has('ethAddress')">
                      <!--请输入ETH地址-->
                      {{$t('error_code.ethAddressRequired')}}
                    </em>
                </div>
                <div class="save-notice">
                  {{$t('myProfile.intro2')}}
                </div>
            </div>
        </div>
        <div class="person-data person-data-save">
            <p>
                <span>{{$t('myProfile.shippingAddress')}}</span>
                <i>
                  <a class="btn modify" v-if="!showAddress" @click="switch_tabs1">{{$t('common.modify')}}</a>
                  <span class="btn cancel" v-if="showAddress" @click="showAddress=false">{{$t('common.cancel')}}</span>
                  <span class="btn" v-if="showAddress" @click="saveAddress">{{$t('common.save')}}</span>
                </i>
            </p>
        </div>
        <div class="person-data-save" v-if="!showAddress">
            <div class="contct">{{$t('myProfile.name')}}：{{formData.userRealName}}</div>
            <div class="contct">{{$t('common.phoneNumber')}}：{{formData.contactPhone}}</div>
            <div class="contct">{{$t('myProfile.countriesAndRegions')}}：{{countryName}} </div>
            <div class="contct">{{$t('myProfile.postcode')}}：{{formData.postCode}}</div>
            <div class="contct">
                {{$t('myProfile.detailedAddress')}}：
                {{formData.province}} {{formData.city}} {{formData.town}} {{formData.street}}
            </div>
        </div>
        <div class="save" v-if="showAddress">
            <div>
                <input type="text" v-model="formData.userRealName" :placeholder="$t('myProfile.name')" v-validate="'required'" data-vv-name="userRealName"/>
                <em class="error" v-if="errors.has('userRealName')">
                  <!--请输入真实姓名-->
                  {{$t('error_code.nameRequired')}}
                </em>
            </div>
            <div>
                <input type="text" v-model="formData.postCode" :placeholder="$t('myProfile.postcode')" v-validate="'required'" data-vv-name="postCode"/>
                <em class="error" v-if="errors.has('postCode')">
                  <!--请输入邮编-->
                  {{$t('error_code.postcodeRequired')}}
                </em>
            </div>
            <div>
                <input type="text" v-model="formData.contactPhone" :placeholder="$t('common.phoneNumber')" v-validate="'required|telphone'" data-vv-name="contactPhone"/>
                <em class="error" v-if="errors.has('contactPhone')">
                  <template v-if="errors.firstRule('contactPhone')==='required'">
                    <!--请输入手机号-->
                    {{$t('error_code.phoneRequired')}}
                  </template>
                  <template v-if="errors.firstRule('contactPhone')==='telphone'">{{$t(errors.first('contactPhone'))}}</template>
                </em>
            </div>
            <div>
                <select v-model="formData.country">
                  <option v-for="(item, index) in countries" :key="index" :value="item.countryId">
                    {{getLang==='zh'?item.cn:item.en}}
                  </option>
                </select>
            </div>
            <div>
                <input type="text" v-model="formData.province" :placeholder="$t('myProfile.province')" v-validate="'required'" data-vv-name="province"/>
                <em class="error" v-if="errors.has('province')">
                  <!--请输入省份-->
                  {{$t('error_code.provinceRequired')}}
                </em>
            </div>
            <div>
                <input type="text" v-model="formData.city" :placeholder="$t('myProfile.city')" v-validate="'required'" data-vv-name="city"/>
                <em class="error" v-if="errors.has('city')">
                  <!--请输入城市-->
                  {{$t('error_code.cityRequired')}}
                </em>
            </div>
            <div>
                <input type="text" v-model="formData.town" :placeholder="$t('myProfile.town')" v-validate="'required'" data-vv-name="town"/>
                <em class="error" v-if="errors.has('town')">
                  <!--请输入区县-->
                  {{$t('error_code.townRequired')}}
                </em>
            </div>
            <div>
                <input type="text" v-model="formData.street" :placeholder="$t('myProfile.detailedAddress')" v-validate="'required'" data-vv-name="street"/>
                <em class="error" v-if="errors.has('street')">
                  <!--请输入详细地址-->
                  {{$t('error_code.streetRequired')}}
                </em>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import api from '@/api/api'
export default {
  data () {
    return {
      countries: [],
      registerType: null,
      userInfo: {
        email: '',
        ethAddress: ''
      },
      formData: {
        userAddressId: '',
        userRealName: '',
        postCode: '',
        contactPhone: '',
        country: '1',
        province: '',
        city: '',
        town: '',
        street: '',
        isDefault: 1
      },
      show: false,
      showAddress: false,
      userInfoLock: false,
      addressLock: false
    }
  },
  computed: {
    ...mapGetters(['getUserInfo', 'getLang']),
    countryName () {
      for (let i = 0; i < this.countries.length; i++) {
        let d = this.countries[i]
        if (d.countryId === this.formData.country && this.formData.userAddressId !== '') {
          return this.getLang === 'zh' ? d.cn : d.en
        }
      }
      return ''
    }
  },
  watch: {
    show (bool) {
      if (!bool) {
        this.getMyUserInfo()
      }
    },
    showAddress (bool) {
      if (!bool) {
        this.getAddress()
      }
    }
  },
  created () {
    api.getCountriesList((res) => {
      this.countries = res
    })
    this.getMyUserInfo()
    this.getAddress()
  },
  methods: {
    getMyUserInfo () {
      api.getUserInfo((res) => {
        this.registerType = Number(res.registerType)
        if (this.registerType === 0) {
          this.userInfo.email = res.email
        } else {
          delete this.userInfo.email
        }
        this.userInfo.ethAddress = res.ethAddress
      })
    },
    updateUserInfo () {
      this.$validator.validateAll(this.userInfo).then((valid) => {
        if (!valid) {
          return
        }
        this.userInfoLock = true
        api.updateUserInfo(this.userInfo, () => {
          Vue.$koallTipBox({icon: 'success', message: this.$t('error_code.SUCCESS')})
          this.show = false
          this.userInfoLock = false
        }, (msg) => {
          this.userInfoLock = false
          Vue.$koallTipBox({icon: 'notification', message: this.$t(`error_code.${msg}`)})
        })
      })
    },
    getAddress () {
      api.getMyAddress({
        userId: this.getUserInfo.userId
      }, (res) => {
        if (!res) {
          return
        }
        for (var i in this.formData) {
          this.formData[i] = res[i]
        }
      }, () => {
        this.formData.userAddressId = ''
        this.formData.userRealName = ''
        this.formData.postCode = ''
        this.formData.contactPhone = ''
        this.formData.country = '1'
        this.formData.province = ''
        this.formData.city = ''
        this.formData.town = ''
        this.formData.street = ''
      })
    },
    saveAddress () {
      this.$validator.validateAll(this.formData).then((valid) => {
        if (!valid) {
          return
        }
        this.addressLock = true
        if (this.formData.userAddressId) {
          api.updateMyAddress(this.formData, (res) => {
            Vue.$koallTipBox({icon: 'success', message: this.$t('error_code.SUCCESS')})
            this.showAddress = false
            this.addressLock = false
          }, (msg) => {
            this.addressLock = false
            Vue.$koallTipBox({icon: 'notification', message: this.$t(`error_code.${msg}`)})
          })
          return
        }
        api.createMyAddress(this.formData, (res) => {
          Vue.$koallTipBox({icon: 'success', message: this.$t('error_code.SUCCESS')})
          this.showAddress = false
          this.addressLock = false
        }, (msg) => {
          this.addressLock = false
          Vue.$koallTipBox({icon: 'notification', message: this.$t(`error_code.${msg}`)})
        })
      })
    },
    switch_tabs () {
      this.show = !this.show
    },
    switch_tabs1 () {
      this.showAddress = !this.showAddress
    }
  }
}
</script>

<style scoped>
.myproflie{width:calc(100% - 210px);margin-top: 50px;margin-left: 32px;text-align: left;}
.person-data .data{font-size:24px;font-family:PingFang-SC-Heavy;color:rgba(87,87,87,1);margin-top: 70px;}
.person-data{border-top: 1px dashed #bfbfbf;}
.person-data p{display: flex;justify-content: space-between;margin-top: 60px;align-items:center;}
.person-data p span{font-size:18px;font-family:PingFang-SC-Bold;color:rgba(51,51,51,1);}
.person-data p i{float:right;white-space:nowrap;}
.person-data p i span.btn{display: inline-block;width: 90px;height: 33px;line-height:33px;background: #443f54;text-align: center;cursor: pointer; color: #fff;}
.person-data p i span.btn:hover{background:#201c2c;}
.person-data p i span.btn.cancel{background:#fff;border:1px solid #443f54;height:31px;line-height:31px;color:#443f54;margin-right:10px;}
.person-data p i span.btn.cancel:hover{border-color:#201c2c;color:#201c2c;}
.person-data p i a.btn{display: inline-block;width: 90px;height: 33px;line-height: 33px;color:#443f54;text-decoration:underline;text-align:center;cursor: pointer;}
.contct{font-size: 16px;color: #6c6c6c;line-height:22px;margin-bottom:10px;}
.save{margin-bottom: 50px;}
.save input,.save select{width:calc(100% - 20px);max-width:630px;height:38px;line-height: 38px;border: 1px solid #b1b2b4;margin-top: 26px;}
.save select{width:calc(100% - 10px);max-width:640px;}
.save > div{position: relative;}
.save > div > em.error{position: absolute;top:66px;left:0;color:#ff0000;z-index:1;}
.person-data-save{margin-top:35px;}
.save-notice{padding:8px;color:#151515;background:#E9E8ED;width:calc(100% - 26px);max-width:624px;margin-top:8px;}
@media only screen and (max-width: 700px) {
    .myproflie,.person-data .data,.person-data p,.person-data-save{margin-top:20px;}
}
</style>
