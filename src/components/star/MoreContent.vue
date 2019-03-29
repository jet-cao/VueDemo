<template>
  <div class="starContent">
    <div :class="{hidden:hidden, textAlign:true}">
      <span>{{kind}}注意：</span>
      <span>{{starData.day_notice || starData.week_notice}}</span>
    </div>
    <div>
      <div>
        <div class="starTxt">
          <div class="txt">
            <span class="title">工作指数：</span>
            <span class="num">{{starData.work_star || starData.work_index}}</span>
            <span class="starImg">
              <img :src="src" v-for="(img,index) in workStar" :key="index"/>
            </span>
          </div>
          <div class="txt">
            <span class="title">工作运势：</span>
            <span class="content">{{starData.work_txt}}</span>
          </div>
        </div>
        <div class="starTxt">
          <div class="txt">
            <span class="title">财富指数：</span>
            <span class="num">{{starData.money_star || starData.money_index}}</span>
            <span class="starImg">
              <img :src="src" v-for="(img,index) in moneyStar" :key="index"/>
            </span>
          </div>
          <div class="txt">
            <span class="title">财富运势：</span>
            <span class="content">{{starData.money_txt}}</span>
          </div>
        </div>
        <div class="starTxt">
          <div class="txt">
            <span class="title">爱情指数：</span>
            <span class="num">{{starData.love_star || starData.love_index}}</span>
            <span class="starImg">
              <img :src="src" v-for="(img,index) in loveStar" :key="index"/>
            </span>
          </div>
          <div class="txt">
            <span class="title">爱情运势：</span>
            <span class="content">{{starData.love_txt}}</span>
          </div>
        </div>
        <div class="starTxt">
          <div class="txt">
            <span class="title">综合指数：</span>
            <span class="num">{{starData.summary_star || starData.general_index}}</span>
            <span class="starImg">
              <img :src="src" v-for="(img,index) in generalStar" :key="index"/>
            </span>
          </div>
          <div class="txt">
            <span class="title">综合运势：</span>
            <span class="content">{{starData.general_txt}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['starData', 'kind'],
  data: function () {
    return {
      src: require('@/assets/image/star.jpg')
    }
  },
  computed: {
    hidden: function () {
      return !!(this.kind === '今年')
    },
    workStar: function () {
      let stars = this.starArray(this.starData.work_star, this.src)
      return stars
    },
    moneyStar: function () {
      let stars = this.starArray(this.starData.money_star, this.src)
      return stars
    },
    loveStar: function () {
      let stars = this.starArray(this.starData.love_star, this.src)
      return stars
    },
    generalStar: function () {
      let stars = this.starArray(this.starData.summary_star, this.src)
      return stars
    }
  },
  methods: {
    starArray (num, src) {
      let starsNum = []
      for (let i = 0; i < num; i++) {
        starsNum.push(src)
      }
      return starsNum
    }
  }
}
</script>

<style lang="less" scoped>
.starContent {
  border: solid 1px rgb(0, 79, 250);
  margin-top: 2rem;
  padding: 1rem;
  .textAlign {
    text-align: center;
    color: rgb(0, 46, 172);
    font-size: 1.5rem;
    margin-bottom: 2rem
  }
  .hidden {
    display: none
  }
  .starTxt{
    .txt {
      display: flex;
      align-items: flex-start;
      margin-bottom: 1rem;
      .starImg {
        margin-left: 3rem;
        img {
          width: 1.1rem;
          height: 1.1rem;
        }
      }
      .num {
        color: red;
      }
      .title {
        display: inline-block;
        width: 6rem;
      }
      .content {
        display: inline-block;
        width: 85%;
      }
    }
  }
}
</style>
