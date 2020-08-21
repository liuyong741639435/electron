import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/diawin/:uid',
      name: 'home-page',
      component: require('@/components/DialogueWindow/DialogueWindow').default
    },
    {
      path: '/home',
      name: 'home-page',
      component: require('@/components/HomePage.vue').default
    },
    {
      path: '/',
      name: 'login-page',
      component: require('@/components/LoginPage.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
