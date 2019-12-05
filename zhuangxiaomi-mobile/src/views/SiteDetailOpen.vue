<template>
  <div class="site-detail-open">
    <header-component :title="'工地直播'"/>
    <div class="info">
      <div class="menu">
        <div
          class="progress-active"
          v-for="(item,index) in progress"
          :key="index"
          @click="nowBlock = index"
          :style="{borderColor:nowBlock == index ? item.color : 'white'}"
          :class="[{'percent':item.progress}]"
        >
          <div
            class="progress"
            :style="{backgroundColor:item.color}"
            :class="[{'percent':item.progress}]"
          >
            <div class="progress-name" v-if="!item.progress">{{item.name}}</div>
            <div class="per-wrapper" v-if="item.progress">
              {{item.name}}
              <span class="per">{{item.progress}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="title orange">隐蔽工程问题项</div>
        <div class="item-wrapper">
          <div class="item border-1px">
            <div class="sm-title">
              <i class="exclamation"/>
              <span>热水器水孔位置距墙太近</span>
              <i class="png"/>
            </div>
            <div class="problem-row">
              <span class="problem">问题原因：</span>
              <span class="solution">中水管道井内漏水，已经报物业维修。</span>
            </div>
            <div class="problem-row">
              <span class="problem time">发现日期：</span>
              <span class="solution">2015-05-23</span>
              <span class="problem time">解决日期：</span>
              <span class="solution">2015-05-23</span>
            </div>
            <div class="problem-row">
              <span class="problem">问题结果：</span>
              <span class="solution">未发现增项内容，达到装修要求。</span>
            </div>
          </div>
          <div class="item border-1px">
            <div class="sm-title">
              <i class="exclamation"/>
              <span>热水器水孔位置距墙太近</span>
              <i class="png"/>
            </div>
            <div class="problem-row">
              <span class="problem">问题原因：</span>
              <span class="solution">中水管道井内漏水，已经报物业维修。</span>
            </div>
            <div class="problem-row">
              <span class="problem time">发现日期：</span>
              <span class="solution">2015-05-23</span>
              <span class="problem time">解决日期：</span>
              <span class="solution">2015-05-23</span>
            </div>
            <div class="problem-row">
              <span class="problem">问题结果：</span>
              <span class="solution">未发现增项内容，达到装修要求。</span>
            </div>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="title">工程细则项</div>
        <div class="table-wrapper">
          <div class="table">
            <div class="table-title">电路改造</div>
            <div class="table-row">
              接线分色
              <span>
                <i class="correct"/>
              </span>
            </div>
            <div class="table-row">
              接线分色
              <span>
                <i class="correct"/>
              </span>
            </div>
            <div class="table-row">
              接线分色
              <span>
                <i class="exclamation"/>
              </span>
            </div>
            <div class="table-row">
              接线分色
              <span>
                <i class="exclamation"/>
              </span>
            </div>
            <div class="table-row">
              接线分色
              <span>
                <i class="png"/>
              </span>
            </div>
            <div class="table-row">
              接线分色
              <span>
                <i class="png"/>
              </span>
            </div>
            <div class="table-row">
              接线盒与燃气管距离
              <span>
                <i class="png"/>
              </span>
            </div>
          </div>
          <div class="table">
            <div class="table-title">电路改造</div>
            <div class="table-row">
              接线分色
              <span>
                <i class="correct"/>
              </span>
            </div>
            <div class="table-row">
              接线分色
              <span>
                <i class="correct"/>
              </span>
            </div>
            <div class="table-row">
              接线分色
              <span>
                <i class="exclamation"/>
              </span>
            </div>
            <div class="table-row">
              接线分色
              <span>
                <i class="exclamation"/>
              </span>
            </div>
            <div class="table-row">
              接线分色
              <span>
                <i class="png"/>
              </span>
            </div>
            <div class="table-row">
              接线分色
              <span>
                <i class="png"/>
              </span>
            </div>
            <div class="table-row">
              接线盒与燃气管距离
              <span>
                <i class="png"/>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="title">注意事项</div>
        <div class="item-wrapper">
          <ul>
            <li>外径在25mm以管道在转表笼头处管道牢固。</li>
            <li>外径在25mm以管道在转表笼头处管道牢固。</li>
            <li>外径在25mm以管道在转表笼头处管道牢固。</li>
            <li>外径在25mm以管道在转表笼头处管道牢固。</li>
            <li>外径在25mm以管道在转表笼头处管道牢固。</li>
            <li>外径在25mm以管道在转表笼头处管道牢固。</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerComponent from "@/components/HeaderComponent";
// import footerComponent from "@/components/FooterComponent";

export default {
  name: "siteDetail",
  components: {
    headerComponent
    // footerComponent
  },
  data() {
    return {
      progress: [
        { name: "前期审核", color: "#ED5491" },
        { name: "工程交底", color: "#FF5858" },
        { name: "隐蔽工程", color: "#FF7A46" },
        { name: "中期工程", color: "#FFAE2E" },
        { name: "竣工验收", color: "#B6CA4C" },
        { name: "变更项目", color: "#6FC242" },
        { name: "材料验收", color: "#1CAB73" },
        { name: "完成度", progress: "80%", color: "white" }
      ],
      nowBlock: 0
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

.site-detail-open
  background: $bgColor

  .info
    position: relative
    top: pr(40)
    background: $bgColor

    .block
      margin-top: pr(8)
      background: white

      .title
        height: pr(35)
        borderbottom($lineColor)
        font-size: pr(13)
        font-family: HiraginoSansGB-W3
        font-weight: normal
        line-height: pr(35)
        padding: 0 pr(12)
        color: #2C2C2C

      .orange
        background: rgb(255, 105, 47)
        color: rgba(255, 255, 255, 1)

      .item-wrapper
        &>ul
          list-style disc inside none
          font-size:pr(12);
          font-family:HiraginoSansGB-W3;
          font-weight:normal;
          color:rgba(117,117,117,1);
          line-height pr(21)
          padding pr(14) 0 pr(17) pr(16)
        .item
          padding: pr(15) pr(20)
          borderbottom($lineColor)

          .sm-title
            font-size: pr(13)
            font-family: HiraginoSansGB-W3
            font-weight: normal
            color: rgba(78, 78, 78, 1)
            display: flex
            align-items: center
            margin-bottom: pr(10)

            &>span
              margin: 0 pr(8) 0 pr(11)

          .problem-row
            font-size: pr(12)
            font-family: HiraginoSansGB-W3
            font-weight: normal
            color: #757575
            line-height: pr(24)

            .problem
              color: #4E4E4E

      .table-wrapper
        display: flex
        justify-content: space-around

        .table
          margin-top: pr(9)
          margin-bottom: pr(12)

          .table-title
            width: pr(144)
            height: pr(26)
            font-size: pr(12)
            font-family: HiraginoSansGB-W3
            font-weight: normal
            color: rgba(78, 78, 78, 1)
            text-align: center
            line-height: pr(26)
            background: rgb(230, 230, 230)
            margin: pr(3)

          .table-row
            width: pr(144)
            height: pr(26)
            background: rgb(230, 230, 230)
            margin: pr(3)
            padding: pr(2) pr(2) pr(2) pr(6)
            font-size: pr(11)
            font-family: HiraginoSansGB-W3
            font-weight: normal
            color: rgba(117, 117, 117, 1)
            line-height: pr(26)
            display: flex
            justify-content: space-between

            &>span
              background: white
              padding: pr(3) pr(8)

    .correct
      width: pr(17)
      height: pr(17)
      bg('../assets/img/site/correct.png')

    .exclamation
      width: pr(17)
      height: pr(17)
      bg('../assets/img/site/sm-title.png')

    .png
      width: pr(17)
      height: pr(17)
      bg('../assets/img/site/png.png')

    .menu
      width: 100%
      background: white
      display: flex
      flex-wrap: wrap
      justify-content: space-around
      padding: pr(10) 0

      .progress-active
        width: pr(65)
        height: pr(65)
        border-radius: 50%
        margin: 0 pr(6)
        border: pr(2) white solid
        display: flex
        justify-content: center
        align-items: center

        .progress
          width: pr(53)
          height: pr(53)
          border-radius: 50%
          font-size: pr(11)
          font-family: HiraginoSansGB-W3
          font-weight: normal
          color: rgba(255, 255, 255, 1)
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center

        .percent
          color: #1CAB73
          bg('../assets/img/site/trans.png')

          .per-wrapper
            margin: pr(5)
            width: pr(44)
            height: pr(44)
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            border-radius: 50%
            background: rgb(248, 248, 248)

          .per
            font-size: pr(12)
            margin-top: pr(4)
</style>

