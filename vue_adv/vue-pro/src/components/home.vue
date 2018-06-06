<template>
  <div class="main">
    <div class="home-header">
      <img src="../assets/miaov.png" alt="">
      <div class="portrait" :class={portraitLogin:isLogin}>
        <router-link  v-if="!isLogin" to="/login" tag="span">登录</router-link>
        <img  v-if="isLogin" src="../assets/portrait.png" alt="">
      </div>

    </div>
    <div class="phrase">北京万港通信</div>
    <div class="btns">
      <router-link to="/project" tag="div" class=" trans">我的项目</router-link>
      <router-link to="/doc" tag="div" class=" trans">我的文档</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        isLogin: false
      }
    },
    created(){
    	let info = this.$local.fetch('miaov');
    	this.isLogin = info.login;
    }
  }
</script>
<style>

</style>
