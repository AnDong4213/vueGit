<template>
  <div>
    <header-nav></header-nav>
    <div class="breadcrumb">
      <router-link to="/">首页</router-link> /
      <span :style="{color:'#f00'}">{{flag}}</span>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Header from '@/components/header'

  let flags = {
    project: '我的项目',
    workbench: '工作台',
    doc: '文档'
  }

  export default {
    data(){
      return {
          flag: ''
      }
    },
    watch: {
      $route(){
      	//console.log(this.$route)
        this.flag = flags[this.$route.path.slice(1)]
      }
    },
    beforeRouteEnter(to, from, next){
      next((vm) => {
        vm.flag = flags[to.path.slice(1)]
      })
    },
    components: {
      headerNav: Header
      /*headerNav: (resolve) =>{
      	setTimeout(()=>{
      		//resolve(Header)
      		resolve(require('@/components/header'))
      	},2000)
      }*/
    }
  }
</script>
<style>

</style>
