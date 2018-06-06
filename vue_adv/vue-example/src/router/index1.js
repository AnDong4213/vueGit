
import Vue from 'vue'
import VueRouterha from 'vue-router'

Vue.use(VueRouterha)
import home from '@/components/home'
import about1 from '@/components/about'
import document from '@/components/document'
import noFound from '@/components/404'
import user from '@/components/user'
import study from '@/views/study'
import work from '@/views/work'
import hobby from '@/views/hobby'
import slider from '@/views/slider'

let router = new VueRouterha({
	mode : 'history',
	linkActiveClass : 'is-active',
	scrollBehavior(to,from,savePosition){  // 点击前进后退或切换导航时触发...
		/*console.log(to);
		console.log(from);
		console.log(savePosition);*/  // 记录滚动条的坐标...点击前进后退的时候记录值
		
		/*if(savePosition){
			return savePosition
		}else{
			return {x:0,y:0}
		}*/
		if(to.hash){
			return {
				selector : to.hash
			}
		}
	},
	routes : [
		{
			path : '/',
			component : home,
			meta : {
				index : 0,
				title : 'home'
			}
		},
		{
			path : '/home',
			name : 'Home',
			component : home,
			alias : '/index'
		},
		{
			path : '/user/:tip?/:userId?',  // 问号表示匹配0次或者一次...
			component : user,
			meta : {
				index : 3,
				title : 'user'
			}
		},
		{
			path : '/about',
			//name : 'About',  // 底下有默认的study路由就不要name这个属性了...
			component : about1,
			children : [
			  {
			  	path : '', // 为空，默认是study这个路由...
			  	name : 'About',
			  	component : study,
			  	meta : {
					index : 2,
					title : 'about'
				}
			  },
			  {
			  	path : '/work',  //这个路由是about/work,如果‘work’变成'/work'，路由就变成了/work
			  	name : 'Work',
			  	component : work
			  },
			  {
			  	path : '/hobby',
			  	name : 'Hobby',
			  	component : hobby
			  }
			]
		},
		{
			path : '/document',
			name : 'Document',
			beforeEnter(to,from,next){
				//console.log('beforeEnter');
				next();
			},
			meta : {
				index : 1,
				login : true,
				title : 'document'
			},
			//component : document
			components : {
				default : document,
				slider : slider
			}
		},
		{
			path : '*',
			//component : noFound
			// 重定向...
			//redirect : '/home'
			//redirect : {path : '/home'}
			//redirect : {name : 'About'}
			redirect : (to) => {  // 动态设置重定向的目标...
				// to 目标路由对象，就是访问的路径的路由信息..
				//console.log(to);
				/*if(to.path==='/123'){
					return '/home'
				}else if(to.path==='/456'){
					return {path : '/document'}
				}else{
					return {name : 'About'}
				}*/
				
				//return '/home'
			}
		}
	]
});

/*router.beforeEach((to,from,next)=>{
	//console.log(to);
	next();
	//next(false);//不渲染页面...
//	if(to.meta.login){
//		next('/login')
//	}else{
//		next()
//	};
	
});
router.afterEach((to,from)=>{
	if(to.meta.title){
		window.document.title = to.meta.title
	}else{
		window.document.title = 'anle';
	}
})*/

export default router































