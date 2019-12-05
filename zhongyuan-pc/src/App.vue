<template>
  <div id="app">
    <header>
      <div class="logo"></div>
    </header>
    <nav>
      <router-link
        tag="div"
        v-for="(item,index) in nav"
        :key="index"
        :to="item.path"
        class="navs"
        :class="nowNav == index ? 'active' : ''"
        @click.native="nowNav=index"
      >{{item.name}}</router-link>
    </nav>
    <router-view class="bg"/>
    <footer>
      <div class="foot">
        <div>版权所有 @2009：香远（北京）投资有限公司
          <br>技术支持：中远网络（北京）有限公司
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import mixin from "@/assets/js/mixin.js";

export default {
  mixins: [mixin],
  data() {
    return {
      nowNav: 0
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";

#app {
  margin: 0 auto;
  width: 980px;
  padding-bottom: 10px;

  header {
    height: 67px;
    padding: 10px 10px;
    background: rgb(243, 249, 252);
    .logo {
      width: 260px;
      height: 40px;
      @include bg("./assets/img/app/logo.png");
    }
  }
  nav {
    height: 38px;
    @include bg("./assets/img/app/nav-bg.png");
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    padding: 4px 0;
    .navs {
      padding: 0 15px;
      height: 35px;
      line-height: 35px;
      font-size: 12px;
      font-weight: 900;
      font-family: SIL-Hei-Med-Jian;
      color: white;
      text-align: center;
      border-left: 1px solid transparent;
      border-right: 1px solid transparent;
      &:hover {
        background: url("./assets/img/app/nav-active.png");
        background-size: 100% 100%;
        border-left: 1px solid rgb(190, 11, 50);
        border-right: 1px solid rgb(190, 11, 50);
        cursor: pointer;
      }
    }
    .active {
      background: url("./assets/img/app/nav-active.png");
      border-left: 1px solid rgb(190, 11, 50);
      border-right: 1px solid rgb(190, 11, 50);
    }
  }
  .bg {
    background: url("./assets/img/app/bj.png");
    padding: 10px;
  }
  footer {
    padding: 0 10px 10px 10px;
    background: url("./assets/img/app/bj.png");
    .foot {
      height: 87px;
      background: #303338;
      font-size: 12px;
      font-weight: 400;
      color: white;
      line-height: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
}
</style>

