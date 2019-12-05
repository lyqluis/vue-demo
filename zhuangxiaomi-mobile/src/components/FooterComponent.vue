<template>
  <footer class="border-1px">
    <div class="top">
      <div class="foot-left">
        <i class="foot-logo"/>
      </div>
      <div class="foot-right">
        <i class="cbda-logo"/>
      </div>
    </div>
    <div class="bottom">© 2015 ZHUANGXIAOMI.COM&nbsp;&nbsp;&nbsp;&nbsp;京ICP备13026313号</div>
  </footer>
</template>

<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

  footer
    bordertop($lineColor)
    background: white

    &>.top
      height: pr(53)
      padding: pr(13) pr(30)
      display: flex
      justify-content: center

      &>.foot-left
        border-right: pr(1) solid #9D9D9D
        position relative
        width pr(94)

        .foot-logo
          position absolute 
          top 0

          width: pr(82)
          height: pr(28)
          margin-right: pr(18)
          bg('../assets/img/home/footlogo.png')

      &>.foot-right
        display: flex
        align-items: center

        .cbda-logo
          width: pr(155)
          height: pr(33)
          margin-left: pr(11)
          bg('../assets/img/home/cbda.png')

    &>.bottom
      height: pr(22)
      background: #2C2C2C
      font-size: pr(9)
      font-family: ArialMT
      font-weight: 400
      color: rgba(226, 226, 226, 1)
      text-align: center
      line-height: pr(22)
</style>


