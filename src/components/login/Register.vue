<template>
  <div class="login">
    <form @submit="add">
      <div class="lineHeight">
        <label class="align">用户账号:</label>
        <input type="text" v-model="id" required/>
      </div>
      <div class="lineHeight">
        <label class="align">用户密码:</label>
        <input type="password" v-model="password" required/>
      </div>
      <div class="lineHeight">
        <label class="align">确认密码:</label>
        <input type="password" v-model="passwordAgain" required/>
      </div>
      <div class="message">{{message}} </div>
      <div class="lineHeight">
        <input type="submit" value="确定" @click="sendAccount(id, password)">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      id: '',
      password: '',
      passwordAgain: '',
      message: ''
    }
  },
  methods: {
    add (e) {
      e.preventDefault()
    },
    sendAccount (id, password) {
      if (this.password === this.passwordAgain) {
        this.message = ''
        this.$http({
          method: 'post',
          url: 'login',
          data: {
            id: id,
            password: password,
            method: 'register'
          }
        })
          .then(res => {
            console.log(res.data)
            window.sessionStorage.setItem('guest', JSON.stringify(res.data))
            this.$router.push('news')
          })
          .catch(error => {
            console.log(error)
          })
        this.$emit('changeTab','Login')
      } else {
        this.message = '两次输入的密码不相同'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  margin-top: 1rem;
  text-align: center;
  .lineHeight {
    margin-top: 1rem;
    .align {
      display: inline-block;
      width:70px;
      text-align: right;
    }
  }
  .message {
    height: 1rem;
    margin: .2px 0;
    color: red
  }
}
</style>
