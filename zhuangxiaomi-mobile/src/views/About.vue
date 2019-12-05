<template>
  <div class="about">
    <header-component :title="'关于我们'"/>
    <img src="../assets/img/about/pic_1.png" alt>
    <div class="article border-1px">
      <p>&nbsp;&nbsp;北京蜜蜂兄弟科技有限公司由国内互联网精英和资深装修监理人士一起创立，并获得国内顶级基金风险投资，管家式监理理念的开创者，旗下装小蜜网站是中国首家O2O装修服务网站，致力于用颠覆的价格帮用户搞定最头痛的装修，帮助业主避开装修中的各种陷阱。</p>
      <p>“装小蜜”总部位于北京市最繁华的CBD地区，拥有资深装修专家和一线互联网公司IT精英组成的核心团队，独创的“工地直播平台”将装修过程完全透明化，让业主可以在网站上直接查看所有装修进度。</p>
      <p>“装小蜜”的愿景是希望让基础装修变的简单，让每个家庭可以花更多的时间在提升家的美观和品质上，而不是像现在一样，大部分精力花在和装修公司斗智斗勇上，最后还因为装修搞的遍体鳞伤。</p>
    </div>
    <div class="contact">
      <div class="title border-1px">联系我们</div>
      <div class="connection border-1px">
        <p>
          <strong>公司名称：</strong>北京蜜蜂兄弟科技有限公司
        </p>
        <p>
          <strong>服务热线：</strong>400-6262-315
        </p>
        <p>
          <strong>公司地址：</strong>北京朝阳区SOHO现代城6号楼505室
        </p>
        <div class="qrcode">
          <img src="../assets/img/about/qrcode.png" alt>
        <p class="bottom-p">装小蜜为北京蜜蜂兄弟科技有限公司 旗下品牌</p>
        </div>
      </div>
    </div>
    <footer-component/>
  </div>
</template>

<script>
import headerComponent from "@/components/HeaderComponent";
import footerComponent from "@/components/FooterComponent";

export default {
  name: "supervision",
  components: {
    headerComponent,
    footerComponent
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

.about
  background: $bgColor

  &>img
    // position: relative
    // top: pr(0)
    width: 100%

  .article
    // position: relative
    top: pr(-20)
    padding: pr(17) pr(11) pr(10) pr(11)
    font-size: pr(12)
    text-indent: pr(18)
    font-family: HiraginoSansGB-W3
    font-weight: normal
    color: rgba(89, 89, 89, 1)
    line-height: pr(18)
    background: white
    borderbottom($lineColor)

    &>p
      margin-bottom: pr(10)

  .contact
    background: white
    position: relative
    top: pr(-12)

    &>.title
      font-size: pr(12)
      font-family: HiraginoSansGB-W3
      font-weight: normal
      color: rgba(44, 44, 44, 1)
      line-height: pr(33)
      padding: 0 pr(11)
      bordertop($lineColor)
      borderbottom($lineColor)

    .connection
      font-size: pr(12)
      font-family: HiraginoSansGB-W3
      font-weight: normal
      color: #595959
      line-height: pr(18)
      padding: pr(20) 0 0px pr(9)
      borderbottom($lineColor)

      &>p>strong
        color: #2C2C2C
      .qrcode
        display flex
        flex-direction column
        justify-content center
        align-items center
        &>img
          width pr(129)
          height 100%
          margin pr(20) 0
        &>.bottom-p
          margin-bottom pr(20)

</style>
