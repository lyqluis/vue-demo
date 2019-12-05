<template>
  <div class="popup-menu">
    <header>
      <i class="mint-toast-icon mintui mintui-back" @click="$router.push('/')"/>
      <span>{{title}}</span>
      <i class="option" @click="popupVisible = !popupVisible"/>
    </header>
    <mt-popup v-model="popupVisible" position="top">
      <div class="menu">
        <div class="tab">
          <div
            v-for="(item,index) in options"
            :key="index"
            :class="nowTab == index ? 'active' : ''"
            @click="nowTab = index"
          >
            {{item.name}}
            <i class="down"/>
          </div>
        </div>
        <div class="content-wrapper">
          <div class="content border-1px" v-for="(item,i) in options[nowTab].children" :key="i">
            <div class="title">{{item.title}}</div>
            <div class="list-wrapper">
              <div
                class="option"
                v-for="(child,index) in item.list"
                :key="index"
                @click="select(i,index)"
                :class="((nowTab == 0)&&(i==0)&&(nowTab1 ==index)) ||((nowTab == 0)&&(i==1)&&(nowTab2 ==index)) ||((nowTab == 1)&&(i==0)&&(nowTab3 ==index)) ||((nowTab == 1)&&(i==1)&&(nowTab4 ==index)) ||((nowTab == 2)&&(i==0)&&(nowTab5 ==index)) ||((nowTab == 2)&&(i==1)&&(nowTab6 ==index))? 'op-active' : ''"
              >{{child}}</div>
            </div>
          </div>
          <div class="btn" @click="$router.push('siteDetail')">确定</div>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import nav from "@/assets/js/nav";

export default {
  props: {
    title: ""
  },
  data() {
    return {
      popupVisible: true,
      nowTab: 0,
      options: [
        {
          name: "施工阶段",
          children: [
            {
              title: "阶段划分",
              list: [
                "全部",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区"
              ]
            },
            {
              title: "户型结构",
              list: [
                "全部",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区"
              ]
            }
          ]
        },
        {
          name: "排序方式",
          children: [
            {
              title: "排序划分",
              list: ["全部", "朝阳区", "朝阳区", "朝阳区"]
            },
            {
              title: "户型结构",
              list: [
                "全部",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区"
              ]
            }
          ]
        },
        {
          name: "筛选工地",
          children: [
            {
              title: "区域划分",
              list: [
                "全部",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区"
              ]
            },
            {
              title: "户型结构",
              list: [
                "全部",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区",
                "朝阳区"
              ]
            }
          ]
        }
      ],
      nowTab1: "",
      nowTab2: "",
      nowTab3: "",
      nowTab4: "",
      nowTab5: "",
      nowTab6: ""
    };
  },
  methods: {
    select(i, index) {
      if (this.nowTab == 0) {
        if (i == 0) {
          this.nowTab1 = index;
        } else {
          this.nowTab2 = index;
        }
      } else if (this.nowTab == 1) {
        if (i == 0) {
          this.nowTab3 = index;
        } else {
          this.nowTab4 = index;
        }
      } else {
        if (i == 0) {
          this.nowTab5 = index;
        } else {
          this.nowTab6 = index;
        }
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'

.popup-menu
  position: relative

  &>header
    position: fixed
    background: #2C2C2C
    z-index: 3000

    &>i
      display: inline-block
      font-size: pr(21)

    .option
      width: pr(22)
      height: pr(9)
      bg('../assets/img/site/option.png')

  &>>> .mint-popup
    top: pr(40)
    width: 100vw

    // height: 252px
    .menu
      background: white
      padding: pr(0) pr(0) pr(4) pr(0)

      // display: flex
      // justify-content: space-around
      // flex-wrap: wrap
      .tab
        display: flex
        justify-content: space-between
        align-items: center
        width: 100%
        padding: pr(14) pr(19) pr(11) pr(19)
        height: pr(37)
        font-size: pr(13)
        font-family: HiraginoSansGB-W3
        font-weight: normal
        color: rgba(77, 77, 77, 1)
        borderbottom($lineColor)

        &>div
          display: flex
          align-items: center
          justify-content: center

          .down
            width: pr(10)
            height: pr(5)
            bg('../assets/img/site/down.png')
            margin-left: pr(6)

        .active
          color: #FF9F40

          .down
            width: pr(10)
            height: pr(5)
            bg('../assets/img/site/down_active.png')
            margin-left: pr(6)

      .content-wrapper
        .content
          padding: pr(15) pr(13) pr(4) pr(13)
          borderbottom($lineColor)

          .title
            padding-left: pr(8)
            font-size: pr(15)
            font-family: HiraginoSansGB-W3
            font-weight: normal
            color: rgba(77, 77, 77, 1)
            margin-bottom: pr(12)

          .list-wrapper
            display: flex
            justify-content: space-between
            flex-wrap: wrap
            font-size: pr(12)
            font-family: HiraginoSansGB-W3
            font-weight: normal
            color: #757575

            .option
              width: pr(70)
              height: pr(25)
              background: #F8F8F8
              margin-bottom: pr(9)
              text-align: center
              line-height: pr(25)

            .op-active
              color: white
              background: #FF9F40
        .btn
          border-radius 0
          width 98%
          margin 0 auto
</style>