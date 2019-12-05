<template>
  <div class="appointment">
    <header-component :title="'预约监理'"/>
    <img src="../assets/img/appointment/appointment.png" alt>
    <div class="form border-1px">
      <div class="title">免费预约监理服务</div>
      <div class="ipt">
        <div class="icon">
          <i class="home"/>
        </div>
        <input type="text" placeholder="小区名称">
      </div>
      <div class="ipt">
        <div class="icon">
          <i class="phone"/>
        </div>
        <input type="number" placeholder="手机号码">
      </div>
      <div class="btn">提交申请</div>
      <img src="../assets/img/appointment/tel.png" alt>
    </div>
    <footer-component/>
  </div>
</template>

<script>
import headerComponent from "@/components/HeaderComponent";
import footerComponent from "@/components/FooterComponent";

export default {
  name: "appointment",
  components: {
    headerComponent,
    footerComponent
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

.appointment
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
    padding-top: pr(33)
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
      width: pr(182)
      height: pr(40)
      margin: pr(7) 0
      background: rgb(245, 245, 245)
      // position relative
      padding: pr(10) pr(0)
      display: flex
      justify-content: flex-start
      align-items: center
      border-radius: pr(3)
      border: pr(1) solid rgb(216, 216, 216)

      .icon
        width: pr(33)
        height: 100%
        display: flex
        justify-content: center
        align-items: center

        .home
          width: pr(21)
          height: pr(21)
          bg('../assets/img/appointment/home.png')

        .phone
          width: pr(11)
          height: pr(21)
          bg('../assets/img/appointment/phone.png')

      &>input
        font-size: pr(14)
        font-family: FZLTHJW--GB1-0
        font-weight: normal
        // color: rgba(181, 181, 181, 1)
        line-height: pr(15)
        outline: none
        border: none
        background: rgb(245, 245, 245)

        &::-webkit-input-placeholder
          color: #B5B5B5

    .btn
      width: pr(182)
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

    &>img
      margin-top: pr(17px)
      height: pr(15)
</style>
