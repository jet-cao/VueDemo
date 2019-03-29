<template>
  <div class="starContent">
    <div class="notice">
      <span>{{kind}}提醒：</span>
      <span>{{starData.day_notice}}</span>
    </div>
    <div>
      <div>
        <div class="starTxt">
          <div class="txt">
            <span class="title">工作指数：</span>
            <span class="num">{{starData.work_star}}</span>
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
            <span class="num">{{starData.money_star}}</span>
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
            <span class="num">{{starData.love_star}}</span>
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
            <span class="num">{{starData.summary_star}}</span>
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
    <div>
      <div>
        <span class="luckElement">贵人星座：</span>
        {{starData.grxz}}
      </div>
      <div>
        <span class="luckElement">幸运数字：</span>
        {{starData.lucky_num}}
      </div>
      <div>
        <span class="luckElement">幸运颜色:</span>
        {{starData.lucky_color}}
      </div>
      <div>
        <span class="luckElement">吉时:</span>
        {{starData.lucky_time}}
      </div>
      <div>
        <span class="luckElement">幸运方位:</span>
        {{starData.lucky_direction}}
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
  flex: 2;
  padding: 0 0 0 2rem;
  .notice {
    text-align: center;
    color: rgb(255, 0, 0);
    font-size: 1.5rem;
    margin-bottom: 2rem
  }
  .starTxt {
    margin-bottom: 1rem;
    border-bottom: solid 1px rgb(212, 0, 255);
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
  .luckElement {
    display: inline-block;
    width: 6rem;
  }
}

@media screen and(max-width: 420px) {
  .starContent {
    padding: 0;
  }
}
</style>
