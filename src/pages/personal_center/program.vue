<template>
  <div class="program">
      <div class="title">
          <span>
            <!--Program Details-->
            {{$t('activityRule.title')}}
          </span>
          <span class="back" @click="backActive">
            <!--Back-->
            {{$t('activityRule.back')}}
          </span>
      </div>
      <p>
        <!--As long as your referees complete registration and buy a Tinkey, You can get certain commission reward.-->
        {{$t('activityRule.intro1')}}
      </p>
      <p>
        <!--Each successful invitation to a user to purchase a Tinkey will be rewarded 0.1 ETH, with no maxi limit.-->
        {{$t('activityRule.intro2')}}
      </p>
      <p>
        <!--Successfully recommend a super node will be rewarded 50ETH. The block producer number is limited to 99. The first 49 super node have referral right and each has only one recommended quota. The last 49 super node are recommended by the first 49 .-->
        {{$t('activityRule.intro3')}}
      </p>
      <p>
        <!--There is no limit to the number of friends you can refer, although Tinkey.io reserve the right to adjust or change the referral program rules at any time.-->
        {{$t('activityRule.intro4')}}
      </p>
      <p>
        <!--Except Super Node, each referee must be signed up through your Referral Link, QR Code or Referral ID.-->
        {{$t('activityRule.intro5')}}
      </p>
      <p>
        <!--Tinkey.io will check for duplicate or fake accounts and will not pay out referral bonuses on these accounts. Duplicate or shared finances will result in disqualification.-->
        {{$t('activityRule.intro6')}}
      </p>

      <div class="notice">
          <div class="title">* <!--Important Notice-->{{$t('activityRule.intro7')}}:</div>
          <p>
            <!--Tinkey.io reserves the right to change the terms of the referral program at any time due to changing market conditions, risk of fraud, or any other factors we deem relevant.-->
            {{$t('activityRule.intro8')}}
          </p>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    backActive () {
      this.$router.push({name: 'invitationActivity'})
    }
  }
}
</script>
<style scoped>
.program{margin-top: 50px;margin-left: 32px;border-top: 1px dashed #bfbfbf;}
.program .title {display: flex;justify-content: space-between;margin-bottom: 20px;margin-top: 75px;}
.program .title span{font-size:24px;font-family:PingFang-SC-Heavy;color:rgba(87,87,87,1);font-weight: bold;}
.program .title span.back{font-size:18px;font-family:PingFang-SC-Bold;color:rgba(51,51,51,1);font-weight: 100; cursor: pointer; text-decoration: underline;}
.program p{font-size:18px;font-family:PingFang-SC-Bold;color:rgba(51,51,51,1);position: relative;text-indent: 15px;    line-height: 32px;}
.program p::before{position: absolute;content: "";display: block;width: 4px;height: 4px;border-radius: 50%;background: #000;top: 12px;}
.program .notice .title{font-weight: bold;font-size: 18px;color: #333;margin-top: 46px;}
@media only screen and (max-width: 700px) {
    .program,.program .title,.program .notice .title{margin-top:20px;}
}
</style>
