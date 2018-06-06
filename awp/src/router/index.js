import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import increment from '@/components/increment'
import increment2 from '@/components/increment2'

Vue.use(Router)

 let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
    	path : '/increment',
    	name : 'Increment',
    	component : increment
    },
    {
    	path : '/increment2',
    	name : 'Increment2',
    	component : increment2
    }
  ]
});
export default router;
