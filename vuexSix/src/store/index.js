
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

//定义一个容器，定义状态或者改变状态的函数...

let store = new Vuex.Store({
	state: {
		count : 100,
		title : '',
		list : [],
		list1 : []
	},
	// getters类似于组件里的computed...
	getters: {
		filterCount(state){
			return state.count >=120 ? 120 : state.count
		}
	},
	//mutations 唯一修改状态的事件回调函数...
	mutations: {  // 里面的事件必须是同步的...如果有异步操作的话就写在actions里面...
		addIncrement(state,payload){
			state.count += payload.n;
			//如果是下面这样写，状态管理就会混乱...
			/*setTimeout(()=>{
				state.count += payload.n;
			},1000)*/
		},
		deIncrement(state,payload){
			state.count -= payload.de;
		},
		changeTitle(state,payload){
			state.title = payload.title
		},
		changeList(state,list){
			state.list = list;
		},
		changeList1(state,haha){
			state.list1 = haha;
		}
	},
	actions: {
		//参数context不是当前store的实例，是个对象，包含了和实例里面一样的方法...
		/*addAction(context){ // 第一个ajax拿到数据后发送第二个ajax...
			setTimeout(()=>{
				context.commit('addIncrement',{
					n : 5
				});
				//在触发另一个action的时候，可以传递一个参数,在另一个action里接收...
				context.dispatch('textAction',{
					test : '测试啦...'
				});
			},1000)
		},*/
		//解构赋值...
		/* addAction({commit,dispatch},n){ 
			setTimeout(()=>{
				// commit('addIncrement',{
					// n : 5
				// });
				commit('addIncrement',n);
				dispatch('textAction',{
					test : '测试啦...'
				});
			},1000)
		}, */
		
		// addAction({commit,dispatch},{list:uu}){
		addAction({commit,dispatch,state},{list}){ 
			setTimeout(()=>{
				// commit('changeList1',uu);
				// console.log(uu)
				commit('changeList1',list);
				console.log(list)
				
				//console.log(state.list1)
				dispatch('textAction',{
					test : '测试啦...'
				});
			},1000)
		},
		
		//在actions里触发另一个action
		textAction(context,obj){
			console.log(context)
			console.log(obj)
		},
		getListAction({commit}){
			// 发送请求..
			axios.get('https://www.easy-mock.com/mock/59dc26741de3d46fa94c8025/example/list')
				.then((data)=>{
					commit('changeList',data.data)  //拿到数据后，提交mutations,改变状态...
				})
				.catch((error)=>{
					console.log(error)
				})
		}
		
	}
})

export default store
















