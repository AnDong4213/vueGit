// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// Vue.config.hehe = '解决'
import '@/assets/css/app.css'

/* eslint-disable no-new */
let haha = new Vue({
  el: '#app',
  router,  /*注入到根实例中去...*/
  components: { App },
  template: '<App/>'  /* 使用App组件时，先注册一下哦 */
})


//console.log(haha);
//console.log(typeof Vue == 'function');  // true
