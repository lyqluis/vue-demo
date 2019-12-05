<template>
  <div class="user">
    <div class="avatar">
      <img src="../assets/img/avatar.png" alt="avatar" />
    </div>
    <div class="user-name">Hello, Luis</div>
    <p>You have {{todayTasks.length}} tasks to do today</p>
    <p>Today: {{todayDate}}</p>
  </div>
</template>

<script>
import { todayDate } from "../assets/js/util.js";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["todayTasks"]),
    todayDate
  }
};
</script>

<style lang="scss" scoped>
.user {
  @media screen and(max-width: 320px) {
    width: 100%;
    height: 35vh;
    padding: 10% 11vw 0 11vw;
  }
  width: 100%;
  height: 35vh;
  padding: 20% 11vw 0 11vw;
  color: #fff;
  .avatar {
    img {
      width: 6vh;
      height: 6vh;
      border-radius: 50%;
    }
  }
  .user-name {
    margin: 10px 0;
    font-size: 25px;
    font-weight: 400;
  }
  p {
    margin: 5px 0;
    font-size: 20px;
  }
}
</style>
