<template>
	<div class="page">
		<official-header></official-header>
		<div class="main">
			<div class="bigTitle">加入我们</div>
			<div class="title">为什么选择我们</div>
			<div class="content">
				<div class="tit">公司高速发展</div>
				<div class="des">区块链行业作为一个高速发展的行业，公司创始人在区块链行业中深耕多年，带领公司不断的前进发展，我们需要更多人才的储备。</div>
			</div>
			<div class="content">
				<div class="tit">团结友爱的团队</div>
				<div class="des">团队以80后、90后为主，老板与同事逗比有趣、工作氛围简单和谐。加入我们，不再单纯做一个程序猿、产品汪、运营狗。如果你对区块链行业抱有热忱，欢迎和我们一起探索区块链的未来！</div>
			</div>
			<div class="title">招聘职位</div>
			<div class="content">
				<div class="tit">市场营销策划 （15K-20K）：</div>
				<div class="duty">岗位主要职责:</div>
				<p>1.     负责部门产品及项目后端的设计与开发；</p>
				<p>2.     负责内部工具、组件、基础服务的设计与开发</p>
				<p>3.     定期策划创意营销项目，根据公司产品的特性，定制独特营销方案，提出新型的营销想法；</p>
				<p>4.     提供营销策划支持，构思创意有效的营销解决方案，并根据市场行情及时调整营销策略和计划；</p>
				<p>5.     制定公司现有核心产品推广计划，合理选择推广渠道，利用线上和线下多种渠道进行推广</p>
				<p>6.     负责市场推广所需资料设计，并做好推广活动预算与成本把控;</p>
				<div class="duty">任职要求:</div>
				<p>1.     本科及以上学历，有市场营销，传播 ，传媒相关专业优先；</p>
				<p>2.     5年以上营销策划管理工作经验；能独立完成营销战略策划项目;</p>
				<p>3.     对本行业有深刻的理解，有敏锐的市场洞察力和项目运作能力;</p>
				<p>4.     具备品牌建设与市场推广的专业知识 ; 善于与科研机构、专家、企业客户建立良好关系；</p>
				<p>5.     具备较强的人际沟通能力及逻辑思维能力，思维敏捷，能够准确把握产品优势和客户心理，高效整合内外部资源；</p>
			</div>
			<div class="content">
				<div class="tit">JAVA资深工程师 （35K-50K）</div>
				<div class="duty">岗位职责：</div>
				<p>1.     负责部门产品及项目后端的设计与开发；</p>
				<p>2.     负责内部工具、组件、基础服务的设计与开发</p>
				<div class="duty">任职要求:</div>
				<p>1.     扎实的java功底，有线上高并发、大数据量处理经验，对java多线程编程有较深的理解和工作经验，熟悉Scala优先；				</p>      
				<p>2.     熟练J2EE，Java WEB编程技术，对各种开源的框架如Spring、SpringMVC,MyBatis等及SOA、服务化、模块化有较好的有深入的应用和优化经验；				</p>      
				<p>3.     熟练数据库MySql使用，设计，SQL调优等；				</p>      
				<p>4.     熟练Redis/Memcache、Kafka、Zookeeper、Netty等常用中间件；				</p>      
				<p>5.     熟练Linux的常用命令及脚本编写；				</p>      
				<p>6.     本科以上学历，5年以上的java项目工作经验。</p>
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
				margin-top: 20px;
				.tit{
					font-size: 18px;
					color: #333;
					line-height: 30px;
					font-weight: bold;
				}
				.des{
					color: #494949;
					line-height: 25px;
				}
				.duty{
					margin-top: 20px;
				}
				>p{
					line-height: 25px;
				}
			}
		}
	}
</style>