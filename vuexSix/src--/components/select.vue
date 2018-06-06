<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input :is-show.sync="listShow"></select-input>
        <list v-show="listShow" @changeTitle="titleHandle"></list>
      </div>
      <i style="display: inline-block;margin-top: 10px;font-size: 28px;">{{haha}}</i>
    </section>
</template>

<script>

import selectInput from '@/components/selectInput'
import list from '@/components/list'

export default {
  data(){
  	return {
  		listShow : false
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
  	titleHandle(para){
  		//console.log(para);
  		this.listShow = !this.listShow;
  	}
  }
}
</script>
