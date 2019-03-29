import Vue from 'vue'
import Router from 'vue-router'
import News from './views/News.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/news',
      name: 'news',
      component: News,
      meta: {
        authRequest: true
      }
    },
    {
      path: '/star',
      name: 'star',
      component: () => import('./views/Star'),
      meta: {
        authRequest: true
      }
    },
    {
      path: '/collection',
      name: 'collection',
      component: () => import('./views/Collection'),
      meta: {
        authRequest: true
      }
    },
    {
      path: '/',
      name: 'login',
      component: () => import('./views/Login')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequest)) {
    let guest = window.sessionStorage.getItem('guest')
    if (!JSON.parse(guest).token) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
