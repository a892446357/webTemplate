<template>
  <div class="header">
    <div class="header-container">
      <div class="left">
        <router-link :to="{name:'index'}">
          <img src="../assets/images/home/logo.png" width="190px" height="37px"/>
        </router-link>
        <em class="icon-market-list1" @click="navToggle"></em>
         <!-- <div class="transparant-menu-button w-nav-button">
          <div class="w-icon-nav-menu"></div>
        </div> -->
        <ul class="menu">
          <li class="menu-item">
            <router-link :to="{name: 'index', params:{position:'intro'}}">
              {{$t('index.part9.title9')}}<!--介绍-->
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{name: 'index', params:{position:'features'}}">
              {{$t('index.part9.title2')}}<!--特性-->
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{name: 'index', params:{position:'partners'}}">
              {{$t('index.part9.title3')}}<!--合作伙伴-->
            </router-link>
          </li>
          <!--<li class="menu-item">
            <router-link :to="{name:'shopIndex'}">{{$t('index.part9.title4')}}&lt;!&ndash;捐赠&ndash;&gt;</router-link>
          </li>-->
        </ul>
      </div>
      <div class="right" :class="{aaa:this.navPhone}">
        <ul class="menu">

           <li class="menu-item list" >
            <router-link :to="{name: 'index', params:{position:'intro'}}">
              {{$t('index.part9.title9')}}<!--介绍-->
            </router-link>
          </li>
          <li class="menu-item list">
            <router-link :to="{name: 'index', params:{position:'features'}}">
              {{$t('index.part9.title2')}}<!--特性-->
            </router-link>
          </li>
          <li class="menu-item list">
            <router-link :to="{name: 'index', params:{position:'partners'}}">
              {{$t('index.part9.title3')}}<!--合作伙伴-->
            </router-link>
          </li>
          <!--<li class="menu-item list">
            <router-link :to="{name:'shopIndex'}">{{$t('index.part9.title4')}}&lt;!&ndash;捐赠&ndash;&gt;</router-link>
          </li>-->

          <template v-if="getApiToken">
          <!-- 登录之后 begin -->
          <li class="menu-item">
            <router-link :to="{name:'personalCenter'}">{{getUserInfo.username}}</router-link>
          </li>
          <li class="menu-item" @click="logout">
            <a>{{$t('header.exit')}}<!--退出--></a>
          </li>
          <!-- 登录之后 end -->
          </template>
          <template v-if="!getApiToken">
          <!-- 未登录 begin -->
          <li class="menu-item">
            <router-link :to="{name:'login'}">{{$t('common.login')}}<!--登录--></router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{name:'register'}">{{$t('common.registe')}}<!--注册--></router-link>
          </li>
          <!-- 未登录 end -->
          </template>
          <li class="menu-item icon-arrow-down" @mouseover="mouseover" @mouseout="mouseout">
            <a>{{getCurLang}}</a>
            <ul class="lang-list" v-show="showLang">
              <li class="lang-item" v-for="item in languages" :key="item.id" @click="setLanguage(item.id)">
                {{item.name}}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'header1',
  data () {
    return {
      navPhone: false,
      showLang: false,
      timeoutId: null
    }
  },
  computed: {
    ...mapGetters(['getLang', 'getApiToken', 'getUserInfo', 'languages']),
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
  watch: {
    $route () {
      this.navPhone = false
    }
  },
  methods: {
    ...mapActions(['setLang', 'setApiToken']),
    setLanguage (lang) {
      this.showLang = false
      this.setLang(lang)
      this.$i18n.locale = lang
    },
    logout () {
      this.setApiToken(null)
    },
    mouseover () {
      clearTimeout(this.timeoutId)
      this.showLang = true
    },
    mouseout () {
      this.timeoutId = setTimeout(() => {
        this.showLang = false
      }, 300)
    },
    navToggle () {
      this.navPhone = !this.navPhone
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{width:100%;height:60px;background:#1b1c21;position:fixed;top:0;left:0;display:flex;align-items:center;justify-content:center;z-index: 88;}
.header-container{width:100%;height:100%;display:flex;align-items:center;justify-content:space-between;margin:0 30px;}
.left{height:100%;display:flex;align-items:center;}
.left > a{display:flex;}
.left .menu{margin-left:100px;}
.left .menu-item{margin-right:30px;}
.right{display:flex;align-items:center;}
.right .menu-item{margin-left:30px;height:25px;line-height:25px;}
.right .menu-item:last-child a{padding-right:24px;}
.right .menu-item:last-child::before{position:absolute;right:10px;font-size:10px;top:calc(50% - 12px);color:#fff;opacity:0.4;}
.menu{display:flex;font-size:14px;color:#000;}
.menu-item{position:relative;cursor:pointer;position:relative;}
.menu-item a{display:inline-block;padding:0 4px;color:rgba(153,153,153,1);height:25px;line-height:25px;font-size:13px;letter-spacing:1px;text-transform:uppercase;}
.left .menu-item a:hover::after{content:"";display:flex;width:100%;height:2px;background:#fff;position:absolute;z-index:1px;left:0;bottom:-6px;}
.lang-list{display:flex;flex-flow:column;width:104px;position:absolute;top:40px;right:0;background-color:#fff;box-shadow:0 3px 6px rgba(12,14,25,0.1);}
.lang-item{flex:1;height:38px;line-height:38px;font-size:14px;color:#443f54;text-align: center;border-bottom: 1px solid #f4f4f5;cursor: pointer;}
.lang-item:hover{color:#fff;background-color:#1b1c21;}
.right .menu .list{display: none}

@media only screen and (max-width: 1020px) {
  .header{height: 61px;line-height: 61px;}
  .header-container{width:100%;display: block;margin:0 20px;}
  .menu{display: block;width: 100%;}
  .right{display: block;background-image: linear-gradient(180deg, rgba(68, 63, 84, 1), rgba(68, 63, 84, 1));}
  .right {position: absolute;right: 0px;width: 100%;}
  .right .menu-item{ width: 100%;padding-bottom: 10px;}
  .left .menu{display: none;}
  .right{transition:0.3s;top:-300px;}
  .right.aaa{top:61px;}
  .right .menu .list{display: block;   }
  .left{justify-content: space-between;line-height: 61px;}
  .left a img{vertical-align: middle;}
  .right .menu-item:last-child::before{right: 50px;}
  .icon-market-list1{font-size: 38px;color: #fff;}
}
</style>
