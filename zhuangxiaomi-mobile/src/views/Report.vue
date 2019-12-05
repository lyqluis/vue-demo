<template>
  <div class="report">
    <header-component :title="'服务报告'"/>
    <div class="content">
      <div class="search-wrapper">
        <div class="search">
          <input type="text" placeholder="热门搜索：监理案例">
          <i class="mint-toast-icon mintui mintui-search"/>
        </div>
      </div>
      <div class="sm-article border-1px" @click="$router.push('reportDetail')">
        <div class="title">
          <i class="jian"/>懒人装修必备15条逆天装修小秘籍
        </div>
        <img src="../assets/img/home/report_2.png" alt>
        <div class="detail">
          <span class="time">2015-04-16 10:43</span>
          <span class="hot">
            <span class="orange">219</span>人气
          </span>
        </div>
      </div>
      <div class="sm-article border-1px" @click="$router.push('reportDetail')">
        <div class="title">2015年最适合12星座的装修风格</div>
        <div class="row">
          <img :src="imgs" alt>
          <img src="../assets/img/user/pic2.png" alt>
          <img src="../assets/img/user/pic3.png" alt>
        </div>
        <div class="detail">
          <span class="time">2015-04-16 10:43</span>
          <span class="hot">
            <span class="orange">219</span>人气
          </span>
        </div>
      </div>
      <div class="sm-article border-1px" @click="$router.push('reportDetail')">
        <div class="title">2015年最适合12星座的装修风格</div>
        <div class="row">
          <img src="../assets/img/user/pic1.png" alt>
          <img src="../assets/img/user/pic2.png" alt>
          <img src="../assets/img/user/pic3.png" alt>
        </div>
        <div class="detail">
          <span class="time">2015-04-16 10:43</span>
          <span class="hot">
            <span class="orange">219</span>人气
          </span>
        </div>
      </div>
    </div>
    <div class="foot">
      <footer-component/>
    </div>
  </div>
</template>

<script>
import headerComponent from "@/components/HeaderComponent";
import footerComponent from "@/components/FooterComponent";

export default {
  name: "report",
  components: {
    headerComponent,
    footerComponent
  },
  data() {
    return {
      imgs: require("../assets/img/user/pic1.png"),
      allLoaded: false
    };
  },
  methods: {
    loadBottom() {
      // this.loading = true;
      // setTimeout(() => {
      //   // let last = this.list[this.list.length - 1];
      //   // for (let i = 1; i <= 10; i++) {
      //   //   this.list.push(last + i);
      //   // }
      //   this.loading = false;
      // }, 2500);
      this.allLoaded = true; // 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded();
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

.report
  // background: $bgColor
  .content
    width: 100%
    position: relative
    top: pr(40)
    background: $bgColor
    overflow: auto
    padding-bottom: pr(75)

    .search-wrapper
      padding: pr(5)
      background: $bgColor

      .search
        width: 100%
        height: pr(27)
        background: white
        display: flex
        justify-content: space-between
        align-items: center
        border-radius: pr(10)
        padding: pr(0) pr(14)
        font-size: pr(11)
        color: rgba(118, 118, 118, 1)

        &>input
          font-size: pr(11)
          font-family: FZLTXHK
          font-weight: 400
          color: rgba(118, 118, 118, 1)
          outline: none
          border: none
          width: 100%

    .sm-article
      padding: pr(15) pr(9) pr(1) pr(9)
      width: 100%
      borderbottom($lineColor)
      background: white

      &>img
        width: 100%
        margin-top: pr(9)

      .title
        font-size: pr(15)
        font-family: FZLTXHK
        font-weight: 400
        color: rgba(77, 77, 77, 1)

        .jian
          // align-self: baseline
          display: inline-block
          width: pr(13)
          height: pr(13)
          margin-right: pr(6)
          bg('../assets/img/home/jian.png')

      .row
        display: flex
        justify-content: space-between
        margin: pr(10) 0

        &>img
          width: pr(98)
          height: 100%

    .detail
      display: flex
      justify-content: space-between
      align-items: center
      font-size: pr(9)
      font-family: FZLTXHK
      font-weight: 400
      color: rgba(121, 121, 121, 1)
      margin-bottom: pr(10)

      &>div
        display: flex
        justify-content: space-between
        align-items: center

        .isGood
          width: pr(15)
          height: pr(14)
          bg('../assets/img/user/isGood.png')
          margin-right: pr(5)

        .good
          width: pr(15)
          height: pr(14)
          bg('../assets/img/user/good.png')
          margin-right: pr(5)

        .reply
          width: pr(15)
          height: pr(14)
          bg('../assets/img/user/reply.png')
          margin-left: pr(25)

    .orange
      color: #FE7200

  .foot
    position: fixed
    bottom: 0
</style>
