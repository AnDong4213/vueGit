// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

 //eslint-disable no-new 
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
*/

import Vue from 'vue'
/*import VueRouter from 'vue-router'
Vue.use(VueRouter)
import home1 from '@/components/home'*/

import App1 from './App';
import router1 from '@/router/index1.js'
/*var router = new VueRouter({
	routes : [
		{
			path : '/',
			component : home1
		}
	]
})*/

var vm = new Vue({
	el : '#app',
	router : router1,
	template : '<App1 />',
	components : {
		App1
	}
});













