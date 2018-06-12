<template>
	<div>
	 <!--<div>
	  <h1>我是父组件的标题</h1>
	  <my-component>
	    <p>这是一些初始内容</p>
	    <p>这是更多的初始内容</p>
	  </my-component>
	</div>-->
	
	<my-component2 desc="解决囧家里金坷垃">
		<i>万港</i>
		<p style="color:red;" slot="zujian">呵呵呵</p>
	</my-component2>
	
	<!--<my-component>
	  <h1 slot="header">这里可能是一个页面标题</h1>
	  <p>主要内容的一个段落。</p><p>另一个主要段落。</p>
	  <p slot="footer">这里有一些联系信息</p>
	</my-component>-->
	
	<!--<div class="parent">
	  <my-component>
	    <template slot-scope="hihi">
	      <p>hello from parent</p>
	      <p style="color: pink;">{{hihi.text}}</p>
	      <p style="color: pink;">{{hihi.haha}}</p>
	      <p style="color: pink;">{{hihi.hi}}</p>
	    </template>
	  </my-component>
	</div>-->
	
	<!--在 2.5.0+，slot-scope 能被用在任意元素或组件中而不再局限于 <template>。-->
	<div>
		<!-- 作用域插槽也可以是具名的 -->
		  <!--<li slot="item" slot-scope="props" class="my-fancy-item">
		    {{props.text}}
		  </li>-->
		<my-component :items="shuju" :title="rawId | capitalize">
		  <a slot="item" slot-scope="tt">
		    {{tt.text}}
		    {{tt.index}}
		  </a>
		</my-component>
	</div>
	
	<hr />
	
	<div>	
		<button @click="toshow">点击让子组件显示</button>
		<!--<keep-alive :include="/first|second/">-->
		<transition name="component-fade" mode="out-in">
			<keep-alive include="second,third">
	        	<component :is="which_to_show"></component>
	        </keep-alive>
	    </transition>    
        <hr />
		<p class="mixin">{{query | capitalize1}}</p>
		<hr />
	</div>
	
	</div>
	
</template>

<script>

import myComponent from '@/components/myComponent'
import myComponent2 from '@/components/myComponent2'
import first from '@/components/first'
import second from '@/components/second'
import third from '@/components/third'

import {playlistMixin} from '@/assets/mixin.js'

let items = [{text : '万港01',id:1},{text : '万港02',id:2},{text : '万港03',id:3},{text : '万港04',id:4},{text : '万港05',id:5},{text : '万港06',id:6}]

export default {
  mixins: [playlistMixin],
  components: {myComponent, myComponent2, first, second, third},
  data(){
  	return {
  		shuju: items,
  		which_to_show: 'first',
  		query: 'zhuruixin',
  		rawId: 'haizi'
  	}
  },
  computed : {
  	
  },
  created() {
  	//this.add()
  	/*console.log(this.$data.kk)
  	console.log(this.kk)*/
  	this.$local.setStore('haha','我是哈哈...')
  },
  methods : {
  	toshow() {
  		let arr = ['first', 'second', 'third'], index = arr.indexOf(this.which_to_show)
		if (index < 2) {
			this.which_to_show = arr[index+1]
		} else {
			this.which_to_show = arr[0];  
		}
		console.log(this.$children)
  	}
  },
  filters: {
  	capitalize: function(value) {
  		if (!value) return ''
	    value = value.toString()
	    return value.charAt(0).toUpperCase() + value.slice(1)
  	}
  }
}
</script>

<style scoped>
	.mixin{color:red;}
	.component-fade-enter-active, .component-fade-leave-active {
	  transition: opacity .3s ease;
	}
	.component-fade-enter, .component-fade-leave-to {
	  opacity: 0;
	}
</style>
