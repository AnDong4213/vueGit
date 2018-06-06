Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{todo.text}}</li>'
})
Vue.component('todo-item2', {
	template: '<li class="hehe">这是个待办项2</li>'
})


/* $options--2  $parent--5  $root--6  $children--7  $refs--8 $vnode--19  $slots--20  $scopedSlots--21 $createElement--23 $attrs--24  $listeners--25  $el--30   */
var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello World',
		hehep: '我是呵呵p',
		message1: '页面加载于' + new Date().toLocaleString(),
		seen: true,
		message2: '我是哈哈',
		groceryList01: [{ id: 0, text: '蔬菜' },{ id: 1, text: '奶酪' },{ id: 2, text: '随便其它什么人吃的东西' }],
		zrx: '朱瑞新',
		msg: '我是MSG',
		rawHtml: '<span style="color: red">This should be red.</span>'
	},
	computed: {
		currentIndex() {
			return 0
		},
		reverseMessage() {
			return this.message.split('').reverse().join('')
		},
		now() {
			return new Date();
		}
	},
	created() {
		//console.log(this.message)
	},
	mounted() {
		/*console.log(this.message)
		this.$nextTick(function() {
			console.log(this.message)
		})*/
	},
	methods: {
		hehe() {
			// console.log(9)
			return 9
		},
		reverseMessage1() {
			//console.log(this === app) // true
			this.message = this.message.split('').reverse().join('')
		},
		changeIndex() {
			console.log(this.currentIndex)
			this.msg = '哈哈'
			// this.currentIndex = 1
		},
		warn(message, event) {
			console.log(message)
			console.log(event)
		}
	},
	watch: {
		message: function(newValue, old) {
			console.log(`${newValue}--${old}`)
		},
		message2: function(newValue, old) {
			console.log(`${newValue}--${old}`)
		},
		reverseMessage: function(newValue, old) {
			console.log(`${newValue}--${old}`)
		}
	}
})
app.$refs.hehe.style.color = '#f0f'


//console.log(app)
// console.log(app == app.$root)  // true
// Vue 实例属性
/*console.log(app.$refs)
console.log(app.$el)
console.log(app.$options)
console.log(app.$parent)
console.log(app.$root)
console.log(app.$children)
console.log(app.$children.length)  // 2  组件的个数...
console.log(app.$vnode)
console.log(app.$slots)
console.log(app.$scopedSlots)
console.log(app.$createElement)
console.log(app.$attrs)
console.log(app.$listeners)
console.log(app.$data)*/
/*console.log(app.$data.hehep === app.hehep)  // true
console.log(app.hehep)*/
console.log(app.$el === app.$refs.hihi)  // true
console.log(app.$el)
console.log(app.$refs.hehe)

/*Object.keys(app).forEach((item,index) => {
	console.log(`${item}--${index}`)
})*/
//原生的app对象有28个值...


/*Object.keys(Vue.config).forEach((item,index,vue) => {
	console.log(`${item}--${index}`)
})*/
/*console.log(Vue.version)
console.log(Vue.version.split('.')[0])*/


/*var an_obj = {100: 'a', 2: 'b', 7: 'c'};
Object.values(an_obj).forEach((item,index) => {
	console.log(`${item}--${index}`)
})*/



