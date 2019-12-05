<template>
  <div class="introduction">
    <div class="wrapper">
      <div class="title black">
        <span>公司简介</span>
      </div>
      <h1 class="article-title">中远（北京）实业有限公司是香远（北京）投资有限公司所属子公司</h1>
      <article>
        <p class="colon">公司定位：</p>
        <p>
          公司成立于1992年12月26日，是一家提供物业管理服务的专业公司，本着“团结、奋斗、求实、创新”的企业精神和服务理念，锐意进取，
          、务实、高效的服务理念，竭诚为中远集团和社会各界新老客户提供优质服务。公司致力于建立优秀的管理团队，培养知识型、实用型人才，塑造精锐的员工队伍，为中远集团及市场客户提供优质服务和健康、安全、舒适的业务服务平台。
        </p>
        <p class="colon">主要业务包括：</p>
        <p>物业管理、后勤保障、住宅物业服务、船员中心、物流仓储中心等。</p>
      </article>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.introduction {
  .wrapper {
    margin-top: 2px;
    width: 100%;
    height: 564px;
    background: rgba(255, 255, 255, 1);
    border-radius: 2px;
    padding: 12px 9px;
    .article-title {
      font-size: 16px;
      text-align: center;
      margin: 18px 0;
    }

    article {
      padding: 18px 22px 0 21px;
      text-indent: 28px;
      p {
        font-size: 14px;
        line-height: 24px;
      }
      .colon {
        font-weight: 600;
      }
    }
  }
}
</style>
