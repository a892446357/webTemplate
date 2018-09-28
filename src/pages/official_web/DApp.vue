<template>
    <div>
        <official-header></official-header>
      <div class="z-DApp">
          <div class="dapp-w dapp-contenter">
              <h3>DApp--探索区块链世界的入口</h3>
              <p class="let">完善的Dapp运行环境, 区块链世界触手可及。</p>
              <div class="dapp-right">
                 <span></span> 
                  <p>身份系统</p>
                  <p>便捷的U盾式硬件钱包、快速的身份认证器</p>
                  <p>便捷的U盾式硬件钱包、快速的身份认证器</p>
              </div>
          </div>
          <div class="dapp-text">
             <div class="dapp-center">
                        <div class="left">
                            <div class="l-left">
                                <p>身份系统</p>
                                <p>便捷的U盾式硬件钱包、快速的身份认证器</p>
                                <p>便捷的U盾式硬件钱包、快速的身份认证器</p>
                            </div>
                            <div class="l-left">
                                <p>如何让你的DApp上线?</p>
                                <p class="let-build">联系我们, 获取帮助</p>
                            </div>
                        </div>
                        <div class="right">
                                <a href="#">查看文档</a>
                                <router-link :to="{name:'contact-us'}">联系我们</router-link>
                        </div>
             </div>
          </div>
          <div class="dapp-buttom">
              <h3>第三方合作DApps</h3>
              <p>Maker</p>
              <p>联系我们, 获取帮助联系我们, 获取帮助</p>
              <p>联系我们, 获取帮助联系我们</p>
              <p>联系我们, 获取帮助</p>
              <div class="dapp-logo">
                  <span><</span>
                  <span><img src="@/assets/images/official_web/leaves.png" alt=""></span>
                  <span><img src="@/assets/images/official_web/bitark.png" alt=""></span>
                  <span><img src="@/assets/images/official_web/galaxyl.png" alt=""></span>
                  <sup>K.O.ALL</sup>
                  <span><img src="@/assets/images/official_web/wbf.png" alt=""></span>
                  <span><img src="@/assets/images/official_web/xunhu2.png" alt=""></span>
                  <span>></span>
              </div>
          </div>
      </div>
      <official-footer></official-footer>
    </div>
</template>
           
<script>
import officialHeader from './header.vue'
import officialFooter from './footer.vue'
export default{
           components:{
			officialHeader,
			officialFooter
		}  
}
</script>
<style scoped>
     body{
         background: #ffffff;
     }
      .z-DApp {
        width:100%;
        /* height:300px; */
        margin: 0 auto;
        background: #ffffff;
        /* box-sizing: border-box; */
      }
      .dapp-contenter {
          width: 511px;
          margin: 0 auto;
      }
      .dapp-w {
          height: 312px;
          margin: 0 auto;
          padding-top: 188px;
          margin-bottom: 502px;
      }      
      .dapp-w h3{
           width:511px;
            height:39px;
            font-size:28px;
            color:rgba(28,46,54,1);
            line-height:39px;
            text-align: center;
            
      }
      .dapp-w .let{
          width: 455px;
          height: 23px;
          font-size: 17px;
          line-height: 23px;
          color:rgba(28,46,54,1);
          margin-top: 13px;
          margin-left: 10px;
          text-align: center;
      }
      .dapp-w .dapp-right span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid #ccc;
          background: rgba(9,141,230,1);
          position: absolute;
          margin-left: -30px;
          margin-top: -13px;
          color:rgba(9,141,230,1);
          top: 35.8%;
      }
      .dapp-right {
          margin-top: 59px;
          margin-left: 105px;
          position: relative;
      }
      .dapp-right p {
          font-size: 12px;
          color: #ccc;
      }
      .dapp-right p:nth-of-type(1) {
          font-size: 17px;
          color:rgba(28,46,54,1);
      }
      .dapp-text {
          width: 100%;
          height: 300px;
          display: flex;
          margin-bottom: 220px;
      }
      .dapp-text .dapp-center {
          margin: 0 auto;
          width: 800px;
          box-sizing: border-box;
      }
      .dapp-text .left {
          float: left;
      }
      .dapp-text .left .l-left {
          height: 100%;
          margin-bottom: 98px;
      }
      .dapp-text .left .l-left .let-build {color: #000;font-size: 14px;}
      .dapp-text .left .l-left p:nth-of-type(1){
          color:rgba(9,141,230,1);
          font-size: 16px;
          margin-bottom: 30px;
      }
      .dapp-text .left .l-left p{
          color: #ccc;
          font-size: 12px;
      }
      .dapp-text .right {
          height: 100%;
          float: right;
          margin: 0 auto;
      }
       .dapp-text .right a{
           display: block;
           width: 156px;
           height: 30px;
           border: 1px solid #687bf3;
           text-align: center;
           line-height: 30px;
           background: #687bf3;
           border-radius: 5px;
           margin-bottom: 140px;
           margin-top: 22px;
           margin-right: 20px;
           color: #fff;
       }
       .dapp-buttom {
           padding-top: 144px;
           text-align: center;
           background: #fafbfc;
       }
       .dapp-buttom h3 {
           font-size: 28px;
       }
       .dapp-buttom p {
           font-size: 12px;
           color: #ccc;
       }
       .dapp-buttom p:nth-of-type(1) {
           margin-top: 39px;
           margin-bottom: 29px;
       }
       .dapp-logo {
           height: 47px;
           margin-top: 90px;
           /* margin-bottom: 52px; */
           padding-bottom: 52px;
       }
       .dapp-logo sup {
           margin-left: 41px;
           width: 35px;
           height: 37px;
           font-size: 25px;
           font-weight:bold;
       }
       .dapp-logo span:nth-of-type(1) {
           font-size: 28px;
           color: #ccc;
           
       }
       .dapp-logo span:nth-of-type(8) {
           font-size: 28px;
           color: #ccc;
           margin-left: 41px;
       }
       .dapp-logo span img{
           width: 35px;
           height: 35px;
           margin-left: 41px;
       }
      
      @media only screen and (max-width: 319px) {
          .dapp-contenter{width: 100%;}
          .dapp-w{margin: 0; margin-left: -81px;margin-top: -80px;}
          .dapp-w h3{margin: 0; width: 100%; font-size:18px;text-align: center;margin: 0 auto;margin-left: 93px;margin-bottom: 35px;}
          .dapp-w .let{font-size:12px;margin-left: 94px;}
          .dapp-right{font-size: 12px;margin-left: 140px;}
          .dapp-text{width: 100%;margin-left: -30px;}
         .dapp-text .left .l-left{margin: 0; margin-bottom: 50px;margin-left: 65px;}
          .dapp-text .right a{margin-bottom: 50px;margin-right: 50px;}
          .dapp-buttom{padding-bottom: 20px;}
          .dapp-buttom h3{font-size: 18px; } 
          .dapp-logo{position: relative;}
           .dapp-logo span:nth-of-type(1){font-size: 20px;margin-left: -7px;position: absolute;top: 8px;}
           .dapp-logo span:nth-of-type(8){font-size: 20px;margin-left: 0;position: absolute;top: 8px;}
           .dapp-logo sup{font-size: 16px;margin-left: 0px;}
          .dapp-logo span img{transform: scale(0.6);margin-left: 0px;}
          
        }
        @media only screen and (min-width: 320px) and (max-width: 736px) {
            .dapp-contenter{width: 100%;}
            .dapp-w h3{width: 100%; font-size:18px;text-align: center;margin: 0 auto;}
            .dapp-w .let{width: 100%; font-size:12px;margin: 0 auto;text-align: center;}
            .dapp-right{ margin: 0 auto; font-size: 12px;position: absolute;top: 64%;left: 32%;}
            .dapp-center{position: relative;}
            .dapp-text .left{position: absolute;top: 20px;left: 50%;transform: translate(-50%)}
            .dapp-w{position: relative;}
            .dapp-w{margin-bottom: 50px;}
            .dapp-text{width: 100%;}
            .dapp-text .left .l-left{margin: 0; margin-bottom: 50px;}
            .dapp-center{position: relative;}
            .dapp-text .right{position: absolute;top: 139%;left: 50%;transform: translate(-50%,-50%)}
            .dapp-text .right a{margin-bottom: 50px;margin-right: 75px;margin-left: 20px;}
            .dapp-logo{position: relative;}
            .dapp-logo span:nth-of-type(1){font-size: 20px;margin-left: -7px;position: absolute;top: 8px;}
           .dapp-logo span:nth-of-type(8){font-size: 20px;margin-left: 0;position: absolute;top: 8px;}
           .dapp-logo sup{font-size: 16px;margin-left: 0px;margin-top: 5px;}
          .dapp-logo span img{transform: scale(0.6);margin-left: 0px;}
        }
        @media only screen and (min-width: 736px) and (max-width: 980px){
            .dapp-text .dapp-center {margin: 0 auto; width: 800px;  box-sizing: border-box;}
            .dapp-text .left{margin-left: 80px;};
            .dapp-text .right{margin-right: 80px;};
        }
</style>  
