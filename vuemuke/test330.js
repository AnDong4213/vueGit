Vue.component('simple-counter', {
	template: '<button @click="counter += 1">{{ counter }}</button>',
	data() {
		return {
			counter: 0
		}
	}
	
})

var app = new Vue({
	el: '#app',
	data: {
		checked: true,
		checkedNames: [],
		msg1: '哈哈',
		which_to_show: 'first'
	},
	computed: {
		
	},
	created() {
		
	},
	mounted() {
		
	},
	methods: {
		changeText() {
			this.msg1 = '呵呵'
		},
		toshow() {
			let arr = ['first', 'second', 'third'], index = arr.indexOf(this.which_to_show)
			if (index < 2) {
				this.which_to_show = arr[index+1]
			} else {
				this.which_to_show = arr[0];  
			}
			console.log(app.$children)
		},
		toshow1() {
			this.which_to_show = 'first'
		},
		toshow2() {
			this.which_to_show = 'second'
		},
		toshow3() {
			this.which_to_show = 'third'
		}
	},
	components: {
		first: {
			template: "<div>这里是子组件1</div>"
		},
		second: {
            template: "<div>这里是子组件2: {{hello}}</div>",
            data() {
            	return {
            		hello: '你好'
            	}
            },
            //简单来说，他是延迟加载。例如，在发起ajax请求时，会需要等待一些时间，假如我们需要在ajax请求完成后，再进行加载，那么就需要用到activate钩子了。具体用法来说，activate是和template、data等属性平级的一个属性，形式是一个函数，函数里默认有一个参数，而这个参数是一个函数，执行这个函数时，才会切换组件。
            activate: function (done) {  //执行这个参数时，才会切换组件  
            	/*$.get("/test", function (data) {    //这个ajax我手动在服务器端设置延迟为2000ms，因此需要等待2秒后才会切换  
                    self.hello = data;  
                    done(); //ajax执行成功，切换组件  
                })*/  
            }
        },  
        third: {
            template: "<div>这里是子组件3</div>"  
        }
	},
	watch: {
		checkedNames(newValue,oldValue) {
			// console.log(`${newValue}--${oldValue}`)
		}
	}
})

// console.log(app.$el === app.$refs.hihi)  // true
// console.log(app.$el.textContent)
/*Object.keys(app).forEach((item,index) => {
	console.log(`${item}--${index}`)
})*/
//原生的app对象有28个值...





