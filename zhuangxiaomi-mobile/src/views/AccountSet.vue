<template>
  <div class="accountSet">
    <header-component :title="'账号设置'"/>
    <img src="../assets/img/user/bg.png" alt>
    <div class="form border-1px">
      <div class="avatar">
        <div class="avatar-img">
          <img src="../assets/img/user/avatar.png" alt>
        </div>
        <div class="avatar-name">张思涵</div>
      </div>
      <div class="option top" @click="$router.push('mySite')">
        <span>昵称：Andi</span>
        <span class="reset">
          修改
          <i class="mint-toast-icon mintui mintui-back"/>
        </span>
      </div>
      <div class="option">
        <span>性别：男</span>
        <span class="reset">
          修改
          <i class="mint-toast-icon mintui mintui-back"/>
        </span>
      </div>
      <div class="option" @click="$router.push('accountSet')">
        <span>修改密码</span>
        <span class="reset">
          修改
          <i class="mint-toast-icon mintui mintui-back"/>
        </span>
      </div>
      <div class="btn">退出登录</div>
    </div>
    <!-- <footer-component/> -->
  </div>
</template>

<script>
import headerComponent from "@/components/HeaderComponent";
// import footerComponent from "@/components/FooterComponent";

export default {
  name: "accountSet",
  components: {
    headerComponent
    // footerComponent
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

.accountSet
  background: $bgColor

  &>img
    width: 100%
    position: relative
    top: pr(40)

  .form
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    position: relative
    top: pr(25)
    background: white
    padding-top: pr(8)
    margin-bottom: pr(30)
    padding-bottom: pr(30)

    .avatar
      position: absolute
      top: pr(-45)

      .avatar-img
        width: pr(90)
        height: pr(90)

        &>img
          width: 100%

      .avatar-name
        font-size: pr(18)
        font-family: HiraginoSansGB-W3
        font-weight: normal
        color: rgba(95, 95, 95, 1)
        text-align: center
        margin-top: pr(10)

    .option
      width: pr(277)
      height: pr(40)
      margin: pr(7) 0
      padding: pr(13) pr(12)
      display: flex
      justify-content: space-between
      align-items: center
      border-radius: pr(3)
      border: pr(1) solid rgb(216, 216, 216)
      color: #5F5F5F

      &>span
        font-size: pr(14)
        font-family: FZLTHJW--GB1-0
        font-weight: normal
        line-height: pr(15)
        outline: none
        border: none
        width: 100%
      .reset
        color #FFA751
        display flex
        width pr(50)
        justify-content: space-between
        align-items: center

        

        &>i
          transform: rotate(180deg)
          color: #5F5F5F


    .top
      margin-top: pr(103)

    .btn
      margin-top: pr(22)
</style>
