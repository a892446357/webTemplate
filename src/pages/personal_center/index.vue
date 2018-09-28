<template>
    <div class="person-all">
        <div class="personal">
            <span><!--个人中心-->{{$t('personalCenter.personalCenter')}}</span>
            <div class="person-btn" :class="{active:$route.name==='myProfile'}">
                <router-link :to="{name: 'myProfile'}">
                    <!--我的简介-->
                    {{$t('personalCenter.myProfile')}}
                </router-link>
            </div>
            <div class="person-btn" :class="{active:$route.name==='invitationActivity'}">
                <router-link :to="{name: 'invitationActivity'}">
                    <!--邀请活动-->{{$t('personalCenter.invitationActivities')}}
                </router-link>
            </div>
            <div class="person-btn" :class="{active:$route.name==='myTinkey'}">
                <router-link :to="{name: 'myTinkey'}">
                    <!--我的Tinkey-->
                    {{$t('personalCenter.myTinkey')}}
                </router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.person-all{display: flex;max-width: 1200px;margin:0 auto;overflow: hidden;}
.personal{width: 178px;margin-top: 40px;}
.personal span{font-size: 24px;color: #443f54;display:block;}
.personal .person-btn{width: 176px;height: 36px;line-height: 36px;background: #b1b2b4;margin-top: 60px;cursor: pointer;}
.personal .person-btn a{display:block;width:176px;line-height:36px;text-align:center;}
.personal .active,.personal .person-btn:hover{background: #443f54;color: #fff;}
@media only screen and (max-width: 1240px) {
    .person-all{margin:0 20px;}
}
@media only screen and (max-width: 700px) {
    .person-all{flex-direction:column;}
    .person-all > * {flex:1;width:initial!important;margin-left:0px!important;}
    .personal{margin-top:20px;}
    .personal .person-btn{margin-top:4px;width:auto;display:inline-block;}
    .personal .person-btn a{width:auto;padding:0 10px;}
}
</style>
