<template>
	<div class="page">
		<official-header></official-header>
		<div class="main clearfix">		
			<div class="left">
				<div class="section">
					<div class="tit">钱包操作</div>
					<div class="list">
						<ul>
							<li @click="selectQ(11)" :class="{curr:qa==11}">为什么搜索不到某Token?</li>
							<li @click="selectQ(12)" :class="{curr:qa==12}">如何导入钱包</li>
							<li @click="selectQ(13)" :class="{curr:qa==13}">如何备份钱包</li>
							<li @click="selectQ(14)" :class="{curr:qa==14}">如何提交新Token信息给Tinkey?</li>
							<li @click="selectQ(15)" :class="{curr:qa==15}">如何创建钱包</li>
							<li @click="selectQ(16)" :class="{curr:qa==16}">如何添加钱包</li>
						</ul>
					</div>
				</div>
				<div class="section">
					<div class="tit">区块链知识</div>
					<div class="list">
						<ul>
							<li @click="selectQ(21)" :class="{curr:qa==21}">什么是私钥？</li>
							<li @click="selectQ(22)" :class="{curr:qa==22}">什么是GAS费用？</li>
							<li @click="selectQ(23)" :class="{curr:qa==23}">什么是钱包?</li>
						</ul>
					</div>
				</div>
			</div>		
			<div class="right">
		    	<transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOut">
      				<div v-if="qa==11">
      					<div class="title">
						为什么搜索不到某 Token?
						</div>
						<div class="content">
							<p>TinKey 支持多种采用椭圆曲线算法的币种，即私钥经过SECP256K1算法处理生成了公钥，覆盖市面上99%的币种，例如BTC、BCH、LTC、ETH、ERC20等等币种，由于各个体系的代币多达数千种，为了方便用户管理自己的代币，我们会筛选绝大部分社区相对流行的代币添加到我们的搜索列表，对于小部分我们未添加的代币则会出现搜索不到的情况。</p>
							<p>需要说明的是，Tinkey 搜索列表里的所有代币只是我们为了方便用户管理和添加代币而收录的，并未经过所谓的 “审核” ，请用户切勿以此作为判断代币好坏的依据。</p>
							<p>如果你发现社区某个相对流行的代币搜索不到，<a @click="qa=14">点击这里</a>查看</p>
						</div>
      				</div>
      			</transition>
      			<transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOut">
      				<div v-if="qa==12">
      					<div class="title">
						如何导入钱包
						</div>
						<div class="content">
							<p style="color: red;">Tinkey目前仅支持二维码备份导入</p>
							<p>1、打开Tinkey APP，插上钱包，此时会跳出以下页面</p>
							<img src="../../assets/images/help/help1.png" />
							<p>2、点击“导入Tinkey备份钱包”，点击“扫描”备份的二维码图片，输入“交易密码”导入钱包</p>
							<img src="../../assets/images/help/help2.png" />
						</div>
      				</div>
      			</transition>
      			<transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOut">
      				<div v-if="qa==13">
      					<div class="title">
						如何备份钱包
						</div>
						<div class="content">
							<p>导出 二维码进行备份</p>
							<p>点击 “我的” 中的“备份” ——>选择二维码备份</p>
							<p>导出二维码 ——> 输入交易所密码</p>
							<p>截图保存，或者点击按钮保存到相册即可</p>
							<p>注意：软件和服务器不保存您的交易密码，一旦丢失将无法找回；备份需记住交易密码和二维码，交易密码或二维码一旦丢失备份将失效。</p>
						</div>
      				</div>
      			</transition>
      			<transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOut">
      				<div v-if="qa==14">
      					<div class="title">
						如何提交新Token信息给Tinkey？
						</div>
						<div class="content">
							<p>如果需要在 Tinkey显示你的 Token 信息，请务必使用官方邮箱提供以下信息，发送至 info@tinkey.io或加入添加官方客服： TinKeyWallet  我们会有专人处理。</p>
							<p style="font-weight: bold;">必要信息</p>
							<p class="indent">公司或个人名字</p>
							<p class="indent">官方网站</p>
							<p class="indent">合约地址</p>
							<p class="indent">推荐用户转账所使用的 Gas 数量（没有提供，我们默认值 60000）</p>
							<p class="indent">Logo.png</p>
							<p class="indent">其它情况说明</p>
							<p style="font-weight: bold;">Logo 设计要求</p>
							<p class="indent">切图尺寸：132x132 像素</p>
							<p class="indent">透明背景 PNG</p>
							<p class="indent">品牌标识水平和垂直居中</p>
							<p>第一次提交，我们一般会在两个工作日处理。如有信息变动，请第一时间邮件跟我们联系更新，谢谢配合！ 由于以太坊代币种类繁杂，同时为了避免误导部分 Tinkey 用户，我们暂时只添加社区内相对流行的代币 logo 。 如果你想修改代币的合约地址，请提供相关的官方公告给我们。</p>
						</div>
      				</div>
      			</transition>
      			<transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOut">
      				<div v-if="qa==15">
      					<div class="title">
						如何创建钱包
						</div>
						<div class="content">
							<p>1、打开Tinkey APP，插上钱包，此时会跳出以下页面</p>
							<img src="../../assets/images/help/help1.png" />
							<p>2、点击“创建钱包”，认真阅读“风险提示”并勾选，设置“交易密码”并确定（密码为6位字母+数字组合）</p>
							<img src="../../assets/images/help/help3.png" />
							<p>3、交易密码设置完成将会跳出备份钱包的确认框，点击“确定”</p>
							<img src="../../assets/images/help/help4.png" />
							<p>4、可点击“保存备份二维码”按钮进行备份，也可截图保存。（请妥善保存你的交易密码）</p>
							<img src="../../assets/images/help/help5.png" />
							<p>5、二维码备份完成，即钱包创建成功</p>
						</div>
      				</div>
      			</transition>
				<transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOut">
      				<div v-if="qa==16">
      					<div class="title">
						如何添加钱包
						</div>
						<div class="content">
							<p>1、点击“我的”进入个人中心，点击“钱包”</p>
							<img src="../../assets/images/help/help6.png" />
							<p>2、点击右上角“+”添加钱包</p>
							<img src="../../assets/images/help/help7.png" />
							<p>3、选择需要添加钱包的种类，目前支持ETH钱包、BTC钱包和BARK钱包;</p>
							<img src="../../assets/images/help/help8.png" />
							<p>4、以ETH钱包为例，输入钱包名词，点击“添加”按钮，输入交易密码，即钱包添加成功</p>
							<img src="../../assets/images/help/help9.png" />
							<p>5、二维码备份完成，即钱包创建成功</p>
						</div>
      				</div>
      			</transition>
      			<transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOut">
      				<div v-if="qa==21">
      					<div class="title">
						什么是私钥？
						</div>
						<div class="content">
							<p>我们常说, 你对钱包中资金的控制取决于相应私钥的所有权和控制权。</p>
							<p>在区块链交易中, 私钥用于生成支付货币所必须的签名, 以证明资金的所有权。私钥必须始终保持机密, 因为一旦泄露给第三方, 相当于该私钥保护下的资产也拱手相让了。</p>
							<p>私钥实际上并不是存储在网络中, 而是由用户生成并存储在一个文件或者简单的数据库中, 称为钱包。存储在用户钱包中的私钥完全独立, 可由用户的钱包软件生成并管理, 无需区块链或者网络连接。用户的钱包地址就是由私钥通过椭圆曲线加密生成公钥, 进而生成以0x开头的42位地址。 私钥的样式为 64 位 16 进制的哈希值字符串, 例如:</p>
							<p>56f759ece75f0ab1b783893cbe390288978d4d4ff24dd233245b4285fcc31cf6</p>
						</div>
      				</div>
      			</transition>
      			<transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOut">
      				<div v-if="qa==22">
      					<div class="title">
						什么是GAS费用？
						</div>
						<div class="content">
							<p>在一个公有链上, 任何人都可以读写数据。读取数据是免费的, 但是向公有链中写数据时需要花费一定费用的, 这种开销有助于阻止垃圾内容, 并通过支付保护其安全性。 网络上的任何节点(每个包含账本拷贝的连接设备被称作节点) 都可以参与称作挖矿的方式来保护网络。由于挖矿需要计算能力和电费, 所以矿工们的服务需要得到一定的报酬, 这也是矿工费的由来。</p>
							<p>矿工会优先打包 gas 合理，gas price 高的交易。如果用户交易时所支付的矿工费非常低(out of gas), 那么这笔交易可能不会被矿工打包, 从而造成交易失败。</p>
							<p>Tinkey 的交易费用 (也是以太坊的交易费用) = gas 数量 * gas price (gas 单价, 以太币计价)</p>
						</div>
      				</div>
      			</transition>
      			<transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOut">
      				<div v-if="qa==23">
      					<div class="title">
						什么是钱包?
						</div>
						<div class="content">
							<p>钱包是密钥的管理工具，他只包含密钥而不是确切的某一个代币。钱包中包含成对的私钥和公钥。用户用私钥来签名交易， 从而证明该用户拥有交易的输出权。而输出的交易信息则存储在区块链中。</p>
							<p>用户在使用 Tinkey 钱包时，你的私钥存储在硬件中。Tinkey在软件和硬件上都没有读出机制，真正实现了私钥自主管理，大大降低了私钥被盗的风险。</p>
						</div>
      				</div>
      			</transition>
			</div>
		</div>
		<official-footer></official-footer>
	</div>
</template>

<script>
	import officialHeader from './header.vue'
	import officialFooter from './footer.vue'
		
	export default {		
		data(){
			return{
				qa:11
			}
		},
		methods:{
			selectQ(qa){
				this.qa=qa;
				let screenW=document.documentElement.clientWidth;
				if(screenW<=700){
					setTimeout(function(){
						let top=$(".right .title").offset().top;
						$("html,body").animate({scrollTop:top},300)
					},300)				
				}
			}
		},
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
			max-width: 1200px;
			min-height: calc(100vh - 405px);
			margin: 0 auto;
			overflow: hidden;
			.left{
				float: left;
				width: 300px;
				height: 100%;
				overflow: hidden;
				.section{
					margin-top:50px;
					.tit{
						font-size: 18px;
						line-height: 40px;
						height: 40px;
						background: #8d8d8d;
						color: #fff;
						text-indent: 20px;
					}
					.list{
						li{
							font-size: 14px;
							color: #848792;
							margin-left: 10px;
							margin-right: 10px;
							text-indent: 15px;
							line-height: 40px;
							border-bottom: solid 1px #f1f1f1;
							cursor: pointer;
							&:hover,&.curr{
								color: #444;
							    background-color: #fafbfc;
							}							
						}
					}
				}
			}
			.right{
				margin-top:50px;
				margin-left: 340px;
				position: relative;				
				.title{
				    color: #344857;
				    font-size: 30px;
				    letter-spacing: -.2px;
    				padding-bottom: 20px;
				}
				.content{
					color: #63727d;
					font-size: 14px;
					>p{
						line-height: 25px;
						margin-bottom: 10px;
						word-break: break-all;
						a{
							color:  #70b1e7;
							cursor: pointer; 
							&:hover{
								color: #1787cf;
							}
						}
						&.indent{
							text-indent: 1em;
							line-height: 18px;
							&:before{
								content: "";
								width: 6px;
								height: 6px;
								background: #494949;
								border-radius: 50%;
								display: inline-block;
								vertical-align: middle;
								margin-right: 10px;
							}
						}
					}
					img{
						width: 340px;
					}
				}
			}
		}
	}
	
	
	.animated {
	  animation-duration: 1s;
	  animation-fill-mode: both;
	}
	
	@keyframes fadeInDown {
	  from {
		opacity: 0;
		-webkit-transform: translate3d(0, -10px, 0);
		transform: translate3d(0, -10px, 0);
	  }

	  to {
		opacity: 1;
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	  }
	}

	.fadeInDown {
	  animation-name: fadeInDown;
	  animation-delay: 0.2s;
	}
	
	@keyframes fadeOut {
	  from {
		opacity: 1;
		-webkit-transform: translate3d(0, 0px, 0);
		transform: translate3d(0, 0px, 0);
	  }

	  to {
		opacity: 0;
		-webkit-transform: translate3d(50%,0, 0);
		transform: translate3d(50%,0, 0);
	  }
	}

	.fadeOut {
	  animation-name: fadeOut;
	  position: absolute;
	  left: 0;
	  top: 0;
	}	
	
	@media only screen and (max-width:700px){
		.page .main .left{width: 100%;}
		.page .main .right{float: left;margin-left: 0;padding: 0 20px;}
	}
	
	
</style>