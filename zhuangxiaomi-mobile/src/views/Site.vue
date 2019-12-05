<template>
  <div class="site">
    <site-option :title="'工地直播'"/>
    <div class="block border-1px">
      <div class="blockcontent">
        <div class="content-wrapper" v-for="item in imgs" :key="item" @click="$router.push('siteDetail')">
          <img :src="item" alt>
          <div class="screen"/>
          <div class="content-title">
            <span>北京盛世宏图小区</span>
            <span>128m&sup2;/27万元/两室两厅</span>
          </div>
        </div>
      </div>
    </div>
    <div class="foot-wrapper">
      <footer-component/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import footerComponent from "@/components/FooterComponent";
import siteOption from "@/components/SiteOption";

export default {
  name: "site",
  components: {
    footerComponent,
    siteOption
  },
  data() {
    return {
      imgs: [
        require("../assets/img/home/content_1.png"),
        require("../assets/img/home/content_2.png"),
        require("../assets/img/home/content_3.png"),
        require("../assets/img/home/content_4.png"),
        require("../assets/img/home/content_5.png"),
        require("../assets/img/home/content_6.png")
      ]
    };
  },
  computed: {}
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

.site
  background-color: $bgColor

  .block
    // bordertop($lineColor)
    background: white
    position relative
    top: pr(40)
    padding-bottom pr(75)

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
  .foot-wrapper
    position fixed
    bottom 0
</style>
