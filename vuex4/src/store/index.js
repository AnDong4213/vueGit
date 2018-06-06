
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const HAHA = 'HAHA'
import * as types from './mutation-types'

//定义一个容器，定义状态或者改变状态的函数...
let store = new Vuex.Store({
	state : {
		count : 100,
		count2 : 200,
		title : '',
		list : [],
		todos : [
		  {id:1,text:'11',done:true},
		  {id:2,text:'22',done:true},
		  {id:3,text:'33',done:false}
		],
		hihi : 10,
		andong: 10
	},
	// getters类似于组件里的computed...store的计算属性...
	getters:{
		/*filterCount(state){
			return state.count >=120 ? 120 : state.count
		},*/
	   filterCount: state => state.count >=120 ? 120 : state.count,
	   doneTodos : state => state.todos.filter(todo => todo.done),
	   doneTodosCount : (state,gettersha) => gettersha.doneTodos.length,
	   getTodoById : (state,getters) => (id) => {
	   	return state.todos.find(todo => todo.id === id)
	   }
	},
	//mutations 唯一修改状态的事件回调函数...
	mutations : {  // 里面的事件必须是同步的...如果有异步操作的话就写在actions里面...
		[HAHA](state){
			state.hihi += 10;
		},
		[types.ANDONG]: (state,haha) => state.andong += haha.shu,
		addIncrement(state,payload){
			state.count += payload.n;
			//如果是下面这样写，状态管理就会混乱...
			/*setTimeout(()=>{
				state.count += payload.n;
			},1000)*/
		},
		/*deIncrement(state,payload){
			state.count -= payload.de;
		},*/
		deIncrement : (state,payload) => state.count -= payload.de,
		deIncrement2 : (state,payload) => state.count2 -= payload.de,
		changeTitle(state,payload){
			state.title = payload.title
		},
		changeList(state,data){
			state.list = data;
		}
	},
	actions : {
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
		/*addAction({commit,dispatch}){ 
			setTimeout(()=>{
				commit('addIncrement',{
					n : 5
				});
				dispatch('textAction',{
					test : '测试啦...'
				});
			},1000)
		},*/
		addAction({state, commit, dispatch}, obj2){
			return new Promise((resolve,reject)=>{
				// console.log(obj2.hehe)
				setTimeout(()=>{
					commit('addIncrement',{
						n : 15
					});
					resolve('在methods的addHandle方法中返回出来');
				},100)
			})
		},
		//在actions里触发另一个action
		textAction(context,obj){
			console.log(obj)
		},
		actionB({dispatch,commit}){
			return dispatch('addAction').then((haha)=>{
				 commit('deIncrement2',{
				 	de : 15
				 });
				 console.log(haha)
			})
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
















