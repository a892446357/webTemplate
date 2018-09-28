<template>
  <div class="index-container">
    <div data-collapse="medium" data-animation="default" data-duration="400" data-no-scroll="1" class="navbar w-nav index-container-header" :class="{'locked-background':lockHeader}">
    <div class="w-container">
      <a href="#" class="logo-block w-nav-brand">
        <img src="../assets/images/index/tinkey-new-logo-8.png" width="142" class="logo">
      </a>
      <nav role="navigation" class="nav-menu-2 w-nav-menu">
        <div>
          <a href="javascript:;" @click="scrollTo('intro')" class="nav-link-2 light w-nav-link">
            <!--intro-->
            {{$t('index.part9.title9')}}
          </a>
          <a href="javascript:;" @click="scrollTo('features')" class="nav-link-2 light w-nav-link">
            <!--features-->
            {{$t('index.part9.title2')}}
          </a>
          <a href="javascript:;" @click="scrollTo('partners')" class="nav-link-2 light w-nav-link">
            <!--partners-->
            {{$t('index.part9.title3')}}
          </a>
          <!--<router-link :to="{name:'shopIndex'}" class="nav-link-2 light w-nav-link">
            &lt;!&ndash;Donate&ndash;&gt;
            {{$t('index.part9.title4')}}
          </router-link>-->
        </div>
      </nav>
      <nav role="navigation" class="w-nav-menu">
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
      </nav>
      <div class="transparant-menu-button w-nav-button">
        <div class="w-icon-nav-menu"></div>
      </div>
    </div>
  </div>
  <div data-autoplay="true" data-loop="true" data-wf-ignore="true" data-poster-url="https://uploads-ssl.webflow.com/5b49c684d9554344d01b37ab/5b4c7a9ad95543d8151cad47_blockchain highspeed-poster-00001.jpg" data-video-urls="https://uploads-ssl.webflow.com/5b49c684d9554344d01b37ab/5b4c7a9ad95543d8151cad47_blockchain highspeed-transcode.webm,https://uploads-ssl.webflow.com/5b49c684d9554344d01b37ab/5b4c7a9ad95543d8151cad47_blockchain highspeed-transcode.mp4" class="hero-video w-background-video w-background-video-atom">
    <video v-if="!isMobile" autoplay="" loop="" style="background-image:url(&quot;https://uploads-ssl.webflow.com/5b49c684d9554344d01b37ab/5b4c7a9ad95543d8151cad47_blockchain highspeed-poster-00001.jpg&quot;)" muted="" data-wf-ignore="true">
      <source src="https://uploads-ssl.webflow.com/5b49c684d9554344d01b37ab/5b4c7a9ad95543d8151cad47_blockchain highspeed-transcode.webm" data-wf-ignore="true">
      <source src="https://uploads-ssl.webflow.com/5b49c684d9554344d01b37ab/5b4c7a9ad95543d8151cad47_blockchain highspeed-transcode.mp4" data-wf-ignore="true">
    </video>
    <div class="hero-overlay-block">
      <div class="container hero-container w-hidden-main w-hidden-medium w-hidden-small w-hidden-tiny w-container">
        <h1 data-ix="fade-in-on-load-2" class="hero-main-title">
          <!--A Purse That Makes Money-->
          {{$t('index.part1.title1')}}
        </h1>
        <h2 data-ix="fade-in-on-load-3" class="hero-main-title subtitle">
          <!--Your proprietary trading bodyguard, mining machine, decentralized exchange and earn money AI-->
          {{$t('index.part1.title2')}}
        </h2>
      </div>
      <div class="w-container">
        <div class="row-2 w-row">
          <div class="w-col w-col-6">
            <h1 class="main-heading">
              <!--A Hardware Wallet that Rewards You-->
              {{$t('index.part1.title3')}}
            </h1>
            <p class="main-subtitle">
              <!--Safeguarding your transactions, mining machine, decentralized exchange, AI-powered trading tool all-in-one.-->
              {{$t('index.part1.title4')}}
            </p>
            <div class="dlowBtn">
              <div class="div-block">
                <router-link :to="{name: 'shopIndex'}" class="button donate">
                  <!--Join-->
                  {{$t('index.part1.title8')}}
                </router-link>
                <div class="text-block">
                  <!--Buy Tinkey Hardware-->
                  {{$t('index.part1.title5')}}
                </div>
              </div>
              <div class="div-block-2">
                <router-link :to="{name: 'download'}" class="button hollow">
                <!--Android-->
                {{$t('index.part1.title6')}}
                </router-link>
                <div class="text-block">
                  <!--Download Tinkey App-->
                  {{$t('index.part1.title7')}}
                </div>
              </div>
              <div class="div-block-3">
                <a :href="appInfo.url" :download="appInfo.name" class="button hollow">
                <!--Android-->
                {{$t('index.part1.title9')}}
                </a>
                <div class="text-block">
                  <!--Download Tinkey App-->
                  {{$t('index.part1.title9')}}
                </div>
              </div>
            </div>
          </div>
          <div class="column-8 w-clearfix w-col w-col-6">
            <img src="../assets/images/index/tinkey1.png" data-ix="fade-in-on-load" width="346" srcset="../assets/images/index/tinkey1-p-500.png 500w, ../assets/images/index/tinkey1.png 589w" sizes="(max-width: 479px) 78vw, 346px" class="main-image">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-collapse="medium" data-animation="default" data-duration="400" class="navigation w-nav">
    <div class="w-container">
      <a href="index.html" class="brand-link w-nav-brand">
        <div class="logo-text">Metric</div>
      </a>
      <nav role="navigation" class="nav-menu w-nav-menu">
        <a href="#features" class="nav-link w-nav-link">Features</a>
        <a href="#pricing" class="nav-link w-nav-link">Pricing</a>
        <a href="#customers" class="nav-link w-nav-link">Customers</a>
        <a href="#" class="nav-link w-nav-link">Sign Up</a>
      </nav>
      <div class="nav-link menu w-nav-button">
        <div class="w-icon-nav-menu"></div>
      </div>
    </div>
  </div>
  <div data-animation="slide" data-duration="500" data-infinite="1" class="slider w-slider">
    <div class="w-slider-mask">
      <div class="slide _1 w-slide">
        <div class="w-container"></div>
      </div>
      <div class="slide _2 w-slide">
        <div class="w-container"></div>
      </div>
      <div class="slide _3 w-slide">
        <div class="w-container"></div>
      </div>
    </div>
    <div class="w-slider-arrow-left">
      <div class="w-icon-slider-left"></div>
    </div>
    <div class="w-slider-arrow-right">
      <div class="w-icon-slider-right"></div>
    </div>
    <div class="w-slider-nav w-round"></div>
  </div>
  <div class="section press">
    <div class="w-container">
      <div class="small-text">IN THE PRESS</div>
      <img src="../assets/images/index/logo_fastcompany.svg" width="70" class="press-logo">
      <img src="../assets/images/index/logo_forbes.svg" width="70" class="press-logo">
      <img src="../assets/images/index/logo_techcrunch.svg" width="70" class="press-logo">
      <img src="../assets/images/index/logo_wired.svg" width="70" class="press-logo">
      <img src="../assets/images/index/logo_zdnet.svg" width="70" class="press-logo">
    </div>
  </div>
  <div id="features" class="section">
    <div class="w-container">
      <h2 class="heading">
        {{$t('index.part2.title1')}}
        <!--A wallet with nice features-->
      </h2>
      <div class="section-subtitle">
        <!--Mine and trade tokens in the palm of your hands-->
        {{$t('index.part2.title2')}}
      </div>
      <div class="feature-row w-row">
        <div class="column-2 w-col w-col-6 w-col-tiny-tiny-stack">
          <div class="w-clearfix">
            <img src="../assets/images/index/mining-chahua.png" data-ix="fade-in-on-scroll" width="269" class="image-2">
          </div>
        </div>
        <div class="column-6 w-col w-col-6 w-col-tiny-tiny-stack">
          <div class="main-feature-group">
            <img src="../assets/images/index/iconmonstr-laptop-2-icon.svg" height="30" class="feature-icon">
            <h3 class="heading-2">
              <!--Verification-based mining-->
              {{$t('index.part2.title3')}}
            </h3>
            <p class="paragraph-2">
              <!--Get rewarded by using verification-based mining powered by Tinkey.-->
              {{$t('index.part2.title4')}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section feature-2">
    <div class="w-container">
      <div class="feature-row w-row">
        <div class="column-5 w-col w-col-6">
          <div class="main-feature-group">
            <img src="../assets/images/index/iconmonstr-download-13-icon.svg" height="30" class="feature-icon">
            <h3 class="heading-7">
              <!--AI-Powered Trading Tools-->
              {{$t('index.part3.title1')}}
            </h3>
            <p class="paragraph">
              <!--Our AI-powered tools provide multiple strategies, monitor trade status and execute trades.-->
              {{$t('index.part3.title2')}}
            </p>
          </div>
        </div>
        <div class="column-3 w-col w-col-6">
          <div><img src="../assets/images/index/ch2.png" data-ix="fade-in-on-scroll" width="287"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="w-container">
      <div class="feature-row w-row">
        <div class="column-4 w-col w-col-6">
          <div><img src="../assets/images/index/shenfenyanzheng-chahua.png" data-ix="fade-in-on-scroll" width="250"></div>
        </div>
        <div class="column-7 w-col w-col-6">
          <div class="main-feature-group">
            <img src="../assets/images/index/iconmonstr-smartphone-3-icon.svg" height="30" class="feature-icon">
            <h3 class="heading-8">
              <!--Dual protection for account and privacy-->
              {{$t('index.part4.title1')}}
            </h3>
            <p class="paragraph-3">
              <!--Login to exchanges with just one click - Hassle free and safe with no repetition of KYC processes.-->
              {{$t('index.part4.title2')}}
            </p>
          </div>
        </div>
      </div>
      <div class="small-features-row w-row">
        <div class="w-col w-col-4">
          <div class="feature">
            <img src="../assets/images/index/tinkey-icon-1.svg" height="30" class="feature-icon">
            <h3 class="heading-3">
              <!--Independent R&D-->
              {{$t('index.part4.title3')}}
            </h3>
            <p class="paragraph-4">
              <!--Software and hardware optimization and continuous hardware support and upgrades.-->
              {{$t('index.part4.title4')}}
            </p>
          </div>
        </div>
        <div class="w-col w-col-4">
          <div class="feature">
            <img src="../assets/images/index/iconmonstr-sitemap-7-icon.svg" height="30" class="feature-icon">
            <h3 class="heading-4">
              <!--Open source code-->
              {{$t('index.part4.title5')}}
            </h3>
            <p class="paragraph-5">
              <!--Developer codes are accessible on Github with technicalities of the hardware development made public.-->
              {{$t('index.part4.title6')}}
            </p>
          </div>
        </div>
        <div class="w-col w-col-4">
          <div class="feature">
            <img src="../assets/images/index/iconmonstr-save-9-icon.svg" height="30" class="feature-icon up">
            <h3 class="heading-5">
              <!--Continuous upgrades-->
              {{$t('index.part4.title7')}}
            </h3>
            <p class="paragraph-6">
              <!--Continuous upgrades of both hardware and software.-->
              {{$t('index.part4.title8')}}
            </p>
          </div>
        </div>
      </div>
      <!--
      <div class="div-block-4">
        <div class="feature _2">
          <img src="../assets/images/index/tinkey-icon-1.svg" height="30" class="feature-icon">
          <h3 class="heading-3">Independent software and hardware R&amp;D</h3>
          <p class="paragraph-4">Independent R&amp;D, Software and hardware optimization and Continuous hardware support and upgrades.</p>
        </div>
        <div class="feature _2"><img src="../assets/images/index/iconmonstr-sitemap-7-icon.svg" height="30" class="feature-icon">
          <h3 class="heading-4">Open source code</h3>
          <p class="paragraph-5">Developer codes are accessible on Github with technicalities of the hardware development made public.</p>
        </div>
        <div class="feature _2"><img src="../assets/images/index/iconmonstr-save-9-icon.svg" height="30" class="feature-icon up">
          <h3 class="heading-5">Continuous upgrades</h3>
          <p class="paragraph-6">Continuous upgrades of both hardware and software.</p>
        </div>
      </div>
      -->
    </div>
  </div>
  <div class="image-section ui-section _3">
    <div class="container w-container">
      <div class="info-block-left ui">
        <div class="section-title-wrapper full info">
          <h2 class="section-title">
            <strong><!--Open source-->{{$t('index.part5.title1')}} </strong><!--software and hardware-->{{$t('index.part5.title2')}}
          </h2>
        </div>
        <p class="paragraph-8">
          <!--The wallet software source code will be open source on GitHub, and hardware related technical details will be made publicly.-->
          {{$t('index.part5.title3')}}
        </p>
        <a href="https://github.com/tinkeyio" target="_blank" class="button-2 w-button">
          <!--VIEW Github-->
          {{$t('index.part5.title4')}}
        </a>
      </div>
      <div class="info-block-left ui flushright">
        <img src="../assets/images/index/wakuang.png" width="496" srcset="../assets/images/index/wakuang-p-500.png 500w, ../assets/images/index/wakuang-p-800.png 800w, ../assets/images/index/wakuang.png 992w" sizes="100vw" class="image-9">
      </div>
    </div>
  </div>
  <!--<div id="pricing" class="section purple">
    <div class="w-container">
      <h2>Plans &amp; Pricing</h2>
      <div class="section-subtitle">No credit card required. No risk,<strong class="bold-text">30-day money back guarantee</strong>!</div>
      <div class="w-row">
        <div class="w-col w-col-3">
          <div data-ix="fade-in-on-scroll" class="plan-wrapper">
            <h3>Starter</h3>
            <div class="price-point"><strong class="price-accent">$15</strong> /month</div>
            <div class="price-point"><strong class="price-accent">500</strong> Data Points</div>
            <div class="price-point"><strong class="price-accent">1</strong> Team Member</div>
            <div class="divider"></div>
            <div class="addl-feature"><strong>Email</strong> Support</div>
            <div class="addl-feature inactive">IOS and Android App</div>
            <div class="addl-feature inactive">Customizable Dashboard</div>
            <div class="addl-feature inactive">Metric API</div><a href="#" class="button in-pricing">Choose Plan</a></div>
        </div>
        <div class="w-col w-col-3">
          <div data-ix="fade-in-on-scroll" class="plan-wrapper">
            <h3>Professional</h3>
            <div class="price-point"><strong class="price-accent">$30</strong> /month</div>
            <div class="price-point"><strong class="price-accent">2000</strong> Data Points</div>
            <div class="price-point"><strong class="price-accent">1</strong> Team Member</div>
            <div class="divider"></div>
            <div class="addl-feature"><strong>Email</strong> Support</div>
            <div class="addl-feature"><strong>IOS</strong> and <strong>Android</strong> App</div>
            <div class="addl-feature inactive">Customizable Dashboard</div>
            <div class="addl-feature inactive">Metric API</div><a href="#" class="button in-pricing">Choose Plan</a></div>
        </div>
        <div class="w-col w-col-3">
          <div data-ix="fade-in-on-scroll" class="plan-wrapper">
            <h3>Startup</h3>
            <div class="price-point"><strong class="price-accent">$75</strong>/month</div>
            <div class="price-point"><strong class="price-accent">5000</strong>Data Points</div>
            <div class="price-point"><strong class="price-accent">3</strong>Team Member</div>
            <div class="divider"></div>
            <div class="addl-feature"><strong>Email</strong> Support</div>
            <div class="addl-feature"><strong>IOS</strong> and <strong>Android</strong> App</div>
            <div class="addl-feature"><strong>Customizable</strong> Dashboard</div>
            <div class="addl-feature inactive">Metric API</div><a href="#" class="button in-pricing">Choose Plan</a></div>
        </div>
        <div class="w-col w-col-3">
          <div data-ix="fade-in-on-scroll" class="plan-wrapper">
            <h3>Business</h3>
            <div class="price-point"><strong class="price-accent">$250</strong>/month</div>
            <div class="price-point"><strong class="price-accent">15000</strong>Data Points</div>
            <div class="price-point"><strong class="price-accent">10</strong>Team Member</div>
            <div class="divider"></div>
            <div class="addl-feature"><strong>Priority</strong> Support</div>
            <div class="addl-feature"><strong>IOS</strong> and <strong>Android</strong> App</div>
            <div class="addl-feature"><strong>Customizable</strong> Dashboard</div>
            <div class="addl-feature">Metric <strong>API</strong></div><a href="#" class="button in-pricing">Choose Plan</a></div>
        </div>
      </div>
      <div class="additional-contact">Need more Data Points or Team Members? Please <a href="#" class="page-link">contact us</a>.</div>
    </div>
  </div>-->
  <div class="section cta" id="partners">
    <div class="w-container">
      <h2 class="section-title _2">
        <!--Partners-->
        {{$t('index.part6.title1')}}
      </h2>
      <div class="row w-row flex-partners">
        <div class="column-10 w-col w-col-3 w-col-tiny-tiny-stack flex-partners">
          <img src="../assets/images/index/bitark.png" width="75" class="image-5">
          <div class="text-block-3 _2">BITARK</div>
        </div>
        <div class="column w-col w-col-3 w-col-tiny-tiny-stack flex-partners">
          <img src="../assets/images/index/wbf.png" width="75" class="image-6">
          <div class="text-block-3">WBF</div>
        </div>
        <div class="column-11 w-col w-col-3 w-col-tiny-tiny-stack flex-partners">
          <img src="../assets/images/index/koll.png" width="75" class="image-5">
          <div class="text-block-3">KOALL</div>
        </div>
        <div class="column-12 w-col w-col-3 w-col-tiny-tiny-stack flex-partners">
          <img src="../assets/images/index/xunhuxinxi-icon.png" width="75" class="image-6">
          <div class="text-block-3">XUNHU</div>
        </div>
        <div class="column-12 w-col w-col-3 w-col-tiny-tiny-stack flex-partners">
          <img src="../assets/images/galaxyblockcapital-icon.png" width="75" class="image-6" style="margin-top:10px;">
          <div class="text-block-3">GALAXY BLOCK CAPITAL</div>
        </div>
      </div>
    </div>
  </div>
  <div class="image-section ui-section _2">
    <div>
      <div class="container w-container">
        <div class="info-block-left ui flushright"></div>
        <div class="row-3 w-row">
          <div class="column-14 w-col w-col-6 w-col-tiny-tiny-stack">
            <h1 class="headhero inverse">Tinkey</h1>
            <div class="txticonz escr">
              <!--A hardware wallet that rewards you. Safeguarding your transactions, mining machine, decentralized exchange, AI-powered trading tool all-in-one.-->
              {{$t('index.part7.title1')}}
            </div>
            <router-link :to="{name: 'shopIndex'}" class="button-2 w-button">
              <!--JOIN NOW-->
              {{$t('index.part7.title2')}}
            </router-link>
          </div>
          <div class="column-13 w-col w-col-6 w-col-tiny-tiny-stack">
            <div class="div-block-3">
              <img src="../assets/images/index/key2.png" width="80" class="image-10">
              <img src="../assets/images/index/02.png" width="183" srcset="../assets/images/index/02-p-500.png 500w, ../assets/images/index/02.png 528w" sizes="(max-width: 479px) 88vw, 183px" class="image-11">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--
  <div id="solution" class="hero _3 presastuff"></div>
  -->
  <div class="section footer">
    <div class="w-container">
      <div class="w-row">
        <div class="column-9 w-col w-col-6">
          <div class="footer-slogan">
            <!--Sign up for our newsletter-->
            {{$t('index.part8.title1')}}
          </div>
          <div class="newsletter-form w-form">
            <form id="wf-form-newsletter" name="wf-form-newsletter" data-name="Newsletter" class="w-clearfix" @submit="addEmailSubscriber">
              <!--Email Address-->
              <input ref="email" v-model="email" type="email" autocomplete="off" @invalid="invalid" @input="invalid" class="newsletter-field w-input" maxlength="256" name="email" data-name="Email" :placeholder="$t('index.part8.title2')" id="email" required>
              <!--Subscribe-->
              <input type="submit" :value="$t('index.part8.title3')" data-wait="Wait..." wait="Wait..." class="newsletter-button w-button">
            </form>
            <!--<div class="success-message w-form-done">
              <p>
                Thank you! You’ll receive an email shortly.
                {{$t('index.part8.title4')}}
              </p>
            </div>-->
            <!--<div class="w-form-fail">
              <p>
                Oops! Something went wrong while submitting the form :(
                {{$t('index.part8.title5')}}
              </p>
            </div>-->
          </div>
          <div class="social-icon-group">
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
              <em>
                <img src="../assets/images/weixin.jpg"/>
              </em>
              <img src="../assets/images/weixin-icon.png" class="image-12">
            </a>
          </div>
        </div>
        <div class="w-col w-col-2">
          <h4 class="footer-title">
            <!--HOME-->
            {{$t('index.part9.title1')}}
          </h4>
          <a href="javascript:;" @click="scrollTo('intro')" class="page-link in-footer">
            <!--Intro-->
            {{$t('index.part9.title9')}}
          </a>
          <a href="javascript:;" @click="scrollTo('features')" class="page-link in-footer">
            <!--Features-->
            {{$t('index.part9.title2')}}
          </a>
          <a href="javascript:;" @click="scrollTo('partners')" class="page-link in-footer">
            <!--Partners-->
            {{$t('index.part9.title3')}}
          </a>
          <!--<router-link :to="{name: 'shopIndex'}" class="page-link in-footer">
            &lt;!&ndash;Donate&ndash;&gt;
            {{$t('index.part9.title4')}}
          </router-link>-->
        </div>
        <div class="w-col w-col-2">
          <h4 class="footer-title">
            <!--Account-->
            {{$t('index.part9.title1')}}
          </h4>
          <router-link :to="{name: 'login'}" class="page-link in-footer">
            <!--Login-->
            {{$t('common.login')}}
          </router-link>
          <router-link :to="{name: 'register'}" class="page-link in-footer">
            <!--Register-->
            {{$t('common.registe')}}
          </router-link>
        </div>
        <div class="w-col w-col-2">
          <h4 class="footer-title">
            <!--Legal-->
            {{$t('index.part9.title6')}}
          </h4>
          <a href="#" class="page-link in-footer">
            <!--Privacy Policy-->
            {{$t('index.part9.title7')}}
          </a>
          <a href="#" class="page-link in-footer">
            <!--Terms of Use-->
            {{$t('index.part9.title8')}}
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="simple-white-footer">
    <div class="container w-container">
      <p class="bottom-footer-paragraph dark"><strong data-new-link="true">Copyright © Tinkey</strong>. All Rights Reserved. </p>
      <p class="bottom-footer-paragraph right dark">A hardware wallet that rewards you<a target="_blank" href="http://www.studiocorvus.com" class="bottom-footer-link color"></a></p>
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
      isMobile: utils.isMobile
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
            url: '/static/TINKEY MP1.4-KR.pdf',
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

<style lang="less" scoped>
.index-container /deep/ {
  -ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;
  height: 100%;margin: 0;min-height: 100%;background-color: #fff;
  font-family: Arial, sans-serif;font-size: 14px;line-height: 20px;color: #333;
.weixin-icon{position: relative;}
.weixin-icon em{position: absolute;bottom:20px;display:none;width:220px;height:200px;left:-85px;}
.weixin-icon em img{width:200px;height:200px;}
.weixin-icon:hover em{display:block;}
.index-container-header{position:fixed!important;z-index:9999!important;}
.flex-partners{display:flex;flex-direction:column;white-space:nowrap;justify-content:space-between;height:100px;}
.locked-background{background-image:linear-gradient(180deg,#443f54,#443f54)!important;}
article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary {display: block;}
audio,canvas,progress,video {display: inline-block;vertical-align: baseline;}
audio:not([controls]) {display: none;height: 0;}
[hidden],template {display: none;}
a{background-color: transparent;}
a:active,a:hover {outline: 0;}
abbr[title]{border-bottom: 1px dotted;}
b,strong {font-weight: bold;}
dfn {font-style: italic;}
h1{font-size: 2em;margin: 0.67em 0;}
mark {background: #ff0;color: #000;}
small {font-size: 80%;}
sub,sup {font-size: 75%;line-height: 0;position: relative;vertical-align: baseline;}
sup {top: -0.5em;}
sub {bottom: -0.25em;}
img {border: 0;}
svg:not(:root) {overflow: hidden;}
figure {margin: 1em 40px;}
hr {box-sizing: content-box;height: 0;}
pre {overflow: auto;}
code,kbd,pre,samp {font-family: monospace, monospace;font-size: 1em;}
button,input,optgroup,select,textarea {color: inherit;font: inherit;margin: 0;}
button {overflow: visible;}
button,select {text-transform: none;}
button,html input[type="button"],input[type="reset"] {-webkit-appearance: button;cursor: pointer;}
button[disabled],html input[disabled] {cursor: default;}
button::-moz-focus-inner,input::-moz-focus-inner {border: 0;padding: 0;}
input {line-height: normal;}
input[type="checkbox"],input[type="radio"] {box-sizing: border-box;padding: 0;}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {height: auto;}
input[type="search"] {-webkit-appearance: none;}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {-webkit-appearance: none;}
fieldset {border: 1px solid #c0c0c0;margin: 0 2px;padding: 0.35em 0.625em 0.75em;}
legend {border: 0;padding: 0;}
textarea {overflow: auto;}
optgroup {font-weight: bold;}
table {border-collapse: collapse;border-spacing: 0;}
td,th {padding: 0;}
@font-face {
  font-family: 'webflow-icons';
  src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBiUAAAC8AAAAYGNtYXDpP+a4AAABHAAAAFxnYXNwAAAAEAAAAXgAAAAIZ2x5ZmhS2XEAAAGAAAADHGhlYWQTFw3HAAAEnAAAADZoaGVhCXYFgQAABNQAAAAkaG10eCe4A1oAAAT4AAAAMGxvY2EDtALGAAAFKAAAABptYXhwABAAPgAABUQAAAAgbmFtZSoCsMsAAAVkAAABznBvc3QAAwAAAAAHNAAAACAAAwP4AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAQAAAAAwACAACAAQAAQAg5gPpA//9//8AAAAAACDmAOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYADQBvAAEAAAAAAAoAGgDSAAMAAQQJAAEAGgANAAMAAQQJAAIADgCdAAMAAQQJAAMAGgBVAAMAAQQJAAQAGgC4AAMAAQQJAAUAFgAyAAMAAQQJAAYAGgB8AAMAAQQJAAoANADsd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==") format('truetype');
  font-weight: normal;
  font-style: normal;
}
[class^="w-icon-"],
[class*=" w-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'webflow-icons' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.w-icon-slider-right:before {
  content: "\e600";
}
.w-icon-slider-left:before {
  content: "\e601";
}
.w-icon-nav-menu:before {
  content: "\e602";
}
.w-icon-arrow-down:before,
.w-icon-dropdown-toggle:before {
  content: "\e603";
}
.w-icon-file-upload-remove:before {
  content: "\e900";
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
img {
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
}
html.w-mod-touch * {
  background-attachment: scroll !important;
}
.w-block {
  display: block;
}
.w-inline-block {
  max-width: 100%;
  display: inline-block;
}
.w-clearfix:before,
.w-clearfix:after {
  content: " ";
  display: table;
}
.w-clearfix:after {
  clear: both;
}
.w-hidden {
  display: none;
}
.w-button {
  display: inline-block;
  padding: 9px 15px;
  background-color: #3898EC;
  color: white;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;
}
input.w-button {
  -webkit-appearance: button;
}
html[data-w-dynpage] [data-w-cloak] {
  color: transparent !important;
}
.w-webflow-badge,
.w-webflow-badge * {
  position: static;
  left: auto;
  top: auto;
  right: auto;
  bottom: auto;
  z-index: auto;
  display: block;
  visibility: visible;
  overflow: visible;
  overflow-x: visible;
  overflow-y: visible;
  box-sizing: border-box;
  width: auto;
  height: auto;
  max-height: none;
  max-width: none;
  min-height: 0;
  min-width: 0;
  margin: 0;
  padding: 0;
  float: none;
  clear: none;
  border: 0 none transparent;
  border-radius: 0;
  background: none;
  background-image: none;
  background-position: 0% 0%;
  background-size: auto auto;
  background-repeat: repeat;
  background-origin: padding-box;
  background-clip: border-box;
  background-attachment: scroll;
  background-color: transparent;
  box-shadow: none;
  opacity: 1.0;
  transform: none;
  transition: none;
  direction: ltr;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  font-size: inherit;
  line-height: inherit;
  font-style: inherit;
  font-variant: inherit;
  text-align: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-indent: 0;
  text-transform: inherit;
  list-style-type: disc;
  text-shadow: none;
  font-smoothing: auto;
  vertical-align: baseline;
  cursor: inherit;
  white-space: inherit;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
}
.w-webflow-badge {
  position: fixed !important;
  display: inline-block !important;
  visibility: visible !important;
  opacity: 1 !important;
  z-index: 2147483647 !important;
  top: auto !important;
  right: 12px !important;
  bottom: 12px !important;
  left: auto !important;
  color: #AAADB0 !important;
  background-color: #fff !important;
  border-radius: 3px !important;
  padding: 6px 8px 6px 6px !important;
  font-size: 12px !important;
  opacity: 1.0 !important;
  line-height: 14px !important;
  text-decoration: none !important;
  transform: none !important;
  margin: 0 !important;
  width: auto !important;
  height: auto !important;
  overflow: visible !important;
  white-space: nowrap;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);
}
.w-webflow-badge > img {
  display: inline-block !important;
  visibility: visible !important;
  opacity: 1 !important;
  vertical-align: middle !important;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
  margin-bottom: 10px;
}
h1 {
  font-size: 38px;
  line-height: 44px;
  margin-top: 20px;
}
h2 {
  font-size: 32px;
  line-height: 36px;
  margin-top: 20px;
}
h3 {
  font-size: 24px;
  line-height: 30px;
  margin-top: 20px;
}
h4 {
  font-size: 18px;
  line-height: 24px;
  margin-top: 10px;
}
h5 {
  font-size: 14px;
  line-height: 20px;
  margin-top: 10px;
}
h6 {
  font-size: 12px;
  line-height: 18px;
  margin-top: 10px;
}
p {
  margin-top: 0;
  margin-bottom: 10px;
}
blockquote {
  margin: 0 0 10px 0;
  padding: 10px 20px;
  border-left: 5px solid #E2E2E2;
  font-size: 18px;
  line-height: 22px;
}
figure {
  margin: 0;
  margin-bottom: 10px;
}
figcaption {
  margin-top: 5px;
  text-align: center;
}
ul,
ol {
  margin-top: 0px;
  margin-bottom: 10px;
  padding-left: 40px;
}
.w-list-unstyled {
  padding-left: 0;
  list-style: none;
}
.w-embed:before,
.w-embed:after {
  content: " ";
  display: table;
}
.w-embed:after {
  clear: both;
}
.w-video {
  width: 100%;
  position: relative;
  padding: 0;
}
.w-video iframe,
.w-video object,
.w-video embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
fieldset {
  padding: 0;
  margin: 0;
  border: 0;
}
button,
html input[type="button"],
input[type="reset"] {
  border: 0;
  cursor: pointer;
  -webkit-appearance: button;
}
.w-form {
  margin: 0 0 15px;
}
.w-form-done {
  display: none;
  padding: 20px;
  text-align: center;
  background-color: #dddddd;
}
.w-form-fail {
  display: none;
  margin-top: 10px;
  padding: 10px;
  background-color: #ffdede;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
.w-input,
.w-select {
  display: block;
  width: 100%;
  height: 38px;
  padding: 8px 12px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.428571429;
  color: #333333;
  vertical-align: middle;
  background-color: #ffffff;
  border: 1px solid #cccccc;
}
.w-input:-moz-placeholder,
.w-select:-moz-placeholder {
  color: #999;
}
.w-input::-moz-placeholder,
.w-select::-moz-placeholder {
  color: #999;
  opacity: 1;
}
.w-input:-ms-input-placeholder,
.w-select:-ms-input-placeholder {
  color: #999;
}
.w-input::-webkit-input-placeholder,
.w-select::-webkit-input-placeholder {
  color: #999;
}
.w-input:focus,
.w-select:focus {
  border-color: #3898EC;
  outline: 0;
}
.w-input[disabled],
.w-select[disabled],
.w-input[readonly],
.w-select[readonly],
fieldset[disabled] .w-input,
fieldset[disabled] .w-select {
  cursor: not-allowed;
  background-color: #eeeeee;
}
textarea.w-input,
textarea.w-select {
  height: auto;
}
.w-select {
  background-image: -webkit-linear-gradient(white 0%, #f3f3f3 100%);
  background-image: linear-gradient(white 0%, #f3f3f3 100%);
}
.w-select[multiple] {
  height: auto;
}
.w-form-label {
  display: inline-block;
  cursor: pointer;
  font-weight: normal;
  margin-bottom: 0px;
}
.w-checkbox,
.w-radio {
  display: block;
  margin-bottom: 5px;
  padding-left: 20px;
}
.w-checkbox:before,
.w-radio:before,
.w-checkbox:after,
.w-radio:after {
  content: " ";
  display: table;
}
.w-checkbox:after,
.w-radio:after {
  clear: both;
}
.w-checkbox-input,
.w-radio-input {
  margin: 4px 0 0;
  margin-top: 1px \9;
  line-height: normal;
  float: left;
  margin-left: -20px;
}
.w-radio-input {
  margin-top: 3px;
}
.w-file-upload {
  display: block;
  margin-bottom: 10px;
}
.w-file-upload-input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -100;
}
.w-file-upload-default,
.w-file-upload-uploading,
.w-file-upload-success {
  display: inline-block;
  color: #333333;
}
.w-file-upload-error {
  display: block;
  margin-top: 10px;
}
.w-file-upload-default.w-hidden,
.w-file-upload-uploading.w-hidden,
.w-file-upload-error.w-hidden,
.w-file-upload-success.w-hidden {
  display: none;
}
.w-file-upload-uploading-btn {
  display: inline-block;
  font-size: 14px;
  font-weight: normal;
  cursor: pointer;
  margin: 0;
  padding: 8px 12px 8px 40px;
  border: 1px solid #cccccc;
  background-color: #fafafa;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBvcGFjaXR5PSIuMiIgZD0iTTE1IDMwYTE1IDE1IDAgMSAxIDAtMzAgMTUgMTUgMCAwIDEgMCAzMHptMC0zYTEyIDEyIDAgMSAwIDAtMjQgMTIgMTIgMCAwIDAgMCAyNHoiLz48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIG9wYWNpdHk9Ii43NSIgZD0iTTAgMTVBMTUgMTUgMCAwIDEgMTUgMHYzQTEyIDEyIDAgMCAwIDMgMTVIMHoiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgYXR0cmlidXRlVHlwZT0iWE1MIiBkdXI9IjAuNnMiIGZyb209IjAgMTUgMTUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB0bz0iMzYwIDE1IDE1IiB0eXBlPSJyb3RhdGUiLz48L3BhdGg+PC9zdmc+");
  background-position: 12px 50%;
  background-size: 20px 20px;
  background-repeat: no-repeat;
}
.w-file-upload-file {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  margin: 0;
  padding: 8px 9px 8px 11px;
  border: 1px solid #cccccc;
  background-color: #fafafa;
}
.w-file-upload-file-name {
  font-size: 14px;
  font-weight: normal;
  display: block;
}
.w-file-remove-link {
  margin-top: 3px;
  margin-left: 10px;
  width: auto;
  height: auto;
  padding: 3px;
  display: block;
  cursor: pointer;
}
.w-icon-file-upload-remove {
  margin: auto;
  font-size: 10px;
}
.w-file-upload-error-msg {
  display: inline-block;
  color: #ea384c;
  padding: 2px 0;
}
.w-file-upload-info {
  display: inline-block;
  line-height: 38px;
  padding: 0 12px;
}
.w-file-upload-label {
  display: inline-block;
  font-size: 14px;
  font-weight: normal;
  cursor: pointer;
  margin: 0;
  padding: 8px 12px 8px 40px;
  border: 1px solid #cccccc;
  background-color: #fafafa;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxNCI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTUuOTIgNS4wMmE0LjUgNC41IDAgMCAxIC4wOCA4Ljk1VjE0SDRhNCA0IDAgMSAxIDAtOCA2IDYgMCAwIDEgMTEuOTItLjk4ek0xMSA5aDNsLTQtNS00IDVoM3YyaDJWOXoiLz48L3N2Zz4=");
  background-position: 12px 50%;
  background-size: 20px 20px;
  background-repeat: no-repeat;
}
.w-icon-file-upload {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
.w-icon-file-upload-svg {
  width: 100%;
  height: 100%;
}
.w-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
}
.w-container:before,
.w-container:after {
  content: " ";
  display: table;
}
.w-container:after {
  clear: both;
}
.w-container .w-row {
  margin-left: -10px;
  margin-right: -10px;
}
.w-row:before,
.w-row:after {
  content: " ";
  display: table;
}
.w-row:after {
  clear: both;
}
.w-row .w-row {
  margin-left: 0;
  margin-right: 0;
}
.w-col {
  position: relative;
  float: left;
  width: 100%;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
}
.w-col .w-col {
  padding-left: 0;
  padding-right: 0;
}
.w-col-1 {
  width: 8.33333333%;
}
.w-col-2 {
  width: 16.66666667%;
}
.w-col-3 {
  width: 25%;
}
.w-col-4 {
  width: 33.33333333%;
}
.w-col-5 {
  width: 41.66666667%;
}
.w-col-6 {
  width: 50%;
}
.w-col-7 {
  width: 58.33333333%;
}
.w-col-8 {
  width: 66.66666667%;
}
.w-col-9 {
  width: 75%;
}
.w-col-10 {
  width: 83.33333333%;
}
.w-col-11 {
  width: 91.66666667%;
}
.w-col-12 {
  width: 100%;
}
.w-hidden-main {
  display: none !important;
}
@media screen and (max-width: 991px) {
  .w-container {
    max-width: 728px;
  }
  .w-hidden-main {
    display: inherit !important;
  }
  .w-hidden-medium {
    display: none !important;
  }
  .w-col-medium-1 {
    width: 8.33333333%;
  }
  .w-col-medium-2 {
    width: 16.66666667%;
  }
  .w-col-medium-3 {
    width: 25%;
  }
  .w-col-medium-4 {
    width: 33.33333333%;
  }
  .w-col-medium-5 {
    width: 41.66666667%;
  }
  .w-col-medium-6 {
    width: 50%;
  }
  .w-col-medium-7 {
    width: 58.33333333%;
  }
  .w-col-medium-8 {
    width: 66.66666667%;
  }
  .w-col-medium-9 {
    width: 75%;
  }
  .w-col-medium-10 {
    width: 83.33333333%;
  }
  .w-col-medium-11 {
    width: 91.66666667%;
  }
  .w-col-medium-12 {
    width: 100%;
  }
  .w-col-stack {
    width: 100%;
    left: auto;
    right: auto;
  }
}
@media screen and (max-width: 767px) {
  .w-hidden-main {
    display: inherit !important;
  }
  .w-hidden-medium {
    display: inherit !important;
  }
  .w-hidden-small {
    display: none !important;
  }
  .w-row,
  .w-container .w-row {
    margin-left: 0;
    margin-right: 0;
  }
  .w-col {
    width: 100%;
    left: auto;
    right: auto;
  }
  .w-col-small-1 {
    width: 8.33333333%;
  }
  .w-col-small-2 {
    width: 16.66666667%;
  }
  .w-col-small-3 {
    width: 25%;
  }
  .w-col-small-4 {
    width: 33.33333333%;
  }
  .w-col-small-5 {
    width: 41.66666667%;
  }
  .w-col-small-6 {
    width: 50%;
  }
  .w-col-small-7 {
    width: 58.33333333%;
  }
  .w-col-small-8 {
    width: 66.66666667%;
  }
  .w-col-small-9 {
    width: 75%;
  }
  .w-col-small-10 {
    width: 83.33333333%;
  }
  .w-col-small-11 {
    width: 91.66666667%;
  }
  .w-col-small-12 {
    width: 100%;
  }
}
@media screen and (max-width: 479px) {
  .w-container {
    max-width: none;
  }
  .w-hidden-main {
    display: inherit !important;
  }
  .w-hidden-medium {
    display: inherit !important;
  }
  .w-hidden-small {
    display: inherit !important;
  }
  .w-hidden-tiny {
    display: none !important;
  }
  .w-col {
    width: 100%;
  }
  .w-col-tiny-1 {
    width: 8.33333333%;
  }
  .w-col-tiny-2 {
    width: 16.66666667%;
  }
  .w-col-tiny-3 {
    width: 25%;
  }
  .w-col-tiny-4 {
    width: 33.33333333%;
  }
  .w-col-tiny-5 {
    width: 41.66666667%;
  }
  .w-col-tiny-6 {
    width: 50%;
  }
  .w-col-tiny-7 {
    width: 58.33333333%;
  }
  .w-col-tiny-8 {
    width: 66.66666667%;
  }
  .w-col-tiny-9 {
    width: 75%;
  }
  .w-col-tiny-10 {
    width: 83.33333333%;
  }
  .w-col-tiny-11 {
    width: 91.66666667%;
  }
  .w-col-tiny-12 {
    width: 100%;
  }
}
.w-widget {
  position: relative;
}
.w-widget-map {
  width: 100%;
  height: 400px;
}
.w-widget-map label {
  width: auto;
  display: inline;
}
.w-widget-map img {
  max-width: inherit;
}
.w-widget-map .gm-style-iw {
  width: 90% !important;
  height: auto !important;
  top: 7px !important;
  left: 6% !important;
  display: inline;
  text-align: center;
  overflow: hidden;
}
.w-widget-map .gm-style-iw + div {
  display: none;
}
.w-widget-twitter {
  overflow: hidden;
}
.w-widget-twitter-count-shim {
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 28px;
  height: 20px;
  text-align: center;
  background: white;
  border: #758696 solid 1px;
  border-radius: 3px;
}
.w-widget-twitter-count-shim * {
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.w-widget-twitter-count-shim .w-widget-twitter-count-inner {
  position: relative;
  font-size: 15px;
  line-height: 12px;
  text-align: center;
  color: #999;
  font-family: serif;
}
.w-widget-twitter-count-shim .w-widget-twitter-count-clear {
  position: relative;
  display: block;
}
.w-widget-twitter-count-shim.w--large {
  width: 36px;
  height: 28px;
  margin-left: 7px;
}
.w-widget-twitter-count-shim.w--large .w-widget-twitter-count-inner {
  font-size: 18px;
  line-height: 18px;
}
.w-widget-twitter-count-shim:not(.w--vertical) {
  margin-left: 5px;
  margin-right: 8px;
}
.w-widget-twitter-count-shim:not(.w--vertical).w--large {
  margin-left: 6px;
}
.w-widget-twitter-count-shim:not(.w--vertical):before,
.w-widget-twitter-count-shim:not(.w--vertical):after {
  top: 50%;
  left: 0;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.w-widget-twitter-count-shim:not(.w--vertical):before {
  border-color: rgba(117, 134, 150, 0);
  border-right-color: #5d6c7b;
  border-width: 4px;
  margin-left: -9px;
  margin-top: -4px;
}
.w-widget-twitter-count-shim:not(.w--vertical).w--large:before {
  border-width: 5px;
  margin-left: -10px;
  margin-top: -5px;
}
.w-widget-twitter-count-shim:not(.w--vertical):after {
  border-color: rgba(255, 255, 255, 0);
  border-right-color: white;
  border-width: 4px;
  margin-left: -8px;
  margin-top: -4px;
}
.w-widget-twitter-count-shim:not(.w--vertical).w--large:after {
  border-width: 5px;
  margin-left: -9px;
  margin-top: -5px;
}
.w-widget-twitter-count-shim.w--vertical {
  width: 61px;
  height: 33px;
  margin-bottom: 8px;
}
.w-widget-twitter-count-shim.w--vertical:before,
.w-widget-twitter-count-shim.w--vertical:after {
  top: 100%;
  left: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.w-widget-twitter-count-shim.w--vertical:before {
  border-color: rgba(117, 134, 150, 0);
  border-top-color: #5d6c7b;
  border-width: 5px;
  margin-left: -5px;
}
.w-widget-twitter-count-shim.w--vertical:after {
  border-color: rgba(255, 255, 255, 0);
  border-top-color: white;
  border-width: 4px;
  margin-left: -4px;
}
.w-widget-twitter-count-shim.w--vertical .w-widget-twitter-count-inner {
  font-size: 18px;
  line-height: 22px;
}
.w-widget-twitter-count-shim.w--vertical.w--large {
  width: 76px;
}
.w-widget-gplus {
  overflow: hidden;
}
.w-background-video {
  position: relative;
  overflow: hidden;
  height: 500px;
  color: white;
}
.w-background-video > video {
  background-size: cover;
  background-position: 50% 50%;
  position: absolute;
  right: -100%;
  bottom: -100%;
  top: -100%;
  left: -100%;
  margin: auto;
  min-width: 100%;
  min-height: 100%;
  z-index: -100;
}
.w-background-video > video::-webkit-media-controls-start-playback-button {
  display: none !important;
  -webkit-appearance: none;
}
.w-slider {
  position: relative;
  height: 300px;
  text-align: center;
  background: #dddddd;
  clear: both;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
}
.w-slider-mask {
  position: relative;
  display: block;
  overflow: hidden;
  z-index: 1;
  left: 0;
  right: 0;
  height: 100%;
  white-space: nowrap;
}
.w-slide {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  height: 100%;
  white-space: normal;
  text-align: left;
}
.w-slider-nav {
  position: absolute;
  z-index: 2;
  top: auto;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding-top: 10px;
  height: 40px;
  text-align: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
}
.w-slider-nav.w-round > div {
  border-radius: 100%;
}
.w-slider-nav.w-num > div {
  width: auto;
  height: auto;
  padding: 0.2em 0.5em;
  font-size: inherit;
  line-height: inherit;
}
.w-slider-nav.w-shadow > div {
  box-shadow: 0 0 3px rgba(51, 51, 51, 0.4);
}
.w-slider-nav-invert {
  color: #fff;
}
.w-slider-nav-invert > div {
  background-color: rgba(34, 34, 34, 0.4);
}
.w-slider-nav-invert > div.w-active {
  background-color: #222;
}
.w-slider-dot {
  position: relative;
  display: inline-block;
  width: 1em;
  height: 1em;
  background-color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  margin: 0 3px 0.5em;
  transition: background-color 100ms, color 100ms;
}
.w-slider-dot.w-active {
  background-color: #fff;
}
.w-slider-arrow-left,
.w-slider-arrow-right {
  position: absolute;
  width: 80px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  cursor: pointer;
  overflow: hidden;
  color: white;
  font-size: 40px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.w-slider-arrow-left [class^="w-icon-"],
.w-slider-arrow-right [class^="w-icon-"],
.w-slider-arrow-left [class*=" w-icon-"],
.w-slider-arrow-right [class*=" w-icon-"] {
  position: absolute;
}
.w-slider-arrow-left {
  z-index: 3;
  right: auto;
}
.w-slider-arrow-right {
  z-index: 4;
  left: auto;
}
.w-icon-slider-left,
.w-icon-slider-right {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 1em;
  height: 1em;
}
.w-dropdown {
  display: inline-block;
  position: relative;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  z-index: 900;
}
.w-dropdown-btn,
.w-dropdown-toggle,
.w-dropdown-link {
  position: relative;
  vertical-align: top;
  text-decoration: none;
  color: #222222;
  padding: 20px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  white-space: nowrap;
}
.w-dropdown-toggle {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: inline-block;
  cursor: pointer;
  padding-right: 40px;
}
.w-icon-dropdown-toggle {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  margin-right: 20px;
  width: 1em;
  height: 1em;
}
.w-dropdown-list {
  position: absolute;
  background: #dddddd;
  display: none;
  min-width: 100%;
}
.w-dropdown-list.w--open {
  display: block;
}
.w-dropdown-link {
  padding: 10px 20px;
  display: block;
  color: #222222;
}
.w-dropdown-link.w--current {
  color: #0082f3;
}
.w-nav[data-collapse="all"] .w-dropdown,
.w-nav[data-collapse="all"] .w-dropdown-toggle {
  display: block;
}
.w-nav[data-collapse="all"] .w-dropdown-list {
  position: static;
}
@media screen and (max-width: 991px) {
  .w-nav[data-collapse="medium"] .w-dropdown,
  .w-nav[data-collapse="medium"] .w-dropdown-toggle {
    display: block;
  }
  .w-nav[data-collapse="medium"] .w-dropdown-list {
    position: static;
  }
}
@media screen and (max-width: 767px) {
  .w-nav[data-collapse="small"] .w-dropdown,
  .w-nav[data-collapse="small"] .w-dropdown-toggle {
    display: block;
  }
  .w-nav[data-collapse="small"] .w-dropdown-list {
    position: static;
  }
  .w-nav-brand {
    padding-left: 10px;
  }
}
@media screen and (max-width: 479px) {
  .w-nav[data-collapse="tiny"] .w-dropdown,
  .w-nav[data-collapse="tiny"] .w-dropdown-toggle {
    display: block;
  }
  .w-nav[data-collapse="tiny"] .w-dropdown-list {
    position: static;
  }
}
/**
 * ## Note
 * Safari (on both iOS and OS X) does not handle viewport units (vh, vw) well.
 * For example percentage units do not work on descendants of elements that
 * have any dimensions expressed in viewport units. It also doesn’t handle them at
 * all in `calc()`.
 */
/**
 * Wrapper around all lightbox elements
 *
 * 1. Since the lightbox can receive focus, IE also gives it an outline.
 * 2. Fixes flickering on Chrome when a transition is in progress
 *    underneath the lightbox.
 */
.w-lightbox-backdrop {
  color: #000;
  cursor: auto;
  font-family: serif;
  font-size: medium;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;
  list-style: disc;
  text-align: start;
  text-indent: 0;
  text-shadow: none;
  text-transform: none;
  visibility: visible;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: #fff;
  font-family: "Helvetica Neue", Helvetica, Ubuntu, "Segoe UI", Verdana, sans-serif;
  font-size: 17px;
  line-height: 1.2;
  font-weight: 300;
  text-align: center;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  outline: 0;
  /* 1 */
  opacity: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-transform: translate(0, 0);
  /* 2 */
}
/**
 * Neat trick to bind the rubberband effect to our canvas instead of the whole
 * document on iOS. It also prevents a bug that causes the document underneath to scroll.
 */
.w-lightbox-backdrop,
.w-lightbox-container {
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.w-lightbox-content {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.w-lightbox-view {
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 0;
}
.w-lightbox-view:before {
  content: "";
  height: 100vh;
}
/* .w-lightbox-content */
.w-lightbox-group,
.w-lightbox-group .w-lightbox-view,
.w-lightbox-group .w-lightbox-view:before {
  height: 86vh;
}
.w-lightbox-frame,
.w-lightbox-view:before {
  display: inline-block;
  vertical-align: middle;
}
/*
 * 1. Remove default margin set by user-agent on the <figure> element.
 */
.w-lightbox-figure {
  position: relative;
  margin: 0;
  /* 1 */
}
.w-lightbox-group .w-lightbox-figure {
  cursor: pointer;
}
/**
 * IE adds image dimensions as width and height attributes on the IMG tag,
 * but we need both width and height to be set to auto to enable scaling.
 */
.w-lightbox-img {
  width: auto;
  height: auto;
  max-width: none;
}
/**
 * 1. Reset if style is set by user on "All Images"
 */
.w-lightbox-image {
  display: block;
  float: none;
  /* 1 */
  max-width: 100vw;
  max-height: 100vh;
}
.w-lightbox-group .w-lightbox-image {
  max-height: 86vh;
}
.w-lightbox-caption {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: .5em 1em;
  background: rgba(0, 0, 0, 0.4);
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.w-lightbox-embed {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.w-lightbox-control {
  position: absolute;
  top: 0;
  width: 4em;
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  -webkit-transition: all .3s;
  transition: all .3s;
}
.w-lightbox-left {
  display: none;
  bottom: 0;
  left: 0;
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 0 24 40" width="24" height="40"><g transform="rotate(45)"><path d="m0 0h5v23h23v5h-28z" opacity=".4"/><path d="m1 1h3v23h23v3h-26z" fill="#fff"/></g></svg> */
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==");
}
.w-lightbox-right {
  display: none;
  right: 0;
  bottom: 0;
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 0 24 40" width="24" height="40"><g transform="rotate(45)"><path d="m0-0h28v28h-5v-23h-23z" opacity=".4"/><path d="m1 1h26v26h-3v-23h-23z" fill="#fff"/></g></svg> */
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+");
}
/*
 * Without specifying the with and height inside the SVG, all versions of IE render the icon too small.
 * The bug does not seem to manifest itself if the elements are tall enough such as the above arrows.
 * (http://stackoverflow.com/questions/16092114/background-size-differs-in-internet-explorer)
 */
.w-lightbox-close {
  right: 0;
  height: 2.6em;
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 0 18 17" width="18" height="17"><g transform="rotate(45)"><path d="m0 0h7v-7h5v7h7v5h-7v7h-5v-7h-7z" opacity=".4"/><path d="m1 1h7v-7h3v7h7v3h-7v7h-3v-7h-7z" fill="#fff"/></g></svg> */
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=");
  background-size: 18px;
}
/**
 * 1. All IE versions add extra space at the bottom without this.
 */
.w-lightbox-strip {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 1vh;
  line-height: 0;
  /* 1 */
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}
/*
 * 1. We use content-box to avoid having to do `width: calc(10vh + 2vw)`
 *    which doesn’t work in Safari anyway.
 * 2. Chrome renders images pixelated when switching to GPU. Making sure
 *    the parent is also rendered on the GPU (by setting translate3d for
 *    example) fixes this behavior.
 */
.w-lightbox-item {
  display: inline-block;
  width: 10vh;
  padding: 2vh 1vh;
  box-sizing: content-box;
  /* 1 */
  cursor: pointer;
  -webkit-transform: translate3d(0, 0, 0);
  /* 2 */
}
.w-lightbox-active {
  opacity: .3;
}
.w-lightbox-thumbnail {
  position: relative;
  height: 10vh;
  background: #222;
  overflow: hidden;
}
.w-lightbox-thumbnail-image {
  position: absolute;
  top: 0;
  left: 0;
}
.w-lightbox-thumbnail .w-lightbox-tall {
  top: 50%;
  width: 100%;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
}
.w-lightbox-thumbnail .w-lightbox-wide {
  left: 50%;
  height: 100%;
  -webkit-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}
/*
 * Spinner
 *
 * Absolute pixel values are used to avoid rounding errors that would cause
 * the white spinning element to be misaligned with the track.
 */
.w-lightbox-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  margin-top: -20px;
  margin-left: -20px;
  border: 5px solid rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  -webkit-animation: spin .8s infinite linear;
  animation: spin .8s infinite linear;
}
.w-lightbox-spinner:after {
  content: "";
  position: absolute;
  top: -4px;
  right: -4px;
  bottom: -4px;
  left: -4px;
  border: 3px solid transparent;
  border-bottom-color: #fff;
  border-radius: 50%;
}
/*
 * Utility classes
 */
.w-lightbox-hide {
  display: none;
}
.w-lightbox-noscroll {
  overflow: hidden;
}
@media (min-width: 768px) {
  .w-lightbox-content {
    height: 96vh;
    margin-top: 2vh;
  }
  .w-lightbox-view,
  .w-lightbox-view:before {
    height: 96vh;
  }
  /* .w-lightbox-content */
  .w-lightbox-group,
  .w-lightbox-group .w-lightbox-view,
  .w-lightbox-group .w-lightbox-view:before {
    height: 84vh;
  }
  .w-lightbox-image {
    max-width: 96vw;
    max-height: 96vh;
  }
  .w-lightbox-group .w-lightbox-image {
    max-width: 82.3vw;
    max-height: 84vh;
  }
  .w-lightbox-left,
  .w-lightbox-right {
    display: block;
    opacity: .5;
  }
  .w-lightbox-close {
    opacity: .8;
  }
  .w-lightbox-control:hover {
    opacity: 1;
  }
}
.w-lightbox-inactive,
.w-lightbox-inactive:hover {
  opacity: 0;
}
.w-richtext:before,
.w-richtext:after {
  content: " ";
  display: table;
}
.w-richtext:after {
  clear: both;
}
.w-richtext[contenteditable="true"]:before,
.w-richtext[contenteditable="true"]:after {
  white-space: initial;
}
.w-richtext ol,
.w-richtext ul {
  overflow: hidden;
}
.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-video div:before,
.w-richtext .w-richtext-figure-selected[data-rt-type="video"] div:before {
  outline: 2px solid #2895f7;
}
.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div,
.w-richtext .w-richtext-figure-selected[data-rt-type="image"] div {
  outline: 2px solid #2895f7;
}
.w-richtext figure.w-richtext-figure-type-video > div:before,
.w-richtext figure[data-rt-type="video"] > div:before {
  content: '';
  position: absolute;
  display: none;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.w-richtext figure {
  position: relative;
  max-width: 60%;
}
.w-richtext figure > div:before {
  cursor: default!important;
}
.w-richtext figure img {
  width: 100%;
}
.w-richtext figure figcaption.w-richtext-figcaption-placeholder {
  opacity: 0.6;
}
.w-richtext figure div {
  /* fix incorrectly sized selection border in the data manager */
  font-size: 0px;
  color: transparent;
}
.w-richtext figure.w-richtext-figure-type-image,
.w-richtext figure[data-rt-type="image"] {
  display: table;
}
.w-richtext figure.w-richtext-figure-type-image > div,
.w-richtext figure[data-rt-type="image"] > div {
  display: inline-block;
}
.w-richtext figure.w-richtext-figure-type-image > figcaption,
.w-richtext figure[data-rt-type="image"] > figcaption {
  display: table-caption;
  caption-side: bottom;
}
.w-richtext figure.w-richtext-figure-type-video,
.w-richtext figure[data-rt-type="video"] {
  width: 60%;
  height: 0;
}
.w-richtext figure.w-richtext-figure-type-video iframe,
.w-richtext figure[data-rt-type="video"] iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.w-richtext figure.w-richtext-figure-type-video > div,
.w-richtext figure[data-rt-type="video"] > div {
  width: 100%;
}
.w-richtext figure.w-richtext-align-center {
  margin-right: auto;
  margin-left: auto;
  clear: both;
}
.w-richtext figure.w-richtext-align-center.w-richtext-figure-type-image > div,
.w-richtext figure.w-richtext-align-center[data-rt-type="image"] > div {
  max-width: 100%;
}
.w-richtext figure.w-richtext-align-normal {
  clear: both;
}
.w-richtext figure.w-richtext-align-fullwidth {
  width: 100%;
  max-width: 100%;
  text-align: center;
  clear: both;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.w-richtext figure.w-richtext-align-fullwidth > div {
  display: inline-block;
  /* padding-bottom is used for aspect ratios in video figures
      we want the div to inherit that so hover/selection borders in the designer-canvas
      fit right*/
  padding-bottom: inherit;
}
.w-richtext figure.w-richtext-align-fullwidth > figcaption {
  display: block;
}
.w-richtext figure.w-richtext-align-floatleft {
  float: left;
  margin-right: 15px;
  clear: none;
}
.w-richtext figure.w-richtext-align-floatright {
  float: right;
  margin-left: 15px;
  clear: none;
}
.w-nav {
  position: relative;
  background: #dddddd;
  z-index: 1000;
}
.w-nav:before,
.w-nav:after {
  content: " ";
  display: table;
}
.w-nav:after {
  clear: both;
}
.w-nav-brand {
  position: relative;
  float: left;
  text-decoration: none;
  color: #333333;
}
.w-nav-link {
  position: relative;
  display: inline-block;
  vertical-align: top;
  text-decoration: none;
  color: #222222;
  padding: 20px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}
.w-nav-link.w--current {
  color: #0082f3;
}
.w-nav-menu {
  position: relative;
  float: right;
  margin-top:5px;
}
.w--nav-menu-open {
  display: block !important;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #C8C8C8;
  text-align: center;
  overflow: visible;
  min-width: 200px;
}
.w--nav-link-open {
  display: block;
  position: relative;
}
.w-nav-overlay {
  position: absolute;
  overflow: hidden;
  display: none;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
}
.w-nav-overlay .w--nav-menu-open {
  top: 0;
  position:relative;
  width:100%;
}
.w-nav[data-animation="over-left"] .w-nav-overlay {
  width: auto;
}
.w-nav[data-animation="over-left"] .w-nav-overlay,
.w-nav[data-animation="over-left"] .w--nav-menu-open {
  right: auto;
  z-index: 1;
  top: 0;
}
.w-nav[data-animation="over-right"] .w-nav-overlay {
  width: auto;
}
.w-nav[data-animation="over-right"] .w-nav-overlay,
.w-nav[data-animation="over-right"] .w--nav-menu-open {
  left: auto;
  z-index: 1;
  top: 0;
}
.w-nav-button {
  position: relative;
  float: right;
  padding: 18px;
  font-size: 24px;
  display: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.w-nav-button.w--open {
  background-color: #C8C8C8;
  color: white;
}
.w-nav[data-collapse="all"] .w-nav-menu {
  display: none;
}
.w-nav[data-collapse="all"] .w-nav-button {
  display: block;
}
@media screen and (max-width: 991px) {
  .w-nav[data-collapse="medium"] .w-nav-menu {
    display: none;
  }
  .w-nav[data-collapse="medium"] .w-nav-button {
    display: block;
  }
}
@media screen and (max-width: 767px) {
  .w-nav[data-collapse="small"] .w-nav-menu {
    display: none;
  }
  .w-nav[data-collapse="small"] .w-nav-button {
    display: block;
  }
  .w-nav-brand {
    padding-left: 10px;
  }
}
@media screen and (max-width: 479px) {
  .w-nav[data-collapse="tiny"] .w-nav-menu {
    display: none;
  }
  .w-nav[data-collapse="tiny"] .w-nav-button {
    display: block;
  }
}
.w-tabs {
  position: relative;
}
.w-tabs:before,
.w-tabs:after {
  content: " ";
  display: table;
}
.w-tabs:after {
  clear: both;
}
.w-tab-menu {
  position: relative;
}
.w-tab-link {
  position: relative;
  display: inline-block;
  vertical-align: top;
  text-decoration: none;
  padding: 9px 30px;
  text-align: left;
  cursor: pointer;
  color: #222222;
  background-color: #dddddd;
}
.w-tab-link.w--current {
  background-color: #C8C8C8;
}
.w-tab-content {
  position: relative;
  display: block;
  overflow: hidden;
}
.w-tab-pane {
  position: relative;
  display: none;
}
.w--tab-active {
  display: block;
}
@media screen and (max-width: 479px) {
  .w-tab-link {
    display: block;
  }
}
.w-ix-emptyfix:after {
  content: "";
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.w-dyn-empty {
  padding: 10px;
  background-color: #dddddd;
}
.w-dyn-bind-empty {
  display: none !important;
}
.w-condition-invisible {
  display: none !important;
}
h1 {
  margin-top: 0px;
  margin-bottom: 19px;
  font-size: 38px;
  line-height: 44px;
  font-weight: 500;
}

h2 {
  margin-top: 0px;
  margin-bottom: 10px;
  font-size: 30px;
  line-height: 36px;
  font-weight: 400;
  text-align: center;
}

h3 {
  margin-top: 0px;
  margin-bottom: 15px;
  font-size: 22px;
  line-height: 30px;
  font-weight: 500;
}

h4 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
}

h5 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
}

h6 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
}

p {
  margin-top: 0px;
  margin-bottom: 5px;
}

.button {
  display: inline-block;
  margin-right: 0px;
  padding: 13px 12px;
  border-radius: 3px;
  background-color: #f7f8fc;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, .12);
  -webkit-transition: background-color 300ms ease, box-shadow 300ms ease, color 300ms ease;
  transition: background-color 300ms ease, box-shadow 300ms ease, color 300ms ease;
  font-family: 'Roboto Slab', sans-serif;
  color: #443f54;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
}

.button:hover {
  background-color: #1f1d26;
  color: #f7f8fc;
}

.button.hollow {
  margin-bottom: -1px;
  padding-top: 14px;
  padding-bottom: 10px;
  background-color: transparent;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, .12), inset 0 0 0 2px #000;
  color: #1f1d26;
  text-shadow: none;
}

.button.hollow:hover {
  background-color: #1f1d26;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, .12), inset 0 0 0 2px #1f1d26;
  color: #fff;
  text-shadow: none;
}

.button.hollow:active {
  background-color: #676080;
}

.button.in-pricing {
  display: block;
  margin-top: 19px;
  margin-right: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.logo-text {
  margin-top: 24px;
  font-family: 'Roboto Slab', sans-serif;
  color: #1c1c1c;
  font-size: 27px;
  font-weight: 500;
}

.logo-text.footer {
  margin-top: 0px;
  margin-bottom: 19px;
  font-family: Roboto, sans-serif;
  color: #e6eaed;
}

.navigation {
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  display: none;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, .13);
}

.nav-link {
  padding: 26px 17px;
  box-shadow: inset 0 3px 0 0 transparent;
  -webkit-transition: box-shadow 500ms ease, color 300ms ease;
  transition: box-shadow 500ms ease, color 300ms ease;
}

.nav-link:hover {
  box-shadow: inset 0 3px 0 0 hsla(0, 0%, 71%, .5);
}

.nav-link.w--current {
  box-shadow: inset 0 3px 0 0 #4dbd90;
  color: #4dbd90;
}

.section {
  padding-top: 80px;
  padding-bottom: 80px;
  color: #000;
  background:#fff;
}

.section.blue {
  background-color: #e3f3fc;
}

.section.main {
  margin-top: 73px;
  background-color: #4dbd90;
  background-position: 0% 23%;
  background-size: cover;
  color: #fff;
  text-shadow: 0 1px 0 rgba(0, 0, 0, .23);
}

.section.grey {
  background-color: #f0f0f0;
}

.section.image {
  background-position: 50% 50%;
  background-size: cover;
  color: #fff;
}

.section.footer {
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #9086b2;
  color: #1f1d26;
}

.section.footer.copyright {
  padding-top: 19px;
  padding-bottom: 19px;
  background-color: #1c1d1f;
  color: #939596;
  font-size: 14px;
}

.section.purple {
  display: none;
  background-color: #f7f8fc;
}

.section.clients {
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: #f7f8fc;
}

.section.press {
  display: none;
  padding-top: 29px;
  padding-bottom: 38px;
  background-color: #3e5c50;
}

.section.feature-2 {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #f7f4ff;
}

.section.cta {
  padding-top: 90px;
  padding-bottom: 90px;
}

.slider {
  display: none;
  height: 360px;
  background-color: #303030;
}

.slide {
  padding-top: 64px;
  padding-bottom: 64px;
}

.slide._1 {
  background-color: #00ad6e;
}

.slide._2 {
  background-color: #00bdd6;
}

.slide._3 {
  background-color: #ccbe00;
}

.main-subtitle {
  width: 400px;
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 26px;
  font-weight: 300;
}

.footer-slogan {
  margin-bottom: 11px;
  color: #443f54;
}

.social-icon {
  margin-right: 11px;
  opacity: 1;
  -webkit-transition: none 0ms ease;
  transition: none 0ms ease;
}

.social-icon:hover {
  opacity: 1;
}

.footer-title {
  margin-top: 0px;
  font-family: Roboto, sans-serif;
  color: #443f54;
  font-size: 17px;
  font-weight: 400;
  text-transform: uppercase;
}

.page-link {
  border-bottom: 1px solid transparent;
  -webkit-transition: color 300ms ease, border 300ms ease;
  transition: color 300ms ease, border 300ms ease;
  color: #489fd9;
  text-decoration: none;
}

.page-link:hover {
  border-bottom-color: #489fd9;
}

.page-link.in-footer {
  display: block;
  color: #443f54;
  font-size: 15px;
  font-weight: 500;
}

.page-link.in-footer:hover {
  border-bottom-color: transparent;
  color: #d2d7d9;
}

.page-link.white {
  border-bottom-color: hsla(0, 0%, 100%, .49);
  color: #fff;
}

.page-link.white:hover {
  border-bottom-color: #fff;
}

.newsletter-field {
  width: 60%;
  height: 40px;
  float: left;
  border: 1px solid transparent;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  background-color: #f7f8fc;
  color: #9086b2;
}

.newsletter-field:focus {
  border-width: 1px;
  border-color: #09f;
  box-shadow: 0 0 6px 0 #489fd9;
}

.newsletter-button {
  width: 40%;
  height: 40px;
  padding-top: 9px;
  padding-bottom: 9px;
  float: left;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  background-color: #443f54;
  -webkit-transition: all 500ms ease;
  transition: all 500ms ease;
  color: #fff;
}

.newsletter-button:hover {
  background-color: #1f1d26;
  color: #fff;
}

.newsletter-form {
  width: 70%;
}

.social-icon-group {
  position: relative;
  z-index: 9999999;
}

.brand-link {
  text-decoration: none;
}

.success-message {
  background-color: #5f6166;
}

.main-heading {
  width: 400px;
  margin-top: 0px;
  margin-bottom: 20px;
  font-family: Poppins, sans-serif;
  color: #fff;
  font-size: 50px;
  line-height: 55px;
  font-weight: 600;
  letter-spacing: 1px;
}

.section-subtitle {
  margin-bottom: 80px;
  font-size: 20px;
  line-height: 22px;
  font-weight: 500;
  text-align: center;
}

.bold-text {
  font-weight: 400;
}

.plan-wrapper {
  min-height: 300px;
  padding: 17px;
  border-radius: 3px;
  background-color: #fff;
  color: #2b2b2b;
}

.price-point {
  margin-bottom: 8px;
  font-size: 14px;
}

.price-accent {
  color: #489fd9;
  font-size: 20px;
  letter-spacing: 0px;
}

.addl-feature {
  margin-bottom: 14px;
  font-size: 14px;
  line-height: 18px;
}

.addl-feature.inactive {
  color: #c7c5c5;
  text-decoration: line-through;
}

.divider {
  width: 50%;
  height: 1px;
  margin-top: 13px;
  margin-bottom: 12px;
  background-color: #dbdbdb;
}

.additional-contact {
  margin-top: 21px;
  text-align: center;
}

.feature {
  padding-right: 20px;
  padding-left: 20px;
  text-align: left;
}

.feature.centered {
  text-align: center;
}

.feature._2 {
  width: 30%;
}

.feature-row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 50px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.testimonial-slider {
  height: auto;
  margin-top: 45px;
  background-color: transparent;
}

.testimony-slide {
  padding-top: 0px;
  padding-right: 10%;
  padding-left: 10%;
  text-align: center;
}

.testimony-text {
  margin-bottom: 21px;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 25px;
  line-height: 31px;
  font-weight: 300;
}

.slide-nav {
  display: none;
  font-size: 10px;
}

.person {
  width: 70px;
  margin-bottom: 13px;
  border-radius: 100%;
}

.name {
  font-weight: 500;
}

.slider-arrow {
  width: 50px;
  -webkit-transition: color 300ms ease;
  transition: color 300ms ease;
  color: #bdbdbd;
  font-size: 32px;
}

.slider-arrow:hover {
  color: #000;
}

.feature-icon {
  margin-bottom: 12px;
}

.feature-icon.up {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.main-feature-group {
  margin-top: 30px;
}

.center-contents {
  text-align: center;
}

.small-features-row {
  margin-top: 71px;
}

.main-image {
  float: right;
}

.client-logo {
  width: 16.6%;
}

.press-logo {
  width: 16%;
  margin-right: 2%;
  margin-left: 2%;
  opacity: 0.94;
}

.small-text {
  color: hsla(0, 0%, 100%, .31);
  font-size: 16px;
  font-weight: 300;
  text-align: center;
}

.hero-video {
  z-index: 100;
  height: auto;
  background-image: none;
  background-size: auto;
}

.hero-overlay-block {
  width: 100%;
  height: 100%;
  padding-top: 230px;
  padding-bottom: 140px;
  background-image: -webkit-linear-gradient(270deg, rgba(68, 63, 84, .95), rgba(68, 63, 84, .95));
  background-image: linear-gradient(180deg, rgba(68, 63, 84, .95), rgba(68, 63, 84, .95));
}

.container {
  position: relative;
}

.container.hero-container {
  text-align: center;
}

.hero-main-title {
  margin-top: 0px;
  color: #fff;
  font-size: 70px;
  line-height: 54px;
  font-weight: 600;
}

.hero-main-title.subtitle {
  display: block;
  width: 70%;
  margin: 35px auto 0px;
  font-size: 22px;
  line-height: 32px;
  font-weight: 200;
}

.logo {
  height: auto;
  margin-top: 5px;
}

.navbar {
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  padding-top: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid hsla(0, 0%, 100%, .1);
  background-color: transparent;
}

.dropdown-icon {
  margin-right: 10px;
  opacity: 0.4;
}

.logo-block {
  z-index: 10;
  margin-right: 50px;
}

.nav-menu-2 {
  z-index: 1;
  margin-top: 5px;
  float: left;
  border-radius: 4px;
}

.nav-menu-2.right-align {
  float: right;
}

.dropdown-list.w--open {
  overflow: hidden;
  margin-top: 10px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, .1);
}

.nav-link-2 {
  margin-right: 3px;
  padding: 11px 15px;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: transparent;
  -webkit-transition: background-color 200ms ease, border 200ms ease;
  transition: background-color 200ms ease, border 200ms ease;
  font-size: 13px;
  line-height: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.nav-link-2:hover {
  border-color: rgba(0, 0, 0, .2);
  background-color: transparent;
}

.nav-link-2.dropdown-toggle {
  padding-right: 30px;
}

.nav-link-2.dropdown-toggle.w--open {
  background-color: rgba(0, 0, 0, .1);
}

.nav-link-2.dropdown-toggle.light {
  padding-right: 30px;
}

.nav-link-2.dropdown-toggle.light._2 {
  padding-right: 12px;
}

.nav-link-2.light {
  margin-right: 2px;
  padding-top: 12px;
  padding-right: 12px;
  padding-left: 12px;
  color: #fff;
}

.nav-link-2.light:hover {
  border-color: hsla(0, 0%, 100%, .2);
}

.nav-link-2.light.w--current {
  border-color: hsla(0, 0%, 100%, .2);
}

.dropdown-link {
  -webkit-transition: background-color 200ms ease, color 200ms ease;
  transition: background-color 200ms ease, color 200ms ease;
  font-size: 13px;
}

.dropdown-link:hover {
  background-color: #443f54;
  color: #fff;
}

.dropdown-link.w--current {
  color: #1f6fff;
}

.dropdown-link.w--current:hover {
  color: #fff;
}

.heading {
  font-family: Poppins, sans-serif;
  color: #1f1d26;
  font-size: 36px;
  font-weight: 300;
}

.simple-white-footer {
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 0px solid #eee;
  background-color: #292633;
}

.bottom-footer-paragraph {
  margin-bottom: 0px;
  float: left;
  font-size: 12px;
}
.bottom-footer-paragraph.dark {
  color: #94979e;
}

.bottom-footer-paragraph.right {
  float: right;
}

.bottom-footer-link {
  color: #91959c;
}

.bottom-footer-link:hover {
  color: hsla(0, 0%, 100%, .7);
}

.bottom-footer-link.color {
  color: #babdc2;
  text-decoration: none;
}

.bottom-footer-link.color:hover {
  color: #1f6fff;
}

.section-title-wrapper {
  display: block;
  width: 60%;
  margin-right: auto;
  margin-bottom: 60px;
  margin-left: auto;
  text-align: center;
}

.section-title-wrapper.full {
  width: 100%;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  text-align: left;
}

.section-title-wrapper.full.info {
  margin-bottom: 0px;
}

.section-title {
  display: block;
  width: 550px;
  margin-top: 0px;
  margin-right: auto;
  margin-left: auto;
  font-family: Poppins, sans-serif;
  color: #443f54;
  font-size: 42px;
  line-height: 42px;
  font-weight: 400;
  text-align: center;
}

.section-title._2 {
  display: block;
  margin-right: auto;
  margin-left: auto;
  font-weight: 700;
  text-align: center;
}

.info-block-left {
  width: 56%;
}

.info-block-left.ui {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.info-block-left.ui.flushright {
  display: block;
  width: 40%;
  float: right;
}

.button-2 {
  margin-top: 25px;
  padding: 15px 50px;
  border-radius: 3px;
  background-color: #2d2938;
  -webkit-transition: background-color 200ms ease, background-position 200ms ease, color 200ms ease, border 200ms ease, box-shadow 200ms ease;
  transition: background-color 200ms ease, background-position 200ms ease, color 200ms ease, border 200ms ease, box-shadow 200ms ease;
  color: #f7f8fc;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.button-2:hover {
  background-color: #1f1d26;
  box-shadow: 0 8px 16px 4px rgba(0, 0, 0, .3);
  color: #fff;
}

.image-section {
  background-position: 50% 50%;
  background-size: cover;
}

.image-section.ui-section {
  padding-top: 90px;
  padding-bottom: 90px;
  background-color: #9086b2;
  background-image: none;
  background-position: 0px 0px;
}

.image-section.ui-section._2 {
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: #443f54;
  background-image: none;
  background-size: auto;
  background-repeat: repeat;
  background-attachment: scroll;
}

.image-section.ui-section._3 {
  padding-top: 50px;
  padding-bottom: 50px;
}

.column {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.column-2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.column-3 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.column-4 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.paragraph {
  width: 300px;
  color: #443f54;
  font-size: 18px;
  line-height: 25px;
  font-weight: 300;
}

.paragraph-2 {
  width: 300px;
  color: #443f54;
  font-size: 18px;
  line-height: 25px;
  font-weight: 300;
}

.paragraph-3 {
  width: 300px;
  color: #443f54;
  font-size: 18px;
  line-height: 25px;
  font-weight: 300;
}

.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 40px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.bold-text-2 {
  font-weight: 400;
}

.row-2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.image-2 {
  max-width: auto;
  float: right;
}

.heading-2 {
  margin-bottom: 10px;
  color: #1f1d26;
  font-size: 22px;
}

.column-5 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.column-6 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.column-7 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.heading-3 {
  width: 200px;
  margin-bottom: 5px;
  color: #1f1d26;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
}

.paragraph-4 {
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
}

.paragraph-5 {
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
}

.paragraph-6 {
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
}

.paragraph-7 {
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
}

.heading-4 {
  margin-bottom: 5px;
  color: #1f1d26;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
}

.heading-5 {
  margin-bottom: 5px;
  color: #1f1d26;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
}

.heading-6 {
  color: #1f1d26;
  font-size: 20px;
  font-weight: 400;
}

.headhero {
  margin-bottom: 0px;
  font-family: 'Varela Round', sans-serif;
  color: #424242;
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  text-align: left;
  letter-spacing: 1px;
  -webkit-column-count: 1;
  column-count: 1;
}

.headhero.ppl {
  display: inline-block;
  margin-top: 20px;
  font-size: 20px;
  line-height: 30px;
}

.headhero.ppl.kiz {
  margin-bottom: 3px;
}

.headhero.inverse {
  margin-top: -38px;
  margin-bottom: 5px;
  font-family: Poppins, sans-serif;
  color: #dfe8e4;
  font-size: 38px;
  line-height: 45px;
  font-weight: 800;
}

.opnemodal {
  margin-top: 30px;
  padding-right: 0px;
  padding-bottom: 5px;
  padding-left: 0px;
  border-style: none none solid;
  border-width: 3px 3px 2px;
  border-color: #555 #555 #333;
  background-color: transparent;
  font-family: 'Varela Round', sans-serif;
  color: #3d3c3c;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
}

.opnemodal:hover {
  border-bottom-color: #fff;
  color: #fff;
}

.overlay {
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #f7f4ff;
  background-image: url('../assets/images/index/wakuang.png');
  background-position: 50% -70px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.3;
  text-align: center;
}

.igkit {
  display: block;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
  text-align: left;
}

.igkit.last {
  margin-top: 43px;
}

.rowfull {
  height: 70vh;
}

.panelok {
  position: relative;
  top: 50%;
  display: block;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  -webkit-transform: translate(0px, -50%);
  -ms-transform: translate(0px, -50%);
  transform: translate(0px, -50%);
}

.panelok.kitz {
  -webkit-transform: translate(0px, -53%);
  -ms-transform: translate(0px, -53%);
  transform: translate(0px, -53%);
  text-align: left;
}

.imgkit {
  position: absolute;
  left: 50%;
  display: block;
  width: 45%;
  margin-top: 48%;
  margin-right: auto;
  margin-left: auto;
  -webkit-transform: translate(0px, -50%) translate(-50%, 0px);
  -ms-transform: translate(0px, -50%) translate(-50%, 0px);
  transform: translate(0px, -50%) translate(-50%, 0px);
}

.rowkitz {
  margin-top: 20px;
}

.col2right {
  position: relative;
  z-index: 999;
  display: block;
  height: 100%;
  padding-right: 0px;
  padding-left: 0px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #9086b2;
  background-image: none;
  background-size: auto;
  background-repeat: repeat;
}

.hero {
  overflow: visible;
  height: 100%;
  max-width: 100%;
  margin-left: 1px;
  background-color: #f7f7f7;
  background-image: none;
}

.hero._3.presastuff {
  overflow: visible;
  height: 100%;
  padding-top: 0px;
  padding-bottom: 0px;
  background-color: #fff;
}

.txticonz {
  width: 75%;
  margin-top: 5px;
  font-family: Varela, sans-serif;
  color: #5e5e5e;
  font-size: 14px;
  line-height: 23px;
}

.txticonz.kit {
  width: 100%;
  margin-top: 12px;
  text-align: center;
}

.txticonz.escr {
  width: 100%;
  font-family: Roboto, sans-serif;
  color: #9086b2;
  font-size: 16px;
  line-height: 26px;
  font-weight: 500;
}

.colfulleft {
  z-index: 19;
  height: 100%;
  margin-top: 0px;
  margin-bottom: 1px;
  background-color: #9086b2;
}

.image-3 {
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.image-4 {
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.image-5 {
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.image-6 {
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.image-7 {
  position: absolute;
}

.image-8 {
  position: relative;
  left: -20%;
  top: 40%;
  right: 0px;
  bottom: -67px;
  z-index: 99999;
  display: block;
  max-width: 100%;
  min-width: 40%;
  margin-right: auto;
  margin-left: auto;
}

.div-block {
  display: inline-block;
  margin-right: 20px;
}

.div-block-2 {
  display: inline-block;
  margin-right: 20px;
}

.text-block {
  display: none;
  margin-top: 5px;
  color: #9086b2;
  font-size: 13px;
  font-weight: 300;
  text-align: center;
}

.heading-7 {
  margin-bottom: 10px;
  color: #1f1d26;
}

.heading-8 {
  width: 300px;
  margin-bottom: 10px;
  color: #1f1d26;
}

.paragraph-8 {
  display: block;
  width: 480px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}

.image-9 {
  display: none;
  box-shadow: 0 17px 37px 0 rgba(0, 0, 0, .11);
}

.image-10 {
  display: inline-block;
  margin-right: 20px;
  // margin-left: 16px;
}

.div-block-3 {
  // display: -webkit-box;
  // display: -webkit-flex;
  // display: -ms-flexbox;
  // display: flex;
  // -webkit-box-orient: horizontal;
  // -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  text-align: right;
}

.row-3 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.image-11 {
  box-shadow: inset 0 16px 17px -15px rgba(0, 0, 0, .14);
}

.text-block-2 {
  margin-top: 5px;
  color: #443f54;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 1px;
}

.text-block-2._2 {
  font-weight: 500;
}

.container-2 {
  padding: 50px 50px 36px;
  border-radius: 20px;
  background-color: rgba(68, 63, 84, 0);
}

.text-block-3 {
  margin-top: 5px;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 1px;
}

.text-block-3._2 {
  margin-top: 9px;
  clear: none;
  font-size: 13px;
}

.div-block-4 {
  display: none;
  margin-top: 48px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

html.w-mod-js *[data-ix="fade-in-on-load"] {
  opacity: 0;
  -webkit-transform: translate(0px, 24px);
  -ms-transform: translate(0px, 24px);
  transform: translate(0px, 24px);
}

html.w-mod-js *[data-ix="fade-in-on-scroll"] {
  opacity: 0;
  -webkit-transform: translate(0px, 24px);
  -ms-transform: translate(0px, 24px);
  transform: translate(0px, 24px);
}

html.w-mod-js *[data-ix="fade-in-on-load-2"] {
  opacity: 0;
  -webkit-transform: translate(0px, 30px);
  -ms-transform: translate(0px, 30px);
  transform: translate(0px, 30px);
}

html.w-mod-js *[data-ix="fade-in-on-load-3"] {
  opacity: 0;
}
@media (max-width: 991px) {
  .button {
    // padding: 17px 49px;
  }
  .button.hollow {
    // padding: 18px 40px;
  }
  .button.in-pricing {
    font-size: 14px;
    line-height: 18px;
  }
  .nav-link {
    padding: 18px 0px;
    color: #fff;
  }
  .nav-link:hover {
    box-shadow: inset 0 3px 0 0 transparent;
  }
  .nav-link.w--current {
    box-shadow: inset 0 1px 0 0 transparent;
  }
  .nav-link.menu {
    padding: 22px 17px;
    color: #000;
    font-size: 30px;
  }
  .nav-link.menu.w--open {
    background-color: #000;
    color: #fff;
  }
  .section.footer {
    background-color: #9086b2;
  }
  .section.cta {
    padding-right: 44px;
    padding-left: 44px;
  }
  .main-subtitle {
    width: auto;
  }
  .nav-menu {
    padding-top: 13px;
    padding-bottom: 13px;
    background-color: #000;
  }
  .footer-slogan {
    color: #f7f4ff;
  }
  .footer-title {
    color: #f7f4ff;
  }
  .main-heading {
    width: auto;
    font-size: 42px;
    line-height: 48px;
  }
  .main-feature-group {
    margin-top: 0px;
  }
  .main-image {
    margin-top: 0px;
  }
  .hero-video {
    background-position: 0px 0px;
    background-size: 800px;
  }
  .hero-overlay-block {
    padding-top: 180px;
    padding-bottom: 180px;
    background-color: rgba(31, 111, 255, .85);
  }
  .container {
    display: block;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .hero-main-title {
    font-size: 60px;
    line-height: 44px;
  }
  .hero-main-title.subtitle {
    width: 80%;
    margin-bottom: 30px;
    line-height: 34px;
  }
  .transparant-menu-button {
    width: 50px;
    height: 50px;
    margin-right: 20px;
    padding-top: 14px;
    padding-right: 0px;
    padding-left: 0px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .1);
    color: #fff;
    text-align: center;
  }
  .transparant-menu-button:hover {
    background-color: rgba(0, 0, 0, .3);
  }
  .transparant-menu-button.w--open {
    background-color: #000;
  }
  .navbar {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
  }
  .dropdown-icon {
    margin-right: 30px;
  }
  .dropdown {
    width: 100%;
    max-width: 1500px;
  }
  .nav-menu-2 {
    z-index: 999;
    margin-top: 0px;
    float: left;
    border-radius: 0px;
    background-color: #292c31;
  }
  .nav-menu-2.right-align.low {
    z-index: 99;
  }
  .dropdown-list.w--open {
    margin-top: 0px;
    border-radius: 0px;
    box-shadow: 0 0 0 0 transparent;
  }
  .nav-link-2 {
    width: 100%;
    max-width: 1200px;
    margin-right: 0px;
    margin-left: 0px;
    padding-left: 35px;
    border-radius: 0px;
    color: #fff;
  }
  .nav-link-2:hover {
    background-color: #000;
    color: #fff;
  }
  .nav-link-2.dropdown-toggle {
    color: #fff;
  }
  .nav-link-2.light {
    width: 100%;
    max-width: 1500px;
    margin-right: 0px;
    padding-right: 35px;
    padding-left: 35px;
    border-color: transparent;
    border-radius: 0px;
    background-color: #343040;
  }
  .nav-link-2.light:hover {
    background-color: #292633;
  }
  .nav-link-2.light.w--current {
    border-color: transparent;
  }
  .dropdown-link {
    padding-left: 35px;
  }
  .heading {
    font-size: 34px;
  }
  .section-title-wrapper {
    width: 85%;
    margin-bottom: 40px;
  }
  .section-title-wrapper.full {
    margin-bottom: 20px;
    padding-right: 40px;
  }
  .section-title-wrapper.full.info {
    margin-bottom: 20px;
  }
  .section-title {
    width: auto;
    margin-bottom: 4px;
    font-size: 31px;
    line-height: 30px;
  }
  .info-block-left.ui {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: auto;
    margin-right: auto;
    margin-left: auto;
  }
  .image-section.ui-section {
    padding-right: 45px;
    padding-left: 45px;
    background-size: auto, cover;
  }
  .row-2 {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .heading-3 {
    font-size: 18px;
  }
  .paragraph-4 {
    font-size: 13px;
  }
  .paragraph-5 {
    font-size: 13px;
  }
  .paragraph-6 {
    font-size: 13px;
  }
  .paragraph-7 {
    font-size: 13px;
  }
  .heading-4 {
    font-size: 18px;
  }
  .heading-5 {
    font-size: 18px;
  }
  .heading-6 {
    font-size: 18px;
  }
  .overlay {
    background-position: 0px 0px;
  }
  .column-8 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .paragraph-8 {
    width: 500px;
  }
}
@media (max-width: 767px) {
  h3 {
    margin-bottom: 8px;
  }
  .logo-text {
    margin-top: 15px;
  }
  .nav-link.menu {
    padding-top: 11px;
    padding-bottom: 11px;
  }
  .section {
    padding: 43px 12px;
    text-align: center;
  }
  .section.main {
    margin-top: 51px;
  }
  .main-subtitle {
    width: auto;
  }
  .nav-menu {
    padding-right: 12px;
    padding-left: 12px;
  }
  .footer-title {
    margin-top: 35px;
    font-size: 16px;
  }
  .page-link.in-footer {
    font-size: 14px;
  }
  .newsletter-form {
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .main-heading {
    width: auto;
  }
  .section-subtitle {
    margin-bottom: 44px;
    font-size: 16px;
  }
  .plan-wrapper {
    margin-right: 5%;
    margin-bottom: 34px;
    margin-left: 5%;
  }
  .divider {
    width: 100%;
  }
  .feature {
    margin-bottom: 32px;
    text-align: center;
  }
  .feature-icon {
    margin-bottom: 4px;
  }
  .main-feature-group {
    margin-top: 0px;
    margin-bottom: 34px;
  }
  .small-features-row {
    padding-right: 40px;
    padding-left: 40px;
  }
  .hero-overlay-block {
    padding: 130px 25px;
  }
  .hero-main-title {
    margin-bottom: 10px;
    font-size: 40px;
  }
  .hero-main-title.subtitle {
    margin-top: 0px;
    font-size: 16px;
    line-height: 25px;
  }
  .logo {
    height: 30px;
    margin-top: 10px;
  }
  .transparant-menu-button {
    width: 40px;
    height: 40px;
    padding-top: 8px;
  }
  .navbar {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 10px;
  }
  .nav-link-2 {
    padding-left: 25px;
  }
  .nav-link-2.light {
    padding-right: 25px;
    padding-left: 25px;
  }
  .dropdown-link {
    padding-left: 25px;
  }
  .heading {
    font-size: 28px;
  }
  .simple-white-footer {
    padding-right: 25px;
    padding-left: 25px;
    text-align: center;
  }
  .bottom-footer-paragraph {
    margin-bottom: 7px;
    float: none;
  }
  .bottom-footer-paragraph.dark {
    float: none;
  }
  .bottom-footer-paragraph.right {
    float: none;
  }
  .section-title-wrapper {
    width: 95%;
    margin-bottom: 40px;
  }
  .section-title-wrapper.full {
    margin-bottom: 30px;
  }
  .section-title-wrapper.full.info {
    width: auto;
    text-align: center;
  }
  .section-title {
    width: 500px;
    margin-bottom: 10px;
    font-size: 24px;
    line-height: 30px;
  }
  .info-block-left {
    width: 100%;
  }
  .info-block-left.ui {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .image-section.ui-section {
    padding: 25px;
  }
  .paragraph {
    font-size: 16px;
    line-height: 22px;
  }
  .paragraph-2 {
    font-size: 16px;
    line-height: 22px;
  }
  .paragraph-3 {
    font-size: 16px;
    line-height: 22px;
  }
  .row-2 {
    display: block;
  }
  .heading-2 {
    font-size: 20px;
  }
  .heading-3 {
    font-size: 16px;
  }
  .paragraph-7 {
    font-size: 13px;
  }
  .heading-4 {
    font-size: 16px;
  }
  .heading-5 {
    font-size: 16px;
  }
  .heading-6 {
    font-size: 16px;
  }
  .overlay {
    display: none;
    height: auto;
  }
  .rowfull {
    height: 70vh;
  }
  .panelok {
    top: auto;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
  .imgkit {
    margin-top: auto;
    -webkit-transform: translate(-50%, 0px);
    -ms-transform: translate(-50%, 0px);
    transform: translate(-50%, 0px);
  }
  .col2right {
    position: static;
    height: 100%;
    background-color: #9086b2;
  }
  .colfulleft {
    height: 100%;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .image-8 {
    position: relative;
    left: auto;
    top: 23%;
    right: 0px;
  }
  .column-8 {
    margin-top: 50px;
  }
  .heading-7 {
    font-size: 20px;
  }
  .heading-8 {
    font-size: 20px;
  }
  .paragraph-8 {
    width: 400px;
    font-size: 14px;
    line-height: 20px;
  }
}
@media (max-width: 479px) {
  .dlowBtn{display: block;}
  .button {
    // padding-right: 55px;
    // padding-left: 55px;
    width: 100%;
  }
  .div-block-2{
    display: block;width: 100%;
  }
  .button.hollow {
    border: 1px solid #f7f4ff;
    box-shadow: 0 2px 1px 0 rgba(0, 0, 0, .12);
    color: #f7f4ff;
    display: block;
    margin-top: 10px;
  }
  .section {
    padding-bottom: 12px;
  }
  .section.footer {
    padding-right: 12px;
    padding-left: 12px;
    background-color: #9086b2;
  }
  .section.cta {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .main-subtitle {
    font-size: 18px;
    line-height: 24px;
  }
  .newsletter-button {
    width: 40%;
  }
  .newsletter-form {
    width: 85%;
  }
  .main-heading {
    margin-top: 20px;
    font-size: 38px;
    line-height: 42px;
    font-weight: 700;
  }
  .section-subtitle {
    padding-right: 19px;
    padding-left: 19px;
  }
  .feature {
    padding-right: 0px;
    padding-left: 0px;
  }
  .feature-row {
    display: block;
  }
  .main-feature-group {
    margin-bottom: 0px;
  }
  .small-features-row {
    margin-top: 50px;
    padding-top: 35px;
    padding-right: 10px;
    padding-left: 10px;
    background-color: #f7f4ff;
  }
  .main-image {
    max-width: 90%;
  }
  .client-logo {
    width: 33.33%;
  }
  .press-logo {
    width: 28%;
  }
  .hero-overlay-block {
    padding: 90px 15px 80px;
    background-color: transparent;
    background-image: -webkit-linear-gradient(270deg, rgba(68, 63, 84, .8), rgba(68, 63, 84, .8));
    background-image: linear-gradient(180deg, rgba(68, 63, 84, .8), rgba(68, 63, 84, .8));
  }
  .container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
  }
  .hero-main-title {
    font-size: 30px;
    line-height: 37px;
  }
  .hero-main-title.subtitle {
    width: 90%;
    margin-top: 15px;
    margin-bottom: 20px;
    font-size: 15px;
    line-height: 22px;
  }
  .logo {
    margin-top: 5px;
  }
  .transparant-menu-button {
    margin-right: 0px;
  }
  .navbar {
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
  }
  .heading {
    padding-right: 19px;
    padding-left: 19px;
    font-size: 30px;
  }
  .simple-white-footer {
    padding: 35px 15px;
  }
  .bottom-footer-paragraph.right.dark {
    margin-top: 10px;
  }
  .section-title-wrapper {
    width: 100%;
    margin-bottom: 30px;
  }
  .section-title-wrapper.full {
    margin-bottom: 20px;
    padding-right: 0px;
  }
  .section-title-wrapper.full.info {
    margin-bottom: 20px;
    padding-right: 0px;
    text-align: center;
  }
  .section-title {
    width: auto;
    margin-top: 20px;
    margin-bottom: 0px;
    font-size: 26px;
    line-height: 28px;
    font-weight: 800;
    text-align: center;
  }
  .info-block-left {
    width: 100%;
  }
  .info-block-left.ui {
    display: block;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
  }
  .info-block-left.ui.flushright {
    width: 80%;
  }
  .button-2 {
    margin-top: 20px;
    padding: 20px 38px;
    font-size: 14px;
    line-height: 21px;
  }
  .image-section.ui-section {
    padding-top: 70px;
    padding-bottom: 70px;
    background-image: none;
    background-position: 0px 0px;
    background-size: auto;
    background-repeat: repeat;
  }
  .image-section.ui-section._2 {
    padding-top: 80px;
    padding-bottom: 80px;
    background-position: 50% 50%;
    background-size: contain;
  }
  .image-section.ui-section._3 {
    padding-top: 30px;
  }
  .column {
    margin-bottom: 40px;
  }
  .row {
    display: block;
    margin-top: 30px;
  }
  .heading-3 {
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .heading-4 {
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .heading-5 {
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .headhero {
    display: block;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    line-height: 40px;
    text-align: center;
  }
  .headhero.ppl.kiz {
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .opnemodal {
    display: none;
  }
  .overlay {
    position: relative;
    display: none;
  }
  .rowfull {
    height: auto;
  }
  .panelok {
    top: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
  .panelok.kitz {
    top: 0%;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
  .imgkit {
    margin-top: 30px;
    -webkit-transform: translate(-50%, 0px);
    -ms-transform: translate(-50%, 0px);
    transform: translate(-50%, 0px);
  }
  .col2right {
    height: auto;
    margin-top: -7px;
    padding-bottom: 40px;
    background-color: #9086b2;
    background-image: none;
    background-size: auto;
    background-repeat: repeat;
  }
  .txticonz {
    display: block;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
  }
  .colfulleft {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: auto;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .image-8 {
    display: block;
    max-width: 70%;
    min-width: 50%;
    margin-right: auto;
    margin-left: auto;
  }
  .div-block {
    // margin-bottom: 30px;
    width: 100%;
    display: block;
  }
  .div-block a.donate {
    // margin-bottom: 10px;
    // padding: 13px 14px;
  }
  .text-block {
    font-weight: 500;
  }
  .heading-8 {
    line-height: 22px;
  }
  .paragraph-8 {
    width: auto;
  }
  .column-9 {
    margin-top: 20px;
    padding-right: 0px;
    padding-left: 0px;
  }
  .column-10 {
    margin-bottom: 40px;
  }
  .column-11 {
    margin-bottom: 40px;
  }
  .column-12 {
    margin-bottom: 30px;
  }
  .image-10 {
    min-width: 20%;
  }
  .div-block-3 {
    // margin-top: 52px;
  }
  .row-3 {
    display: block;
  }
  .image-11 {
    min-width: 19%;
  }
  .text-block-3 {
    margin-top: 0px;
  }
  .column-14 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
        padding-bottom: 30px;
  }
}
}
.dlowBtn{display:flex;}
</style>
