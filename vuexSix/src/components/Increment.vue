<template>
  <div>
    <h2>简易加法计算器</h2>
    <div>
    	<b>{{abc}}</b>
    	<!-- @click="deHandle({de:5})这样写必须在 mapMutations才有效...  -->
      <input type="button" value="-" @click="deHandle({de:5})" />
      <!--<span>{{num}}</span>-->
      <span>{{count}}</span>
      <input type="button" value="+" @click="addHandle" />
      <i style="display: block;font-size: 30px;">{{num2}}</i>
    </div>
  </div>
</template>

<script>
  // Vuex辅助函数...
  import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
  
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
      //如果{{}}里的变量和state状态里的定义的一样可以这样写...
      //computed : mapState(['count']),
      computed : {
      	abc(){
      		return 123
      	},
		arr() {
			return [{a:2,b:3},{c:3,f:9}]
		},
      	//用...把mapState里的对象扩展到当前computed里
      	/*...mapState({
      		count(state){
	      		return state.count+100
	      	}
      	})*/
      	...mapState(['count']),
      	...mapGetters({
      		num2 : 'filterCount'
      	})
      },
      methods: {
      	/*addHandle(){
      		//改变状态，提交mutation addIncrement,用自带的commit来提交...
      		// this.$store.commit('addIncrement',参数),参数一般是一个对象，在定义addIncrement的地方接收参数...
//    		this.$store.commit('addIncrement',{
//    			n : 5
//    		});
      		// 包含了异步操作不能再操作mutations了，就需要操作actions了,,触发actions需要自带的dispatch
      		this.$store.dispatch('addAction');
      	},*/
		
      	/*...mapActions({
      		addHandle : 'addAction'
      	}),*/
		...mapActions(['addAction']),
		addHandle() {
			/*this.addAction({
				n: 9
			})*/
			this.addAction({
				list: this.arr
			})
		},
      	/*deHandle(){
      		//除了this.$store.commit('deIncrement')这种写法，还有一种...
      		//this.$store.commit('deIncrement');
      		this.$store.commit({
      			type : 'deIncrement',
      			de : 5
      		})
      	}*/
      	...mapMutations({
      		deHandle :'deIncrement'
      	})
      	
      }

  }
</script>
<style>

</style>
