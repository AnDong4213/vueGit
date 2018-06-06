import Vue from 'vue'
import Router from 'vue-router'

import Select from '@/components/select'
import Increment from '@/components/Increment'
import scroll from '@/components/scroll'
import scroll01 from '@/components/scroll01'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'Select',
      component: Select
    },
    {
      path: '/increment',
      name: 'Increment',
      component: Increment
    },
    {
      path: '/scroll',
      name: 'scroll',
      component: scroll
    },
    {
      path: '/scroll01',
      name: 'scroll01',
      component: scroll01
    }
  ]
})
