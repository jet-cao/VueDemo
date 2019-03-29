<template>
  <div class="login">
    <form @submit="add">
      <div class="lineHeitht">
        <label>
          账号:
          <input type="text" v-model="id" required/>
        </label>
      </div>
      <div class="lineHeight">
        <label>
          密码:
          <input type="password" v-model="password" required/>
        </label>
      </div>
      <div class="lineHeight">
        <input type="submit" value="确定" @click="sendAccount(id, password)">
      </div>
    </form>
    <div>账号：asdf。或者在注册页面重新注册</div>
    <div>密码：1234</div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      id: '',
      password: ''
    }
  },
  methods: {
    add (e) {
      e.preventDefault()
    },
    sendAccount (id, password) {
      this.$http({
        method: 'post',
        url: 'login',
        data: {
          id: id,
          password: password,
          method: 'login'
        }
      })
        .then(res => {
          console.log(res.data)
          window.sessionStorage.setItem('guest', JSON.stringify(res.data))
          this.$store.commit('setLogin')
          this.$router.push('news')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and (max-width: 420px){
  .login {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    .lineHeight {
      margin-top: 1rem;
    }
  }
}
@media screen and (min-width: 421px){
  .login {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    .lineHeight {
      margin-top: 1rem;
    }
  }
}
</style>
