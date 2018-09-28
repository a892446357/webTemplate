<template>
    <div class="download">
        <div class="title">
            <span>
                <img src="../assets/images/biglogo.png"/>
            </span>
            <span>
                Download
            </span>
        </div>
        <!--
        <a href="" download="Tinkey 1.0.ipa">
            <span>
                <p><img src="../assets/images/ios@3x.png"/></p>
                <p>ios</p>
            </span>
            <span>Tinkey 1.0</span>
        </a>
        -->
        <a v-if="isWeiXi" @click="clickTip">
            <span>
                <p><img src="../assets/images/android@3x.png"/></p>
                <p>Android</p>
            </span>
            <span>Tinkey 1.0</span>
        </a>
        <a v-if="!isWeiXi" href="/static/tinkey-20180821.apk" download="tinkey-20180821.apk">
            <span>
                <p><img src="../assets/images/android@3x.png"/></p>
                <p>Android</p>
            </span>
            <span>Tinkey 1.0</span>
        </a>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      isWeiXi: /MicroMessenger/i.test(window.navigator.userAgent)
    }
  },
  methods: {
    clickTip () {
      Vue.$confirmDialog({
        showCancel: false,
        content: this.$t('error_code.weixinTip')
      })
    }
  }
}
</script>

<style scoped>
.download{display:flex;align-items:center;justify-content:center;margin-top:50px;flex-direction:column;}
.download .title{display:flex;justify-content:center;align-items:center;}
.download .title span:first-child{margin-right:10px;}
.download .title span:last-child{font-size:36px;}
.download a{
    width:400px;height:50px;line-height:50px;background:#4D7BF3;color:#FFFFFF;
    border-radius:4px;text-align:center;margin-top:50px;display:flex;font-size:18px;
    align-items:center;
}
.download a:first-child{margin-top:100px;}
.download a img{height:18px;width:18px;}
.download a span p{line-height:normal;font-size:11px;}
.download a span:first-child{margin-left:50px;width:70px;margin-right:50px;}
@media only screen and (max-width: 736px) {
  .download a{width:300px;}
  .download .title img{height:30px;}
  .download .title span:last-child{font-size:18px;}
  .download a span:first-child{margin-left:20px;margin-right:30px;}
}
</style>
