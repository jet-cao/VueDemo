<template>
  <div>
    <div class="loginBox">
      <div class="tab">
        <div :style="onTab==='Login'? color:{cursor: 'pointer'}" @click="changeTab('Login')">登录</div>
        <div :style="onTab==='Register'? color:{cursor: 'pointer'}" @click="changeTab('Register')">注册</div>
      </div>
      <component :is="onTab" @changeTab="changeTab"/>
    </div>
  </div>
</template>

<script>
import Login from '@/components/login/Login'
import Register from '@/components/login/Register'
export default {
  name: 'login',
  data: function () {
    return {
      onTab: 'Login',
      color: { color: 'tomato', cursor: 'pointer' }
    }
  },
  components: {
    Login,
    Register
  },
  methods: {
    changeTab (tag) {
      this.onTab = tag
    }
  }
}
</script>

<style lang="less" scoped>
.loginBox {
  width: 300px;
  margin: auto;
  .tab {
    width: 100%;
    margin: 1rem 0;
    div {
      display: inline-block;
      width: 50%;
      text-align: center
    }
  }
}
</style>
