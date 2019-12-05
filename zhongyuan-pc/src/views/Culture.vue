<template>
  <div class="culture">
    <div class="wrapper clear">
      <div class="title black">
        <span>企业文化</span>
      </div>
      <div class="pic">
        <img src="../assets/img/culture/culture.png" alt>
        <div class="desc">
          <p class="bold">李同学</p>
          <br>
          <p>
            目前就职于雅虎 &nbsp;
            <span class="bold">实习薪资：4000元/月</span>
          </p>
        </div>
      </div>
      <div class="pic big">
        <img src="../assets/img/culture/culture.png" alt>
        <div class="desc">
          <p class="bold">李同学</p>
          <br>
          <p>
            目前就职于雅虎 &nbsp;
            <span class="bold">实习薪资：4000元/月</span>
          </p>
        </div>
      </div>
      <div class="pic">
        <img src="../assets/img/culture/culture.png" alt>
        <div class="desc">
          <p class="bold">李同学</p>
          <br>
          <p>
            目前就职于雅虎 &nbsp;
            <span class="bold">实习薪资：4000元/月</span>
          </p>
        </div>
      </div>
      <div class="pic">
        <img src="../assets/img/culture/culture.png" alt>
        <div class="desc">
          <p class="bold">李同学</p>
          <br>
          <p>
            目前就职于雅虎 &nbsp;
            <span class="bold">实习薪资：4000元/月</span>
          </p>
        </div>
      </div>
      <div class="pic">
        <img src="../assets/img/culture/culture.png" alt>
        <div class="desc">
          <p class="bold">李同学</p>
          <br>
          <p>
            目前就职于雅虎 &nbsp;
            <span class="bold">实习薪资：4000元/月</span>
          </p>
        </div>
      </div>
      <div class="pic">
        <img src="../assets/img/culture/culture.png" alt>
        <div class="desc">
          <p class="bold">李同学</p>
          <br>
          <p>
            目前就职于雅虎 &nbsp;
            <span class="bold">实习薪资：4000元/月</span>
          </p>
        </div>
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
.culture {
  .clear:after {
    display: block;
    content: "";
    clear: both;
  }
  .wrapper {
    margin-top: 2px;
    width: 100%;
    background: rgba(255, 255, 255, 1);
    border-radius: 2px;
    padding: 12px 9px 12px 13px;
    clear: both;
    .pic {
      float: left;
      position: relative;
      width: 257px;
      height: 258px;
      background: rgba(247, 247, 245, 1);
      border: 1px solid rgba(209, 208, 204, 1);
      padding: 18px;
      margin: 27px 0 18px 39px;
      img {
        width: 100%;
      }
      .desc {
        position: absolute;
        bottom: 18px;
        width: calc(100% - 36px);
        height: 70px;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 14px;
        font-weight: 400;
        padding: 3% 5%;
        opacity: 0;
        .bold {
          font-weight: 900;
        }
      }
      &:hover {
        .desc {
          opacity: 1;
          transition: opacity 0.7s;
        }
      }
    }
    .big {
      float: right;
      margin-right: 50px;
      margin-left: 0;
      width: 559px;
      height: 561px;
    }
    .cl {
      clear: left;
    }
    .cr {
      clear: right;
    }
  }
}
</style>
