import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
//定义一个容器，定义状态或者改变状态的函数...

let selectModule = {
	state: {
		title: '',
		list: []
	},
	mutations: {
		changeTitle(state,payload){
			state.title = payload.title
		},
		changeList(state,list){
			state.list = list;
		}
	},
	actions: {
		getListAction({commit}){
			axios.get('https://www.easy-mock.com/mock/59dc26741de3d46fa94c8025/example/list')
				.then((data)=>{
					commit('changeList',data.data)
				})
				.catch((error)=>{
					console.log(error)
				})
		}
	}
};

let store = new Vuex.Store({
	state: {
		count: 100
	},
	getters:{
		filterCount(state){
			return state.count >=120 ? 120: state.count
		}
	},
	mutations: {
		addIncrement(state,payload){
			state.count += payload.n;
		},
		deIncrement(state,payload){
			state.count -= payload.de;
		}
	},
	actions: {
		addAction({commit,dispatch}){ 
			setTimeout(()=>{
				commit('addIncrement',{
					n: 5
				});
				dispatch('textAction',{
					test: '测试啦...'
				});
			},1000)
		},
		textAction(context,obj){
			console.log(obj)
		}
	},
	modules: {
		selectModule
	}
})

export default store
















