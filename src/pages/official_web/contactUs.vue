<template>
	<div class="page">
		<official-header></official-header>
		<div class="main">
			<div class="bigTitle">联系我们</div>
			<div class="content">
				如果在使用 Tinkey 产品的过程中遇到问题，请通扫码添加官方客服解决，或者发送邮件至我们官方邮箱地址，我们的用户支持团队会尽快回复您。
			</div>
			<div class="title">官方客服</div>
			<img src="../../assets/images/help/qrcode.png" alt="" />
			<div class="title">官方邮箱：info@tinkey.io</div>
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
			max-width: 1000px;
			padding: 0 10px;
			min-height: calc(100vh - 405px);
			margin: 0 auto;
			overflow: hidden;
			.bigTitle{
				font-size: 36px;
				color: #333;
				font-weight: 700;
				line-height: 80px;
			    border-bottom: 1px solid #e8ecf1;
			    text-align: center;
			}
			.title{
				font-size: 18px;
				color: #333;
				font-weight: bold;
				margin-top: 25px;
				text-align: center;				
			}
			.content{
				line-height: 25px;
				font-size: 14px;
				color: #494949;
				margin-top: 20px;
			}
			img{
				width: 240px;
				height: 240px;
				display: block;
				margin: 0 auto;
			}
		}
	}
</style>