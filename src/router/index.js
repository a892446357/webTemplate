import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/index_new'
import Login from '@/pages/login'
import Register from '@/pages/register'
import personalCenter from '@/pages/personal_center/index'
import myProfile from '@/pages/personal_center/myprofile'
import invitationActivity from '@/pages/personal_center/invitation_activity'
import myTinkey from '@/pages/personal_center/mytinkey'
import shopIndex from '@/pages/shop/index'
import shopPay from '@/pages/shop/pay'
import officialAppDownLoad from '@/pages/official_web/appDownLoad'
import officialIdentity from '@/pages/official_web/Identity'
import Mining from '@/pages/official_web/Mining'
import officialProduct from '@/pages/official_web/product'
import DApp from '@/pages/official_web/DApp'
import program from '@/pages/personal_center/program'
import download from '@/pages/download'
import updatapwd from '@/pages/updatapwd'
import resetpwd from '@/pages/resetpwd'

/* tinkey官网 */
import officialIndex from '@/pages/official_web/index'
import officialWallet from '@/pages/official_web/wallet'
import officialHc from '@/pages/official_web/helpCenter'
import joinUs from '@/pages/official_web/joinUs'
import aboutUs from '@/pages/official_web/aboutUs'
import contactUs from '@/pages/official_web/contactUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/updatapwd',
      name: 'updatapwd',
      component: updatapwd
    },
    {
      path: '/resetPwd',
      name: 'resetPwd',
      component: resetpwd
    },
    {
      path: '/personalCenter',
      name: 'personalCenter',
      redirect: {name: 'myProfile'},
      component: personalCenter,
      meta: {login: true},
      children: [
        {
          path: 'myProfile',
          name: 'myProfile',
          meta: {login: true},
          component: myProfile
        },
        {
          path: 'invitationActivity',
          name: 'invitationActivity',
          meta: {login: true},
          component: invitationActivity
        },
        {
          path: 'myTinkey',
          name: 'myTinkey',
          meta: {login: true},
          component: myTinkey
        },
        {
          path: 'program',
          name: 'program',
          meta: {login: true},
          component: program
        }
      ]
    },
    {
      path: '/shop',
      name: 'shopIndex',
      component: shopIndex
    },
    {
      path: '/shopPay/:orderId',
      name: 'shopPay',
      meta: {login: true},
      component: shopPay
    },
    {
      path: '/official-identity',
      name: 'official-identity',
      component: officialIdentity
    },
    {
      path: '/official-appDownLoad',
      name: 'official-appDownLoad',
      component: officialAppDownLoad
    },
    {
      path: '/mining',
      name: 'Mining',
      component: Mining
    },
    {
      path: '/official-product',
      name: 'official-product',
      component: officialProduct
    },
    {
      path: '/dapp',
      name: 'DApp',
      component: DApp
    },
    {
      path: '/download',
      name: 'download',
      component: download
    },
		{
			path: '/official-index',
			name: 'official-index',
			component: officialIndex
		},	
		{
			path: '/official-wallet',
			name: 'official-wallet',
			component: officialWallet
		},	
		{
			path: '/official-hc',
			name: 'official-hc',
			component: officialHc
		},
		{
			path:'/join-us',
			name:'join-us',
			component:joinUs
		},
		{
			path:'/about-us',
			name:'about-us',
			component:aboutUs
		},
		{
			path:'/contact-us',
			name:'contact-us',
			component:contactUs
		},
    {
      path: '*',
      redirect: {
        name: 'index'
      }
    } // 未知页面转向首页
  ],
	scrollBehavior (to, from, savedPosition) {
		return {x: 0, y: 0}
	}
})
