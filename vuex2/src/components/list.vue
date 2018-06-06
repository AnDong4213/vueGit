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
			//return this.$store.state.list;
			return this.$store.state.selectModule.list;
		}
	},
	methods : {
		getTitleHandle(tit){
			 // 改变vuex中状态
			this.$store.commit('changeTitle',{title2:tit})
			//如果都是title,ES6的语法是  this.$store.commit('changeTitle',{title})
		}
	},
	created(){
		 // 获取数据
		this.$store.dispatch('getListAction')
	}

}
</script>
