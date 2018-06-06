<template>
  <div class="hello">
      wangang
  </div>
</template>

<script>

export default {
  name: 'hello',
  created(){
  	this.$http.get('http://easy-mock.com/mock/59dc45d51de3d46fa94cc91d/axios/testaxios')
  	  .then((res)=>{
  	  	console.log(res)
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
