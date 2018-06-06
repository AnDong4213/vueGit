<template>
	<div class="hehe">
		<h4>关于我啦...</h4>
		<hr />
		<!--<ul class="nav">
			<router-link to="/about" exact="exact" tag="li">
				<a>study</a>
			</router-link>
			<router-link to="/about/work" tag="li">
				<a>work</a>
			</router-link>
			<router-link to="/about/hobby" tag="li">
				<a>hobby</a>
			</router-link>
		</ul>-->
		
		<ul class="nav">
			<router-link :to="{name : 'About'}" exact="exact" tag="li">
				<a>study</a>
			</router-link>
			<router-link :to="{name : 'Work'}" tag="li">
				<a>work</a>
			</router-link>
			<router-link :to="{name : 'Hobby'}" tag="li">
				<a>hobby</a>
			</router-link>
		</ul>
		<hr />
		测试数据 : {{test}}
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				test : '改变前11...'
			}
		},
		beforeCreate(){
			console.log('beforeCreate')
		},
		beforeRouteEnter(to,from,next){
			console.log('beforeRouteEnter');
			//组件实例还没创建出来，所以this为undefied,组件的钩子函数先执行...
			console.log(this);
			next((vm)=>{
				vm.test = '哈哈改变了...'
			});
		},
		beforeRouteUpdate(to,from,next){
			console.log('beforeRouteUpdate')
			next();
		},
		beforeRouteLeave(to,from,next){
			console.log('beforeRouteLeave');
			next();
		}
	}
</script>

<style>
</style>