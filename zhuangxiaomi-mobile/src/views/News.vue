<template>
  <div class="news">
    <header-component :title="'权威报道'"/>
    <div class="content">
      <img src="../assets/img/news/pic.png" alt>
      <ul
        class="list"
        v-infinite-scroll="loadMore"
        :infinite-scroll-disabled="loading"
        infinite-scroll-distance="0"
      >
        <li v-for="(item,index) in newsList" :key="index" @click="$router.push('newsDetail')">
          <div class="title">
            <span>{{item.name}}</span>
            <img :src="item.logo" alt>
          </div>
          <div class="main-wrapper">
            <img :src="item.pic" alt>
            <div class="words">
              <p>{{item.words}}</p>
              <div class="detail">
                <span class="time">{{item.time}}</span>
                <span>
                  <span class="orange">219</span>人气
                </span>
              </div>
            </div>
          </div>
        </li>
        <!-- 加载项 -->
        <li class="loading" v-show="!loading">
          <mt-spinner type="fading-circle" color="#00ccff" :size="20"/>
          <span>{{loadTxt}}</span>
        </li>
      </ul>
      <!-- </mt-loadmore> -->
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
      newsList: [
        {
          name: "家装O2O不能言说的口碑之伤",
          pic: require("../assets/img/news/pic1.png"),
          words:
            "北京蜜蜂兄弟科技有限公司由国内互联网精英和资深装修监理人士一起创立，并获得国内顶级基金风险投资，管家式监理理念的开创者，旗下装小蜜网站是中国首家开装修中的各种陷阱……",
          logo: require("../assets/img/news/logo1.png"),
          time: "2015-04-16 10:43",
          hot: "219"
        },
        {
          name: "家装O2O不能言说的口碑之伤",
          pic: require("../assets/img/news/pic2.png"),
          words:
            "北京蜜蜂兄弟科技有限公司由国内互联网精英和资深装修监理人士一起创立，并获得国内顶级基金风险投资，管家式监理理念的开创者，旗下装小蜜网站是中国首家开装修中的各种陷阱……",
          logo: require("../assets/img/news/logo2.png"),
          time: "2015-04-16 10:43",
          hot: "219"
        },
        {
          name: "家装O2O不能言说的口碑之伤",
          pic: require("../assets/img/news/pic3.png"),
          words:
            "北京蜜蜂兄弟科技有限公司由国内互联网精英和资深装修监理人士一起创立，并获得国内顶级基金风险投资，管家式监理理念的开创者，旗下装小蜜网站是中国首家开装修中的各种陷阱……",
          logo: require("../assets/img/news/logo3.png"),
          time: "2015-04-16 10:43",
          hot: "219"
        },
        {
          name: "家装O2O不能言说的口碑之伤",
          pic: require("../assets/img/news/pic4.png"),
          words:
            "北京蜜蜂兄弟科技有限公司由国内互联网精英和资深装修监理人士一起创立，并获得国内顶级基金风险投资，管家式监理理念的开创者，旗下装小蜜网站是中国首家开装修中的各种陷阱……",
          logo: require("../assets/img/news/logo4.png"),
          time: "2015-04-16 10:43",
          hot: "219"
        }
      ],

      loading: true,
      loadTxt: ""
    };
  },
  methods: {
    loadMore() {
      this.loading = false;
      this.loadTxt = "加载中";
      setTimeout(() => {
        // for (let i = 0, len = this.newsList.length; i < len; i++) {
        //   this.newsList.push(this.newsList[i]);
        // }
        this.loadTxt = "已全部加载";
        this.loading = true; // 若数据已全部获取完毕
      }, 2500);
      // this.$refs.loadmore.onBottomLoaded();
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

.news
  // background: $bgColor
  .content
    width: 100%
    position: relative
    top: pr(40)
    background: $bgColor
    overflow: auto
    padding-bottom: pr(75)
    font-size: 0
    height: 100vh - pr(115)
    overflow: auto

    &>img
      width: 100%

    .list
      background: white

      &>li
        height: pr(130)
        padding: pr(10) pr(12) pr(12) pr(12)
        borderbottom($lineColor)

        .title
          font-size: pr(15)
          font-family: HiraginoSansGB-W3
          font-weight: normal
          color: rgba(89, 89, 89, 1)
          display: flex
          justify-content: space-between
          align-items: center
          margin-bottom: pr(7)

          &>img
            width: pr(64)

        .main-wrapper
          display: flex
          justify-content: space-between
          align-items: center

          &>img
            width: pr(98)
            margin-right: pr(9)

          .words
            &>p
              font-size: pr(9)
              font-family: HiraginoSansGB-W3
              font-weight: normal
              color: rgba(89, 89, 89, 1)
              line-height: pr(12)

            .detail
              display: flex
              justify-content: space-between
              font-size: pr(9)
              font-family: FZLTXHK
              font-weight: 400
              color: rgba(121, 121, 121, 1)
              line-height: pr(13)
              margin-top: pr(4)

      .loading
        height: pr(40)
        // background: lightblue
        display: flex
        justify-content: center
        align-items: center
        font-size: pr(10)
        font-family: FZLTXHK
        font-weight: 400
        color: rgba(121, 121, 121, 1)

        &>>>.circle-color-9 > div::before
          background-color: rgba(121, 121, 121, 1)

        &>span
          margin-left: pr(5)

    .orange
      color: #FE7200

  .foot
    position: fixed
    bottom: 0
</style>
