<template>
  <div class="estate">
    <div class="wrapper">
      <div class="title black">
        <span>物业管理</span>
      </div>
      <article>
        <p>公司业务部是为中远系统内外各单位提供全面物业服务的业务部门，其主要业务涵盖物业服务、饮食服务、保洁服务、会务服务、花卉租摆服务及公司产权高档别墅的对外出租等业务。</p>
      </article>
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
          pic: require("../assets/img/estate/ban1.png"),
          name: "办公物业项目",
          color: "background: rgba(0,103,102,1)",
          desc:
            "北京市东长安街6号办公大楼坐落于王府井大街与东长安街的交界处，地处繁华的商务地段，致力于为中远系统内外各单位提供全面的办公物业管理和服务。"
        },
        {
          pic: require("../assets/img/estate/ban2.png"),
          name: "办公物业项目",
          color: "background: rgba(152,153,51,1)",
          desc:
            "北京市东长安街6号办公大楼坐落于王府井大街与东长安街的交界处，地处繁华的商务地段，致力于为中远系统内外各单位提供全面的办公物业管理和服务。"
        },
        {
          pic: require("../assets/img/estate/ban3.png"),
          name: "办公物业项目",
          color: "background: rgba(176,101,204,1)",
          desc:
            "北京市东长安街6号办公大楼坐落于王府井大街与东长安街的交界处，地处繁华的商务地段，致力于为中远系统内外各单位提供全面的办公物业管理和服务。"
        },
        {
          pic: require("../assets/img/estate/ban4.png"),
          name: "办公物业项目",
          color: "background: rgba(204,102,1,1)",
          desc:
            "北京市东长安街6号办公大楼坐落于王府井大街与东长安街的交界处，地处繁华的商务地段，致力于为中远系统内外各单位提供全面的办公物业管理和服务。"
        },
        {
          pic: require("../assets/img/estate/ban5.png"),
          name: "办公物业项目",
          color: "background: rgba(204,101,102,1)",
          desc:
            "北京市东长安街6号办公大楼坐落于王府井大街与东长安街的交界处，地处繁华的商务地段，致力于为中远系统内外各单位提供全面的办公物业管理和服务。"
        }
      ]
    };
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
    article {
      padding: 18px 22px 0 21px;
      text-indent: 28px;
      p {
        font-size: 14px;
        line-height: 24px;
      }
    }
    & > ul {
      margin-top: 21px;
      padding: 0 5px;
      li {
        display: flex;
        padding: 7px 0 19px 0;
        border-top: 1px dotted black;
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
