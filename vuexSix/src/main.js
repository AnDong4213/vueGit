// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Utile from './assets/utils.js'
Vue.use(Utile)

/*
import VeeValidate, {Validator} from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN';//引入中文文件
import arabic from 'vee-validate/dist/locale/ar';
Validator.localize('zh_CN', {
  messages: zh.messages,
  attributes: {
    email: '哈哈',
    phone: '呵呵',
    name: '嘿嘿'
  }
});
Vue.use(VeeValidate)*/


Vue.filter('capitalize1', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1) + '-AN'
})

Vue.config.productionTip = false
import '@/assets/css/select.css'

/* eslint-disable no-new */
let haha = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
// console.log(haha)

Object.keys(haha).forEach((item,index) => {
	// console.log(`${item}--${index}`)
})









