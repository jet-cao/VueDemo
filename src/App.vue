<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/nav/Nav'
export default {
  components: {
    Nav
  }
}
</script>


<style lang="less">
#app{
  padding: 0;
  margin: 0;
}
@media screen and(max-width: 330px) {
  #app {
    width: 100%;
    font-size: 6px;
  }
}
@media screen and(max-width: 380px) {
  #app {
    width: 100%;
    font-size: 12px;
  }
}
@media screen and(max-width: 420px) {
  #app {
    width: 100%;
    font-size: 16px;
  }
}
@media screen and(min-width: 421px) and (max-width: 700px){
  #app {
    width: 100%;
    font-size: 8px;
  }
}
@media screen and(min-width: 701px) and (max-width: 1025px){
  #app {
    width: 100%;
    font-size: 12px;
  }
}
@media screen and(min-width: 1026px) {
  #app {
    max-width: 1366px;
    width: 80%;
    margin: auto;
    font-size: 16px
  }
}
</style>
