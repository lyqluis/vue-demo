<template>
  <div class="estate">
    <div class="wrapper">
      <div class="title black">
        <span>物业管理</span>
      </div>
      <div class="news-wrapper">
        <h1>香远北京公司组织举办投资管理操作实践培训</h1>
        <h2>来源： 时间： 2011年12月23日</h2>
        <img src="../assets/img/news/news.png" alt>
      </div>
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
.estate {
  .wrapper {
    margin-top: 2px;
    width: 100%;
    background: rgba(255, 255, 255, 1);
    border-radius: 2px;
    padding: 12px 9px;
    .news-wrapper {
      margin: 73px 0 0 12px;
      border-top: 1px black dotted;
      padding: 15px 0 0 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1{
          font-size: 16px;
          line-height: 24px;
      }
      h2{
          font-size: 12px;
          line-height: 16px;       
      }
      img{
          margin-top: 40px;
          margin-bottom: 10px;
      }
    }
  }
}
</style>
