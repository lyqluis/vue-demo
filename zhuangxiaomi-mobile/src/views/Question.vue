<template>
  <div class="question">
    <header-component :title="'常见问题'"/>
    <img src="../assets/img/question/content.png" alt>
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

.question
  background $bgColor
  &>img
    position relative
    top pr(-5)
    width: 100%
    margin-bottom pr(-10)
</style>
