<template>
  <div class="logistics">
    <div class="wrapper">
      <div class="title black">
        <span>物流仓储中心</span>
      </div>
      <article>
        <p>中实物流仓储中心地处京津唐高速路与六环交界处，占地15500平方米（25.3亩）。该中心以其优越的地理位置开展仓储、停车住宿等业务。</p>
      </article>
      <img src="../assets/img/logistics/che.png" alt>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.logistics {
  .wrapper {
    margin-top: 2px;
    width: 100%;
    background: rgba(255, 255, 255, 1);
    border-radius: 2px;
    padding: 12px 9px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 54px;
    article {
      padding: 18px 22px 0 21px;
      text-indent: 28px;
      p {
        font-size: 14px;
        line-height: 24px;
      }
    }
    img {
      margin: 33px auto 0 auto;
    }
  }
}
</style>
