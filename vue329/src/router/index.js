import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import about from '@/components/about'
import document from '@/components/document'
import noFound from '@/components/404'
import user from '@/components/user'

import study from '@/views/study'
import work from '@/views/work'
import hobby from '@/views/hobby'
import slider from '@/views/slider'
import slider2 from '@/views/slider2'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior (to, from, savedPosition) { // savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
    /*console.log(to);
    console.log(from);
    console.log(savedPosition);*/
    /*if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }*/
    if (to.hash) {
      return {
        // selector: to.hash
      }
    }
  },
  routes: [
    {
      path: '/',
      component: home,
      meta: {
      	index: 0,
        title: 'home'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: home,
      alias: '/index'
    },
    {
      path: '/user/:tip?/:userId?',
      name: 'User',
      component: user,
      meta: {
      	index: 3,
        title: 'user'
      }
    },
    {
      path: '/about',
      // name: 'About',
      component: about,
      children: [
        {
          path: '', // 点击about路由时想有一个默认的，设置为空就可以了...  /about
          name: 'About',    // 设置了默认的子路由后把  name: 'About' 放到这里...
          component: study,
          meta: {
		      	index: 2,
            title: 'about'
		      }
        },
        {
          path: '/work',   // 路径里面不嵌套了，但组件里面依然可以嵌套的哟...写成字符串的话相对于about，加上 / 后相对于根路径了...
          name: 'Work',
          component: work
        },
        {
          path: '/hobby',
          name: 'Hobby',
          component: hobby
        }
      ]
    },
    {
      path: '/document',
      name: 'Document',
      // component: document
      beforeEnter(to,from,next) {
		if (from.meta.title == 'about') {
			console.log(to);
			console.log(from)
			console.log('beforeEnter');
			// window.location.reload()
		}
        next()
      },
      components: {
        default: document,
        slider: slider,
        slider2: slider2
      },
      meta: {
      	index: 1,
        login: true,
        title: 'document'
      }
    },
    {
      path: '*',
      // component: noFound
      // 重定向...
      // redirect: {path: '/document'}
      redirect: (to) => {
        /*return '/home'*/
        if (to.path === '/123') {
          return '/home'
        } else if (to.path === '/456') {
          return {path: '/about'}
        } else {
          return {name: 'Document'}
        }
        console.log(to)
      }
    }
  ]
})

//router.beforeEach((to, from, next) => {
  //console.log('beforeEach');
  /*console.log(to);
  console.log(from);
  next(false)*/  // 取消导航了...
  /*if (to.meta.login) {
    next('/login')
  } else {
    next()
  }*/
/*  next()
})*/

router.afterEach((to,from) => {
  if (to.meta.title) {
    window.document.title = to.meta.title
  } else {
    window.document.title = 'anle'
  }
})

export default router
