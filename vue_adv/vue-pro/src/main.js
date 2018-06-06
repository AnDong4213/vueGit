import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/app.css'

Vue.config.productionTip = false

import Utile from './lib/utils.js'
Vue.use(Utile)

//Vue.prototype.$custom = '这是自定义的属性...'

// obj也想做为插件...
/*let obj = {
	install : function(Vue,options){
		Vue.prototype.$abc = '自定义...'
		console.log(Vue);
		console.log(options);
	}
}
Vue.use(obj,{a:1});*/


var vm = new Vue({
  el: '#app',
  router,
  /*template: '<App/>',
  components: { App }*/
  render: (h1) => h1(App),
  methods : {
  	
  }
});
