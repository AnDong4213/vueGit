
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let selectModule = {
	state : {
		title : 'hello123',
		list : []
	},
	mutations : {
		changeTitle(state,payload){
			state.title = payload.title2;
		},
		changeList(state,list){
			state.list = list;
		}
	},
	actions : {
		getListAction({commit}){
			axios.get('https://www.easy-mock.com/mock/59dc26741de3d46fa94c8025/example/list')
			  .then((data)=>{
			  	//console.log(data.data)
			  	commit('changeList',data.data)  // 拿到数据后，提交mutation，改变状态...
			  })
			  .catch((error)=>{
			  	console.log(error)
			  })
		}
	}
}

let store = new Vuex.Store({
	state : {
		count : 100
		/*title : '',
		list : []*/
	},
	getters : {
		filterCount(state){
			return state.count >=120 ? 120 : state.count
		}
	},
	mutations : {
		addIncrement(state,payload){
			state.count+=payload.n;
		},
		deIncrement(state,payload){
			state.count-=payload.de;
		}
		/*changeTitle(state,payload){
			state.title = payload.title2;
		},
		changeList(state,list){
			state.list = list;
		}*/
	},
	actions: {
		//改变状态   提交mutations addIncrement
		//context不是store的实例，只是一个包含store实例里的方法和属性的对象,是个对象...
		// ES6的结构赋值...
		/*addAction(context){
			setTimeout(()=>{
				context.commit('addIncrement',{n:5})
				context.dispatch('textAction',{test : '测试...'})
			},1000)
		},*/
		addAction({commit,dispatch}){
			setTimeout(()=>{
				commit('addIncrement',{n:5})
				dispatch('textAction',{test : '测试...'})
			},1000)
		},
		textAction(context,obj){
			console.log(obj)
		}
		/*getListAction({commit}){
			axios.get('http://easy-mock.com/mock/59dc26741de3d46fa94c8025/example/list')
			  .then((data)=>{
			  	//console.log(data.data)
			  	commit('changeList',data.data)  // 拿到数据后，提交mutation，改变状态...
			  })
			  .catch((error)=>{
			  	console.log(error)
			  })
		}*/
		
	},
	modules: {
		selectModule
	}
	
})

export default store




 


















