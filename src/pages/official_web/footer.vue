<template>
	<footer>
		<div class="main">
			<div class="linkList">
				<div>
					<div class="tit">功能</div>
					<a @click="goto('official-index')" href="javascript:;">总览</a>
					<a @click="goto('official-wallet')" href="javascript:;">多链钱包</a>
					<a @click="goto('DApp')" href="javascript:;">DApp</a>
					<a  href="javascript:;" class="knowmore">服务条款 了解细则 ></a>
				</div>
				<div>
					<div class="tit">资源</div>
					<a href="javascript:;">API</a>
					<a href="javascript:;">品牌</a>
				</div>
				<div>
					<div class="tit">用户支持</div>
					<a href="javascript:;" @click="goto('official-hc')">帮助中心</a>
					<a href="javascript:;" @click="goto('contact-us')">联系我们</a>
				</div>
				<div>
					<div class="tit">公司</div>
					<a href="javascript:;" @click="goto('about-us')">关于我们</a>
					<a href="javascript:;" @click="goto('join-us')">加入我们</a>
				</div>
				<div>
					<div class="tit">订阅</div>
					<a :to="{}">及时获取Tinkye最新资讯</a>
					<div class="joingo">
						加入我们
						<span class="icon-right"></span>
					</div>
					<div class="contact">							
						<a href="https://twitter.com/officialtinkey" target="_blank" class="social-icon w-inline-block">
								<img src="../../assets/images/bird.png">
						</a>
						<a href="https://t.me/tinkeyio" target="_blank" class="social-icon w-inline-block">
								<img src="../../assets/images/plane.png">
						</a>
						<a href="https://www.facebook.com/tinkey.hardwarewallet" target="_blank" class="social-icon w-inline-block">
								<img src="../../assets/images/f.png">
						</a>
						<a href="javascript:;" class="weixin-icon w-inline-block">
							<img src="../../assets/images/wx.png">
							<div class="image-1">
									<img src="../../assets/images/weixin.jpg" class="images1"/>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		methods:{
			goto(name){
				if(this.$route.name==name){
					$("html,body").animate({scrollTop:'0'},300)
				}else{
					this.$router.push({name:name})
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	footer{
		height: 325px;width: 100%;background: #fff;
		.main{
			max-width: 1200px;
			margin: 0 auto;			
			.linkList{
				display: flex;
				justify-content: space-between;
				padding-top: 49px;
				>div{
					.tit{margin-bottom: 15px;color: #4C5872;}
					.contact{
						margin-top: 55px;
						>a{
							display: inline-block;
							margin-right: 26px;
						}
					}
					>a{
						margin-bottom: 13px;
						display: block;
						color: #8A909C;
						&.knowmore{
							color: #2672FB;
							margin-top: 50px;
							white-space: nowrap;
						}
					}
					.joingo{
						width:300px;
						height:40px;
						line-height: 40px;
						text-indent: 19px;
						background:rgba(242,244,245,1);
						border-radius:20px;
						color: #8A909C;
						position: relative;
						.icon-right{
							width: 20px;
							height: 20px;
							background: url(../../assets/images/icon-right.png);
							position: absolute;
							right: 11px;
							top: 10px;
						}
					}
				}
			}
		}
	}
	.weixin-icon .images1{display: none }
	.weixin-icon:hover .images1{display: block; }
	.image-1 img{position: absolute;top: -230px;z-index:10;width: 200px;height:200px;}
	.image-1{position: relative;}
	
	@media only screen and (max-width:1200px){
		footer{
			height: auto;
		}
		footer .main .linkList{
			display: block;
			padding-top: 15px;
			>div{
				display: inline-block;
				height: 180px;
				width: 24%;
				vertical-align: top;
				&:nth-of-type(1){
					margin-left: 5%;
				}
				&:nth-of-type(4){
					width: 18%;
				}
				&:nth-of-type(5){
					width: auto;
					margin-left: 5%;
				}
			}
		}
		footer .main .linkList > div > a.knowmore{margin-top: 25px;}
		footer .main .linkList > div .contact{margin-top: 25px;}
	}
</style>