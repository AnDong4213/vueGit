<template>
  <div>
    <!--<h2>简易加法计算器</h2>-->
    <div>
    	<b style="color: red;">{{abc}}</b>
    	<!-- @click="deHandle({de:5})这样写必须在 mapMutations才有效...  -->
      <input type="button" value="-" @click="deHandle({de:5})" />
      <!--<span>{{num}}</span>-->
      <span style="color: pink;">{{count}}</span>
      <input type="button" value="+" @click="addHandle" />
      <br />
      
      <input type="button" value="-2" @click="deHandle2" />
      
      <span style="color: green;display:block;">{{count2}}</span>
      <hr />
      <i style="display: block;color: orange;">{{num2}}</i>
      <hr />
      <ul>
      	<li v-for="list in data" style="color: mediumpurple;">{{list.text}}</li>
      </ul>
      <p style="color: #0F0;">{{countha}}</p>
    </div>
    <p style="color: #F0f;">{{hihi}}</p>
  </div>
</template>

<script>
  // Vuex辅助函数...
  
  import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
  import Vue from 'vue'
  
  export default {
      /*computed : {
      	num(){
      		return this.$store.state.count
      	},
      	num2(){
      		return this.$store.getters.filterCount
      	}
      },*/
      /*computed : mapState({
      	//num : (state)=>state.count
      	//num : 'count'
      	//count : 'count'
      	num(state){
      		return state.count+100
      	}
      }),*/
      //如果{{}}里的变量和state状态里的定义的一样可以这样写...当映射的计算属性的名称与state的子节点的名称相同时
      //computed : mapState(['count']),
      computed : {
      	abc(){
      		return this.$store.getters.getTodoById(1)
      	},
      	//用...把mapState里的对象扩展到当前computed里
      	/*...mapState({
      		count(state){
	      		return state.count+100
	      	}
      	})*/
      	...mapState(['count','count2','hihi']),
      	...mapGetters({
      		num2: 'filterCount',
      		data: 'doneTodos',
      		countha: 'doneTodosCount'
      	})
      },
      methods : {
      	addHandle(){
      		//改变状态，提交mutation addIncrement,用自带的commit来提交...
      		// this.$store.commit('addIncrement',参数),参数一般是一个对象，在定义addIncrement的地方接收参数...
//    		this.$store.commit('addIncrement',{
//    			n : 5
//    		});
      		// 包含了异步操作不能再操作mutations了，就需要操作actions了,,触发actions需要自带的dispatch
      		this.$store.dispatch('addAction',{hehe: 9}).then((haha)=>{
      			console.log(haha);
      			this.$store.commit('HAHA')
      		})
      	},
      	deHandle2(){
      		this.$store.dispatch('actionB');
      	},
      	/*...mapActions({
      		addHandle : 'addAction'
      	}),*/
      	/*deHandle(){
      		//除了this.$store.commit('deIncrement')这种写法，还有一种...
      		//this.$store.commit('deIncrement');
      		this.$store.commit({
      			type : 'deIncrement',
      			de : 5
      		})
      	}*/
      	...mapMutations({
      		deHandle:'deIncrement'
      	})
      	
      },
      created(){
      	this.$store.commit('HAHA')
      }

  }
</script>
<style>

</style>
