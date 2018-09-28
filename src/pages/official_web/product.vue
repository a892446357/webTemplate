<template>
    <div class="z-w">
        <official-header></official-header>
      <div class="z-wen">
          <div class="z-h">{{$t('officialProduct.pt1')}}</div>
          <div>{{$t('officialProduct.pt2')}}</div>
          <div>
              <router-link :to="{name:'AppDownLoad'}">{{$t('officialProduct.pt3')}}</router-link>
          </div>
      </div>
      <div class="z-max">
          <div class="max-h">{{$t('officialProduct.pt4a')}}</div>
          <div class="max-text">
              <h4>{{$t('officialProduct.pt4b')}}</h4>
              <div>
                <P>{{$t('officialProduct.pt4c')}}</P>
                <p>{{$t('officialProduct.pt4d')}}</p>
              </div>
          </div>
          <div class="max-text">
              <h4>{{$t('officialProduct.pt5a')}}</h4>
              <div>
                <P>{{$t('officialProduct.pt5b')}}</P>
                <p>{{$t('officialProduct.pt5c')}}</p>
              </div>
          </div>
          <div class="max-text">
              <h4>DAPP</h4>
              <div>
                <P>AI操盘手提供多种资源, 盯盘,</P>
                <p>操盘, 帮您节省时间, 挣币</p>
              </div>
          </div>
          <div class="max-text">
              <h4>DAPP</h4>
              <div>
                <P>AI操盘手提供多种资源, 盯盘,</P>
                <p>操盘, 帮您节省时间, 挣币</p>
              </div>
          </div>
      </div>
      <div class="z-buttom">
          <div class="z-bt">我们打造的DApps</div>
          <div class="buttom-piece">
              <div class="buttom-d">
                    <!-- <span></span> -->
                    <div class="o-buttom">
                        <h4>ENS Pro</h4>
                        <div>
                            <P>AI操盘手提供多种资源, 盯盘,</P>
                            <p>操盘, 帮您节省时间, 挣币</p>
                        </div>
                        <a href="#">更多详情></a>
                    </div>
              </div>
              <div class="buttom-d">
                <!-- <span></span> -->
                    <div class="o-buttom">
                            <h4>ENS Pro</h4>
                            <div>
                                <P>AI操盘手提供多种资源, 盯盘,</P>
                                <p>操盘, 帮您节省时间, 挣币</p>
                            </div>
                            <a href="#">更多详情></a>
                        </div>
              </div>
                <div class="buttom-d">
                    <!-- <span></span> -->
                        <div class="o-buttom">
                                <h4>ENS Pro</h4>
                                <div>
                                    <P>AI操盘手提供多种资源, 盯盘,</P>
                                    <p>操盘, 帮您节省时间, 挣币</p>
                                </div>
                                <a href="#">更多详情></a>
                        </div>
                </div>
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
<style scoped>
       .z-w{background: #fff;}
       .z-wen {
           /* margin-top: 168px; */
           width: 553px;
           height: 225px;
           margin: 168px auto 0;
       }   
       .z-h {
           width: 553px;
           height: 58px;
           line-height: 58px;
           text-align: center;
           font-size: 36px;
           margin: 0 auto;
           margin-bottom: 50px;
       }  
       .z-wen div:nth-of-type(2){
           width: 421px;
           height: 22px;
           margin: 0 auto;
           text-align: center;
           line-height: 22px;
           font-size: 15px;
           margin-bottom: 51px;
       }
       .z-wen div:nth-of-type(3) {
           width: 125px;
           height: 30px;
           line-height: 30px;
           border-radius: 5px;
           text-align: center;
           margin: 0 auto;
           border: 1px solid #687bf3;
           background: #687bf3;
           color: #fff;
       }
       .z-wen div:nth-of-type(3) a{
           display: block;
           width: 100%;
           height: 100%;
           line-height: 30px;
           border-radius: 5px;
           text-align: center;
           border: 1px solid #687bf3;
           background: #687bf3;
           color: #fff;
       }
       .z-max {
           margin-top: 177px;
           width: 100%;
           height: 600px;
           margin-bottom: 200px;
       }
       .z-max .max-h {
           width: 264px;
           height: 39px;
           font-size: 24px;
           text-align: center;
           line-height: 39px;
           margin: 0 auto;
           margin-bottom: 139px;
           color:rgba(17,41,59,1);
       }
       .max-text {
           margin-top: 55px;
           text-align: center;

       }
       .max-text div{
           margin-top: 16px;
           height: 40px;
           color: #ccc;
       }
       .max-text div p:nth-of-type(2) {
           margin-left: -27px;
       }
       .z-buttom {
           width: 100%;
           height: 500px;
           background:linear-gradient(to right,#6F95FC 55%,#5E50E4 100%);
           overflow: hidden;
           margin-bottom: 300px;
       }
       .z-buttom .z-bt{
           color: #fff;
           text-align: center;
           margin: 0 auto;
           font-size: 24px;
           margin-top: 94px;
       }
      .z-buttom .buttom-piece{
          width: 1023px;
          height: 190px;
          margin: 83px auto 0;
      }
      .z-buttom .buttom-piece .buttom-d{
          width: 303px;
          height: 190px;
          border: 1px solid #fff;
          background: #fff;
          border-radius: 5px;
          float: left;
          box-sizing: border-box;
          position: relative;
          margin-right: 38px;
      }
      /* .z-buttom .buttom-piece div:nth-of-type(2) {
          margin-left: 38px;
      }
      .z-buttom .buttom-piece div:nth-of-type(3) {
          margin-left: 38px;
      } */
      .z-buttom .buttom-piece div span{
          width: 77px;
          height: 77px;
          border-radius: 50%;
          border: 1px solid #4ecce2;
          background: #4ecce2;
      }
      .z-buttom .buttom-piece div:nth-of-type(1) span{
          position: absolute;
          left: 50%;
          top: 0;
          transform: translate(-50%,-50%);
      }
      .z-buttom .buttom-piece div:nth-of-type(2) span{
          position: absolute;
          left: 50%;
          top: 0;
          transform: translate(-50%,-50%);
      }
      .z-buttom .buttom-piece div:nth-of-type(3) span{
          position: absolute;
          left: 50%;
          top: 0;
          transform: translate(-50%,-50%);
      }
      .z-buttom  .o-buttom {
          text-align: center;
          margin-top: 42px;
          width: 100%;
          height: 115px;
      }
       .z-buttom .o-buttom h4 {
           margin-bottom: 18px;
           font-size:16px;
           color:rgba(17,41,59,1);
           color:rgba(17,41,59,1);
           height:15px;
       }
       .z-buttom .o-buttom div{
           font-size:14px;
           color:rgba(125,134,155,1);
           line-height:24px;
       }
       .z-buttom .o-buttom a {
           font-size:14px;
           color:rgba(9,141,230,1);
           line-height:26px;
           height:14px;
       }
         @media only screen and (max-width: 319px) {
             .z-wen{width: 100%;margin-left: 10px;}
              .z-h{width: 100%; font-size: 18px;text-align-last: left;margin-left: 66px;}
              .z-wen div:nth-of-type(2){width: 100%; font-size: 12px;text-align-last: left;margin-left: 66px;}
              .z-buttom{display: flex;position: relative;height: 900px;}
              .z-buttom .z-bt{margin-top: -10px;font-size: 12px;position: absolute;top: 10px;left: 50%;transform: translate(-50%)}
              .z-buttom .buttom-d{margin-top: 30px;margin: 0 auto;}
              .z-buttom .buttom-piece{width: 100%;margin-left: 20px;}
               .z-buttom .buttom-piece div:nth-of-type(2){margin: 0;margin-top: 50px;}
               .z-buttom .buttom-piece div:nth-of-type(3){margin: 0;margin-top: 50px;}
        }
        @media only screen and (min-width: 320px) and (max-width: 736px) {
             .z-wen{width: 100%;}
             .z-h{width: 100%; font-size: 20px;}
             .z-wen div:nth-of-type(2) {width: 100%;font-size: 12px;}
             .z-buttom .z-bt{margin-top: 10;font-size: 18px;}
             .z-buttom{height: 980px;width: 100%;}
             .z-buttom .buttom-piece{margin: 0; width: 100%;position: relative;}
             .z-buttom .buttom-d{margin: 0; margin-top: 50px;position: absolute;top: 0;left: 50%;transform: translate(-50%)}
             /* .z-buttom .buttom-piece div:nth-of-type(1){margin-top: 50px;margin-right: 20px;}
             .z-buttom .buttom-piece div:nth-of-type(2){margin: 0 auto;margin-top: 50px;margin-right: 20px;}
             .z-buttom .buttom-piece div:nth-of-type(3){margin: 0;margin-top: 50px;} */
        }
        @media only screen and (max-width: 980px){
            .z-buttom{margin: 0; height: 100%;width: 100%;padding-bottom: 80px;}
        }
</style>