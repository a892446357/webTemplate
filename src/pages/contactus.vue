<template>
  <div class="contact-us">
    <div class="title">{{$t('index.part9.title10')}}</div>
    <div class="content">support@tinkey.io</div>
    <button class="button" @click="closeDialog">OK</button>
  </div>
</template>

<script>
export default {
  methods: {
    closeDialog () {
      this.$emit('removeDialog')
    }
  }
}
</script>

<style scoped>
.contact-us{display:flex;flex-direction:column;justify-content:center;width:554px;height:306px;background:rgba(255,255,255,1);border-radius:12px;box-shadow:1px 0px 20px rgba(211,223,241,0.6);}
.title{font-size:24px;font-family:PingFang-SC-Regular;color:rgba(50,43,43,1);margin-left:39px;}
.content{font-size:24px;font-family:PingFang-SC-Regular;color:rgba(50,43,43,1);line-height:0px;margin-top:49px;text-align:center;}
.button{width:146px;height:52px;background:#443f54;margin:62px auto 0 auto;font-size:24px;font-family:PingFang-SC-Regular;color:rgba(255,255,255,1);line-height:0px;cursor: pointer;}
.button:hover{background:#201c2c;}
</style>
