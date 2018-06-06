<template>
    <ul class="list">
      <li v-for="item in data" @click="getTitleHandle(item.title)">{{item.title}}</li>
    </ul>
</template>

<script>
export default {
  //props : ['data'],
  computed : {
  	data(){
  		return this.$store.state.list
  	}
  },
  methods : {
  	getTitleHandle(title){
  		this.$emit('changeHaha',title)
  		//改变vuex中的状态...
  		//this.$store.commit('changeTitle',{title : title});
  		//ES6的写法...
  		this.$store.commit('changeTitle',{title});
  		// alert(title)
  	}
  },
  created(){
  	// 获取数据...
  	this.$store.dispatch('getListAction');
  }
  
}
</script>