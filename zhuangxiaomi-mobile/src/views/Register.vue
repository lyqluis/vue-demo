<template>
  <div class="register">
    <header-component :title="'注册'"/>
    <img src="../assets/img/login/login.png" alt>
    <div class="form border-1px">
      <!-- <div class="warn">
        <i class="tip"/>登陆手机号不能为空
      </div>-->
      <div class="ipt confirm">
        <input type="number" placeholder="手机号">
      </div>
      <div class="ipt">
        <input type="text" placeholder="输入密码">
      </div>
      <div class="ipt">
        <input type="text" placeholder="确认密码">
      </div>
      <div class="row">
        <div class="ipt small">
          <input type="text" placeholder="手机激活码" maxlength="4">
        </div>
        <div class="btn sm-width">获取激活码</div>
      </div>
      <div class="row forget">
        <div class="checkbox">
          <input type="checkbox" value="记住密码">
          <span>我已阅读并同意遵守《装小蜜用户服务协议》</span>
        </div>
      </div>
      <div class="row">
        <div class="btn normal">已有账号 直接登录</div>
        <div class="btn">确 定</div>
      </div>
      <div class="share">
        <div class="share-title">
          <span>使用以下账号直接登陆</span>
        </div>
        <div class="content">
          <i class="weibo"/>
          <i class="qq"/>
          <i class="weixin"/>
          <i class="douban"/>
        </div>
      </div>
    </div>
    <!-- <footer-component/> -->
  </div>
</template>

<script>
import headerComponent from "@/components/HeaderComponent";
// import footerComponent from "@/components/FooterComponent";

export default {
  name: "register",
  components: {
    headerComponent
    // footerComponent
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

.register
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
    borderbottom($lineColor)

    &>.title
      font-size: pr(17)
      font-family: HiraginoSansGB-W3
      font-weight: normal
      color: rgba(255, 167, 81, 1)
      line-height: pr(18)
      margin-bottom: pr(16)

    .ipt
      width: pr(237)
      height: pr(40)
      margin: pr(7) 0
      background: rgb(245, 245, 245)
      // position relative
      padding: pr(13) pr(12)
      display: flex
      justify-content: flex-start
      align-items: center
      border-radius: pr(3)
      border: pr(1) solid rgb(216, 216, 216)

      &>input
        font-size: pr(14)
        font-family: FZLTHJW--GB1-0
        font-weight: normal
        // color: rgba(181, 181, 181, 1)
        line-height: pr(15)
        outline: none
        border: none
        background: rgb(245, 245, 245)
        width: 100%

        &::-webkit-input-placeholder
          color: #B5B5B5

    .confirm
      position: relative

      &:after
        position: absolute
        display: inline-block
        content: ''
        width: pr(17)
        height: pr(17)
        bg('../assets/img/register/confirm.png')
        right: pr(-24)

    .small
      width: pr(130)

    .row
      display: flex
      justify-content: space-between
      align-items: center
      width: pr(237)
      font-size: pr(11)
      font-family: HiraginoSansGB-W3
      font-weight: normal
      color: rgba(108, 108, 108, 1)

      .code
        width: pr(73)
        height: pr(40)
        background: rgb(178, 178, 178)
        margin-left: pr(14)
        font-size: pr(14)
        font-family: FZLTHJW--GB1-0
        font-weight: normal
        color: rgb(98, 98, 98)
        line-height: pr(40)
        text-align: center

    .forget
      margin: pr(3) 0 pr(6) 0

      .checkbox
        display: flex
        align-items: center

        &>span
          font-size: pr(10)
          font-family: HiraginoSansGB-W3
          font-weight: normal
          color: rgba(108, 108, 108, 1)

    .btn
      width: pr(112)
      height: pr(40)
      margin: 7px 0
      background: #FFA751
      font-size: 17px
      font-family: HiraginoSansGB-W3
      font-weight: normal
      color: rgba(255, 255, 255, 1)
      line-height: pr(39)
      text-align: center
      border-radius: pr(3)

    .sm-width
      width: pr(95)

    .normal
      background: white
      border: #FFA751 1px solid
      color: #FFA751
      font-size pr(11)

    .share
      width: pr(237)
      margin-top: pr(34)
      display: flex
      flex-direction: column

      .share-title
        font-size: pr(11)
        font-family: HiraginoSansGB-W3
        font-weight: normal
        color: rgba(91, 91, 91, 1)

        &>span
          width: 100%
          display: inline-block
          position: relative
          background: white
          text-align: center

          &:before, &:after
            content: ''
            position: absolute
            top: 50%
            background: rgb(216, 216, 216)
            width: pr(60)
            height: 1px

          &:before
            left: 0

          &:after
            right: 0

      .content
        display: flex
        margin-top: pr(15)
        padding: 0 pr(6.5)

        &>i
          width: pr(43)
          height: pr(43)
          margin: 0 pr(6.5)

        .weibo
          bg('../assets/img/login/weibo.png')

        .qq
          bg('../assets/img/login/qq.png')

        .weixin
          bg('../assets/img/login/weixin.png')

        .douban
          bg('../assets/img/login/douban.png')

    &>img
      margin-top: pr(17px)
      height: pr(15)

    .warn
      width: pr(237)
      display: flex
      // justify-content flex-start
      font-size: pr(11)
      font-family: HiraginoSansGB-W3
      color: rgba(255, 89, 89, 1)
      line-height: pr(14)

      .tip
        width: pr(14)
        height: pr(14)
        bg('../assets/img/login/tip.png')
        margin-right: pr(3)
</style>


