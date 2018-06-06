<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input :title="title1" :is-show.sync="listShow"></select-input>
        <list v-show="listShow" :data="listData" @changeTitle="titleHandle"></list>
      </div>
      <i style="display: inline-block;margin-top: 10px;font-size: 28px;">{{haha}}</i>
    </section>
</template>

<script>

import selectInput from '@/components/selectInput'
import list from '@/components/list'

let listData = [
	{
	  title : '万港01'
	},
	{
	  title : '万港02'
	},
	{
	  title : '万港03'
	},
	{
	  title : '万港04'
	},
	{
	  title : '万港05'
	}
]

export default {
  data(){
  	return {
  		listShow : false,
  		listData : listData,
  		title1 : ''
  	}
  },
  computed : {
  	haha(){
  		return this.$store.state.count
  	}
  },
  components: {
    selectInput,
    list
  },
  methods : {
  	titleHandle(title){
  		this.title1 = title;
  		this.listShow = !this.listShow;
  	}
  }
}
</script>
