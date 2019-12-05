<template>
  <div class="service">
    <div class="wrapper">
      <div class="title black">
        <span>后勤保障</span>
      </div>
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <img :src="item.pic" alt>
          <div>
            <div class="li-title" :style="item.color">{{item.name}}</div>
            <p>{{item.desc}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          pic: require("../assets/img/service/wuye.png"),
          name: "物业服务",
          color: "background: rgba(0,103,102,1)",
          desc:
            "中实大厦物业部是直接为集团总公司和中国远洋机关提供会议服务、保洁、花卉租摆和行政后勤服务的部门。长期以来，以精湛的业务素质和不断追求完美的服务态度，为集团总公司总部正常运转做出了不懈努力。"
        },
        {
          pic: require("../assets/img/service/chedui.png"),
          name: "车队服务",
          color: "background: rgba(152,153,51,1)",
          desc:
            "中实大厦车队是为中远（集团）总公司领导及各部门提供车辆交通服务的部门。作为为集团总公司服务的“窗口单位”，远洋大厦车队一直以“文明行车、优质服务”的宗旨接待了中远系统内外数以千计的服务对象。"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.service {
  .wrapper {
    margin-top: 2px;
    width: 100%;
    background: rgba(255, 255, 255, 1);
    border-radius: 2px;
    padding: 12px 9px 36px 9px;
    & > ul {
      margin-top: 15px;
      padding: 0 1px;
      li {
        display: flex;
        padding: 7px 0 19px 0;
        border-bottom: 1px dotted black;
        img {
          margin-right: 11px;
        }
        .li-title {
          width: 156px;
          height: 25px;
          border-radius: 6px;
          font-size: 14px;
          color: white;
          text-align: center;
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
</style>
