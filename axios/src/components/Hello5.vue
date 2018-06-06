<template>
  <div class="hello">
      wangang
  </div>
</template>

<script>
import axios from 'axios'
import queryString from 'queryString'
/*var CancelToken = axios.CancelToken;
var source = CancelToken.source();*/

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
	/*transformRequest : [function(data){
		//console.log(data)
		//return data;
		//data.age = 24;
		return queryString.stringify(data);
	}],
	
	transformResponse : [function(data){
		//没有return返回值，底下的    .then((res)=>{console.log(res.data)}) 为 undefined
		console.log('transformResponse')
		console.log(data)
		//data.abc = 'miaov'
		return data
	}],*/
	/*validateStatus(status){
		console.log(status)
		return status < 400
	}*/
	
	//cancelToken : source.token
	
});

HTTP.interceptors.request.use(function(config){
    //在发送请求之前做某事
    console.log("拦截")
    console.log(config)
    return config;   // 注释后不能拿到数据了...
  },function(error){
    //请求错误时做些事
    return Promise.reject(error);
});

HTTP.interceptors.response.use(function(data){
      console.log("response")
      console.log(data)
      return data;
  })

export default {
  name: 'hello',
  /*created(){
  	HTTP.post('axiospost02',{
  		miaov : 'ketang',
  		username : 'leo'
  	})
  		.then((res)=>{
  	  	console.log(res.data)
  	  })
  	  .catch((error)=>{
  	  	if(axios.isCancel(error)){
  	  		console.log(error.message)  // 用户自己取消的...
  	  	}else{
  	  		console.log(error)
  	  	}
  	  })
  	  source.cancel('操作被用户取消,因为请求时间太长了...')
  }*/
 
 created(){
  	
  	function http1(){
  		return HTTP.get('testaxios')
  	}
  	function http2(){
  		return HTTP.post('axiospost02')
  	}
  	
  		/*axios.all([http1(),http2()])
  		.then((res)=>{
  	  	console.log(res)
  	  })
  	  .catch((error)=>{
  	  	if(axios.isCancel(error)){
  	  		console.log(error.message)  // 用户自己取消的...
  	  	}else{
  	  		console.log(error)
  	  	}
  	  })*/
  	 
  	 axios.all([http1(),http2()]).then(axios.spread((res1,res2)=>{
          console.log(res1)
          console.log(res2)
      }))
      .catch((error) =>{
        if (axios.isCancel(error)) {
          console.log(error.message);
        }else{
            console.log(error)
        }
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
