<template>
  <div class="starBox">
    <div class="starImg">
      <img :src="require(`@/assets/image/${star}1.jpg`)">
    </div>
    <List :starData="starData" kind="今日"/>
  </div>
</template>

<script>
import List from '@/components/star/List'
export default {
  props: ['starData', 'star'],
  components: {
    List
  }
}
</script>

<style lang="less" scoped>
.starBox {
  display: flex;
  height: 100%;
  .starImg {
    flex: 1;
    display: inline-block;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

@media screen and(max-width: 420px){
  .starBox {
    display: block;
    width: 100%;
    .starImg {
      width: 100%;
      img {
        width: 100%
      }
    }
  }
}
</style>
