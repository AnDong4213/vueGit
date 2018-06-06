<template>
  <div>
    <h2>简易加法计算器</h2>
    <div>
      <input type="button" value="-" @click="deHandle" />
      <span>{{num}}</span>
      <input type="button" value="+" @click="addHandle" />
      <i style="display: block;font-size: 30px;">{{num2}}</i>
    </div>
  </div>
</template>

<script>

  export default {
      computed : {
      	num(){
      		return this.$store.state.count
      	},
      	num2(){
      		return this.$store.getters.filterCount
      	}
      },
      methods : {
      	addHandle(){
      		//改变状态，提交mutation addIncrement,用自带的commit来提交...
      		// this.$store.commit('addIncrement',参数),参数一般是一个对象，在定义addIncrement的地方接收参数...
      		/*this.$store.commit('addIncrement',{
      			n : 5
      		});*/
      		// 包含了异步操作不能再操作mutations了，就需要操作actions了,,触发actions需要自带的dispatch
      		this.$store.dispatch('addAction');
      		
      	},
      	deHandle(){
      		//除了this.$store.commit('deIncrement')这种写法，还有一种...
      		//this.$store.commit('deIncrement');
      		this.$store.commit({
      			type : 'deIncrement',
      			de : 10
      		})
      	}
      }

  }
</script>
<style>

</style>
