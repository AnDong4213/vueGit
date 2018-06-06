<template>
  <div>
    <h2>简易加法计算器</h2>
    <div>
      <!--<input type="button" value="-" @click="deHandle" />-->
      <input type="button" value="-" @click="deHandle({de:5})" />
      <span>{{num}}</span>
      <input type="button" value="+" @click="addHandle" />
      <p>{{num2}}</p>
    </div>
  </div>
</template>

<script>
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
    	//computed : mapState({
    		//num : (state) => state.count
    		//num : 'count'
    		/*num(state){
    			return state.count+100
    		}*/
    		//count : 'count'  //<span>{{count}}</span>
    	//}),
    	//computed : mapState(['count']),    //<span>{{count}}</span>
    	computed : {
    		//...mapState(['count'])   //<span>{{count}}</span>  //mapState里的count和<span>标签里的一样的...
    		...mapState({
    			//num : (state) => state.count
    			num : 'count'
    		}),
    		...mapGetters({
    			num2 : 'filterCount'
    		})
    	},
    	methods : {
    		/*addHandle(){
    			//改变状态   提交mutations addIncrement
//  			this.$store.commit('addIncrement',{
//  				n : 5
//  			});
    			//触发一个action。。
    			this.$store.dispatch('addAction')
    		},*/
    		...mapActions({
    			addHandle : 'addAction'
    		}),
    		...mapMutations({
    			deHandle : 'deIncrement'
    		})
    		/*deHandle(){
    			//this.$store.commit('deIncrement')
    			this.$store.commit({
    				type : 'deIncrement',
    				de : 10
    			})
    		}*/
    		
    	}
    }
    
</script>
<style>

</style>
