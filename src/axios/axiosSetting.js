import Axios from 'axios'
import Vue from 'vue'
Vue.prototype.$http = Axios
// 响应拦截器
Axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})
