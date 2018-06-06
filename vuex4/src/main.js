// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import JsEncrypt from 'jsencrypt/bin/jsencrypt'
import i18n from './language'
//import $ from 'jquery'
//import Popper from 'popper.js/dist/popper.js'

// import 'bootstrap/js/bootstrap.js'
// import 'bootstrap/css/bootstrap.css'

Vue.prototype.$$jsEncrypt = JsEncrypt

import '@/validation/validation.js'

Vue.config.productionTip = false
import '@/assets/css/select.css'

/* eslint-disable no-new */
let hh = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})

/*console.log(hh.$i18n)
console.log(hh.$i18n.locale)*/
