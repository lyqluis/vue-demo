<template>
  <div class="app-bar">
    <div class="left" @click="$emit('leftBtn')">
      <i :class='leftIcon'></i>
    </div>
    <p>{{title}}</p>
    <div class="right" @click="$emit('rightBtn')">
      <i :class="rightIcon"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    leftIcon: {
      type: String,
      default:''
    },
    rightIcon: {
      type: String,
      default:''
    }
  }
};
</script>

<style lang="scss" scoped>
$bar-height: 50px;
.app-bar {
  width: 100%;
  height: $bar-height;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  line-height: calc(#{$bar-height} - 20px);
  .right,
  .left {
    flex: 0 0 auto;
    width: calc(#{$bar-height} - 20px);
    height: calc(#{$bar-height} - 20px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>