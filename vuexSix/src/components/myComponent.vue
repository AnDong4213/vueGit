<template>
<div>
	<div>
	  <h2>我是子组件的标题</h2>
	  <slot>只有在没有要分发的内容时才会显示。</slot>
	</div>
	
	<!--<div class="container">
	  <header><slot name="header"></slot></header>
	  <footer><slot name="footer"></slot></footer>
	  <main><slot></slot></main>
	</div>-->
	
	<!--<div class="child">
	  <slot text="hello from child" haha="hehe" :hi="oo">yy</slot>
	</div>-->
	
	<!-- 这里写入备用内容 -->
	<!--<ul>
	  <slot name="item" v-for="item in items" :hehe="item">
	    <i>我是哈哈...</i>
	  </slot>
	  <p style="color: green;">{{title}}</p>
	</ul>-->
	
	<ul>
		<li v-for="item in items">
          <slot name="item" :text="item.text" :index="item.id">
            <span class="tab-name">{{item.id}}</span>
          </slot>
        </li>
        <p style="color: green;">{{title}}</p>
	</ul>
	</div>
</template>

<script>
	
export default {
  props: ['items', 'title'],
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
