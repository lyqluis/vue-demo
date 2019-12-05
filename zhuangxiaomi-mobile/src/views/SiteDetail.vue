<template>
  <div class="site-detail">
    <header-component :title="'工地直播'"/>
    <div class="img-wrapper">
      <img src="../assets/img/site/pic.png" alt>
      <div class="director">
        <div class="avatar">
          <img src="../assets/img/user/user.png" alt>
        </div>
        <div class="director-name">
          <span>赵天朗</span>
          监理
        </div>
      </div>
    </div>
    <div class="info">
      <div class="title border-1px">
        北京麒麟瑞景别墅
        <i class="working"/>
      </div>
      <dir class="info-detail-wrapper">
        <div class="info-detail">
          <img src="../assets/img/site/house.png" alt>
          <div>户型:三室一厅</div>
        </div>
        <div class="info-detail">
          <img src="../assets/img/site/m2.png" alt>
          <div>户型:三室一厅</div>
        </div>
        <div class="info-detail noborder">
          <img src="../assets/img/site/money.png" alt>
          <div>户型:三室一厅</div>
        </div>
        <div class="info-detail img-width">
          <img src="../assets/img/site/hat.png" alt>
          <div>户型:三室一厅</div>
        </div>
        <div class="info-detail">
          <img src="../assets/img/site/time.png" alt>
          <div>户型:三室一厅</div>
        </div>
        <div class="info-detail noborder">
          <img src="../assets/img/site/host.png" alt>
          <div>户型:三室一厅</div>
        </div>
      </dir>
      <div class="menu">
        <div
          class="progress"
          v-for="(item,index) in progress"
          :key="index"
          @click="$router.push('siteDetailOpen')"
          :style="{backgroundColor:item.color}"
          :class="item.progress ? 'percent' : ''"
        >
          <div class="progress-name" v-if="!item.progress">{{item.name}}</div>
          <div class="per-wrapper" v-if="item.progress">
            {{item.name}}
            <span class="per">{{item.progress}}</span>
          </div>
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
  name: "siteDetail",
  components: {
    headerComponent
    // footerComponent
  },
  data() {
    return {
      progress: [
        { name: "前期审核", color: "#ED5491" },
        { name: "工程交底", color: "#FF5858" },
        { name: "隐蔽工程", color: "#FF7A46" },
        { name: "中期工程", color: "#FFAE2E" },
        { name: "竣工验收", color: "#B6CA4C" },
        { name: "变更项目", color: "#6FC242" },
        { name: "材料验收", color: "#1CAB73" },
        { name: "完成度", progress: "80%", color: "rgb(248,248,248)" }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

.site-detail
  background: $bgColor

  &>>>header
    background: transparent

  .img-wrapper
    position: relative
    font-size: 0

    &>img
      width: 100%

    .director
      position: absolute
      bottom: 0
      width: 100%
      height: pr(40)
      background: rgba(0, 0, 0, 0.6)
      padding: pr(5) pr(16)
      display: flex
      align-items: center

      .avatar
        width: pr(29)
        height: pr(29)
        margin-right: pr(9)

        &>img
          width: 100%

      .director-name
        font-size: pr(11)
        font-family: MicrosoftYaHei
        font-weight: 400
        color: #A4A4A4

        &>span
          color: #E5E5E5
          font-size: pr(12)

  .info
    background: $bgColor

    .title
      height: pr(37)
      borderbottom($lineColor)
      font-size: pr(15)
      font-family: HiraginoSansGB-W3
      font-weight: normal
      color: rgba(77, 77, 77, 1)
      text-align: center
      line-height: pr(37)
      display: flex
      justify-content: center
      align-items: center
      background: white

      .working
        margin-left: pr(6)
        width: pr(42)
        height: pr(16)
        bg('../assets/img/site/working.png')

    .info-detail-wrapper
      margin: 0
      padding: 0
      display: flex
      flex-wrap: wrap
      margin-bottom: pr(8)

      .info-detail
        padding: pr(10)
        width: calc((100% / 3))
        height: pr(66)
        background: white
        font-size: pr(12)
        font-family: HiraginoSansGB-W3
        font-weight: normal
        color: rgba(77, 77, 77, 1)
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        border-right: pr(1) solid $lineColor
        border-bottom: pr(1) solid $lineColor

        &>img
          width: pr(28)
          margin-bottom: pr(9)

      .img-width
        &>img
          width: pr(32)

      .noborder
        border-right: none

    .menu
      width: 100%
      background white
      display: flex
      flex-wrap: wrap

      .progress
        width: pr(53)
        height: pr(53)
        border-radius: 50%
        font-size: pr(11)
        font-family: HiraginoSansGB-W3
        font-weight: normal
        color: rgba(255, 255, 255, 1)
        margin: pr(6) pr(12)
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        position: relative

      .percent
        color: #1CAB73
        bg('../assets/img/site/trans.png')
        .per-wrapper
          margin pr(5)
          width pr(44)
          height pr(44)
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center
          border-radius 50%
          background rgb(248,248,248)

        .per
          font-size: pr(12)
          margin-top: pr(4)
</style>

