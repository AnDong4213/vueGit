import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//定义一个容器，定义状态或者改变状态的函数...

let store = new Vuex.Store({
	state: {
		count : 10
	},
	//mutations 唯一修改状态的事件回调函数...
	mutations : {  // 里面的事件必须是同步的...如果有异步操作的话就写在actions里面...
		addIncrement(state,payload){
			state.count += payload.n;
			//如果是下面这样写，状态管理就会混乱...
			/*setTimeout(()=>{
				state.count += payload.n;
			},1000)*/
		},
		deIncrement(state,payload){
			state.count -= payload.de;
		}
	},
	actions: {
		//参数context不是当前store的实例，是个对象，包含了和实例里面一样的方法...
		addAction(context){
			console.log(context)
			setTimeout(()=>{
				context.commit('addIncrement',{
					n : 5
				})
			},1000)
		}
	}
})

export default store
















