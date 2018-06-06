import Vue from 'vue'
import Router from 'vue-router'
import Select from '@/components/select'
import Increment from '@/components/Increment'
import qrcode from '@/components/qrcode'
import rsa from '@/components/rsa'
import music from '@/components/music'
import scss from '@/components/scss'
import betterscroll from '@/components/betterscroll'
import i18n from '@/components/i18n'
import switcho from '@/components/switch'

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
    	path : '/qrcode',
    	name : 'Qrcode',
    	component : qrcode
    },
    {
    	path : '/rsa',
    	name : 'rsa',
    	component : rsa
    },
    {
    	path : '/music',
    	name : 'music',
    	component : music
    },
    {
    	path : '/scss',
    	name : 'scss',
    	component : scss
    },
    {
    	path : '/betterscroll',
    	name : 'betterscroll',
    	component : betterscroll
    },
    {
    	path : '/i18n',
    	name : 'i18n',
    	component : i18n
    },
    {
    	path : '/switch',
    	name : 'switch',
    	component : switcho
    }
  ]
})
