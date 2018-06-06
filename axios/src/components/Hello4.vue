<template>
  <div class="hello">
      wangang
  </div>
</template>

<script>
import axios from 'axios'
import queryString from 'queryString'

var HTTP = axios.create({
	baseURL : ' http://easy-mock.com/mock/59dc45d51de3d46fa94cc91d/axios/',
	//timeout : 10000,
	responseType : 'json',
	/*params : {
		book : '123'
	},*/
	//以下两个共同的作用...  miaov=ketang&username=leo&age=24
	headers : {
		'custome-header' : 'miaov',
		'content-type' : 'application/x-www-form-urlencoded'
	},
	transformRequest : [function(data){
		//console.log(data)
		//return data;
		data.age = 24;
		return queryString.stringify(data);
	}],
	
	transformResponse : [function(data){
		//没有return返回值，底下的    .then((res)=>{console.log(res.data)}) 为 undefined
		console.log('transformResponse')
		console.log(data)
		data.abc = 'miaov'
		return data
	}],
	/*validateStatus(status){
		console.log(status)
		return status < 400
	}*/
	
})

export default {
  name: 'hello',
  created(){
  	HTTP.post('axiospost02',{
  		miaov : 'ketang',
  		username : 'leo'
  	})
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
