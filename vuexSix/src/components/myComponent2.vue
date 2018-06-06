<template>
<div>
	<slot name="desc" style="color:green;" class="kk">{{desc}}</slot>  <!--这个slot如果有name="desc"这个属性就会显示{{desc}}里的内容，没用的话显示 '万港' 两个字 -->
	<slot name="zujian">工具</slot>
</div>
</template>

<script>
	
export default {
  props:['desc'],
  data(){
  	return {
  		oo: '我是oo--'
  	}
  },
  computed : {
  	
  },
  methods : {
  	
  }
}
</script>
<style scoped>
	.kk{color:red;}
</style>
