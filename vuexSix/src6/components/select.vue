<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input :is-show.sync="listShow"></select-input>
        <list v-show="listShow" @changeTitle="titleHandle"></list>
      </div>
      <i style="display: inline-block;margin-top: 10px;font-size: 28px;">{{haha}}</i>
      <i style="display: block;margin-top: 10px;font-size: 28px;">{{title}}</i>
    </section>
</template>

<script>

import selectInput from '@/components/selectInput'
import list from '@/components/list'

import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'

/*let listData = [
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
]*/

export default {
  data(){
  	return {
  		listShow : false
  	}
  },
  computed: {
  	haha(){
  		return this.$store.state.count
  	},
  	...mapState(['title'])
  },
  components: {
    selectInput,
    list
  },
  methods: {
  	titleHandle(para){
  		// console.log(para);
  		this.listShow = !this.listShow;
  	}
  }
}
</script>
