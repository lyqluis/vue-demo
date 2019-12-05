<template>
  <div class="news">
    <div class="wrapper">
      <div class="title black">
        <span>新闻中心</span>
      </div>
      <ul class="news">
        <li v-for="(item,index) in list" :key="index" @click="$router.push('/news-detail')">
          <div>
            {{item.news}}
            <i class="hot" v-if="item.hot"/>
          </div>
          <span class="time">{{item.time}}</span>
        </li>
      </ul>
      <dir class="pagination">
        <div class="pre"/>
        <div v-for="i in 3" :key="i" :class="page == i ? 'active' : ''" @click="page=i">{{i}}</div>
        <div class="next"/>
      </dir>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      list: [
        {
          news: "香远北京公司组织举办投资管理操作实践培训",
          time: "2011-12-23",
          hot: true
        },
        {
          news: "香远北京公司召开2012年工作务虚会精心筹划明年工作",
          time: "2011-12-22",
          hot: true
        },
        {
          news: "香港集团张良总裁一行莅临香远北京公司视察工作",
          time: "2011-12-16",
          hot: true
        },
        {
          news: "香远北京公司领导拜访中散总公司主要领导",
          time: "2011-11-18",
          hot: false
        },
        {
          news: "香远北京公司积极参加香港集团职工运动会取得优异成绩",
          time: "2011-11-15",
          hot: false
        },
        {
          news:
            "香远北京公司安委办组织各单位对幸福大厦消防演习进行现场观摩和座谈交流活动",
          time: "2011-11-10",
          hot: false
        },
        {
          news: "香远北京公司组织举办投资管理操作实践培训",
          time: "2011-12-23",
          hot: false
        },
        {
          news: "香远北京公司召开2012年工作务虚会精心筹划明年工作",
          time: "2011-12-22",
          hot: false
        },
        {
          news: "香港集团张良总裁一行莅临香远北京公司视察工作",
          time: "2011-12-16",
          hot: false
        },
        {
          news: "香远北京公司领导拜访中散总公司主要领导",
          time: "2011-11-18",
          hot: false
        },
        {
          news: "香远北京公司积极参加香港集团职工运动会取得优异成绩",
          time: "2011-11-15",
          hot: false
        },
        {
          news:
            "香远北京公司安委办组织各单位对幸福大厦消防演习进行现场观摩和座谈交流活动",
          time: "2011-11-10",
          hot: false
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";

.news {
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
    ul {
      margin-top: 2.5px;
      padding: 0 7px;
      li {
        @include bgImg("../assets/img/index/flower.png", -3px, 9px);
        padding: 0 0 0 16px;
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px black dotted;
        display: flex;
        justify-content: space-between;
        & > div:first-child {
          position: relative;
        }
        &:hover {
          background: rgba(0, 0, 0, 0.1);
          cursor: pointer;
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
    .pagination {
      display: flex;
      justify-content: flex-end;
      & > div {
        width: 17px;
        height: 17px;
        text-align: center;
        line-height: 15px;
        font-size: 12px;
        color: rgba(157, 211, 226, 1);
        margin: 12px 12.5px 5px 12.5px;
        cursor: pointer;
        &:hover {
          border: 1px solid rgba(157, 211, 226, 1);
        }
      }
      .pre {
        @include bg("../assets/img/news/pre.png");
        border: 1px solid rgba(157, 211, 226, 1);
      }
      .next {
        @include bg("../assets/img/news/next.png");
        border: 1px solid rgba(157, 211, 226, 1);
      }
      .active {
        border: 1px solid rgba(157, 211, 226, 1);
      }
    }
  }
}
</style>
