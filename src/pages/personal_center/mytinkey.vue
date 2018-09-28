<template>
    <div class="mytinkey">
        <div class="person-data">
            <div class="data">
                <span >{{$t('personalCenter.myTinkey')}}</span>
                <span class="title" @click="buyTinkey">{{$t('myTinkey.buyTinkey')}}</span>
            </div>
            <div class="tinkey-info">{{$t('myTinkey.tinkeyInfo')}}</div>
            <ul>
                <li>
                    <span>{{$t('myTinkey.number')}}</span>
                    <span class="center">{{$t('myTinkey.tinkeyID')}}</span>
                    <span class="center">{{$t('myTinkey.cloudBackup')}}</span>
                </li>
                <li v-for="(item, index) in tinkeyList" :key="index">
                    <span>{{item.tinkeyNumber}}</span>
                    <span class="center">{{item.tinkeyId}}</span>
                    <span class="center">{{$t(Number(item.cloudBackup)===1?'myTinkey.yes':'myTinkey.no')}}</span>
                </li>
            </ul>
            <page v-if="this.tinkeyList.length > 0" :pageIndex="tinkeyParams.page" :pageSize="tinkeyParams.show" :total="tinkeyParams.total" @changePageIndex="tinkeyPageChange"/>
        </div>
        <div class="person-data person-bottom">
            <div class="record">{{$t('myTinkey.orders')}}</div>
        </div>
        <div class="record-list" v-for="(item, index) in orderList" :key="index">
            <div class="time">
                <span>{{$t('myTinkey.creationTime')}}:  {{item.createdAt}}</span>
                <span>{{$t('myTinkey.state')}}: {{getState(item.state)}}</span>
                <span>{{$t('myTinkey.trackingNumber')}}：{{item.expressNumber}}</span>
            </div>
            <ul>
                <li>
                    <span>{{$t('myTinkey.goods')}}</span>
                    <span>{{$t('myTinkey.quantity')}}</span>
                    <span>{{$t('myTinkey.amount')}}</span>
                    <span>{{$t('myTinkey.tinkeyID')}}</span>
                </li>
                <li v-for="(data, index2) in item.orderDetailList" :key="index2">
                    <span>{{data.productName}}</span>
                    <span>{{data.productQuantity}}</span>
                    <span>{{data.totalPrice}}ETH</span>
                    <span>{{data.tinkeyId}}</span>
                </li>
            </ul>
            <div class="contct">
                <span>{{$t('myTinkey.name')}}：{{item.receiverName}}</span>
                <span>{{$t('common.phoneNumber')}}：{{item.receiverPhone}}</span>
                <span v-if="Number(item.state) === 3">
                  <button class="contct-btn" @click="orderAccept(item)">订单验收</button>
                </span>
            </div>
            <div class="contct">{{$t('myTinkey.detailedAddress')}}：{{item.receiverAddress}}</div>
        </div>
        <page v-if="this.orderList.length > 0" :pageIndex="params.page" :pageSize="params.show" :total="params.total" @changePageIndex="pageChange"/>
    </div>
</template>
<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import api from '@/api/api'
import page from '../../components/page'
export default {
  data () {
    return {
      tinkeyList: [],
      orderList: [],
      tinkeyParams: {
        page: 1,
        show: 5,
        total: 0
      },
      params: {
        page: 1,
        show: 5,
        total: 0
      }
    }
  },
  components: {
    page
  },
  computed: {
    ...mapGetters(['getApiToken']),
    paramsChange () {
      return {
        direction: 2,
        page: this.params.page,
        pageSize: this.params.show
      }
    }
  },
  created () {
    this.getMyTinkeyList()
    this.getMyOrderList()
  },
  methods: {
    getMyTinkeyList () {
      if (!this.getApiToken) {
        this.tinkeyList = []
        return
      }
      api.getMyTinkeyList(this.tinkeyParams.page, this.tinkeyParams.show, (res, res1) => {
        this.tinkeyList = res
        this.tinkeyParams.total = res1.total
      })
    },
    tinkeyPageChange (currentIndex) {
      this.tinkeyParams.page = currentIndex
      this.getMyTinkeyList()
    },
    getMyOrderList () {
      if (!this.getApiToken) {
        this.orderList = []
        return
      }
      api.getMyOrderList(this.params.page, this.params.show, {}, (res, total) => {
        this.params.total = total.total
        this.orderList = res
      })
    },
    pageChange (currentIndex) {
      this.params.page = currentIndex
      this.getMyOrderList()
    },
    orderAccept (item) {
      api.orderAccept(item.orderId, (res) => {
        this.getMyTinkeyList()
        this.getMyOrderList()
        Vue.$koallTipBox({icon: 'success', message: this.$t(`error_code.ORDER_ACCEPT_SUCC`)})
      }, (msg) => {
        Vue.$koallTipBox({icon: 'notification', message: this.$t(`error_code.${msg}`)})
      })
    },
    buyTinkey () {
      this.$router.push({name: 'shopIndex'})
    },
    getState (state) {
      state = Number(state)
      switch (state) {
        case 1:
          return this.$t('myTinkey.unpaid') // 待确认
        case 2:
          return this.$t('myTinkey.paidAndUnshipped') // 已付款未发货
        case 3:
          return this.$t('myTinkey.shipped') // 已发货
        case 4:
          return this.$t('myTinkey.delivered') // 已验收
        case 5:
          return this.$t('myTinkey.returned') // 已退回
        default:
          return '--'
      }
    }
  }
}
</script>
<style scoped>
.mytinkey{width:calc(100% - 210px);margin-top: 50px;margin-left: 32px;text-align: left;}
.person-data{border-top: 1px dashed #bfbfbf;}
.person-data .data{display: flex;justify-content: space-between;margin-top: 70px;align-items:center;}
.person-data .data span{font-size:24px;font-family:PingFang-SC-Heavy;color:#575757;text-decoration: none;}
.person-data .data span.title{color: #fff;cursor: pointer; display: inline-block;height: 33px;line-height: 33px;background: #443f54;text-align: center; font-size:18px;font-family:PingFang-SC-Bold;padding:0 10px;}
.person-data .data span.title:hover{background:#201c2c;}
.person-data{border-top: 1px dashed #bfbfbf;}
.tinkey-info{font-size: 18px;color: #333;margin-top: 50px;}
.person-data ul{display:flex;flex-direction:column;}
.person-data ul li{flex:1;display: flex;justify-content: space-between;text-align: center;line-height: 40px;}
.person-data ul li span{flex:1;display:flex;}
.person-data ul li span.center{justify-content:center;}
.person-data ul li span.right{justify-content:flex-end;}
.person-bottom{margin-top: 30px;}
.record{font-size: 18px;color: #333333;margin-top: 30px;margin-bottom: 15px;}
.record-list{background: #dedfe2;padding: 10px 15px;margin-bottom:10px;}
.record-list .time{display: flex;justify-content: space-between;line-height: 25px;color: #6c6c6c;}
.record-list ul{width:100%;max-width: 650px;}
.record-list ul li{display: flex;justify-content: space-between;line-height: 35px;color: #6c6c6c;}
.record-list ul li span{display:flex;flex:1;}
.contct{color: #6c6c6c;font-size: 16px;line-height: 30px;margin-top: 10px;display:flex;flex-flow:wrap;}
.contct span{margin-right: 30px}
.contct-btn{color:#fff;cursor:pointer;min-width:70px;height:33px;line-height:33px;background:#443f54;font-size:18px;font-family:PingFang-SC-Bold;padding:0 10px;}
.contct-btn:hover{background:#201c2c;}
@media only screen and (max-width: 700px) {
    .mytinkey,.person-data .data,.tinkey-info{margin-top:20px;}
    .person-bottom{margin-top:0px;}
    .record-list .time{flex-flow:wrap;}
}
</style>
