<template>
    <div class="haha">
    	music
    </div>
</template>

<script>
	import axios from 'axios'
	import jsonp from 'jsonp'
	import {param} from '../lib/tool.js'
	import {assembleStyles} from '../lib/testmodule.js'
	
	export default {
	  data() {
	  	return {
	  		
	  	}
	  },
	  computed: {
	  	
	  },
	  created() {
	  	axios.get('https://www.easy-mock.com/mock/59dc26741de3d46fa94c8025/example/list')
			.then((data)=>{
				// console.log(data.data)
			})
			.catch((error)=>{
				console.log(error)
			})
			
		console.log(Date.now())
		
	  },
	  mounted() {
	  	let obj = {
			platform: 'yqq',
			hostUin: 0,
			sin: 0,
			ein: 29,
			sortId: 5,
			needNewCode: 0,
			categoryId: 10000000,
			rnd: Math.random(),
			format: 'json'
		}
		console.log(param(obj))
		// console.log(jsonp)
		console.log(assembleStyles().bgBlack)
		
	  },
	  methods: {
	  	
	  }
	  
	}
</script>

<style scoped>
	.haha{color: red;}
</style>
