<template>
    <div class="z-w">
      <official-header></official-header>
         <!-- <div class="aaa" style="height: 80px;background: pink;"></div> -->
         <div class="contenter z-wen">验证即可挖矿, 轻松赚币</div>
         <div class="contenter z-img"><img src="@/assets/images/official_web/mining.png" alt=""></div>
         <div class="contenter z-wenzi">
           <div>采用分部式验证网络, 链上同状态的身份互相验证即可挖矿, 轻轻松松就赚币</div>
         </div>
         <div class="contenter z-xinxi">
           <p>信息不可读</p>
           <div>用户敏感信息加密保存在密码机的可信存贮区域内, 其在软硬件上都没有密钥读出机制,只可进行签名和验签</div>
         </div>
         <div class="contenter z-xinxi">
           <p>二次验证动态口令</p>
           <div>用户通过获取Tinkey硬件钱包中自动生成的动态口令进行身份的二次认证, 防止黑客通过其他手段盗取身份信息</div>
         </div>
         <div class="contenter z-xinxi">
           <p>隐私数据自主管理</p>
           <div>用户通过获取Tinkey硬件钱包中自动生成的动态口令进行身份的二次认证, 防止黑客通过其他手段盗取身份信息</div>
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
<style scoped>
       /* .aaa{margin: 0;padding: 0;margin-top: -10px;margin-bottom: 156px}     */
       .z-w{background: #fff;}
       .contenter {
         width: 880px;
         margin: 0 auto;
       }
       .z-wen {
         width: 584px;
         height: 35px;
         line-height: 35px;
         margin: 0 auto;
         text-align: center;
         margin-top: 80px;
         margin-bottom: 82px;
         font-size: 26px;
       }
       .z-img {
         width: 403px;
         height: 395px;
         margin: 0 auto;
         margin-bottom: 18px;
         vertical-align:middle;
       }
       .z-wenzi {
         width: 612px;
         height: 18px; 
         text-align: center; 
         margin: 0 auto;
         font-size: 16px;
         color: #ccc;
         margin-bottom: 191px
       }
       .z-xinxi {
         margin: 0 auto;
          margin-bottom: 300px
       }
       .z-xinxi p{
         width: 136px;
         height: 24px;
         line-height: 24px;
         font-size: 16px;
         margin-left: 60px;
       }
       .z-xinxi div{
         width: 874px;
         height: 18px;
         font-size: 16px;
         color: #ccc;
         text-align: center;
       }
       @media only screen and (max-width: 320px) {
         .contenter{width: 100%;}
         .z-wen{font-size: 16px;width: 100%;}
         .z-img{vertical-align:middle;width: 100px;height: 100px;transform:scale(0.8)}
         .z-xinxi div{width: 100%;}
         .z-xinxi p{width: 100%;margin: 0;}
        }
        @media only screen and (max-width: 736px) {
          .contenter{width: 100%;}
          .z-wen{font-size: 20px}
          .z-img{margin: 0 auto; width: 100%; height: 300px;transform: scale(0.66)}
          .z-wenzi{margin-top: 130px;}
           .z-xinxi{margin-bottom: 0; margin-bottom: 300px;}
          .z-xinxi div{width: 100%;margin-top: 20px;text-align-last: left;}
          .z-xinxi p{width: 100%;margin: 0;}
        }
        @media only screen and (max-width: 980px){
           .contenter{width: 100%;}
            .z-xinxi div{width: 100%;}
            .z-img{position: relative; vertical-align:middle; margin: 0 auto; width: 100%; height: 300px;}
            .z-img img{position: absolute;top: 0;left: 50%;transform: translateX(-50%)}
            .z-wenzi{margin-top: 130px;}
             .z-xinxi{margin-bottom: 0; margin-bottom: 300px;}
          .z-xinxi div{width: 100%;margin-top: 20px;}
          .z-xinxi p{text-align: center; width: 100%;margin: 0;}
        }
</style>