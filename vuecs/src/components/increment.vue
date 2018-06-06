<template>
	<div>
		<p>{{num}}</p>
		<input type="button" value="-" @click="deHandle" />
	    <span>{{count}}</span>
	    <input type="button" value="+" @click="addHandle" />
	    <p>
	    	<button @click="getData">A</button>
	    	<button @click="getOtherData">B</button>
	    </p>
	    
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
			...mapState(['count'])
		},
		methods : {
			...mapActions({
				addHandle : 'addAction',
				deHandle : 'deAction',
				getData : 'actionA',
				getOtherData : 'actionB'
			})
		}
	}
</script>

<style>
</style>