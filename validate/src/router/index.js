import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import validate from '@/components/validate'
import validate1 from '@/components/validate1'
import validate2 from '@/components/validate2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/validate',
      name: 'validate',
      component: validate
    },
    {
      path: '/validate1',
      name: 'validate1',
      component: validate1
    },
    {
      path: '/validate2',
      name: 'validate2',
      component: validate2
    }
  ]
})
