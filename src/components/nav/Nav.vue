<template>
  <div class="nav">
    <div
      v-for="(item,index) in pageName"
      :key="index"
      @click="toNextPage($event, item)"
      class="listStyle"
    >{{item.title}}
    </div>
    <div @click="toLogin" class="listStyle" v-if="!login">登录</div>
    <div @click="toLogout" class="listStyle" v-if="login">退出</div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: [
        { title: '新闻', name: 'news' },
        { title: '星座', name: 'star' }
      ]
    }
  },
  computed: {
    login: function () {
      return this.$store.state.login
    }
  },
  methods: {
    toNextPage (event, item) {
      this.$router.push(item.name)
    },
    toLogin () {
      this.$router.push('/')
    },
    toLogout () {
      window.sessionStorage.setItem('guest', '')
      this.$store.commit('setLogin')
      this.toLogin()
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and (min-width: 421px) {
  .nav {
    display: flex;
    justify-content: space-around;
    div {
      padding: 1rem 2rem;
    }
  }
}
@media screen and (max-width: 420px) {
  .nav {
    padding: 0 1rem;
    div {
      padding: 0.5rem;
      display: inline-block
    }
  }
}
.nav {
  background-color: rgb(22, 37, 37);
}
.listStyle {
  color: white;
  background-color: rgb(22, 37, 37);
  cursor: pointer;
}
</style>
