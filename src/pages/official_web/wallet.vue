<template>
	<div>
		<official-header></official-header>
		<div class="page">
			<div class="main">
				<img src="../../assets/images/logos/LOGO+tinkey.png" />
				<div class="tit">{{$t('officialWallet.tit')}}</div>
				<div class="des">{{$t('officialWallet.des')}}</div>
				<div class="details">
					<div class="detail">
						<div class="title">{{$t('officialWallet.d1tit')}}</div>
						<div class="desc">{{$t('officialWallet.d1des')}}</div>
					</div>
					<div class="detail">
						<div class="title">{{$t('officialWallet.d2tit')}}</div>
						<div class="desc">{{$t('officialWallet.d2des')}}</div>
					</div>
					<div class="detail">
						<div class="title">{{$t('officialWallet.d3tit')}}</div>
						<div class="desc">{{$t('officialWallet.d3des')}}</div>
					</div>
				</div>				
			</div>
			<div class="why">
				<div class="whymain">
					<div class="whytitle">
						{{$t('officialWallet.why')}}
					</div>
					<div class="list">
						<div>
							<span class="icon"></span>
							<div class="txt">{{$t('officialWallet.wtit1')}}</div>
							<div class="description">
								<p>{{$t('officialWallet.w11')}}</p>
								<p>{{$t('officialWallet.w12')}}</p>
								<p>{{$t('officialWallet.w13')}}</p>
							</div>
						</div>
						<div>
							<span class="icon"></span>
							<div class="txt">{{$t('officialWallet.wtit2')}}</div>
							<div class="description">
								<p>{{$t('officialWallet.w21')}}</p>
								<p>{{$t('officialWallet.w22')}}</p>
							</div>
						</div>
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

<style lang="less" scoped>
	.page{
		background: #fff;		
		.main{
			max-width: 1200px;margin: 0 auto;text-align: center;overflow: hidden;
			img{margin-top: 122px;}
			.tit{margin-top: 65px;font-size: 36px;color: #11293B;}
			.des{
				color: #41484D;
				font-size: 20px;
				margin-top: 22px;
			}
			.details{
				margin: 0 auto;
				margin-top: 224px;
				max-width: 940px;
				padding: 0 30px;
				.detail{
					margin-bottom: 170px;
					.title{
						color: #11293B;
						font-size: 24px;
					}
					.desc{
						color: #41484D;
						font-size: 16px;
						margin-top: 32px;
						text-align: left;
						line-height: 26px;
					}
				}
			}			
		}
		.why{
			background: #FAFBFC;
			.whymain{
				max-width: 940px;
				padding: 0 30px;
				margin: 0 auto;
				overflow: hidden;
				.whytitle{
					margin-top: 97px;
					color: #11293B;
					text-align: center;
					font-size: 36px;
				}
				.list{
					margin-top: 84px;
					margin-bottom: 79px;
					display: flex;
					justify-content: space-between;
					>div:nth-of-type(2){
						margin-left: 10px;
					}
					>div .icon{
						display: block;
						width: 37px;
						height: 37px;
						background-color: #2571FB;
						border-radius: 50%;
					}
					.txt{
						color: #11293B;
						font-size: 18px;
						margin-top: 20px;
						line-height: 20px;
					}
					.description{
						margin-top: 14px;
						p{
							line-height: 26px;
							color: #848792;
						}
					}
				}
			}
		}
	}
	
	@media only screen and (max-width:375px){
		.page .main .tit{font-size: 18px;}
		.page .main .des{font-size: 14px;}
		.page .main .details{margin-top: 50px;}
		.page .main .details .detail{margin-bottom: 50px;}
		.page .why .whymain .whytitle{
			margin-top: 50px;
			font-size: 22px;
		}
		.page .why .whymain .list{margin-top: 30px;}
	}
	
</style>
