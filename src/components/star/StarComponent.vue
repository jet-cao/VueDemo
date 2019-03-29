<template>
  <div>
    <div class="selectStar">
      <span>选择星座:</span>
      <select @change="getData($event.target.value)">
        <option v-for="(item, index) in lists" :value="item.abbr" :key="index">{{item.name}}</option>
      </select>
    </div>
    <div class="chooseStar">
      <transition name="onLoad">
        <Content :defauleItem="defaultItem" :starData="day" :star="star"/>
      </transition>
    </div>
    <div class="more">滚动加载</div>
    <div :class="display">
      <MoreContent :starData="tomorrow" kind="明日"/>
      <MoreContent :starData="week" kind="本周"/>
      <MoreContent :starData="month" kind="本月"/>
      <MoreContent :starData="year" kind="今年"/>
    </div>
  </div>
</template>

<script>
import Content from './Content'
import MoreContent from './MoreContent'
export default {
  props: ['lists', 'defaultItem', 'day', 'tomorrow', 'week', 'month', 'year'],
  components: {
    Content,
    MoreContent
  },
  data: function () {
    return {
      star: 'tiancheng',
      display: 'hidden'
    }
  },
  methods: {
    getData (value) {
      this.star = value
      this.$emit('chooseStar', value)
      this.display = 'hidden'
    },
    showAll () {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let clientHeight = window.innerHeight || Math.min(document.documentElement.clientHeight,document.body.clientHeight);
      if(Math.ceil(clientHeight + scrollTop) >= scrollHeight){
        this.display = 'show'
      }
    }
  },
  created: function () {
    this.$emit('chooseStar', 'tiancheng')
  },
  mounted: function () {
    let _this = this
    window.addEventListener('scroll', this.showAll, false )
  }
}
</script>

<style lang='less' scoped>
.selectStar {
  text-align: center;
  margin-top: 1rem;
  font-size: 2rem;
  color: rgb(204, 0, 255);
  select {
    font-size: 1.4rem;
    margin-left: 1rem;
    padding: .2rem;
    border-top-left-radius: .2rem;
    border-top-right-radius: .2rem;
  }
}
.more {
  text-align: center;
  color: red;
  font-size: 3rem;
  margin: 2rem;
}
.chooseStar {
  margin-top: 1rem
}
.hidden {
  display: none
}
.show {
  display: block
}
</style>
