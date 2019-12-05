<template>
  <div class="newsDetail">
    <header-component :title="'权威报道'"/>
    <div class="content">
      <div class="article">
        <div class="title">家装O2O不能言说的口碑之伤</div>
        <div class="detail">
          <span class="time">转自：网易家装</span>
        </div>
        <img src="../assets/img/report/pic1.png" alt>
        <div
          class="word"
        >装修工程不是现成的产品无论施工队还是装修公司，装修都是在装饰设计和施工过程中形成试想，装修前，装修企业内部的质检（经常误称为监理），怎么可能指出自家预算中的漏洞，帮助消费者签订公平、透明的装修合同呢？装修过程中装修企业内部的质检是自己监督自己，运动员兼作裁判员的监督机制消费者又会获得几层的知情权装修后如果装修企业自己出现重大问题，又怎么可能代理消方监理才能公正客观的处理装修中的问题，才能真正地保障业主的权益。</div>
        <img src="../assets/img/report/pic2.png" alt>
        <div
          class="word"
        >装修工程不是现成的产品无论施工队还是装修公司，装修都是在装饰设计和施工过程中形成试想，装修前，装修企业内部的质检（经常误称为监理），怎么可能指出自家预算中的漏洞，帮助消费者签订公平、透明的装修合同呢？装修过程中装修企业内部的质检是自己监督自己，运动员兼作裁判员的监督机制消费者又会获得几层的知情权装修后如果装修企业自己出现重大问题，又怎么可能代理消方监理才能公正客观的处理装修中的问题，才能真正地保障业主的权益。</div>
        <div class="author">
          <span>
            原文地址：
            <span class="orange">http://j.news.163.com/docs/99/2015031817/AL0QQ1G29001Q1G3.html</span>
          </span>
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
  name: "newsDetail",
  components: {
    headerComponent,
    footerComponent
  },
  data() {
    return {
      showWirteboard: false
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

.newsDetail
  // background: $bgColor
  .content
    width: 100%
    position: relative
    top: pr(40)
    background: $bgColor
    overflow: auto
    padding-bottom: pr(37)

    .article
      background: $bgColor
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      margin-bottom: pr(11)

      .title
        font-size: pr(15)
        font-family: HiraginoSansGB-W3
        font-weight: normal
        color: rgba(44, 44, 44, 1)
        margin-top: pr(18)
        margin-bottom: pr(10)

      .detail
        font-size: pr(9)
        font-family: FZLTXHK
        font-weight: 400
        color: rgba(121, 121, 121, 1)
        margin-bottom: pr(15)

      &>img
        width: 100%

      .word
        font-size: pr(12)
        font-family: HiraginoSansGB-W3
        font-weight: normal
        color: rgba(89, 89, 89, 1)
        line-height: pr(18)
        padding: pr(14) pr(10)
        text-indent: pr(24)

      .author
        background: white
        width: 100%
        height: pr(35)
        font-size: pr(6)
        font-family: HiraginoSansGB-W3
        color: rgba(121, 121, 121, 1)
        display: flex
        justify-content: space-between
        align-items: center
        padding: 0 pr(11)

        &>span
          width: 100%
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis

  .orange
    color: #FE7200
</style>
