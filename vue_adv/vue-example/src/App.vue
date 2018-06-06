<template>
  <div id="#app">
  	<div class="nav-box">
	  	<ul class="nav">
	  		<!--event="mouseover"-->
  			<router-link to="/" tag="li" exact>
  				<i class="fa fa-home"></i>
  				<span>home</span>
  			</router-link>
  			
	  		<!--<li>
	  			<router-link :to="{path:'/document#abc'}" active-class="activeClass">document</router-link>
	  		</li>-->
	  		<li>
	  			<router-link :to="{path:'/document'}" active-class="activeClass">document</router-link>
	  		</li>
	  		
	  		<li>
	  			<router-link :to="about1">about</router-link>
	  		</li>
	  		
	  		<router-link to="/user" tag="li">
	  			<span>user</span>
	  		</router-link>
	  		
	  	</ul>
	  </div>
	  
	  <input type="button" value="后退1" @click="backHandle" />
	  <input type="button" value="前进" @click="forwardHandle" />
	  <input type="button" value="控制前进后退的步数" @click="goHandle" />
	  <input type="button" value="控制指定的导航push" @click="pushHandle" />
	  <input type="button" value="控制指定的导航replace" @click="replaceHandle" />
	  <!--当前导航的下标 : {{$route.meta.index}}-->
	  <!--<router-view name="slider"></router-view>-->
	  <transition :name="names"><!--mode="out-in"-->
	  	<router-view class="center"></router-view>
	  </transition>
	  
  </div>
  
</template>

<script>
export default {
  name: 'app',
  watch : {
  	$route(to,from){
  		/*console.log(to.meta.index);
  		console.log(from.meta.index);*/
  		if(to.meta.index < from.meta.index){
  			this.names = 'right'
  		}else{
  			this.names = 'left'
  		}
  	}
  },
  data(){
  	return {
  		about1 : '/about',
  		names : 'left'
  	}
  },
  methods : {
  	backHandle(){
  		this.$router.back();
  	},
  	forwardHandle(){
  		this.$router.forward();
  	},
  	goHandle(){
  		this.$router.go(-2);
  		//this.$router.go(0);   // 刷新页面...
  	},
  	pushHandle(){
  		//this.$router.push('/about');
  		//向history栈里添加一个新的记录...
  		this.$router.push({path : '/about',query : {}});
  	},
  	replaceHandle(){
  		this.$router.replace({path : '/about'});
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
		transform: translateX(-100%);
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
