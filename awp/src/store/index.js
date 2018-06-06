import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let getData = function(time){
	return new Promise((resolve,reject)=>{
		console.log('执行');
		setTimeout(()=>{
			resolve()
		},time)
	})
};
let getOtherData = function(time){
	return new Promise((resolve,reject)=>{
		console.log('执行2');
		setTimeout(()=>{
			resolve()
		},time)
	})
};

let store = new Vuex.Store({
	state : {
		count : 100,
		answerid : []
	},
	getters : {
		
	},
	mutations : {
		addIncrement : (state,payload) => state.count += payload.n,
		deIncrement : (state,payload) => state.count -= payload.n,
		gotData : () => console.log('gotData'),
		gotOtherData : () => console.log('getOtherData'),
		addarray : (state,id) => state.answerid.push(id)
	},
	actions : {
		addAction({commit,dispatch}){
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					commit('addIncrement',{
						n : 5
					});
					dispatch('testA','99')
				},500)
			})
		},
		deAction({commit}){
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					commit('deIncrement',{
						n : 5
					})
				},500)
			})
		},
		async actionA({commit}){
			commit('gotData',await getData(2000))
		},
		async actionB({commit,dispatch}){
			await dispatch('actionA')
            commit('gotOtherData', await getOtherData(4000))
		},
		testA({commit,state},id){
			commit('addarray',state.count)
			console.log(id)
		}
		
	}
})

export default store





























