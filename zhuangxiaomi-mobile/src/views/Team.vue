<template>
  <div class="team">
    <div class="slider-wrapper">
      <mt-swipe :auto="0" :prevent="true">
        <mt-swipe-item v-for="(pic,index) in teams" :key="index">
          <img :src="pic" alt>
          <div class="good">
            <i/>
            <span>328</span>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teams: [
        require("../assets/img/team/team_1.png"),
        require("../assets/img/team/team_1.png"),
        require("../assets/img/team/team_1.png"),
        require("../assets/img/team/team_1.png"),
        require("../assets/img/team/team_1.png"),
        require("../assets/img/team/team_1.png"),
        require("../assets/img/team/team_1.png"),
        require("../assets/img/team/team_1.png"),
        require("../assets/img/team/team_1.png"),
        require("../assets/img/team/team_1.png")
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

.team
  &>.slider-wrapper
    height 90vh
    &>>> .mint-swipe
      .mint-swipe-items-wrap
        .mint-swipe-item
          // display flex
          // justify-content center
          &> img
            width: 100%
          .good
            position absolute
            left pr(132)
            bottom pr(43)
            width:pr(56);
            height:pr(56);
            background:rgba(255,167,81,1);
            border-radius:50%;
            display flex
            flex-direction column
            justify-content center
            align-items center
            &>i 
              bg('../assets/img/team/thumb.png')
              width pr(17)
              height pr(26)
            &>span 
              font-size:pr(11);
              font-family:ArialMT;
              font-weight:400;
              color:rgba(255,255,255,1);
              margin-top pr(6)
      .mint-swipe-indicators
        bottom pr(17)
        .mint-swipe-indicator
          background: rgba(217,217,217,1)
          opacity: 1
       
        .is-active
          background: #FFA851
          opacity: 1

</style>
