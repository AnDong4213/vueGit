
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//定义一个容器，定义状态或者改变状态的函数...

let store = new Vuex.Store({
	state : {
		count: 10,
		count1: 20
	},
	//mutations 唯一修改状态的事件回调函数...
	mutations : {  // 里面的事件必须是同步的...
		addIncrement(state,payload){
			state.count += payload.n;
		},
		deIncrement(state,payload){
			state.count -= payload.de;
		}
	}
})

export default store
















