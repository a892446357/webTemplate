<template>
  <div id="app" :class="{nopadding:nopadding}">
    <cheader v-if="showCheader"/>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import cheader from '@/components/header'
import api from '@/api/api'
export default {
  name: 'App',
  components: {
    cheader
  },
  computed: {
    ...mapGetters(['getApiToken']),
		showCheader(){
      return this.$route.name!=='index'&&this.$route.name!=='official-index'&&this.$route.name!=='official-wallet'
      &&this.$route.name!=='DApp'&&this.$route.name!=='official-appDownLoad'&&this.$route.name!=='official-product'&&this.$route.name!=='Mining'&&this.$route.name!=='official-identity'
      &&this.$route.name!='official-hc'&&this.$route.name!='join-us'&&this.$route.name!='about-us'&&this.$route.name!='contact-us'
		},
		nopadding(){
      return this.$route.name=='index'||this.$route.name=='official-index'||this.$route.name=='official-wallet'||this.$route.name=='DApp'
      ||this.$route.name=='official-appDownLoad'||this.$route.name=='official-product'||this.$route.name=='Mining'||this.$route.name=='official-identity'
      ||this.$route.name=='official-hc'||this.$route.name=='join-us'||this.$route.name=='about-us'||this.$route.name=='contact-us'
		}
  },
  watch: {
    getApiToken () {
      this.getUserInfoMethod()
      this.checkLogin()
    },
    $route () {
      this.checkLogin()
    }
  },
  created () {
    this.getUserInfoMethod()
    this.checkLogin()
  },
  methods: {
    ...mapActions(['setApiToken', 'setUserInfo']),
    checkLogin () {
      if (this.$route.meta.login && !this.getApiToken) {
        this.$router.push({name: 'index'})
      }
    },
    getUserInfoMethod () {
      if (!this.getApiToken) {
        return
      }
      api.getUserInfo((res) => {
        this.setUserInfo(res)
      }, () => {
        setTimeout(this.getUserInfoMethod, 1000)
      })
    }
  }
}
</script>

<style scoped>
#app {
  padding-top: 93px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app.nopadding{padding:0;}
</style>
