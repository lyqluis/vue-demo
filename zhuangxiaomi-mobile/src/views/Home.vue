<template>
  <div class="home">
    <header>
      <i class="logo"/>
      <span>装小蜜家装监理</span>
      <i class="avater" @click="$router.push('user')"/>
    </header>
    <div class="slider-wrapper">
      <mt-swipe :auto="3000" :prevent="true">
        <mt-swipe-item v-for="(pic,index) in sliders" :key="index">
          <img :src="pic" alt>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="menu border-1px">
      <div
        class="nav-wrapper"
        v-for="(item,index) in nav"
        :key="index"
        @click="$router.push(item.path)"
      >
        <div class="nav" :style="{backgroundColor:item.color}">
          <i :class="item.name"/>
        </div>
        <span>{{item.title}}</span>
      </div>
    </div>
    <div class="article border-1px" @click="$router.push('news')">
      <div>
        <i class="jt"/>
        <div class="title">
          <p>家装O2O不能言说之伤</p>
          <p>装小蜜通过创新式第三方监理解决装修头痛问题</p>
        </div>
      </div>
      <i class="right"/>
    </div>
    <div class="block border-1px">
      <div class="blockhead">
        <span>工地直播</span>
        <span @click="$router.push('site')">
          更多
          <i class="more"/>
        </span>
      </div>
      <div class="blockcontent">
        <div class="content-wrapper" v-for="item in imgs" :key="item">
          <img :src="item" alt>
          <div class="screen"/>
          <div class="content-title">
            <span>北京盛世宏图小区</span>
            <span>128m&sup2;/27万元/两室两厅</span>
          </div>
        </div>
      </div>
    </div>
    <div class="block border-1px">
      <div class="blockhead">
        <span>服务报告</span>
        <span @click="$router.push('report')">
          更多
          <i class="more"/>
        </span>
      </div>
      <div class="blockcontent">
        <div class="content-wrapper row-length" v-for="item in reports" :key="item">
          <img :src="item" alt>
          <div class="screen"/>
          <div class="content-title no-border">
            <i class="jian"/>
            <span>懒人装修必备15条逆天装修小秘籍</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <footer class="border-1px">
      <div class="top">
        <div class="foot-left">
          <i class="foot-logo"/>
        </div>
        <div class="foot-right">
          <i class="cbda-logo"/>
        </div>
      </div>
      <div class="bottom">© 2015 ZHUANGXIAOMI.COM&nbsp;&nbsp;&nbsp;&nbsp;京ICP备13026313号</div>
    </footer>-->
    <footer-component/>
  </div>
</template>

<script>
// @ is an alias to /src
import footerComponent from "@/components/FooterComponent";
import nav from "@/assets/js/nav";

export default {
  name: "home",
  components: {
    footerComponent
  },
  data() {
    return {
      nav: nav,
      imgs: [
        require("../assets/img/home/content_1.png"),
        require("../assets/img/home/content_2.png"),
        require("../assets/img/home/content_3.png"),
        require("../assets/img/home/content_4.png"),
        require("../assets/img/home/content_5.png"),
        require("../assets/img/home/content_6.png")
      ],
      reports: [
        require("../assets/img/home/report_1.png"),
        require("../assets/img/home/report_2.png")
      ],
      sliders: [
        require("../assets/img/home/slider_1.png"),
        require("../assets/img/home/slider_1.png"),
        require("../assets/img/home/slider_1.png"),
        require("../assets/img/home/slider_1.png")
      ]
    };
  },
  computed: {}
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

.home
  background-color: $bgColor

  &>header
    background: rgba(0, 0, 0, 0.7)

    &>i
      display: inline-block

    .logo
      width: pr(27)
      height: pr(29)
      bg('../assets/img/home/logo.png')

    .avater
      width: pr(23)
      height: pr(23)
      bg('../assets/img/home/avater.png')

  .slider-wrapper
    height: pr(230)
    width: 100%

    & >>> .mint-swipe
      .mint-swipe-items-wrap
        .mint-swipe-item
          &> img
            width: 100%

      .mint-swipe-indicators
        z-index: 1
        bottom: pr(-10)

        .is-active
          background: #FFA851
          opacity: 1

  .menu
    // height: 322px
    // background: lightcoral
    position: relative
    // top: calc(212px + 18px)
    padding: pr(13) pr(10) 0 pr(10)
    display: flex
    justify-content: space-around
    flex-wrap: wrap
    background: white
    bordertop($lineColor)
    borderbottom($lineColor)

    .nav-wrapper
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      margin: 0 pr(12) pr(16) pr(13)

      .nav
        display: flex
        justify-content: center
        align-items: center
        width: pr(43)
        height: pr(43)
        border-radius: 50%
        margin-bottom: pr(7)

        &>i
          display: inline-block
          width: pr(27)
          height: pr(27)

        .supervision
          bg('../assets/img/home/jlfw.png')
          width: pr(21)
          height: pr(21)

        .site
          bg('../assets/img/home/gdzb.png')
          width: pr(22)
          height: pr(20)

        .report
          bg('../assets/img/home/fwbg.png')

        .appointment
          bg('../assets/img/home/yyjl.png')
          width: pr(18)
          height: pr(25)

        .question
          bg('../assets/img/home/cjwt.png')
          width: pr(21)
          height: pr(21)

        .team
          bg('../assets/img/home/jltd.png')
          width: pr(26)
          height: pr(18)

        .about
          bg('../assets/img/home/gywm.png')
          width: pr(19)
          height: pr(24)

        .login
          bg('../assets/img/home/dl.png')

      &>span
        font-size: pr(11)

  .article
    // height: 116px
    // background: lightyellow
    margin: pr(8) 0
    bordertop($lineColor)
    borderbottom($lineColor)
    display: flex
    justify-content: space-between
    align-items: center
    padding: pr(9) pr(19)
    background: white

    &>div
      display: flex
      align-items: center

    .jt
      display: inline-block
      width: pr(29)
      height: pr(41)
      bg('../assets/img/home/jt.png')
      margin-right: pr(13)

    .title
      font-family: HiraginoSansGB-W3

      & :first-child
        font-size: pr(13)
        font-weight: normal
        color: rgba(77, 77, 77, 1)
        margin-bottom: pr(7)

      & :last-child
        font-size: pr(9)
        font-weight: normal
        color: rgba(118, 118, 118, 1)

    .right
      display: inline-block
      width: pr(9)
      height: pr(17)
      bg('../assets/img/home/right.png')

  .block
    bordertop($lineColor)
    margin-bottom: pr(8)
    background: white

    & .blockhead
      padding: pr(12) pr(11)
      position: relative
      height: pr(34)
      // background: lightyellow
      display: flex
      justify-content: space-between
      align-items: center
      font-size: pr(13)
      font-family: HiraginoSansGB-W3
      color: rgba(44, 44, 44, 1)

      &>span:last-child
        font-size: pr(11)
        padding-right: pr(18)

      .more
        align-self: baseline
        display: inline-block
        position: absolute
        top: pr(10)
        right: pr(11)
        width: pr(13)
        height: pr(13)
        bg('../assets/img/home/more.png')

    & .blockcontent
      display: flex
      flex-wrap: wrap

      .content-wrapper
        width: 50%
        height: pr(170)
        overflow: hidden
        position: relative

        &>img
          position: absolute
          display: block
          width: 100%
          // height auto

        .screen
          width: 100%
          height: 100%
          background: rgba(0, 0, 0, 0.7)

        .content-title
          position: absolute
          bottom: pr(0)
          left: 0
          height: pr(41)
          width: 100%
          background: rgba(0, 0, 0, 0.7)
          border-left: pr(6) solid rgb(255, 153, 36)
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center

          &>span:first-child
            font-size: pr(12)
            font-family: HiraginoSansGB-W3
            color: rgba(226, 226, 226, 1)
            margin-bottom: pr(5)

          &>span:last-child
            font-size: pr(9)
            font-family: HiraginoSansGB-W3
            color: #B5B5B5

      .row-length
        width: 100%

        .no-border
          border: none
          padding: pr(11) pr(35)
          height: pr(34)
          display: flex
          flex-direction: row
          justify-content: center
          align-items: center

          &>span
            font-size: pr(15) !important
            font-family: HiraginoSansGB-W3
            color: #E2E2E2 !important

          .jian
            align-self: baseline
            display: inline-block
            width: pr(13)
            height: pr(13)
            margin-right: pr(6)
            bg('../assets/img/home/jian.png')
</style>
