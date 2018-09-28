<template>
    <div class="invitation">
        <div class="person-data">
            <div class="data">
                <span class="title">{{$t('personalCenter.invitationActivities')}}</span>
                <span @click="program()">{{$t('invitationActivities.activityRules')}}</span>
            </div>
            <div class="area">
              <img v-if="getLang !== 'zh' && getLang !== 'ko'" src="../../assets/images/activity-bg-en.jpg"/>
              <img v-if="getLang === 'zh'" src="../../assets/images/activity-bg-zh.jpg"/>
              <img v-if="getLang === 'ko'" src="../../assets/images/activity-bg-ko.jpg"/>
            </div>
            <p class="centent">
                {{$t('invitationActivities.introduction1')}}
                <br>
                {{$t('invitationActivities.introduction2')}}
            </p>
            <p class="link">
                <span><b>{{$t('invitationActivities.personalLink')}}：</b>{{this.data.myInvitationUrl}}</span>
                <span class="btn" @click="copyAdress()">{{$t('common.copy')}}</span>
            </p>
            <p class="link">
                <span><b>{{$t('invitationActivities.inviteCode')}}：{{this.data.myInvitationCode}}</b></span>
                <span class="btn" @click="copyCode()">{{$t('common.copy')}}</span>
            </p>
        </div>
        <div class="person-data person-li">
            <ul>
                <li>
                    <span>{{$t('invitationActivities.numberOfRegisteredPersonsInvited')}}</span>
                    <span><b>{{this.data.invitationRegisterNumber||0}}</b></span>
                </li>
                <li>
                    <span>{{$t('invitationActivities.numberOfTinkeyBuyers')}}</span>
                    <span><b>{{this.data.bugTinkeyNumber||0}}</b></span>
                </li>
                <li>
                    <span>{{$t('invitationActivities.rewarded')}}</span>
                    <span><b>{{this.data.totalAward||0}}</b></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import personApi from '../../api/personalCenter'
const copyText = (str) => {
  var save = function (e) {
    e.clipboardData.setData('text/plain', str)
    e.preventDefault()
  }
  document.addEventListener('copy', save)
  document.execCommand('copy')
  document.removeEventListener('copy', save)
}
export default {
  data () {
    return {
      data: []
    }
  },
  computed: {
    ...mapGetters(['getLang'])
  },
  created () {
    this.getperson()
  },
  methods: {
    program (tab) {
      this.$router.push({name: 'program'})
    },
    getperson () {
      personApi.getInvitationActivity((res) => {
        this.data = res
      })
    },
    copyAdress () {
      Vue.$koallTipBox({icon: 'success', message: this.$t('invitationActivities.copy')}) // 复制成功
      copyText(this.data.myInvitationUrl)
    },
    copyCode () {
      Vue.$koallTipBox({icon: 'success', message: this.$t('invitationActivities.copy')}) // 复制成功
      copyText(this.data.myInvitationCode)
    }
  }
}
</script>

<style scoped>
.invitation{width:calc(100% - 210px);margin-top: 50px;margin-left: 32px;text-align: left;}
.person-data{border-top: 1px dashed #bfbfbf;}
.person-data .data{display: flex;justify-content: space-between;margin-top: 70px;align-items:center;}
.person-data .data span.title{font-size:24px;font-family:PingFang-SC-Heavy;color:rgba(87,87,87,1);text-decoration: none;}
.person-data .data span{font-size:18px;font-family:PingFang-SC-Bold;color:rgba(51,51,51,1);text-decoration: underline;}
.person-data .data span:last-child{cursor: pointer;}
.person-data{border-top: 1px dashed #bfbfbf;}
.person-data p{display: flex;justify-content: space-between;margin-top: 60px;}
.person-data p span{font-size:18px;font-family:PingFang-SC-Bold;color:rgba(51,51,51,1);}
.person-data p .btn{display: inline-block;width: 90px;height: 33px;line-height: 33px;background: #443f54;text-align: center;cursor: pointer; color: #fff;}
.person-data p .btn:hover{background:#201c2c;}
.area{width:100%;height: 200px;background: #443f54;margin-top: 28px;color: #fff;text-align: center;position: relative;}
.area img{width:100%;height:200px;}
.person-data p.centent{font-size:16px;font-family:MicrosoftYaHei;color:rgba(108,108,108,1);line-height:32px;margin-top: 10px;}
.person-data p.link{display: block;}
.person-data ul {display: flex;justify-content: space-between;text-align: center;}
.person-data ul li span{display: block;line-height:24px;color: #6c6c6c;}
.person-data ul li span b{font-size: 18px;color: #333333;}
.person-li {margin-top: 50px;}
@media only screen and (max-width: 700px) {
    .invitation{margin-top:20px;}
    .person-data .data{margin-top:20px;}
    .person-data p{margin-top:20px;}
}
</style>
