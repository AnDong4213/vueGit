<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input :title="title1" :is-show.sync="listShow"></select-input>
        <list v-show="listShow" :data="listData" @changeTitle="titleHandle"></list>
      </div>
    </section>
</template>

<script>

import selectInput from '@/components/selectInput'
import list from '@/components/list'

let listData1 = [
	{
		title : 'javascript'
	},
	{
		title : 'html+css'
	},
	{
		title : 'jQuery'
	},
	{
		title : 'react'
	},
	{
		title : 'nodejs'
	}
]

export default {
  data(){
  	return {
  		listShow : false,
  		listData : listData1,
  		title1 : ''
  	}
  },
  methods : {
  	titleHandle(tit){
  		this.title1 = tit;
  	}
  },
  components: {
    selectInput,
    list
  }
  
}
</script>
