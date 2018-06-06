<template>
	<div class="haha">
		<a href="">客观不可以</a>
		<div class="loginbtn">
			<a href="">复健科</a>
		</div>
		<div class="main">
			还房间打开<i class="main-sidebar">几句话</i>
		</div>
		<div class="main-sidebar">
			会bhd<span>活动结束</span>
		</div>
		
		<div class="seriousError">
		  Oh no !  You've been hacked!
		</div>
		<div class="seriousError1">
		  地方就是你
		</div>
		
		<div class="clearfix">
			几个考虑让他好好考虑如同姐妹
		</div>
		
		<button>还打几个地方</button>
		
		<p class="foo">几点返款</p>
		<p class="zh">几点返款</p>
		
    </div>
</template>

<script>
	
	export default {
	  computed: {
	  	
	  },
	  created() {
	  	
	  },
	  methods: {
	  	
	  }
	  
	}
</script>

<style lang="scss" scoped>
	@import '../assets/css/test';
	$baseLineHeight: 1;
            
	p {
		line-height: 180%;
		&.zh {
			color: red;
		}
	}
	
	a {
	  $fStyle: italic !global;
	  font-style:$fStyle;   // 将局部变量转换为全局变量可以添加 !global 
	  font-weight: bold;text-decoration: none;
	  &:hover { text-decoration: underline; }
	  div.loginbtn & {font-weight: weight;color: green;}
	}
	.main {
		color: red;
		&-sidebar {
			color: blue;
		}
	}
	/* 会被完整输出到编译后的 CSS 文件中 */
	// 会被完整输出到编译后的 CSS 文件中 
	/*占位符选择器 %foo(placeholder selector)。与常用的 id 与 class 选择器写法相似，只是 # 或 . 替换成了 %。必须通过 @extend 指令调用*/
	.main {
	  @extend %mt5;
	  @extend %pt5;
	}
	.main-sidebar {
	  @extend %mt5;
	  span {
	    @extend %pt5;
	    color: yellowgreen;
	    font-size: $fs;
	    font-style:$fStyle;
	  }
	}
	
	/*.error {
	  @extend %mt15;
	  border: 1px solid red;
	  background-color: pink;
	}
	.seriousError {
	  color: blue;
	}*/
	
	.error {
	  @extend %mt15;
	  border: 1px solid red;
	  background-color: pink;
	}
	#error{
		font-style: italic;
	}
	.seriousError {
	  @extend .error;
	  @extend #error;
	  color: blue;
	}
	.seriousError1{
	  @extend .error;
	  @extend .main;
	  @extend a:hover;
	  font-size: 20px;;
	  line-height: $baseLineHeight;
	}
	
	button{
		@include border-radius(10px);
		@include font(40px,4)
		color: red;
	}
	
	
</style>
