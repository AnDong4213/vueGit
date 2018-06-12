<template>
    <div class="haha">
    	<button @click="show = !show">Toggle</button>
    	<transition mode="in-out" name="fade">
    		<p class="hehe" v-if="show">hello</p>
    	</transition>
    </div>
</template>

<script>
	export default {
	  data(){
	  	return {
	  		show: false
	  	}
	  },
	  created() {
	  	
	  },
	  methods : {
	  	
	  }
	}
</script>

<style scoped>
	.haha{margin: 20px;}
	/* .fade-leave-active below version 2.1.8 */
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to/*这个起作用  leave*/ {
	  opacity: 0;
	  color: green;
	}
	/* .fade-enter-to这个起作用  enter*/ 
	/*.fade-leave, .fade-enter-to {
	  color: #FF5340;
	}*/
</style>
