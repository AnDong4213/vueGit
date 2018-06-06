<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input :is-show.sync="listShow"></select-input>
        <list v-show="listShow"></list>
      </div>
    </section>
</template>

<script>

import selectInput from '@/components/selectInput'
import list from '@/components/list'

/*let listData1 = [
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
]*/

export default {
  data(){
  	return {
  		listShow : false,
  		//listData : listData1
  	}
  },
  methods : {
  },
  components: {
    selectInput,
    list
  }
  
}
</script>
