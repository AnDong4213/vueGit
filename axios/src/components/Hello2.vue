<template>
  <div class="hello">
      wangang
  </div>
</template>

<script>
import axios from 'axios'

var HTTP = axios.create({
	baseURL : ' http://easy-mock.com/mock/59dc45d51de3d46fa94cc91d/axios/',
	timeout : 10000,
	responseType : 'json',
	params : {
		book : '123'
	},
	headers : {
		'custome-header' : 'miaov'
	}
})

export default {
  name: 'hello',
  created(){
  	HTTP.get('testaxios')
  		.then((res)=>{
  	  	console.log(res.data)
  	  })
  	  .catch((error)=>{
  	  	console.log(error)
  	  })
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
  	font-size: 30px;
  }
</style>
