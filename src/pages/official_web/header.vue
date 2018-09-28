<template>
	<header class="officialHead">
		<div class="main clearfix">
			<div class="left">
				<router-link :to="{name:'official-index'}">
					<img src="../../assets/images/official_logo.png" class="official_logo" />
				</router-link>
			</div>
			<div class="right">
				<ul class="menu">				
					<li class="menu-item download">
						<router-link :to="{name:'official-appDownLoad'}">
							{{$t('officialIndex.download')}}
						</router-link>
					</li>
					<li class="menu-item icon-arrow-down" @mouseover="mouseover" @mouseout="mouseout">
						<a class="currlang">{{getCurLang}}</a>
						<ul class="lang-list" v-show="showLang">
							<li class="lang-item" v-if="item.id!='ko'" v-for="item in languages" :key="item.id" @click="setLanguage(item.id)">
								{{item.name}}
							</li>
						</ul>
					</li>
			</ul>
			</div>
		</div>
	</header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      showLang: false,
      timeoutId: null
    }
  },
  computed: {
    ...mapGetters(['getLang', 'languages']),
    getCurLang () {
      let name = 'English'
      for (let i = 0; i < this.languages.length; i++) {
        let l = this.languages[i]
        if (this.getLang === l.id) {
          return l.name
        }
      }
      return name
    }
  },
  methods: {
    ...mapActions(['setLang', 'setApiToken']),
    setLanguage (lang) {
      this.showLang = false
      this.setLang(lang)
      this.$i18n.locale = lang
    },
    mouseover () {
      clearTimeout(this.timeoutId)
      this.showLang = true
    },
    mouseout () {
      this.timeoutId = setTimeout(() => {
        this.showLang = false
      }, 300)
    }
  }
}
</script>


<style lang="less" scoped>
	.officialHead{
		background-color: #fff;		
		.main{
			max-width: 1120px;
			padding: 0 40px;
			margin: 0 auto;
		}
	}
	.left{
		float: left;
		height: 80px;
		line-height: 80px;
		a{display: inline-block;}
		a:after{
			content:' '; vertical-align:middle;
		}
		.official_logo{
			width: 107px;
			height: 25px;
			vertical-align: middle;
		}
	}
	.right{
		float: right;
		line-height: 80px;
	}	
	.menu{display:flex;font-size:14px;}
	.menu-item{position:relative;cursor:pointer;position:relative;}
	.menu-item.download a{color: #2672FB}
	.menu-item.icon-arrow-down{margin-left: 60px;}
	.menu-item a.currlang{display:inline-block;padding:0 4px;color:#060F16;height:25px;line-height:25px;font-size:14px;margin-top: 27px;letter-spacing:1px;text-transform:uppercase;}
	.left .menu-item a:hover::after{content:"";display:flex;width:100%;height:2px;background:#fff;position:absolute;z-index:1px;left:0;bottom:-6px;}
	.lang-list{display:flex;flex-flow:column;width:104px;position:absolute;top:55px;right: 0;z-index: 1;background-color:#fff;box-shadow:0 3px 6px rgba(12,14,25,0.1);}
	.lang-item{flex:1;height:38px;line-height:38px;font-size:14px;color:#443f54;text-align: center;border-bottom: 1px solid #f4f4f5;cursor: pointer;}
	.lang-item:hover{color:#fff;background-color:#1b1c21;}
	.right .menu .list{display: none}
	.icon-arrow-down:before{
		content: '';
		border-style: solid;
		border-top: solid 10px #687BF3;
		border-left: solid 5px transparent;
		border-right: solid 5px transparent;
		border-bottom: none;
		margin-top: 27px;
    display: inline-block;
		transition: transform 300ms;		
	}
	.icon-arrow-down:hover:before{
		transform: rotate(180deg);
	}
	@media only screen and (max-width: 414px){ 
		.menu-item.icon-arrow-down{
			margin-left: 20px;
		}
		.officialHead .main{
			padding: 0 15px;
		}
	}
</style>