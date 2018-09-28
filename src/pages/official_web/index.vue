<template>
	<div>
		<official-header></official-header>
		<section class="section1">
			<div class="main clearfix">
				<div class="left">
					<div class="tit animated bounce">{{$t('officialIndex.slogn')}}</div>
					<div class="desWrap">						
						<p class="des animated lightSpeedIn">{{$t('officialIndex.slogndes1')}}</p>
						<p class="des animated lightSpeedIn">{{$t('officialIndex.slogndes2')}}</p>
					</div>
					<!--<router-link :to="{}" class="btn knowMore animated zoomIn">{{$t('officialIndex.know')}} ></router-link>-->
					<router-link :to="{name:'AppDownLoad'}" class="btn download animated zoomIn">{{$t('officialIndex.download')}}</router-link>
				</div>
				<div class="right">
					<img src="../../assets/images/app.png" class="app fadeInDown animated"/>
				</div>
			</div>
		</section>
		
		<section class="section2">
			<div class="main mainflex column-reverse">
				<div>
					<img src="../../assets/images/official-s2.png" alt="">
				</div>
				<div>
					<div class="title">{{$t('officialIndex.s2tit')}}</div>
					<p class="desc">{{$t('officialIndex.s2des')}}</p>
					<router-link :to="{name:'official-wallet'}" class="more">{{$t('officialIndex.more')}} ></router-link>
				</div>
			</div>
		</section>
		
		<section class="section3">
			<div class="main mainflex">
				<div>
					<div class="title">{{$t('officialIndex.s3tit')}}</div>
					<p class="desc">{{$t('officialIndex.s3des')}}</p>
					<router-link :to="{name:'Identity'}" class="more">{{$t('officialIndex.more')}} ></router-link>
				</div>
				<div>
					<img src="../../assets/images/official-s3.png" />
				</div>
			</div>
		</section>
		
		<section class="section4">
			<div class="main mainflex column-reverse">
				<div>
					<img src="../../assets/images/official-s4.png" alt="">
				</div>
				<div>
					<div class="title">{{$t('officialIndex.s4tit')}}</div>
					<p class="desc">{{$t('officialIndex.s4des')}}</p>
					<router-link :to="{name:'DApp'}" class="more">{{$t('officialIndex.more')}} ></router-link>
				</div>
			</div>
		</section>
				
		<section class="section5">
			<div class="main mainflex">
				<div>
					<div class="title">{{$t('officialIndex.s5tit')}}</div>
					<p class="desc">{{$t('officialIndex.s5des')}}</p>
					<router-link :to="{name:'Mining'}" class="more">{{$t('officialIndex.more')}} ></router-link>
				</div>
				<div>
					<img src="../../assets/images/official-s5.png" />
				</div>
			</div>
		</section>
						
		<section class="friends">
			<div class="main">
				<div class="title">{{$t('officialIndex.friends')}}</div>
				<div class="list">
					<div>
						<div class="item">
							<div>
								<img src="../../assets/images/logos/bitark.png" alt="">
							</div>
							<p>BITARK</p>
						</div>
						<div class="item">
							<div>
								<img src="../../assets/images/logos/wbf.png" alt="">
							</div>
							<p>WBF</p>
						</div>
					</div>
					<div>
						<div class="item">
							<div>
								<img src="../../assets/images/logos/koall.png" alt="">
							</div>
							<p>KOALL</p>
						</div>
						<div class="item">
							<div>
								<img src="../../assets/images/logos/galaxyblockcapital.png" alt="">
							</div>
							<p>GALAXY BLOCK CAPITAL</p>
						</div>
					</div>
					<div>
						<div class="item">
							<div>
								<img src="../../assets/images/logos/xunhu.png" alt="">
							</div>
							<p>XUNHU</p>
						</div>
						<div class="item">
							<div>
								<img src="../../assets/images/logos/flzb.png" alt="">
							</div>
							<p>{{$t('officialIndex.flzb')}}</p>
						</div>
					</div>
				</div>
			</div>
		</section>			
		
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
	section{
		background: #fff;
		.title{
			color: #11293B;
			font-size: 36px;			
		}
		.desc{
			margin-top: 25px;
			font-size: 16px;
			line-height: 26px;
		}
		.more{
			color: #2672FB;
			margin-top: 25px;			
			display: block;
		}
	}
	.section1{
		height: 599px;
		overflow: hidden;
	}
	section .main{
		max-width: 1200px;margin: 0 auto;
		&.mainflex{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 400px;
		}
	}
	.section2{
		background: #FAFBFC;		
		.mainflex{						
			>div:nth-of-type(2){
				margin-left: 96px;
				.desc{
					width: 337px;
				}
			}
		}
	}
	.section3,.section5{
		.mainflex{			
			>div:nth-of-type(1){				
				.desc{
					width: 310px;
				}
			}
			>div:nth-of-type(2){
				margin-left: 96px;
			}
		}
	}
	.section4{
		background: #FAFBFC;		
		.mainflex{			
			>div:nth-of-type(2){
				margin-left: 134px;
			}
		}
	}

	.left{
		float: left;
		.tit{
			margin-top: 168px;
			font-size: 60px;
			line-height: 50px;
			color: #1C2E36;
			max-width: 660px;
		}
		.desWrap{
			margin-top: 50px;
			max-width: 730px;
			p{
				color: #999FA9;
				font-size: 22px;
				line-height: 30px;
				&:nth-of-type(1){
					animation-delay: 0.3s;
				}
				&:nth-of-type(2){
					animation-delay: 0.5s;
				}
			}
		}
		.btn{
			width:206px;
			height:44px;
			background:rgba(104,123,243,1);
			border-radius:5px;
			box-shadow:0px 5px 17px 0px rgba(1,2,2,0.04);
			display: block;
			font-size: 18px;
			text-align: center;
			line-height: 44px;
			letter-spacing: 2px;
		}
		.knowMore{			
			margin-top: 40px;
			animation-delay: 0.5s;
		}
		.download{
			margin-top: 34px;
			animation-delay: 0.8s;
		}
	}
	.right{
		float:right;
		.app{
			display: block;
			margin-top: 115px;
		}
	}
	
	.friends{
		height:394px;
		background:linear-gradient(32deg,rgba(111,149,252,1),rgba(94,80,228,1));
		.main{
			max-width: 1200px;
			margin: 0 auto;
			overflow:hidden;
			.title{
				color: #FAFBFC;
				font-size: 48px;
				line-height: 48px;
				text-align: center;
				margin-top: 52px;
			}
			.list{
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				margin-top: 24px;
				>div .item{
					margin-bottom: 38px;
					>div{
						height: 69px;
						line-height: 69px;
						text-align: center;
						img{
							vertical-align: bottom;
						}						
					}
					p{
						color: #FEFDFD;
						font-size: 16px;
						line-height: 16px;
						text-align: center;
						margin-top: 12px;
					}
				}
			}
		}
	}
	
	@media only screen and (max-width:1200px) and (min-width:800px) {
		.left{
			width: 45%;
			padding-left: 20px;
			.tit{
				font-size: 28px;
			}
			.desWrap{
				p{
					font-size: 16px;
				}
			}
		}
		.right{
			width: 45%;
			padding-right: 20px;
			img{
				width: 90%;
			}
		}
		.main.mainflex{
			padding: 0 20px;
			img{width: 80%;}
			.title{
				font-size: 20px;
			}
			.desc{
				font-size: 14px;
			}
		}
		
	 	
	}
	
	@media only screen and (max-width: 800px){ 
		.left{
			width: 100%;
			.tit{
				margin-top: 10px;
				font-size: 16px;
				padding-left: 15px;
			}
			.desWrap{
				margin-top: 25px;
				p{
					font-size: 14px;
					padding-left: 15px;
				}
			}
			.knowMore{margin: 0 auto;margin-top: 40px;}
			.download{margin-left: auto;margin-right: auto;}
		}
		 
		.right{
			width: 100%;
			.app{
				margin-top: 25px;
				width: 40%;
				margin-left: auto;
				margin-right: auto;
				position: relative;
				left: -5px;
			}
		}
		 
		section .main.mainflex{
			height: auto;
			overflow: hidden;
		    flex-direction: column;					
			>div{text-align: center;}			
			img{width: 40%;margin-top: 10px;}
			>div:nth-of-type(2){margin-left: 0;}
			&.column-reverse{
				flex-direction: column-reverse;
			}
		}
		
		 
		section .title{font-size: 16px;text-align: left;text-indent: 15px;margin-top: 15px;}
		section .desc{text-align: left;padding-left: 15px;padding-right: 15px;margin-top: 10px;font-size: 12px;line-height: 16px;}
		section .more{margin:15px 0;}
		
		.friends{height: auto;}
		.friends .main .title{font-size: 16px;line-height: 20px;margin-top: 15px;}	
		.list{padding: 0 10px;}		
	}
	
	@media only screen and (max-width:375px){
		.friends .main .list>div{zoom: 0.8;}
	}
	
	@keyframes bounce {
	  from,
	  20%,
	  53%,
	  80%,
	  to {
		-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	  }

	  40%,
	  43% {
		-webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
		animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
		-webkit-transform: translate3d(0, -30px, 0);
		transform: translate3d(0, -30px, 0);
	  }

	  70% {
		-webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
		animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
		-webkit-transform: translate3d(0, -15px, 0);
		transform: translate3d(0, -15px, 0);
	  }

	  90% {
		-webkit-transform: translate3d(0, -4px, 0);
		transform: translate3d(0, -4px, 0);
	  }
	}

	.bounce {
	  -webkit-animation-name: bounce;
	  animation-name: bounce;
	  -webkit-transform-origin: center bottom;
	  transform-origin: center bottom;
	}
	
	@keyframes lightSpeedIn {
	  from {
		-webkit-transform: translate3d(50%, 0, 0) skewX(-30deg);
		transform: translate3d(50%, 0, 0) skewX(-30deg);
		opacity: 0;
	  }

	  60% {
		-webkit-transform: skewX(20deg);
		transform: skewX(20deg);
		opacity: 1;
	  }

	  80% {
		-webkit-transform: skewX(-5deg);
		transform: skewX(-5deg);
	  }

	  to {
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	  }
	}

	.lightSpeedIn {
	  -webkit-animation-name: lightSpeedIn;
	  animation-name: lightSpeedIn;
	  -webkit-animation-timing-function: ease-out;
	  animation-timing-function: ease-out;
	}
	
	@keyframes zoomIn {
	  from {
		opacity: 0;
		-webkit-transform: scale3d(0.3, 0.3, 0.3);
		transform: scale3d(0.3, 0.3, 0.3);
	  }

	  50% {
		opacity: 1;
	  }
	}

	.zoomIn {
	  -webkit-animation-name: zoomIn;
	  animation-name: zoomIn;
	}
	
	@keyframes fadeInDown {
	  from {
		opacity: 0;
		-webkit-transform: translate3d(0, -20%, 0);
		transform: translate3d(0, -20%, 0);
	  }

	  to {
		opacity: 1;
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	  }
	}

	.fadeInDown {
	  animation-name: fadeInDown;
	}

	.animated {
	  animation-duration: 1s;
	  animation-fill-mode: both;
	}
	
</style>
