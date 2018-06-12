<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input :title="title1" :is-show.sync="listShow"></select-input>
        <list v-show="listShow" :data="listData" @changeTitle="titleHandle"></list>
      </div>
      <i style="display: inline-block;margin-top: 10px;font-size: 28px;color: pink">{{haha}}</i>
      <i style="display: inline-block;margin-top: 10px;font-size: 28px;color: blue;cursor:pointer;" @click="hanshu">{{haha1}}</i>
      <comp v-bind.sync="{foo: foo1, bar: bar1}"></comp>
      <p style="color: blue;">{{foo1+'--'}}</p>
      <p style="color: blue;" ref="zujian1">{{bar1}}</p>
	  <comp2 ref="zujian" :data="listData">
		<i>我是slot55</i>
		<p slot="ppp">和发动机</p>
	  </comp2>
    </section>
</template>

<script>

import selectInput from '@/components/selectInput'
import list from '@/components/list'
import comp from '@/components/comp'
import comp2 from '@/components/comp2'
import {playlistMixin} from '@/assets/mixin.js'

let listData = [{title : '万港01'},{title : '万港02'},{title : '万港03'},{title : '万港04'},{title : '万港05'}]

export default {
  mixins: [playlistMixin],
  components: {selectInput, list, comp, comp2},
  data(){
  	return {
  		listShow : false,
  		listData : listData,
  		title1 : '',
  		foo1: '我是foo1',
  		bar1: '我是bar1'
  	}
  },
  computed : {
  	haha(){
  		return this.$store.state.count
  	},
  	haha1() {
  		return this.$store.state.count1
  	}
  },
  created() {
  	this.add()
  	/*console.log(this)
  	Object.keys(this).forEach((item,index) => {
		console.log(`${item}--${index}`)
	})*/
  },
  methods: {
  	titleHandle(title){
  		this.title1 = title;
  		this.listShow = !this.listShow;
  	},
	hanshu() {
	    console.log(this.$refs.zujian)
		this.$refs.zujian1.style.fontSize = '30px'
		let hi = this.$refs.zujian.scroll
		console.log(hi)
		this.$refs.zujian.haha()
	}
  }
  
}
</script>

<style scoped>
	p{padding:0;margin:0;}
</style>



