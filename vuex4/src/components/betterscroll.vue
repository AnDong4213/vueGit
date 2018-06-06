<template>
	<div class="wrapper" ref="wrapper">
		<ul class="content">
			<li></li>
		</ul>
    </div>
</template>

<script>
	import {HTTP2} from '@/lib/tool'
	import Bscroll from 'better-scroll'
	export default {
	  data() {
	  	return {
	  		carousel: []
	  	}
	  },
	  computed: {
	  	
	  },
	  created() {
	  	this.banner()
	  },
	  mounted() {
	  	this.$nextTick(() => {
	  		this.scroll = new Bscroll(this.$refs.wrapper, {})
	  		// console.log(this.scroll)
	  	})
	  },
	  methods : {
	  	banner() {
	    	HTTP2.get('bscroll')
	    		.then((res) => {
	    			let data = res.data
	    			if (data.code) {
	    				this.carousel = data.banner
	    			}
	    		})
	    		.catch((error) => {
	    			throw new Error(error)
	    		})
	    }
	  	
	  }
	  
	}
</script>

<style scoped>
	.haha{color: red;}
</style>
