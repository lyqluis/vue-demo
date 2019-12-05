<template>
  <div class="login">
    <header-component :title="'找回密码'"/>
    <img src="../assets/img/login/login.png" alt>
    <div class="form border-1px">
      <div class="step-title-row">
        <div class="step-title" :class="step > 0 ? 'active' : ''">1.输入手机号码 >&nbsp;</div>
        <div class="step-title" :class="step > 1 ? 'active' : ''">2.输入验证码 >&nbsp;</div>
        <div class="step-title" :class="step > 2 ? 'active' : ''">3.重置密码</div>
      </div>
      <!-- <div class="warn">
        <i class="tip"/>登陆手机号不能为空
      </div>-->
      <div class="step" v-if="step == 1">
        <div class="ipt">
          <input type="number" placeholder="手机号">
        </div>
        <!-- <div class="ipt">
        <input type="number" placeholder="密   码">
        </div>-->
        <div class="row">
          <div class="ipt small">
            <input type="text" placeholder="验证码" maxlength="4">
          </div>
          <div class="code">35xp</div>
        </div>
        <!-- <div class="row forget">
        <div class="checkbox">
          <input type="checkbox" value="记住密码">
          <span>记住密码</span>
        </div>
        <span>忘记密码？</span>
        </div>-->
        <div class="row center">
          <!-- <div class="btn normal" @click="$router.push('register')">注 册</div> -->
          <div class="btn">下一步</div>
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
  name: "forgetPw",
  components: {
    headerComponent
    // footerComponent
  },
  data() {
    return {
      step: "1"
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

.login
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

    .step-title-row
      display: flex
      margin-bottom: pr(31)
      margin-top: pr(27)

      .step-title
        font-size: pr(13)
        font-family: ArialMT
        font-weight: 400
        color: #5F5F5F

      .active
        color #FFA751 //chengse

    .step
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

      .small
        width: pr(150)

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

      .center
        justify-content: center

      .forget
        margin: pr(3) 0 pr(6) 0

        .checkbox
          display: flex
          align-items: center

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

      .normal
        background: white
        border: #FFA751 1px solid
        color: #FFA751

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
