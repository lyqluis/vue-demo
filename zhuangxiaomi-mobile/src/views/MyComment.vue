<template>
  <div class="myComment">
    <header-component :title="'我的评论'"/>
    <div class="content">
      <div class="sm-article border-1px">
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
      <div class="comment">
        <div class="user-img">
          <img src="../assets/img/user/user.png" alt>
        </div>
        <div class="main-comment">
          <div class="comment-wrapper">
            <div class="user-name">
              <span>马雪阳</span>
              <span class="orange">34F</span>
            </div>
            <p>初步评测不高于三家装修公司实地选择合适的装修公司工艺评测服务工艺评测服务帮您从源头把关的装修公司选择合适！</p>
            <div class="detail">
              <span class="time">3小时前</span>
              <div class="operate">
                <div>
                  <i class="isGood"/>
                  <span class="orange">84</span>
                </div>
                <div>
                  <i class="reply"/>
                </div>
              </div>
            </div>
          </div>
          <div class="main-reply">
            <div class="comment-wrapper">
              <div class="user-name">
                <span>
                  贺纯元
                  <i class="vip"/>
                  回复马雪阳：
                </span>
              </div>
              <p>初步评测不高于三家装修公司实地选择合适的装修公司工艺评测服务工艺评测服务帮您从源头把关的装修公司选择合适！</p>
              <div class="detail">
                <span class="time">3小时前</span>
                <div class="operate">
                  <div>
                    <i class="isGood"/>
                    <span class="orange">84</span>
                  </div>
                  <div>
                    <i class="reply"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment-wrapper">
              <div class="user-name">
                <span>
                  贺纯元
                  <i class="vip"/>
                  回复马雪阳：
                </span>
              </div>
              <p>初步评测不高于三家装修公司实地选择合适的装修公司工艺评测服务工艺评测服务帮您从源头把关的装修公司选择合适！</p>
              <div class="detail">
                <span class="time">3小时前</span>
                <div class="operate">
                  <div>
                    <i class="isGood"/>
                    <span class="orange">84</span>
                  </div>
                  <div>
                    <i class="reply"/>
                  </div>
                </div>
              </div>
              <div class="more-reply">更多24条回复</div>
            </div>
          </div>
        </div>
      </div>
      <div class="write">
        <div><i class="writeboard" />
        写评论</div>
      </div>
    </div>
  </div>
</template>

<script>
import headerComponent from "@/components/HeaderComponent";
// import footerComponent from "@/components/FooterComponent";

export default {
  name: "myComment",
  components: {
    headerComponent
    // footerComponent
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

.myComment
  // background: $bgColor
  .content
    width: 100%
    position: relative
    top: pr(40)

    .sm-article
      padding: pr(15) pr(9) pr(1) pr(9)
      width: 100%
      borderbottom($lineColor)

      .title
        font-size: pr(15)
        font-family: FZLTXHK
        font-weight: 400
        color: rgba(77, 77, 77, 1)

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

    .comment
      padding: pr(0) pr(14)
      display: flex

      .user-img
        width: pr(29)
        height: pr(29)
        margin-top: pr(14)
        margin-right: pr(9)
        position: relative

        &>img
          width: 100%
          height: 100%
          position: absolute

      .main-comment, .comment-wrapper
        width: pr(252)

      .comment-wrapper
        margin-top: pr(14)

        .user-name
          width: 100%
          display: flex
          justify-content: space-between
          font-size: pr(11)
          font-family: HiraginoSansGB-W3
          font-weight: normal
          color: rgba(121, 121, 121, 1)

          .vip
            width: pr(9)
            height: pr(8)
            bg('../assets/img/user/vip.png')

        &>p
          font-size: pr(12)
          font-family: HiraginoSansGB-W3
          font-weight: normal
          color: rgba(89, 89, 89, 1)
          line-height: pr(16)
          margin: pr(8) 0 pr(11) 0

      .main-reply
        width: pr(252)
        margin-top: pr(10)
        border: pr(1) $lineColor solid
        border-bottom: none
        margin-bottom: pr(30)
        background $bgColor

        &>.comment-wrapper
          padding: pr(0) pr(9)
          width: 100%
          border-bottom: pr(1) $lineColor solid

          .more-reply
            text-align: center
            font-size: pr(11)
            font-family: HiraginoSansGB-W3
            font-weight: normal
            color: rgba(254, 123, 17, 1)
            margin-bottom: pr(8)

    .write
      width: 100%
      height: pr(37)
      background: #FE7B11
      display flex
      justify-content center
      align-items center
      font-size:pr(13);
      font-family:HiraginoSansGB-W3;
      font-weight:normal;
      color:rgba(255,255,255,1);
      &>div
        display flex
        justify-content center
        align-items center
        .writeboard
          width pr(20)
          height pr(20)
          bg('../assets/img/user/comment.png')
          margin-right pr(8)
</style>
