<template>
    <div class="shop">
        <div class="left">
            <ul class="list">
                <li class="list-item" v-for="(item, index) in datas" :key="index">
                    <div class="list-item-left">
                        <img v-if="item.productName !== 'Super Tinkey'" src="../../assets/images/tinkey.png"/>
                        <img v-if="item.productName === 'Super Tinkey'" src="../../assets/images/super-tinkey.png"/>
                    </div>
                    <div class="list-item-right">
                        <p class="tinkey-name">{{item.productName}}</p>
                        <p class="present-price"><!--现价-->{{$t('shop.presentPrice')}} : {{item.discountPrice}} ETH</p>
                        <p class="original-price"><!--原价-->{{$t('shop.originalPrice')}} : {{item.originalPrice}} ETH</p>
                        <p class="line"></p>
                        <p class="introduction">{{$t(item.productName === 'Super Tinkey'?'shop.superTinkey':'shop.tinkey')}}</p>
                        <p class="button" @click="addToCart(item)">
                            <!--添加到购物车-->
                            <button>{{$t(item.productName === 'Super Tinkey'?'index.part9.title10':'index.part9.title4')}}</button>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="right">
            <div class="right-tip" v-if="!carts.length"></div>
            <div class="goods-container" v-if="carts.length">
                <ul class="goods-list">
                    <li class="good-item" v-for="(item, index) in carts" :key="index">
                        <div class="good-item-top">
                            <span>{{products[item.productId] && products[item.productId].productName}}</span>
                            <span>{{getTotalPrice(item)}}ETH</span>
                            <span>
                                <em @click="minus(item, index)">-</em>
                                <label>{{item.productQuantity}}</label>
                                <em @click="add(item)">+</em>
                            </span>
                        </div>
                    </li>
                </ul>
                <p class="payTypes">
                  <span>{{$t('cart.Payment_method')}}</span>
                    <span>
                      <select v-model="paytypeId">
                        <option v-for="data in option" :key="data.id" :value="data.paytypeId">{{data.paytypeName}}</option>
                      </select>
                    </span>
                </p>
                <p>
                    <!--国家和地区-->
                    {{$t('cart.countriesAndRegions')}}
                </p>
                <select v-model="costs">
                    <option v-for="(item, index) in countries" :key="index" :value="item.code">
                        {{getLang==='zh'?item.cn:item.en}}
                    </option>
                </select>
                <div class="total">
                    <span><!--邮费-->{{$t('cart.postage')}}:{{this.costData.postage}}ETH</span>
                    <span><!--3天到达-->{{$t('cart.daysToReach').format(this.costData.predictTime)}}</span>
                </div>
                <div class="total">
                    <span><!--合计-->{{$t('cart.total')}}</span>
                    <span class="s24">{{total}}ETH</span>
                </div>
                <div class="line2"></div>
                <button @click="pay">
                    <!--支付-->
                    {{$t('cart.continue')}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import numUtils from '@/assets/js/numberUtils'
import utils from '@/assets/js/utils'
import api from '@/api/api'
import contactUS from '@/pages/contactus'
export default {
  data () {
    return {
      paytypeId: 1,
      option: [],
      datas: [],
      carts: [],
      countries: [],
      costs: 'China',
      costData: {}
    }
  },
  computed: {
    ...mapGetters(['getLang', 'getApiToken']),
    total () {
      let t = 0
      this.carts.forEach((item) => {
        t = numUtils.mul(this.products[item.productId] && this.products[item.productId].discountPrice, item.productQuantity).add(t)
      })
      return numUtils.add(t, this.costData.postage).toFixed(2)
    },
    products () {
      let temp = {}
      this.datas.forEach((item) => {
        temp[item.productId] = item
      })
      return temp
    },
    costsParamsChange () {
      return {
        code: this.costs,
        paytypeId: this.paytypeId
      }
    }
  },
  watch: {
    costsParamsChange () {
      this.costsChange()
    }
  },
  created () {
    api.getProductList((res) => {
      this.datas = res
    }, (msg) => {
      Vue.$koallTipBox({icon: 'notification', message: this.$t(`error_code.${msg}`)})
    })
    api.getCountriesList((res) => {
      this.countries = res
    }, (msg) => {
      Vue.$koallTipBox({icon: 'notification', message: this.$t(`error_code.${msg}`)})
    })
    this.getCartList()
    this.payType()
    this.costsChange()
  },
  methods: {
    costsChange () {
      api.conpostage({
        code: this.costs,
        paytypeId: this.paytypeId
      }, (res) => {
        this.costData = res
      }, (msg) => {
        Vue.$koallTipBox({icon: 'notification', message: this.$t(`error_code.${msg}`)})
      })
    },
    payType () {
      api.conPaytype((res) => {
        this.option = res
      }, (msg) => {
        Vue.$koallTipBox({icon: 'notification', message: this.$t(`error_code.${msg}`)})
      })
    },
    getCartList () {
      if (!this.getApiToken) {
        this.carts = []
        return
      }
      api.getCartsList((res) => {
        this.carts = res
        this.locked = false
      }, () => {
        this.locked = false
      })
    },
    updateCart (cartId, productQuantity) {
      if (!this.getApiToken) {
        return
      }
      api.updateCart({
        cartId: cartId,
        productQuantity: productQuantity
      }, () => {
        this.getCartList()
      }, () => {
        this.locked = false
      })
    },
    pay () {
      api.conOrder({
        paytypeId: this.paytypeId,
        postage: this.costData.postage
      }, (res) => {
        this.$router.push({name: 'shopPay', params: {orderId: res.orderId}})
      }, (msg) => {
        Vue.$koallTipBox({icon: 'notification', message: this.$t(`error_code.${msg}`)})
        if (msg === 'USER_PROFILE_IMPERFECT') {
          this.$router.push({name: 'personalCenter'})
        }
      })
    },
    getTotalPrice (item) {
      return numUtils.mul(this.products[item.productId] && this.products[item.productId].discountPrice, item.productQuantity).toFixed(2)
    },
    add (item) {
      if (this.locked) {
        return
      }
      this.locked = true
      this.updateCart(item.cartId, item.productQuantity + 1)
    },
    minus (item, index) {
      if (this.locked) {
        return
      }
      this.locked = true
      this.updateCart(item.cartId, item.productQuantity - 1)
    },
    addToCart (item) {
      if (item.productName === 'Super Tinkey') {
        utils.setDialog(contactUS)
        return
      }
      if (!this.getApiToken) {
        this.$router.push({name: 'login'})
        return
      }
      if (this.locked) {
        return
      }
      this.locked = true
      let cartItem = null
      for (let i = 0; i < this.carts.length; i++) {
        let d = this.carts[i]
        if (d.productId === item.productId) {
          cartItem = d
          break
        }
      }
      if (cartItem) {
        this.updateCart(cartItem.cartId, cartItem.productQuantity + 1)
      } else {
        api.createCart({
          productId: item.productId,
          productQuantity: 1
        }, () => {
          this.getCartList()
        }, (msg) => {
          this.locked = false
          Vue.$koallTipBox({icon: 'notification', message: this.$t(`error_code.${msg}`)})
        })
      }
    }
  }
}
</script>

<style scoped>
.shop{display:flex;justify-content:space-between;width:1201px;margin:0 auto;padding-top:32px;}

/* 左边列表 begin */
.left{display:flex;}
.list{margin:0 auto;}
.list-item{display:flex;justify-content:space-between;width:695px;min-height:276px;background:#fff;border-radius:12px;box-shadow:1px 0px 20px rgba(211,223,241,0.6);margin-bottom:12px;padding-bottom:30px;}
.list-item-left{width:357px;display:flex;align-items:center;justify-content:center;}
.list-item-left img{width:232px;height:177px;}
.list-item-right{display:flex;width:290px;flex-direction:column;margin-right:30px;}
.list-item-right p{text-align:left;}
.tinkey-name{margin-top:33px;font-size:24px;font-weight:bold;color:#443F54;}
.present-price{font-size:18px;margin-top:10px;color:#443F54;}
.original-price{font-size:14px;margin-top:5px;color:#443F54;}
.line{width:100%;height:2px;background:#D9D9D9;margin:15px 0 25px 0;}
.introduction{font-size:14px;line-height:22px;}
.button{margin-top:32px;}
.button button{width:100%;height:52px;background:#443f54;font-size:24px;color:#fff;cursor: pointer;}
.button button:hover{background:#201c2c;}
/* 左边列表 end */

/* 右边购物车 begin */
.right{display:flex;width:494px;flex-direction:column;}
.right-tip{display:flex;font-size:18px;height:168px;color:#54524F;line-height:30px;background:#fff;justify-content:center;align-items:center;border-radius:12px;box-shadow:1px 0px 20px rgba(211,223,241,0.6);padding-bottom:30px;margin-bottom: 20px;}
.goods-container{display:flex;padding:30px;flex-direction:column;background:#fff;border-radius:12px;box-shadow:1px 0px 20px rgba(211,223,241,0.6);}
.headline{font-size:24px;font-weight:bold;text-align:left;}
.line2{width:100%;height:2px;display:flex;background:#6C6C6C;margin:10px 0 20px 0;}
.goods-list{}
.good-item{margin-bottom:22px;position: relative;}
.good-item::after{content:"";display:flex;width:100%;height:2px;background:#6C6C6C;position:absolute;bottom:-12px;left:0;z-index:9;}
.good-item-top{display:flex;justify-content:space-between;align-items:center;}
.good-item-top span:first-child{font-size:18px;font-weight:bold;}
.good-item-top span:last-child{width:100px;display:flex;}
.good-item-top span em{display:flex;width:34px;height:30px;border:1px solid #54524F;justify-content:center;align-items:center;font-size:28px;cursor: pointer;}
.good-item-top span em:hover{background:#eaeaea;}
.good-item-top span label{display:flex;width:32px;border:1px solid #54524F;border-right:0;border-left:0;align-items:center;justify-content:center;font-size:16px;}
.good-item-bottom{display:flex;margin-top:15px;}
.good-item-bottom textarea{width:100%;height:71px;border:1px solid #ccc;resize:none;padding:6px;font-size:14px;}
.goods-container > p{font-size:18px;font-weight:bold;text-align:left;margin-bottom:21px;}
.goods-container > p.m{margin-top:21px;}
.goods-container > select{display:flex;border:1px solid #ccc;height:40px;padding-left:10px;}
.goods-container > .total{display:flex;justify-content:space-between;margin-top:18px;align-items:center;}
.goods-container > .total span{font-size:18px;font-weight:bold;}
.goods-container > .total span.s24{font-size:24px;}
.goods-container > button{width:100%;height:52px;background:#443f54;color:#fff;font-size:24px;font-weight:bold;cursor: pointer;}
.goods-container button:hover{background:#201c2c;}
/* 右边购物车 end */

p.payTypes select{width: 100%;height: 40px;border: 1px solid #ccc;margin-top: 10px;}

@media only screen and (max-width: 1020px) {
  .shop{width: auto;display: block}
  .list-item{width: auto;display: block;margin:10px 20px 20px 20px;}
  .list-item-left{width: auto;}
  .list-item-right{width: auto;margin: 0 auto;text-align: center;margin-left: 20px;margin-right: 20px;}
  .list-item-left img{margin-top: 20px;}
  .right{width: auto;}
  .right .right-tip{margin:0 20px;}
}
</style>
