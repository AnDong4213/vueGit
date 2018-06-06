<template>
  <div id="#app">
  	<div class="nav-box">
	  	<ul class="nav">
	  		
  			<router-link to="/" tag="li" exact event="mouseover">
  				<i class="fa fa-home"></i>
  				<span>home</span>
  			</router-link>
  			
	  		<li>
	  			<router-link :to="{path:'/document#abc'}" active-class="activeClass">document</router-link>
	  		</li>
	  		
	  		<!--<li>
	  			<router-link :to="about1" event="mouseover">about</router-link>
	  		</li>-->
	  		<li>
	  			<router-link to="/about" event="mouseover">about</router-link>
	  		</li>
	  		
	  		<router-link to="/user" event="mouseover" tag="li">
	  			<span>user</span>
	  		</router-link>
	  		
	  	</ul>
	  </div>
	  
	  <!--<router-view name="slider"></router-view>-->
	  <transition name="left"><!--mode="out-in"-->
	  	<router-view class="center"></router-view>
	  </transition>
	  
  </div>
  
</template>

<script>
export default {
  name: 'app',
  data(){
  	return {
  		about1 : 'about'
  	}
  }
}
</script>

<style>
	.v-enter{
		opacity: 0;
	}
	.v-enter-to{
		opacity: 1;
	}
	.v-enter-active{
		transition: 0.2s;
	}
	.v-leave{
		opacity: 1;
	}
	.v-leave-to{
		opacity: 0;
	}
	.v-leave-active{
		transition: 0.2s;
	}
	
	.left-enter{
		transform: translateX(100%);
	}
	
/*	.left-enter-to{
		transform: translateX(0);
	}*/
	
	.left-enter-active,.left-leave-active{
		transition: 1s;
	}
	
/*	.left-leave{
		transform: translateX(0);
	}*/
	
	.left-leave-to{
		transform: translateX(100%);
	}
	
	.right-enter{
		transform: translateX(-100%);
	}
	.right-enter-active,.right-leave-active{
		transition: 1s;
	}
	.right-leave-to{
		transform: translateX(100%);
	}
</style>
