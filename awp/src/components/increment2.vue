<template>
	<div>
		<p>{{num}}</p>
		<input type="button" value="-" @click="deAction" />
	    <span>{{count}}</span>
	    <input type="button" value="+" @click="addAction" />
	    <p>
	    	<button @click="actionA">A</button>
	    	<button @click="actionB">B</button>
	    </p>
	    <p><button @click="action">AA</button></p>
	    <p>{{answerid}}</p>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	export default{
		data(){
			return {
				num : 'hh'
			}
		},
		computed : {
			...mapState(['count','answerid'])
		},
		methods : {
			...mapActions(['deAction','addAction','actionA','actionB','testA']),
			action(){
				this.testA()
			}
		},
		created(){
			//this.$store.dispatch('testA');
			//this.testA()
		}
	}
</script>

<style>
</style>