import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: !!window.sessionStorage.getItem('guest')
  },
  mutations: {
    setLogin (state) {
      if (window.sessionStorage.getItem('guest')) {
        state.login = true
      } else {
        state.login = false
      }
    }
  },
  actions: {

  }
})
