<template>
  <div class="popup-menu">
    <header>
      <i class="mint-toast-icon mintui mintui-back" @click="$router.go(-1)"/>
      <span>{{title}}</span>
      <i class="mint-toast-icon mintui mintui-more" @click="popupVisible = !popupVisible"/>
    </header>
    <mt-popup v-model="popupVisible" position="top">
      <div class="menu">
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
      <div class="ad">
          <img src="../assets/img/header/tel.png" alt="">
      </div>
    </mt-popup>
  </div>
</template>

<script>
import nav from "@/assets/js/nav";

export default {
  props: {
    title: ""
  },
  data() {
    return {
      popupVisible: false,
      nav: nav
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

.popup-menu
  position: relative

  &>header
    position: fixed
    background: #2C2C2C
    z-index: 3000

    &>i
      display: inline-block
      font-size: pr(21)

  &>>> .mint-popup
    top: pr(40)
    width: 100vw

    // height: 252px
    .menu
      background: white
      padding: pr(31) pr(10) 0 pr(10)
      display: flex
      justify-content: space-around
      flex-wrap: wrap

      .nav-wrapper
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        margin: 0 pr(14) pr(16) pr(14)

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
    .ad
      display flex
      justify-content center
      &>img
        width 63%
        height 100%
        margin-top pr(12)
        margin-bottom pr(24)
</style>