<template>
  <div class="index">
    <div class="row">
      <div class="block pics">
        <div class="pic-wrapper" @mouseover="btnShow=true" @mouseout="btnShow=false">
          <transition>
            <div class="pic-container">
              <img
                v-for="(pic,index) in picList"
                :src="pic.src"
                :key="index"
                v-show="index === btn-1"
              >
            </div>
          </transition>
          <div class="curtain-top" v-if="btnShow"/>
          <ul class="btns" v-if="btnShow">
            <li
              class="btn"
              v-for="i in 3"
              :key="i"
              @click="changePic(i)"
              :class="btn===i ? 'blue' : ''"
            >{{i}}</li>
          </ul>
          <div class="curtain-bottom" v-if="btnShow"/>
        </div>
      </div>
      <div class="block">
        <div class="title black">
          <span>物业管理</span>
          <span class="more">More</span>
        </div>
        <ul class="wuye">
          <li>
            <img src="../assets/img/index/wuye.png">
            <span>办公物业项目</span>
          </li>
          <li>
            <img src="../assets/img/index/bieshu.png">
            <span>别墅物业项目</span>
          </li>
          <li>
            <img src="../assets/img/index/zhuzhai.png">
            <span>住宅物业项目</span>
          </li>
          <li>
            <img src="../assets/img/index/zhongshi.png">
            <span>中食饮食部服务</span>
          </li>
          <li>
            <img src="../assets/img/index/baojie.png">
            <span>保洁、会务及花卉租摆业务</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="annouce">信息公告</div>
      <div class="annouce-wrapper">
        <span>香远北京公司安委办组织各单位对幸福大厦消防演习进行现场观摩和座谈交流活动</span>
        <span>香远北京公司组织举办投资管理操作实践培训</span>
      </div>
    </div>
    <div class="row">
      <div class="block about">
        <div class="title black">
          <span>关于我们</span>
          <span class="more">More</span>
        </div>
        <img src="../assets/img/index/about.png" alt>
        <p>
          中远（北京）实业有限公司是香远（北京）投
          资有限公司所属子公司。公司成立于1992年12月26日，是一家提供物业管理服务的专业公司，本着“团结、奋斗、求实、创新”...
        </p>
      </div>
      <div class="block">
        <div class="title">
          <span>后勤保障</span>
        </div>
        <img src="../assets/img/index/houqin.png" alt>
        <p>中实大厦物业部是直接为集团总公司和中国远洋机关提供会议服务、保洁、花卉租摆和行政后勤服务...</p>
        <div class="more-wrapper">
          <span class="more">More</span>
        </div>
      </div>
      <div class="block">
        <div class="title">
          <span>船员中心</span>
        </div>
        <img src="../assets/img/index/chuanyuan.png" alt>
        <p>中远船员中心是为中远集团系统出入境船员提供服务的部门，素有“船员之家”之称。多年来一直为...</p>
        <div class="more-wrapper">
          <span class="more">More</span>
        </div>
      </div>
      <div class="block">
        <div class="title">
          <span>物流仓储中心</span>
        </div>
        <img src="../assets/img/index/wuliu.png" alt>
        <p>中实物流仓储中心地处京津唐高速路与六环交界处，占地15500平方米（25.3亩）。该中心以其优越...</p>
        <div class="more-wrapper">
          <span class="more">More</span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="block">
        <div class="title black">
          <span>最新动态</span>
          <span class="more">More</span>
        </div>
        <ul class="news">
          <li>
            <div>
              香远北京公司组织举办投资管理操作实践培训
              <i class="hot"/>
            </div>
            <span class="time">2011-12-23</span>
          </li>
          <li>
            <div>
              香远北京公司召开2012年工作务虚会精心筹划明年工作
              <i class="hot"/>
            </div>
            <span class="time">2011-12-22</span>
          </li>
          <li>
            <div>香港集团张良总裁一行莅临香远北京公司视察工作</div>
            <span class="time">2011-12-16</span>
          </li>
          <li>
            <div>香远北京公司领导拜访中散总公司主要领导</div>
            <span class="time">2011-11-18</span>
          </li>
          <li>
            <div>香远北京公司积极参加香港集团职工运动会取得优异成绩</div>
            <span class="time">2011-11-15</span>
          </li>
          <li>
            <div>香远北京公司安委办组织各单位对幸福大厦消防演习进行现场观摩和座谈交流活动</div>
            <span class="time">2011-11-10</span>
          </li>
        </ul>
      </div>
      <div class="block">
        <div class="title black">
          <span>联系我们</span>
          <span class="more">More</span>
        </div>
        <div class="contact">总 机：
          <br>010-65121188
        </div>
        <div class="contact">传 真：
          <br>010-65122408
        </div>
        <div class="contact">地 址：
          <br>东长安街6号
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      picList: [
        { src: require("../assets/img/index/slide1.png") },
        { src: require("../assets/img/index/slide2.png") },
        { src: require("../assets/img/index/slide3.png") }
      ],
      btnShow: false,
      btn: 1,
      timer: null
    };
  },
  created() {
    this.play();
  },
  methods: {
    changePic(i) {
      this.btn = i;
      clearInterval(this.timer);
      this.play();
    },
    auto() {
      this.btn++;
      if (this.btn === 4) {
        this.btn = 1;
      }
      this.play();
    },
    play() {
      this.timer = setTimeout(this.auto, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";

.index {
  .row {
    display: flex;
    height: 266px;
    margin-bottom: 10px;
    &:last-child {
      margin: 0;
      height: 224px;
    }
    &:nth-child(2) {
      height: 35px;
      border-radius: 2px;
      @include bgImg("../assets/img/index/horn.png", 0px, 22px);
      padding: 0 20px 0 37px;
      line-height: 35px;
      .annouce {
        font-size: 12px;
        font-weight: 900;
      }
      .annouce-wrapper {
        margin-left: 20px;
        font-size: 12px;
        & > span {
          margin: 0 80px;
        }
      }
    }
    .block {
      width: 219px;
      background: white;
      padding: 5px 5px 0 5px;
      margin-left: 10px;
      border-radius: 2px;
      &:first-child {
        margin: 0;
        width: 732px;
      }
      ul.wuye {
        margin-top: 2.5px;
        li {
          display: flex;
          align-items: center;
          padding: 6px 0;
          border-bottom: 1px black dotted;
          font-size: 12px;
          @include bgImg("../assets/img/index/right.png", 200px, 9px);
          &:last-child {
            border: none;
          }
          img {
            margin-right: 8px;
          }
          cursor: pointer;
          &:hover {
            background-color: rgba(0, 0, 0, 0.1);
          }
        }
      }
      & > img {
        margin-top: 6px;
      }
      & > p {
        margin-top: 13px;
        padding: 0 8px;
        font-size: 12px;
        line-height: 16px;
      }
      .more {
        font-size: 10px;
        font-family: STHeiti;
        font-weight: 400;
        cursor: pointer;
      }
      .more-wrapper {
        margin-top: 7px;
        padding-right: 7px;
        text-align: end;
      }
      ul.news {
        margin-top: 2.5px;
        padding: 0 7px;
        li {
          @include bgImg("../assets/img/index/flower.png", -3px, 9px);
          padding: 0 0 0 16px;
          font-size: 12px;
          height: 31px;
          line-height: 30px;
          border-bottom: 1px black dotted;
          &:last-child {
            border: none;
          }
          display: flex;
          justify-content: space-between;
          & > div:first-child {
            position: relative;
          }
          .hot {
            @include bg("../assets/img/index/hot.png");
            width: 21px;
            height: 11px;
            position: absolute;
            right: -25px;
            top: 5px;
          }
          .time {
            text-align: end;
          }
        }
      }
    }
    .about {
      width: 276px !important;
    }
    .contact {
      height: 50px;
      border: 1px solid #b6b6b6;
      border-radius: 2px;
      margin: 8px 0;
      padding: 9px 0 8px 11px;
      font-size: 16px;
      &:nth-child(3) {
        margin: 10px 0;
      }
    }
    .pics {
      padding: 8px 5px 7px 6px;
      .pic-wrapper {
        // background: lightblue;
        width: 718px;
        height: 100%;
        position: relative;
        display: flex;
        overflow: hidden;
        & > img {
          width: 100%;
          height: 100%;
          // position: absolute;
        }
      }
      .curtain-top {
        height: 14px;
        width: 100%;
        background: rgba(255, 255, 255, 0.5);
        position: absolute;
        top: 0;
      }
      .curtain-bottom {
        height: 30px;
        width: 100%;
        background: rgba(255, 255, 255, 0.5);
        position: absolute;
        bottom: 0;
      }
      .btns {
        display: flex;
        position: absolute;
        bottom: 0px;
        right: 8px;
        z-index: 2;
        .btn {
          margin: 6px 4px;
          width: 15px;
          height: 15px;
          text-align: center;
          line-height: 13px;
          font-size: 11px;
          font-weight: bold;
          border-radius: 2px;
          background: #ffffff;
          border: 1px solid rgba(203, 203, 203, 1);
          cursor: pointer;
        }
        & > .blue {
          color: white;
          border: 1px solid rgba(11, 94, 129, 1);
          background: url("../assets/img/index/btn.png");
        }
      }
    }
  }
}
</style>

