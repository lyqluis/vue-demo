<template>
  <div class="connnection">
    <div class="wrapper">
      <div class="title black">
        <span>联系我们</span>
      </div>
      <article>
        <h1>中远（北京）实业有限公司</h1>
        <p>总机：010-65121188 &nbsp; 传真：010-65122408 &nbsp; 地址：东长安街6号</p>
      </article>
      <table>
        <thead>
          <th>部门</th>
          <th>电话</th>
          <th>地址</th>
        </thead>
        <tbody>
          <tr>
            <td>物业管理</td>
            <td>010-65121188-5100</td>
            <td>北京市东城区东长安街6号</td>
          </tr>
          <tr>
            <td>后勤保障</td>
            <td>010-66492765</td>
            <td>北京市复兴门内大街158号远洋大厦F11-12</td>
          </tr>
          <tr>
            <td>保洁及花卉租摆</td>
            <td>010-65121188-5102</td>
            <td>北京市东城区东长安街6号</td>
          </tr>
          <tr>
            <td>饮食服务</td>
            <td>010-65121188</td>
            <td>北京市东城区东长安街6号</td>
          </tr>
          <tr>
            <td>北京船员中心</td>
            <td>010-85980881</td>
            <td>北京市团结湖</td>
          </tr>
          <tr>
            <td>物流仓储中心</td>
            <td>010-60509465</td>
            <td>北京市马驹桥镇</td>
          </tr>
        </tbody>
      </table>
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
.connnection {
  .wrapper {
    margin-top: 2px;
    width: 100%;
    background: rgba(255, 255, 255, 1);
    border-radius: 2px;
    padding: 12px 9px;
    article {
      padding: 18px 22px 0 21px;
      text-indent: 28px;
      text-align: center;
      line-height: 32px;
      border-bottom: 1px black dotted;
      h1 {
        font-size: 18px;
      }
      p {
        font-size: 16px;
      }
    }
    table {
      margin: 25px auto;
      margin-bottom: 150px;
      font-size: 14px;
      th {
        background: #318c5f;
        vertical-align: middle;
        width: 259px;
        height: 35px;
        color: white;
        border: 1px solid #318c5f;
      }
      tr {
        td {
          text-align: center;
          vertical-align: middle;
          width: 259px;
          height: 35px;
          &:last-child {
            width: 333px;
          }
          border: 1px solid #318c5f;
        }
      }
    }
  }
}
</style>
