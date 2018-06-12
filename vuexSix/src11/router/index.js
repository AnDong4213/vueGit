import Vue from 'vue'
import Router from 'vue-router'
import Select from '@/components/select'
import Increment from '@/components/Increment'
import testslot from '@/components/testslot'
import animate from '@/components/animate'
import validate from '@/components/validate'
import validate2 from '@/components/validate2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Select',
      component: Select
    },
    {
    	path : '/Increment',
    	name : 'Increment',
    	component : Increment
    },
    {
    	path : '/testslot',
    	name : 'testslot',
    	component : testslot
    },
    {
    	path : '/animate',
    	name : 'animate',
    	component : animate
    },
    {
    	path : '/validate',
    	name : 'validate',
    	component : validate
    },
    {
    	path : '/validate2',
    	name : 'validate2',
    	component : validate2
    }
  ]
})
