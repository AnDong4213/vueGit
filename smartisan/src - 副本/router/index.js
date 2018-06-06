import Vue from 'vue'
import Router from 'vue-router'
import '@/assets/css/reset.css'
import '@/assets/css/header.css'

Vue.use(Router)

import shop from '@/views/shop'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shop',
      component: shop
    }
  ]
})
