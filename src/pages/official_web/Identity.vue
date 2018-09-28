<template>
    <div class="z-w">
      <official-header></official-header>
         <div class="contenter z-wen">{{$t('officialIdentity.It1')}}</div>
         <div class="contenter z-img"><img src="@/assets/images/official_web/id.png" alt=""></div>
         <div class="contenter z-wenzi">
           <div>{{$t('officialIdentity.It2')}}</div>
           <div>{{$t('officialIdentity.It3')}}</div>
         </div>
         <div class="contenter z-xinxi">
           <p>{{$t('officialIdentity.It4')}}</p>
           <div class="let">{{$t('officialIdentity.It5')}}</div>
         </div>
         <div class="contenter z-xinxi">
           <p>{{$t('officialIdentity.It6')}}</p>
           <div>{{$t('officialIdentity.It7')}}</div>
         </div>
         <div class="contenter z-xinxi">
           <p>{{$t('officialIdentity.It8')}}</p>
           <div>{{$t('officialIdentity.It9')}}</div>
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
         margin-bottom: 82px;
         font-size: 26px;
         margin-top: 80px;
       }
       .z-img {
         width: 343px;
         height: 344px;
         margin: 0 auto;
         margin-bottom: 34px
       }
       .z-wenzi {
         width: 403px;
         height: 50px; 
         text-align: center; 
         margin: 0 auto;
         font-size: 12px;
         color: #ccc;
         margin-bottom: 191px
       }
       .z-xinxi {
         margin: 0 auto;
         margin-bottom: 157px
       }
       .z-xinxi p{
         /* width: 136px; */
         height: 24px;
         line-height: 24px;
         font-size: 16px;
         margin-left: 50px;
       }
       .z-xinxi div{
         width: 874px;
         height: 18px;
         font-size: 16px;
         color: #ccc;
         text-align: center;
         /* margin-left: 58px; */
         margin-bottom: 300px;
       }
       .z-xinxi .let{margin-left: -13px;}
       @media only screen and (max-width: 320px) {
         .contenter{width: 100%;}
         .z-wen{font-size: 16px;width: 100%;}
         .z-img{ width: 100px;height: 100px;transform:scale(0.8)}
         .z-xinxi{margin-bottom: 0; margin-bottom: 300px;}
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
             .z-xinxi{width: 100%; margin-bottom: 0; margin-bottom: 300px;}
          .z-xinxi div{width: 100%;margin-top: 20px;}
          .z-xinxi p{ width: 100%;margin: 0 auto;text-align: center;}
        }
        @media only screen and (min-width: 980px) and (max-width: 1200px){
          .z-xinxi p{ width: 100%;margin: 0 auto;text-align: center;}
          .z-xinxi div{}
           
          }
</style>