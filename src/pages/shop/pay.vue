<template>
  <div class="shop-pay">
      <div class="pay-container">
          <div class="left">
              <p class="title">
                  <!--需要支付-->
                  {{$t('shopPay.needToPay')}}
              </p>
              <p class="price">{{orderDetail.totalPrice || '--'}} ETH</p>
              <p class="title m-p-39">
                  <!--地址-->
                  {{$t('shopPay.paymentAddress')}}
              </p>
              <p class="address">
                  <span>{{this.address||'--'}}</span>
                  <span>
                      <a @click="copyAddress()">
                        <!--复制-->
                        {{$t('common.copy')}}
                      </a>
                  </span>
              </p>
              <p class="memo">
                {{$t('common.memo')}}: {{getMemo}}
              </p>
              <p class="pay-introduction">
                <!--介绍-->
                {{$t('shopPay.intro1')}}<br/>
                {{$t('shopPay.intro2')}}
              </p>
          </div>
          <div class="right">
              <div class="qrcode-container">
                  <div class="qrcode" ref="qrcode"></div>
              </div>
          </div>
      </div>
      <div class="button">
          <!--我已经付款了-->
          <button @click="paiddone()">{{$t('shopPay.paid')}}</button>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import api from '@/api/api'
import utils from '@/assets/js/utils'
const copyText = (str) => {
  var save = function (e) {
    e.clipboardData.setData('text/plain', str)
    e.preventDefault()
  }
  document.addEventListener('copy', save)
  document.execCommand('copy')
  document.removeEventListener('copy', save)
}
export default {
  data () {
    return {
      remark: '',
      orderDetail: {},
      payments: []
    }
  },
  computed: {
    ...mapGetters(['getApiToken']),
    address () {
      for (let i = 0; i < this.payments.length; i++) {
        let d = this.payments[i]
        if (Number(d.paytypeId) === Number(this.orderDetail.paytypeId)) {
          return d.paytypeAddress
        }
      }
      return ''
    },
    getMemo () {
      if (this.orderDetail && this.orderDetail.orderId) {
        return this.orderDetail.orderId.substring(this.orderDetail.orderId.length - 6)
      } else {
        return null
      }
    }
  },
  watch: {
    address (val) {
      this.$nextTick(() => {
        utils.qrcode(this.$refs.qrcode, {
          text: val,
          width: 260,
          height: 260
        })
      })
    }
  },
  created () {
    api.conPaytype((res) => {
      this.payments = res
    }, (msg) => {
      Vue.$koallTipBox({icon: 'notification', message: this.$t(`error_code.${msg}`)})
    })
    api.getOrderDetail({
      orderId: this.$route.params.orderId
    }, (res) => {
      this.orderDetail = res
    })
  },
  methods: {
    copyAddress () {
      Vue.$koallTipBox({icon: 'success', message: this.$t('invitationActivities.copy')}) // 复制成功
      copyText(this.address)
    },
    paiddone () {
      api.paid({
        orderId: this.$route.params.orderId,
        remark: this.remark
      }, (res) => {
        Vue.$confirmDialog({id: 'shopPay_tip', showCancel: false, content: this.$t('shopPay.intro3')})
        this.$router.push({name: 'myTinkey'})
      }, (msg) => {
        Vue.$koallTipBox({icon: 'notification', message: this.$t(`error_code.${msg}`)})
      })
    }
  }
}
</script>

<style scoped>
.shop-pay{width:884px;padding:62px;min-height:514px;display:flex;flex-direction:column;background:#fff;margin:32px auto;border-radius:12px;box-shadow:1px 0px 20px rgba(211,223,241,0.6);}
.pay-container{width:100%;display:flex;justify-content:space-between;}
.left{display:flex;flex-direction:column;width:506px;}
.left > p{display:flex;}
.title{font-size:30px;color:#54524F;font-weight:bold;}
.price{font-size:30px;color:#54524F;margin-top:10px;}
.m-p-39{margin-top:20px;}
.address{margin-top:10px;display:flex;align-items:center;justify-content:space-between;}
.address > span:first-child{font-size:18px;font-weight:bold;color:#54524F;}
.address > span:last-child a{font-size:24px;font-weight:bold;color:#4979F4;border-bottom:1px solid #4979F4;padding-bottom:2px;cursor:pointer;}
.memo{font-size:24px;font-family:PingFang-SC-Bold;font-size:#54524F;}
.remark{display:flex;margin-top:16px;}
.remark textarea{display:flex;flex:1;height:151px;border:1px solid #CCCCCC;resize:none;padding:6px;}
.right{display:flex;}
.qrcode-container{width:344px;height:344px;background-color:#F7F8FC;display:flex;align-items:center;justify-content:center;}
.qrcode{display:flex;width:260px;height:260px;padding:10px;background:#fff;}
.pay-introduction{display:flex;font-size:18px;color:#54524F;margin-top:15px;text-align:left;line-height:26px;padding:20px 10px;background:#E9E8ED;}
.button{margin-top:40px;display:flex;align-items:center;justify-content:center;}
.button button{width:441px;height:52px;background:#443f54;color:#fff;font-size:24px;font-weight:bold;cursor:pointer;}
.button button:hover{background:#201c2c;}
@media screen and (max-width: 1030px) {
  .shop-pay{width:calc(100% - 80px);padding:30px;}
}
@media screen and (max-width: 950px) {
  .shop-pay{width:calc(100% - 80px);padding:30px;}
  .pay-container{flex-direction:column;justify-content:center;align-items:center;}
  .left{width:100%;}
  .left > p{justify-content:center;}
  .address{flex-direction:column;}
  .address > span:first-child{word-break:break-all;text-align:center;}
  .right{width:100%;}
  .qrcode-container{margin-top:20px;}
  .qrcode-container{width:100%;height:300px;}
}
</style>
