<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input :is-show.sync="listShow"></select-input>
        <list v-show="listShow" @changeHaha="titleHandle"></list>
      </div>
      <i style="display: inline-block;margin-top: 10px;font-size: 28px;">{{haha}}</i>
      <hr />
      <p>{{andong}}</p>
	  <router-link to="/music" class="brand">music</router-link>	
      <!--<button @click="customad({shu: 9})">andong</button>-->
      <button @click="customad">andong</button>
    </section>
</template>

<script>

import selectInput from '@/components/selectInput'
import list from '@/components/list'
import {mapState,mapGetters,mapMutations} from 'vuex'

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
  computed : {
  	haha(){
  		return this.$store.state.count
  	},
	music() {
		return '/music'
	},
  	...mapState(['andong'])
  	/*...mapState({
  		jj: 'andong'
  	})*/
  	
  },
  components: {
    selectInput,list
  },
  created() {
  	// console.log(0)
  	/*let ages = [3, 10, 18, 20];
  	let hehe = ages.find((item) => {
  		return item > 6
  	})
  	if (hehe) {
  		console.log(hehe)
  	} else {
  		console.log('都不符合...')
  	}*/
  	
  	
  	
  	
  },
  methods: {
  	titleHandle(para){
  		console.log(para+'00');
  		this.listShow = !this.listShow;
  	},
	/*...mapMutations({
		customad: 'ANDONG'
	})*/
	customad() {
		this.$store.commit('ANDONG', {
			shu: 8
		})
	}
  
  }
}
</script>

<style scoped>
	.brand{display:block;}
</style>
