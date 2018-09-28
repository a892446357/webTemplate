<template>
	<div class="page">
		<official-header></official-header>
		<div class="main">
			<div class="bigTitle">关于我们</div>
			<div class="title">关于Tinkey</div>
			<div class="content">
				Tinkey 是一款兼具安全性、便捷性、包容性的硬件钱包，全球首款以物理芯片真随机生产私钥，支持手机电脑双插使用。通过自主开发的冷存储协议来确保您的数字资产安全，基于身份认证协议实现钱包、交易所、DApp等多重场景的身份认证，真正实现隐私数据自主管理。
			</div>
			<div class="title">目标愿景</div>
			<div class="content">
				让数字资产自我掌控，让隐私数据自主管理，让区块链世界自由开放。
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
				font-size: 30px;
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
		}
	}
</style>