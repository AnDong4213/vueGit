<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'	
export default {
  name: 'app',
  created(){
  	/*axios({
//		method : 'get',
//		url : 'http://easy-mock.com/mock/59dc45d51de3d46fa94cc91d/axios/testaxios'
			method : 'post',
  		url : 'http://easy-mock.com/mock/59dc45d51de3d46fa94cc91d/axios/axiospost02'
  	})
  	  .then((res)=>{
  	  	console.log(res.data)
  	  })
  	  .catch((error)=>{
  	  	console.log(error)
  	  })*/
  	 
  	 /*axios.delete('http://easy-mock.com/mock/59dc45d51de3d46fa94cc91d/axios/axiosdelete')
  	  .then((res)=>{
  	  	console.log(res.data)
  	  })
  	  .catch((error)=>{
  	  	console.log(error)
  	  })*/
  	  
  	  /*axios.get('http://easy-mock.com/mock/59dc45d51de3d46fa94cc91d/axios/testaxios',{
  	  	params : {
  	  		abc : 'wangang'
  	  	}
  	  })
  	  .then((res)=>{
  	  	console.log(res.data)
  	  })
  	  .catch((error)=>{
  	  	console.log(error)
  	  })*/
  	 
  	 /*axios.post('http://easy-mock.com/mock/59dc45d51de3d46fa94cc91d/axios/axiospost02',{
  	  	miaov : '课堂'
  	  })
  	  .then((res)=>{
  	  	console.log(res.data)
  	  })
  	  .catch((error)=>{
  	  	console.log(error)
  	  })*/
  	
  	
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
