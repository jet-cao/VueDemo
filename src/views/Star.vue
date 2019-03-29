<template>
  <div>
  <StarComponent
    :lists='stars'
    defaultItem="tiancheng"
    @chooseStar="getData"
    :day="day"
    :tomorrow="tomorrow"
    :week="week"
    :month="month"
    :year="year"
  />
  <div class="returnTop" @click="returnTop">返回顶部</div>
  </div>
</template>

<script>
import StarComponent from '@/components/star/StarComponent'

export default {
  name: 'star',
  components: {
    StarComponent
  },
  data: function () {
    return {
      stars: [
        { name: '水平', abbr: 'shuiping' },
        { name: '双鱼', abbr: 'shuangyu' },
        { name: '白羊', abbr: 'baiyang' },
        { name: '金牛', abbr: 'jinniu' },
        { name: '双子', abbr: 'shuangzi' },
        { name: '巨蟹', abbr: 'juxie' },
        { name: '狮子', abbr: 'shizi' },
        { name: '处女', abbr: 'chunv' },
        { name: '天秤', abbr: 'tiancheng' },
        { name: '天蝎', abbr: 'tianxie' },
        { name: '射手', abbr: 'sheshou' },
        { name: '摩羯', abbr: 'mojie' }
      ],
      day: {},
      tomorrow: {},
      week: {},
      month: {},
      year: {}
    }
  },
  methods: {
    getData (star) {
      let _this = this
      this.$http
        .get('https://ali-star-lucky.showapi.com/star', {
          params: {
            star: star,
            needMonth: 1,
            needTomorrow: 1,
            needWeek: 1,
            needYear: 1
          },
          headers: {
            Authorization: 'APPCODE 8655d3a2abeb4239827049dceb363bc8'
          }
        })
        .then((res) => {
          let data = res.data.showapi_res_body
          console.log(res.data)
          _this.day = data.day
          _this.tomorrow = data.tomorrow
          _this.week = data.week
          _this.month = data.month
          _this.year = data.year
        })
    },
    returnTop () {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      window.pageYOffset = 0
    }
  }
}
</script>

<style lang='less' scoped>
.returnTop {
  position: fixed;
  right: 15%;
  top: 7rem;
  cursor: pointer;
  background-color: white;
  color: tomato;
  font-size: 1.5rem;
  border: solid 1px tomato;
  background-color: wheat;
  padding: .5rem;
  border-radius: 5px;
  &:hover {
    background-color: tomato;
    color: wheat;
  }
}
</style>
