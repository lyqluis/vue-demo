<template>
  <div class="sailor">
    <div class="wrapper">
      <div class="title black">
        <span>船员中心</span>
      </div>
      <div class="container">
        <img src="../assets/img/sailor/chuanyuan.png" alt>
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <div>
              <div class="li-title" :style="item.color">{{item.name}}</div>
              <p>{{item.desc}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "船员中心",
          color: "background: rgba(0,103,102,1)",
          desc:
            "中远船员中心是为中远集团系统出入境船员提供服务的部门，素有“船员之家”之称。多年来一直为“中远的主人”提供了优质的服务。"
        },
        {
          name: "客房设施",
          color: "background: rgba(152,153,51,1)",
          desc:
            "中实大厦车队是为中远（集团）总公司领导及各部门提供车辆交通服务的部门。作为为集团总公司服务的“窗口单位”，远洋大厦车队一直以“文明行车、优质服务”的宗旨接待了中远系统内外数以千计的服务对象。"
        },
        {
          name: "位 置",
          color: "background: rgba(152,153,51,1)",
          desc:
            "位于东三环北路东侧的团结湖小区（姚家园路西口、白家庄加油站东侧），去往火车站、飞机场、商业中心、旅游景区交通十分便利。乘车路线：由西客站、北京站乘703路汽车至白家庄站下车往东200米姚家园路的南侧，或换乘43路汽车在团结湖路站下车。"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.sailor {
  .wrapper {
    margin-top: 2px;
    width: 100%;
    background: rgba(255, 255, 255, 1);
    border-radius: 2px;
    padding: 12px 9px 36px 9px;
    .container {
      margin-top: 5px;
      display: flex;
      img {
        width: auto;
        height: 100%;
        margin-top: 10px;
        margin-right: 21px;
      }
      & > ul {
        padding: 0 1px;
        li {
          display: flex;
          padding: 10px 0 14px 0;
          border-bottom: 1px dotted black;
          .li-title {
            width: 156px;
            height: 25px;
            border-radius: 6px;
            font-size: 14px;
            color: white;
            text-align: start;
            padding-left: 10px;
            line-height: 25px;
          }
          p {
            margin-top: 16px;
            margin-left: 7px;
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
    }
  }
}
</style>