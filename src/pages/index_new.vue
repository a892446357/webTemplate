<template>
  <div class="index-container">
      <div class="header">
          <div class="header-all">
              <div class="header-left">
                  <img src="../assets/images/home/logo.png" width="190" height="37px;" class="logo"/>
                  <span class="toogle " @click="tooglNav"></span>
                <div class="nav">
                    <!-- :class="{'active': active === 'message'}" @click="switch_tab('message')" -->
                    <a href="javascript:;" :class="{'active': active === 'intro' || active === 'intro'}" @click="scrollTo('intro')"  >
                            <!--intro-->
                            {{$t('index.part9.title9')}}
                        </a>
                        <a href="javascript:;" :class="{'active': active === 'features'}" @click="scrollTo('features')" >
                            <!--features-->
                            {{$t('index.part9.title2')}}
                        </a>
                        <a href="javascript:;" :class="{'active': active === 'partners'}" @click="scrollTo('partners')" >
                            <!--partners-->
                            {{$t('index.part9.title3')}}
                        </a>
                        <a href="javascript:;" @click="donate">
                            <!--DONATE-->
                            {{$t('index.part1.title8')}}
                        </a>
                </div>
              </div>
              <div class="w-nav-menu">
                <template v-if="getApiToken">
                    <router-link :to="{name: 'personalCenter'}" class="nav-link-2 light w-nav-link">{{getUserInfo.username}}</router-link>
                    <a href="javascript:;" class="nav-link-2 light w-nav-link" @click="logout">{{$t('header.exit')}}<!--退出--></a>
                </template>
                <template v-if="!getApiToken">
                    <router-link :to="{name:'login'}" class="nav-link-2 light w-nav-link">{{$t('common.login')}}</router-link>
                    <router-link :to="{name:'register'}" class="nav-link-2 light w-nav-link">{{$t('common.registe')}}</router-link>
                </template>
                    <div data-delay="0" class="dropdown w-dropdown" @mouseover="mouseover" @mouseout="mouseout">
                        <div class="nav-link-2 dropdown-toggle light w-dropdown-toggle" :class="{'w--open': showLang===true}">
                            <div>{{getCurLang}}</div>
                            <div class="dropdown-icon w-icon-dropdown-toggle"></div>
                        </div>
                        <nav class="dropdown-list w-dropdown-list w--open" v-show="showLang">
                            <a href="javascript:;" v-for="(item, index) in languages" :key="index" class="dropdown-link w-dropdown-link" @click="setLanguage(item.id)">{{item.name}}</a>
                        </nav>
                    </div>
                    <!-- <a href="javascript:;">ENGLISH</a> -->
              </div>

              <div class="iphone-nav" v-if="iSphone">
                    <a href="javascript:;" @click="scrollTo('intro')" >
                            <!--intro-->
                            {{$t('index.part9.title9')}}
                        </a>
                        <a href="javascript:;" @click="scrollTo('features')" >
                            <!--features-->
                            {{$t('index.part9.title2')}}
                        </a>
                        <a href="javascript:;" @click="scrollTo('partners')">
                            <!--partners-->
                            {{$t('index.part9.title3')}}
                        </a>
                        <a href="javascript:;" @click="donate">
                            <!--partners-->
                            <!-- DONATE -->
                             {{$t('index.part1.title8')}}
                        </a>
                        <div class="w-nav-menu">
                            <template v-if="getApiToken">
                                <router-link :to="{name: 'personalCenter'}" class="nav-link-2 light w-nav-link">{{getUserInfo.username}}</router-link>
                                <a href="javascript:;" class="nav-link-2 light w-nav-link" @click="logout">{{$t('header.exit')}}<!--退出--></a>
                            </template>
                            <template v-if="!getApiToken">
                                <router-link :to="{name:'login'}" class="nav-link-2 light w-nav-link">{{$t('common.login')}}</router-link>
                                <router-link :to="{name:'register'}" class="nav-link-2 light w-nav-link">{{$t('common.registe')}}</router-link>
                            </template>
                            <div data-delay="0" class="dropdown w-dropdown" @mouseover="mouseover" @mouseout="mouseout">
                                <div class="nav-link-2 dropdown-toggle light w-dropdown-toggle" :class="{'w--open': showLang===true}">
                                    <div>{{getCurLang}}</div>
                                    <div class="dropdown-icon w-icon-dropdown-toggle"></div>
                                </div>
                                <nav class="dropdown-list w-dropdown-list w--open" v-show="showLang">
                                    <a href="javascript:;" v-for="(item, index) in languages" :key="index" class="dropdown-link w-dropdown-link" @click="setLanguage(item.id)">{{item.name}}</a>
                                </nav>
                            </div>
                    <!-- <a href="javascript:;">ENGLISH</a> -->
                        </div>
                </div>
          </div>
      </div>
      <div class="section-one">
          <div class="w1200">
            <div class="section-one-titile"> {{$t('index.part1.title3')}}</div><!--A Hardware Wallet that Rewards You-->
            <div class="section-one-safe">
                <!-- Safeguarding your transactions, mining machine, decentralized exchange, AI-powered trading tool all-in-one. -->
                 {{$t('index.part1.title4')}}
                </div>
            <div class="section-one-btn">
                <a href="javascript:;" @click="donate" class="donate">
                    <!-- Donate -->
                    {{$t('index.part1.title8')}}
                </a>
                <router-link :to="{name: 'download'}">
                    <!-- Androld -->
                    {{$t('index.part1.title7')}}
                </router-link>
                <a :href="appInfo.url" :download="appInfo.name">
                <!-- MP下载 -->
                {{$t('index.part1.title9')}}
                </a>
            </div>
          </div>
      </div>
      <div class="features" id="features">
          <div class="w1200">
              <div>
                   {{$t('index.part2.title1')}}
                  <!-- A wallet with nice features -->
                </div>
              <p>
                  <!-- Mine and trade tokens in the palm of your hands -->
                   {{$t('index.part2.title2')}}
              </p>
          </div>
      </div>
      <div class="section-two">
          <div class="w1200">
              <div class="section-two-left">
                  <div class="section-two-left-title">
                      {{$t('index.part2.title3')}}
                      <!-- Verification-based mining -->
                  </div>
                  <p class="section-two-left-p">
                       {{$t('index.part2.title4')}}
                      <!-- Get rewarded by using verification-based mining powered by Tinkey. -->
                  </p>
              </div>
              <div class="aaa">
                  <!-- <div class="transten"></div> -->
              </div>
              <div class="section-two-right">
                  <img src="../assets/images/home/tkshouji.png" />
              </div>
          </div>
      </div>
      <!--
      <div class="section-three">
          <div class="w1200">
              <div class="section-three-left">
                  <img src="../assets/images/home/pcduan.png" />
              </div>
              <div class="section-three-right">
                  <div class="section-three-title">
                      AI-Powered Trading Tools -->
                      <!--{{$t('index.part3.title1')}}
                  </div>
                  <p class="section-three-p">
                      Our AI-powered tools provide multiple strategies, monitor trade status and execute trades. -->
                      <!-- {{$t('index.part3.title2')}}
                  </p>
              </div>
          </div>
      </div>
      -->
      <div class="section-four" >
          <div class="w1200">
              <div class="bbb"></div>
              <div class="section-four-left">
                  <div class="section-four-left-title">
                      <!-- Dual protection for account and privacy -->
                      {{$t('index.part4.title1')}}
                  </div>
                  <p class="section-four-left-p">
                      <!-- Login to exchanges with just one click - Hassle free and safe with no repetition of KYC processes. -->
                       {{$t('index.part4.title2')}}
                  </p>
              </div>
              <div class="section-four-right">
                  <img class="img1" src="../assets/images/home/aichaha.png" width="464" height="400"/>
                  <img class="img2" src="../assets/images/home/aichaha.png" width="320" height="320"/>
              </div>
          </div>
      </div>
      <div class="section-five" >
         <div class="w1200">
            <ul>
              <li>
                  <img src="../assets/images/home/yingjian1.png" />
                  <div>
                      <!-- Independent R&D -->
                        {{$t('index.part4.title3')}}
                  </div>
                  <p>
                      <!-- Software and hardware optimization and continuous hardware support and upgrades. -->
                       {{$t('index.part4.title4')}}
                  </p>
              </li>
              <li>
                  <img src="../assets/images/home/kaiyuandaima1.png" />
                  <div>
                      <!-- Open source code -->
                      {{$t('index.part4.title5')}}
                  </div>
                  <p>
                      <!-- Developer codes are accessible on Github with technicalities of the hardware development made public. -->
                      {{$t('index.part4.title6')}}
                  </p>
              </li>
              <li>
                  <img src="../assets/images/home/shengji1.png" />
                  <div>
                      <!-- Continuous upgrades -->
                      {{$t('index.part4.title7')}}
                  </div>
                  <p>
                      <!-- Continuous upgrades of both hardware and software. -->
                       {{$t('index.part4.title8')}}
                  </p>
              </li>
          </ul>
         </div>
      </div>
      <div class="section-six" >
          <div class="w1200 bg">
              <div class="section-six-title">
                  <!-- Open source software and hardware -->
                  {{$t('index.part5.title1')}}{{$t('index.part5.title2')}}
              </div>
              <p class="section-six-p">
                  <!-- The wallet software source code will be open source on GitHub, and hardware related technical details will be made publicly. -->
                    {{$t('index.part5.title3')}}
              </p>
              <div class="git">
                  <!-- VIEW GITHUB -->
                  <a href="https://github.com/tinkeyio" target="_blank" >{{$t('index.part5.title4')}}</a>
              </div>
          </div>
          <div class="w1200">
              <div class="partners" id="partners">
                  <!-- Partners -->
                  {{$t('index.part6.title1')}}
              </div>
              <ul>
                  <li>
                      <img src="../assets/images/home/bitark.png" />
                      <p>BITARK</p>
                  </li>
                  <li class="koall">
                      <img src="../assets/images/home/koall.png" />
                      <p>KOALL</p>
                  </li>
                  <li>
                      <img src="../assets/images/home/xunhu.png" />
                      <p>XUNHU</p>
                  </li>
              </ul>
              <ul class="partner2">
                  <li>
                      <img src="../assets/images/home/wbf.png" />
                      <p>WBF</p>
                  </li>
                  <li>
                      <img src="../assets/images/home/galaxy.png" />
                      <p>GALAXY BLOCK CAPITAL</p>
                  </li>
                  <li>
                      <img src="../assets/images/home/feng.png" />
                      <p>枫链资本</p>
                  </li>
              </ul>
          </div>
      </div>
      <div class="sction-seven" >
          <div class="w1200">
              <div class="sction-seven-left">
                  <div class="section-seven-title">Tinkey</div>
                  <p class="section-seven-p">
                      <!-- A hardware wallet that rewards you. Safeguarding your  transactions, mining machine, decentralized exchange, AI-powered trading tool all-in-one. -->
                         {{$t('index.part7.title1')}}
                  </p>
                  <router-link :to="{name:'shopIndex'}" class="danote">
                      <!-- Donate -->
                       {{$t('index.part1.title8')}}
                  </router-link>
              </div>
              <div class="sction-seven-right">
                  <img src="../assets/images/home/cp.png" />
              </div>
          </div>
      </div>
      <div class="section-eight" >
          <div class="w1200">
              <div class="section-eight-left">
                  <div class="title">
                      <!-- Sign up for our newsletter -->
                      {{$t('index.part8.title1')}}
                  </div>
                  <div class="address">
                      <input /> <span>{{$t('index.part8.title3')}}</span>
                  </div>
                  <div class="contact">
                        <a href="https://medium.com/tinkey" target="_blank" class="social-icon w-inline-block">
                            <img src="../assets/images/index/medium.svg">
                        </a>
                        <a href="https://twitter.com/officialtinkey" target="_blank" class="social-icon w-inline-block">
                            <img src="../assets/images/index/twitter-icon.svg">
                        </a>
                        <a href="https://t.me/tinkeyio" target="_blank" class="social-icon w-inline-block">
                            <img src="../assets/images/index/telegram-icon.svg">
                        </a>
                        <a href="mailto:support@tinkey.io" class="social-icon w-inline-block">
                            <img src="../assets/images/index/email-icon-white.svg" class="image-12">
                        </a>
                        <a href="javascript:;" class="weixin-icon w-inline-block">
                            <img src="../assets/images/weixin-icon.png" class="image-12">
                           <div class="image-1">
                              <img src="../assets/images/weixin.jpg" class="images1"/>
                           </div>
                        </a>
                  </div>
              </div>
              <div class="section-eight-right">
                  <ul>
                      <li>
                          <b>{{$t('index.part8.title6')}}</b>
                          <span @click="scrollTo('intro')">{{$t('index.part8.title7')}}</span>
                          <span @click="scrollTo('features')">{{$t('index.part8.title8')}}</span>
                          <span @click="scrollTo('partners')">{{$t('index.part8.title9')}}</span>
                      </li>
                      <li>
                          <b>{{$t('index.part8.title6')}}</b>
                          <span >
                              <router-link :to="{name:'login'}">
                                {{$t('index.part8.title11')}}
                              </router-link>
                              </span>
                          <span>
                              <router-link :to="{name:'register'}">
                                    {{$t('index.part8.title12')}}
                              </router-link>
                          </span>
                      </li>
                      <li>
                          <b>{{$t('index.part8.title15')}}</b>
                          <span>{{$t('index.part8.title13')}}</span>
                          <span>{{$t('index.part8.title14')}}</span>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <div class="footer" >
          <div class="w1200">
              <span>Copyright © Tinkey. All Rights Reserved.</span>
              <span>A hardware wallet that rewards you</span>
          </div>
      </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import utils from '@/assets/js/utils'
import api from '@/api/api'
export default {
  data () {
    return {
      showLang: false,
      timeoutId: null,
      lockHeader: false,
      email: '',
      active: 'intro',
      isMobile: utils.isMobile,
      iSphone: false
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
    },
    appInfo () {
      switch (this.getLang) {
        case 'en':
          return {
            url: '/static/TINKEY MP1.4-EN.pdf',
            name: 'TINKEY MP1.4-EN.pdf'
          }
        case 'zh':
          return {
            url: '/static/TINKEY MP1.4-CN.pdf',
            name: 'TINKEY MP1.4-CN.pdf'
          }
        case 'ko':
          return {
            url: '/static/TINKEY MP1.4-KO.pdf',
            name: 'TINKEY MP1.4-KR.pdf'
          }
        default:
          return {}
      }
    }
  },
  created () {
    window.$(window).unbind('scroll.index').bind('scroll.index', () => {
      this.lockHeader = window.$(window).scrollTop() >= 50
    })
    this.$nextTick(() => {
      window.Webflow.require('navbar').ready()
      window.Webflow.require('ix').init([{
        'slug': 'fade-in-on-load',
        'name': 'Fade in on load',
        'value': {
          'style': {'opacity': 0, 'x': '0px', 'y': '24px', 'z': '0px'},
          'triggers': [{
            'type': 'load',
            'stepsA': [{
              'title': 'Move up on load',
              'opacity': 1,
              'transition': 'transform 900ms ease-out-quart 0ms, opacity 900ms ease 0ms',
              'x': '0px',
              'y': '0px',
              'z': '0px'
            }],
            'stepsB': []
          }]
        }
      }, {
        'slug': 'fade-in-on-scroll',
        'name': 'Fade in on scroll',
        'value': {
          'style': {'opacity': 0, 'x': '0px', 'y': '24px', 'z': '0px'},
          'triggers': [{
            'type': 'scroll',
            'offsetBot': '30%',
            'stepsA': [{
              'opacity': 1,
              'transition': 'transform 900ms ease-out-quart 0ms, opacity 900ms ease 0ms',
              'x': '0px',
              'y': '0px',
              'z': '0px'
            }],
            'stepsB': []
          }]
        }
      }, {
        'slug': 'fade-in-on-load-2',
        'name': 'Fade in on Load 2',
        'value': {
          'style': {'opacity': 0, 'x': '0px', 'y': '30px', 'z': '0px'},
          'triggers': [{
            'type': 'load',
            'stepsA': [{
              'wait': 200
            }, {
              'display': 'block',
              'opacity': 1,
              'transition': 'transform 500ms ease 0ms, opacity 500ms ease 0ms',
              'x': '0px',
              'y': '0px',
              'z': '0px'
            }],
            'stepsB': []
          }]
        }
      }, {
        'slug': 'fade-in-on-load-3',
        'name': 'Fade in on Load 3',
        'value': {
          'style': {'opacity': 0},
          'triggers': [{
            'type': 'load',
            'stepsA': [{
              'wait': 600
            }, {
              'display': 'block',
              'opacity': 1,
              'transition': 'opacity 500ms ease 0ms'
            }],
            'stepsB': []
          }]
        }
      }, {
        'slug': 'openthings',
        'name': 'openthings',
        'value': {
          'style': {},
          'triggers': []
        }
      }])

      if (this.$route.params.position) {
        setTimeout(() => {
          this.scrollTo(this.$route.params.position)
        }, 100)
      }
    })
  },
  methods: {
    tooglNav () {
      this.iSphone = !this.iSphone
    },
    donate () {
      this.$router.push({name: 'shopIndex'})
    },
    ...mapActions(['setLang', 'setApiToken']),
    setLanguage (lang) {
      this.showLang = false
      this.setLang(lang)
      this.$i18n.locale = lang
    },
    logout () {
      this.setApiToken(null)
    },
    invalid () {
      let email = this.$refs.email
      if (email.validity.valueMissing) {
        email.setCustomValidity(this.$t('error_code.emailRequired'))
      } else if (email.validity.typeMismatch) {
        email.setCustomValidity(this.$t('error_code.email'))
      } else {
        email.setCustomValidity('')
      }
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
    scrollTo (position) {
      this.active = position
      if (position === 'intro') {
        window.$('html,body').animate({'scrollTop': 0})
      } else if (position === 'features') {
        window.$('html,body').animate({'scrollTop': window.$('#features').offset().top - 50})
      } else if (position === 'partners') {
        window.$('html,body').animate({'scrollTop': window.$('#partners').offset().top - 200})
      }
    },
    addEmailSubscriber () {
      api.addEmailSubscriber({
        email: this.email
      }, (res) => {
        this.email = ''
        Vue.$koallTipBox({icon: 'success', message: this.$t(`error_code.ADD_EMAIL_SUBSCRIBER_SUCCESS`)})
      }, (msg) => {
        Vue.$koallTipBox({icon: 'notification', message: this.$t(`error_code.${msg}`)})
      })
      return false
    }
  }
}
</script>

<style scoped>
.nav-link-2>div{color: rgba(153,153,153,1);}
.index-container{-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;
  height: 100%;margin: 0;min-height: 100%;background-color: #fff;
  font-family: Arial, sans-serif;font-size: 14px;line-height: 20px;color: #333;}
.header{height: 60px;line-height: 60px;background: #1b1c21;display: flex;position: fixed;width: 100%;z-index: 888;}
.header-all{margin-left: 30px;margin-right: 30px;    display: flex;justify-content: space-between;width: 100%;}
.header-left{display: flex;}
.header-left img{margin-top: 8px;}
.nav{margin-left: 120px;text-transform:uppercase;}
.nav a{display:inline-block;margin-right:30px;padding:0 4px;height:30px;line-height:30px;position: relative;color: rgba(153,153,153,1);}
.nav a:hover::after,.nav a.active::after{content: "";display: inline-block;width: 100%;height: 2px;background: #fff; position: absolute;left:0;bottom: -8px;}
.w-nav-menu>a{margin-right: 40px;color: rgba(153,153,153,1);text-transform:uppercase;}
.dropdown > div{text-transform:uppercase;}
.dropdown-list{overflow: hidden;margin-top: 10px;border-radius: 3px;background-color: #fff;box-shadow: 0 0 30px 0 rgba(0,0,0,.1);    position: absolute;right: 4px;top: 51px;}
.dropdown-list a{display: block;line-height: 33px;padding: 5px 20px;color: #000;}
.dropdown-list a:hover{background: #1b1c21;color: #fff;}
.w-nav-menu{display: flex;}
.w1200{width: 1200px;margin: 0  auto;}
.section-one{background: url(../assets/images/home/beijingdiwen.png) no-repeat; height: 785px;padding-top: 150px; background-size: cover;}
.section-one-titile{font-size: 90PX;color: #FFF;line-height: 100px;width: 65%;}
.section-one-safe{line-height: 58px;width: 65%;font-size:36px;font-family:Humanist777BT-BlackCondensedB;color:rgba(204,204,204,1);}
.section-one-btn {display: flex;margin-top: 100px;}
.section-one-btn a{padding: 10px 35px;border-radius: 5px;margin-right: 20px;}
.section-one-btn a.donate{background:#898c93; }
.section-one-btn a:hover{background: #898c93;}
.features {padding: 60px 0px;text-align: center;background: #fff;}
.features div{height:60px;line-height: 60px;font-size:48px;font-family:Humanist777BT-BlackCondensedB;color:rgba(51,51,51,1);}
.features p{height:35px;line-height: 35px;font-size:24px;font-family:Humanist777BT-BlackCondensedB;color:rgba(153,153,153,1);}

.section-two{padding: 100px 0px 255px 0px;position: relative;background: #fff;overflow: hidden;}
.section-two-right{}
.section-two-right img{position: absolute;z-index: 8;right: 300px;top: 40px;}
.section-two .w1200{display: flex;justify-content: space-between;}
.section-two-left{width: 40%;margin-top: 60px;position: relative;z-index: 88;}
.section-two-left-title{height:60px;line-height: 60px;font-size:36px;font-family:Humanist777BT-BlackCondensedB;color:rgba(51,51,51,1);}
.section-two-left-p{font-size:24px;line-height: 30px;font-family:Humanist777BT-BlackCondensedB;color:rgba(153,153,153,1);}
.section-three,.section-four{background: #fff;}
.section-three-title{font-size:36px;font-family:Humanist777BT-BlackCondensedB;color:rgba(102,102,102,1);}
.section-three-p{width: 375px; height:103px;line-height: 30px;font-size:24px;font-family:Humanist777BT-BlackCondensedB;color:rgba(153,153,153,1);}
.section-three .w1200{display: flex;justify-content: space-between;}
.section-three-right{margin-left: 220px;margin-top: 68px;}
.section-three-title{height:60px;line-height: 60px;font-size:36px;font-family:Humanist777BT-BlackCondensedB;color:rgba(51,51,51,1);}
/* .section-three-p{font-size:24px;line-height: 30px;font-family:Humanist777BT-BlackCondensedB;color:rgba(153,153,153,1);} */

.section-four{padding: 100px 0px 200px 0px;overflow: hidden;}
.section-four .w1200{display: flex;justify-content: space-between;}
.section-four-left{width: 60%;margin-top: 90px;position: relative;z-index: 88;}
.section-four-left-title{height:60px;line-height: 60px;font-size:36px;font-family:Humanist777BT-BlackCondensedB;color:rgba(51,51,51,1);}
.section-four-left-p{font-size:24px;line-height: 30px;font-family:Humanist777BT-BlackCondensedB;color:rgba(153,153,153,1);}
.section-four-right{position: relative;z-index: 89;}
.section-four-right .img2{display: none;}
.section-four-right .img1{display: block;}

.section-five{height: 300px;background: #ffffff;width: 100%;position: relative;}
.section-five ul {display: flex;    position: absolute;top: -90px;}
.section-five ul li{width: 310px;height: 300px; background: #fff;margin-left: 45px;padding: 18px 20px;border-radius: 8px;box-shadow: 0px 8px 16px #ccc;}
.section-five ul li:first-child{margin-left: 0px;}
/* .section-five ul li:nth-child(1){background:#fff url(../assets/images/home/yingjian2.png) no-repeat   147px 48px;}
.section-five ul li:nth-child(2){background:#fff url(../assets/images/home/kaiyuandaima2.png) no-repeat   168px 48px;}
.section-five ul li:nth-child(3){background:#fff url(../assets/images/home/shengji2.png) no-repeat   168px 48px;} */
.section-five ul li>div{font-size:30px;font-family:Humanist777BT-BlackCondensedB;color:rgba(51,51,51,1);line-height: 53px;}
.section-five ul li>p{height:46px;font-size:18px;font-family:Humanist777BT-BlackCondensedB;color:rgba(102,102,102,1);line-height: 35px;}

.section-six{text-align: center;padding: 90px 0px 180px 0px;}
.section-six-title{width: 850px;margin: 0 auto;line-height: 68px; font-size:48px;font-family:Humanist777BT-BlackCondensedB;color:rgba(51,51,51,1);}
.section-six-p{width: 786px;margin: 0 auto;line-height: 42px;  font-size:24px;font-family:Humanist777BT-BlackCondensedB;color:rgba(153,153,153,1);}
.git{width:180px; margin: 0 auto; height:60px;line-height: 60px;cursor: pointer;margin-top: 30px; background:rgba(46,50,54,1);border-radius:4px;color: #fff;font-size: 24px;}
.section-six ul {display: flex; justify-content: space-between;    LINE-HEIGHT: 50PX;align-items: center;}
.partner2{margin-top: 30px;}
.partners{font-size:48px;font-family:Humanist777BT-BlackCondensedB;color:rgba(51,51,51,1);line-height: 250px;}
.section-six ul li.koall p{margin-top: 19px;}
.section-six ul li.koall img{margin-top: 20px;}
.section-six .bg{background: url(../assets/images/home/biejing3.png) no-repeat center / cover;background-size: 100%; padding-bottom: 70px;padding-top: 86px;}

.sction-seven{background: url(../assets/images/home/beijing_2.png) no-repeat;position: relative;height: 400px;}
.sction-seven .w1200{display: flex;justify-content: space-between;position: relative;}
.section-seven-title{font-size:48px;font-family:Humanist777BT-BlackCondensedB;color:#333333;line-height: 74px;margin-top: 40px;}
.section-seven-p{font-size:24px;line-height: 46px;margin-bottom: 60px;font-family:Humanist777BT-BlackCondensedB;color:#666666;}
.danote{padding: 22px 68px;background: #2e3236;border-radius: 8px;font-size:24px;font-family:Humanist777BT-BlackCondensedB;color:rgba(255,255,255,1);}
.sction-seven-left{width: 50%;}
/* .sction-seven-right img{position: absolute;} */
.sction-seven-right{width: 50%;}
.sction-seven-right img{position: absolute;top: -122px;right: 50px;}
.section-eight{background: #414653;}
.section-eight-left{}
.section-eight-right{margin-bottom: 50px;}

.section-eight-left .title{font-size:24px;margin-top: 40px;line-height: 38px;font-family:Humanist777BT-BlackCondensedB;color:rgba(255,255,255,1);}
.section-eight-left input{width:604px;height:50px;background:rgba(93,99,115,1);text-indent: 10px;font-size:24px;    font-family:Humanist777BT-BlackCondensedB;color:rgba(51,51,51,1);}
.section-eight-left span{font-size:24px;font-family:Humanist777BT-BlackCondensedB;color:rgba(255,255,255,1);}
.address{position: relative;margin-top: 10px;}
.address span{position: absolute;cursor: pointer;top: 16px;right: 15px;z-index: 8;}
.section-eight .w1200{display: flex;justify-content: space-between;}
.section-eight-right ul li b{font-size:24px;display: block;line-height: 44px;font-family:Humanist777BT-BlackCondensedB;color:rgba(255,255,255,1);}
.section-eight-right ul li span{font-size:24px;display: block;line-height: 40px;cursor: pointer;font-family:Humanist777BT-BlackCondensedB;
color:rgba(153,153,153,1);}
.section-eight-right ul li span:hover{color: #fff;}
.section-eight-right ul li span a{color: rgba(153,153,153,1);}
.section-eight-right ul li span a:hover{color: #fff;}
.section-eight-right ul {display: flex;margin-top: 50px;}
.section-eight-right ul li{    margin-left: 34px;}
.footer {height: 66px;line-height: 66px;background: #1b1c21;}
.footer .w1200{display: flex;justify-content: space-around}
.footer .w1200 span{font-size:16px;font-family:Humanist777BT-BlackCondensedB;color:rgba(255,255,255,1);}
.aaa{height:313px;width:55%;background: linear-gradient(to right, #fcfcfc , #f6f6f6);position: absolute;right: 0px;z-index: 3}
.bbb{height:313px;width:60%;background: linear-gradient(to right,  #f6f6f6, #fcfcfc );position: absolute;left: 0px;z-index: 3}
.weixin-icon .images1{display: none }
.contact{margin-top: 20px;}
.contact a{margin-right: 20px;display: inline-block;text-align: center;line-height: 40px; width: 40px;height: 40px; background: #333333;}
.weixin-icon:hover .images1{display: block; }
.image-1 img{position: absolute;top: -472px;z-index:10;}
.image-1{position: relative;}
/* .transten::after{content: '';width: 274px;height: 316px;border-top-left-radius: 6px;position: absolute;font-size: 18px;color: #fefefe;}
.transten::before{content: '';width: 0;height: 0;border-width: 0 0 314px 316px; border-style: solid;border-color: transparent green #fafafa  transparent; position: absolute;top: 0;left: -308px;} */

@media only screen and (min-width: 320px) and (max-width: 736px) {
    .header-left{width: 100%;justify-content: space-between;}
    .nav,.w-nav-menu{display: none;}
    .section-one{padding: 100px 0px;height: auto;}
    .section-one-titile{font-size: 35px;width: 100%;line-height: 30px;}
    .section-one .w1200{width: auto;text-align: center;margin-left: 20px;margin-right: 20px;}
    .section-one-btn a{display: block;margin-top: 10px;}
    .section-one-safe{font-size: 20px;line-height: 28px;width: 100%;margin-top: 30px;}
    .section-one-btn{display: block;text-align: center;}
    .features .w1200{width: auto;}
    .features div{font-size: 28px;}
    .features p{font-size: 14px;}
    .section-one-btn{margin-top: 50px;}

    .section-two .w1200{width: auto;display: block;text-align: center}
    .section-two-left{width: 100%;margin-top: 10px;}
    .section-two-left-title{font-size: 28px;}
    .section-two-left-p{font-size: 20px;line-height: 30px;}
    .section-two-right img{position: relative;right: 0px;top: 0px;width: 50%;}
    .section-two-right{width: 100%;}
    /* .section-two .w1200{display: block; } */
    .aaa{width: auto;}
    .section-two{padding: 0px 0px 0px 0px}
    .section-three .w1200{display: block;width: auto;text-align: center;}
    .section-three-left img{width: 100%;}
    .section-three-right{margin-left: 0px;}
    .section-three-p{width: auto;font-size: 20px;margin-left: 8px;margin-right: 8px;}
    .section-three-title{font-size: 28px;}
    .section-four .w1200{display: block;width: auto;}
    .section-four-left-title{font-size: 28px;text-align: center;line-height: 32px;}
    .bbb{width: auto;}
    .section-four-left{width: auto;margin-top: 50px;}
    .section-four-left-p{width: auto;font-size: 18px;text-align: center;margin-left: 20px;margin-right: 20px;padding-top: 10px;padding-bottom: 20px;}
    .section-four-right{width: 100%;text-align: center;}
    .section-four-right .img1{display: none}
    .section-four-right .img2{display: block;margin: 0 auto;}
    .section-five .w1200{display: block;width: auto;}
    .section-five ul{display: block;text-align: center;position: relative;top:0px;}
    .section-five ul li{margin-left: 0px;}
    .section-five{height: auto;overflow: hidden;}
    .section-six .w1200{display: block;width: auto;margin-left: 10px;margin-right: 10px;}
    .section-six .bg{padding-bottom: 20px;}
    .partners{line-height: 180px;}
    .section-six-title{width: auto;font-size: 30px;line-height: 40px;}
    .section-six{padding: 50px 0px;}
    .section-six-p{width: auto;font-size: 20px;}
    .section-six ul{display: block;}
    .sction-seven .w1200{width: auto;display: block;}
    .sction-seven-left{display: block;width: 100%;text-align: center;}
    .sction-seven-right{width: 100%;text-align: center;}
    .sction-seven-right img{position: relative;top: 50px;right: 0px;}
    .sction-seven{height: auto;}
    .section-eight .w1200{display: block;width: auto;margin-left: 10px;margin-right: 10px;}
    .section-eight-left input{width: 98%;}
    .section-seven-p{font-size: 21px;line-height: 32px;padding-bottom: 40px;margin-left: 8px;margin-right: 8px;}
    .danote{padding: 15px 30px;}
    .footer .w1200{width: auto;display: block;}
    .footer .w1200 span{display: block;}
    .footer{height: 132px;text-align: center;}
    .section-four{padding: 0px 0px 50px 0px;}
    .section-five ul li{width: auto;margin-top: 10px;margin: 10px;}
    .section-five ul li:first-child{margin: 10px;margin-top: 20px;}
    .section-eight-left{overflow: hidden;}
    .section-eight-right{margin-bottom: 0px;}
    .contact{text-align: center;}
    .section-eight-right ul li span{font-size: 18px;line-height: 30px;}
    .toogle{display: inline-block; width: 40px;height: 38px;border-radius: 8px;background: #fff url(../assets/images/home/directory.png) no-repeat;background-size: 40px; margin-top: 10px;}
    .iphone-nav a{display: block;color: #000;}
    .iphone-nav {position: absolute;right: 0px;border-radius: 10px; line-height: 36px;top: 60px;width: 100%;background: #fff;text-align: center;}
    .iphone-nav a:hover{background:#343040 ;color: #fff;}
    .nav{display: none}
    .iphone-nav>.w-nav-menu{display: block;}
    .dropdown-list{top: 240px;width: 100%;}
    .w-nav-menu>a{margin-right: 0px;}
    .section-eight-right ul{justify-content: space-around}
}

@media only screen and (min-width: 736px) and (max-width: 980px) {
     .toogle{display: inline-block; width: 40px;height: 38px;border-radius: 8px; background:#fff url(../assets/images/home/directory.png) no-repeat;background-size: 40px;margin-top: 10px;}
     .w-nav-menu{display: none;}
     .nav{display: none;}
        .section-one{padding: 100px 0px;height: auto;}
     .section-one-titile{font-size: 68px;width: 100%;}
     .section-one-safe{width: 100%;}
     .section-one .w1200{width: auto;margin-left: 20px;margin-right: 20px;}
     .features .w1200{width: auto;}
     .section-two{padding: 100px 0px 155px 0px}
     .section-four{padding: 50px 0px 100px 0px}
     .section-two .w1200{display: block;width: auto;}
     .section-two-left{width: 100%;text-align: center;margin-top: 330px;}
     .section-two-right img{top: 250px;}
     .aaa{width: auto;}
     .section-two-right img{top: 7px;right: 200px;}
    .section-three .w1200{width: auto;display: block;text-align: center;}
    .section-three-right{margin-left: 0px;text-align: center;}
    .section-three-p{width: auto;text-align: center;}
    .section-four .w1200{display: block;width: auto;}
    .section-four-left{width: 100%;text-align: center;}
    .section-four-right .img1{margin: 0 auto;margin-top: 20px;}
    .bbb{width: auto;}
    .section-five .w1200{display: block;width: auto;margin: 20px;}
    .section-five .w1200 ul {display: block}
    /* .section-five{height: auto;} */
    .section-five ul li{margin: 0 auto;text-align: center;}
    .section-five ul li{width: auto;margin: 20px;}
    .section-five ul{top: 0px;}
    .section-five{height: 1200px;}
    .section-five ul li{margin-left: 0px;}
    .section-six .w1200{display: block;width: auto;margin-left: 20px;margin-right: 20px;}
    .section-six-title,.section-six-p{width: auto;text-align: center;}
    .sction-seven .w1200{width: auto;display: block;margin-left: 20px;margin-right: 20px;}
    .sction-seven{height: 480px;}
    .section-eight .w1200{width: auto;display: block;}
    contact{text-align: center;}
    .section-eight{text-align: center;}
    .section-eight-left input{width: 655px;}
    .address span{right: 150px;}
    .section-eight-left{padding-top: 30px;}
    .section-eight-right{margin-bottom: 0px;}
    .footer .w1200{width: auto}
    .section-eight-left .title{margin-top: 0px;}
    .section-eight-right ul{justify-content: space-around;}
    .header-left {width: 100%;display: flex; justify-content: space-between;}
    .iphone-nav a{display: block;color: #000;}
    .iphone-nav {position: absolute;right: 0px;border-radius: 10px; line-height: 36px;top: 60px;width: 100%;background: #fff;text-align: center;}
    .iphone-nav a:hover{background:#343040 ;color: #fff;}
    .nav{display: none}
    .iphone-nav>.w-nav-menu{display: block;}
    .dropdown-list{top: 240px;width: 100%;}
    .w-nav-menu>a{margin-right: 0px;}
}
@media only screen and (min-width: 980px) and (max-width: 1200px) {
    .nav{margin-left: 18px;}
    .nav a{padding: 0px 22px;}
    .section-one{padding: 156px 0px 0px 0px;}
    .section-one-titile{width: 94%;}
    .section-one-safe{width: 94%;}
    .section-one .w1200,.section-two .w1200,.features .w1200{width: auto;margin-left: 30px;margin-right: 30px;}
    .section-two-right img{right: 162px;}
    .section-two-left-title{font-size: 28px;line-height: 48px;}
    .section-two-left-p{font-size: 20px;}
    .section-five ul li{margin-left: 30px;}
    .section-three .w1200{width: auto;margin-left: 30px;margin-right: 30px;}
    .section-three-right{margin-left: 0px;}
    .section-three-title{font-size: 32px;}
    .section-four .w1200{width: auto;margin-left: 30px;margin-right: 30px;}
    .section-four-left-title{font-size: 32px;line-height: 48px;}
    .section-four-left{margin-top: 43px;}
    .section-four-left-p{margin-top: 30px;}
    .section-five .w1200{width: auto;margin-left: 30px;margin-right: 30px;}
    .section-five ul li{width: 250px;}
    .section-five ul li>p{line-height: 28px;}
    .section-six .w1200,.sction-seven .w1200,.section-eight .w1200,.footer .w1200{width: auto;margin-left: 30px;margin-right: 30px;}
    .sction-seven{height: 429px;}
    .section-eight-left input{width: 400px;}
}
</style>
