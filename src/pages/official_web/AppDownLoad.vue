<template>
    <div class="z-w download-wrap contianer-fluid">
        <official-header></official-header>
       <div class="tinkey-wrap">
            <div class="tinkey-download container">
                <p class="download-title">{{$t('officialAppDownLoad.at1')}}<span>{{$t('officialAppDownLoad.at2')}}</span></p>
            </div>
       </div>
        <div class="code-wrap contianer-fluid">
            <div class="download-code contianer">
            <p>{{$t('officialAppDownLoad.at3')}}</p>
            <img src="@/assets/images/official_web/download.png" alt="">
            <router-link :to="{name:'download'}">{{$t('officialAppDownLoad.at4')}}</router-link>
            <p>{{$t('officialAppDownLoad.at5')}}</p>
        </div>
        </div> 
        <official-footer></official-footer>
    </div>
</template>
<script>
	import officialHeader from './header.vue'
	import officialFooter from './footer.vue'
	export default {
		components:{
			officialHeader,
			officialFooter
		}
	}
</script>
<style lang="less" scoped>
.z-w{background: #fff;}
.container {
  height: 1000px;
  margin: 0 auto;
}
.tinkey-wrap {
    // margin-top: -25px;
    background-color: #FAFBFC;
}
.tinkey-download {
  height: 232px;
  margin-left: 50%;
  transform: translate(-50%);
  overflow: hidden;
  p {
    text-align: center;
    font-size: 26px;
    margin-top:92px;
    span {
        margin-left: 10px;
    }
  }
}
.code-wrap {
    height: 1000px;
}
.download-code {
    text-align: center;
    overflow: hidden;
    p:nth-of-type(1) {
        margin-top:64px;
        font-size: 14px;
    };
    img {
        display: block;
        margin:0 auto;
        margin-top:20px;
        margin-bottom: 26px;
    }
    a {
        width: 240px;
        line-height: 42px;
        background-color: #687BF3;
        display: block;
        text-align: center;
        text-decoration: none;
        margin:0 auto;
        border-radius: 5px;
        color:#fff;
    }
     p:nth-of-type(2) {
        margin-top:24px;
        font-size: 14px;
    }
}
  @media only screen and (max-width: 320px) {
        .download-title{font-size: 18px;}
        .download-code img{width: 100px;height: 100px;}
        .download-code a{width: 100px;line-height: 36px;}
        }
        @media only screen and (max-width: 736px) {
            .download-code img{width: 130px;height: 130px;}
            .download-code a{width: 120px;line-height: 38px;}
        }
        @media only screen and (max-width: 980px){
            
        }
</style>

