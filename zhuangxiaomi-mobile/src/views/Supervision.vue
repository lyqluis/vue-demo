<template>
  <div class="supervision">
    <header-component :title="'监理服务'"/>
    <img src="../assets/img/supervision/bg.png" alt>
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

.supervision
  &>img
    width: 100%
</style>
