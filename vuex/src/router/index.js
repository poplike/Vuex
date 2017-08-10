import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import Page1 from '@/page/page1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    }
  ]
})
