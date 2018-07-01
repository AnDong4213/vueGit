<template lang="html">
  <div class="">
    我是User
    <div class="user-list">
      <!--<router-link style="padding:0 20px" :to="'/user/'+item.tip+'/'+item.id" v-for="(item,index) in userList" :key="index">{{item.userName}}</router-link>-->
	  
      <router-link style="padding:0 20px" :to="{path:'/user/'+item.tip+'/'+item.id,query: {info:'follow'}}" v-for="(item,index) in userList" :key="index">{{item.userName}}</router-link>
    </div>
    <div class="user-info" v-if="userInfo.userName" style="font-size:20px;">
      <p>姓名: {{userInfo.userName}}</p>
      <p>性别: {{userInfo.sex}}</p>
      <p>爱好: {{userInfo.hobby}}</p>
    </div>
    <hr />
    <div class="info-list" v-if="userInfo.userName" style="font-size:20px;">
      <!--<router-link exact to="?info=follow">他的关注</router-link>
      <router-link exact to="?info=share">他的分享</router-link>-->
      <!--<router-link exact :to="{path: '',query:{info: 'follow',a: 1}}">他的关注</router-link>-->
      <router-link exact :to="{path: '',query:{info: 'follow'}}">他的关注</router-link>
      <router-link exact :to="{path: '',query:{info: 'share'}}">他的分享</router-link>
      <div class="">
      	{{$route.query}}
      </div>
    </div>

  </div>
</template>

<script>
import data from '@/data'
export default {
  data() {
    return {
      userList: data,
      userInfo: {}
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      let id = this.$route.params.userId;
	  // console.log(id)
      if (id) {
        this.userInfo = this.userList.filter((item) => {
          return item.id == id
        })[0]
      } else {
        this.userInfo = {}
      }
    }
  },
  watch: {
    '$route' (to,from) {
	  console.log(to);
	  console.log(from)
      this.getData()
    }
  }

}
</script>

<style scoped>

</style>
