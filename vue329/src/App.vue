<template>
  <div class="app">

    <div class="nav-box">
      <ul class="nav">
        <!--<li><a href="#/home">home</a></li>
        <li><a href="#/about">about</a></li>
        <li><a href="#/document">document</a></li> hash模式下的写法  -->

        <!--<li><a href="/home">home</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/document">document</a></li>-->

        <router-link to="/" exact tag="li" event="mouseover">
          <i class="fa fa-home"></i>
          <span>Home</span>
        </router-link>
        <!-- <li><router-link to="/document#abc" event="mouseover">document</router-link></li> -->
        <!-- <li><router-link :to="{name: 'Document'}" event="mouseover">document</router-link></li> -->

        <li><router-link :to="{path: '/document'}" event="mouseover">document</router-link></li>
        <li><router-link :to="{path: '/about'}" active-class="activeClass" event="mouseover">about</router-link></li>
        <li><router-link to="/user" event="mouseover">User</router-link></li>

      </ul>
    </div>
		当前导航的下标{{$route.meta.index}}

    <input type="button" value="后退" @click="backHandle" />
    <input type="button" value="前进" @click="forwardHandle" />
    <input type="button" value="控制前进后退的步数" @click="goHandle" />
    <input type="button" value="控制指定的导航push" @click="pushHandle" />
    <input type="button" value="控制指定的导航replace" @click="replaceHandle" />

    <!--<router-view name="slider"></router-view>
    <router-view name="slider2"></router-view>-->
          <!--如果是左右移动就把 mode="out-in" 去掉咯-->
		<transition :name="names">
			<router-view class="center"></router-view>
		</transition>

		<!--<transition name="move">
			<router-view class="center"></router-view>
		</transition>-->

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      index: '/home',
      names: 'left'
    }
  },
  created() {
  	// console.log(this.$route)
  },
  methods: {
    backHandle() {
      this.$router.back()
    },
    forwardHandle() {
      this.$router.forward()
    },
    goHandle() {
      this.$router.go(2)
    },
    pushHandle() {
      //this.$router.push('/document')
      this.$router.push({path: '/document'})
    },
    replaceHandle() {
      this.$router.replace({path: '/about'})
    }
  },
  watch: {
  	$route(to,from) {
  		if (to.meta.index < from.meta.index) {
  			this.names = 'left'
  		} else {
  			this.names = 'right'
  		}
  	}
  }
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/*.router-link-exact-active{
  color: green;
}*/
.v-enter{
	opacity: 0
}
.v-enter-to{
	opacity: 1;
}
.v-enter-active{
	transition: all 0.5s;
}
.v-leave{
	opacity: 1
}
.v-leave-to{
	opacity: 0;
}
.v-leave-active{
	transition: all 0.5s;
}

/*.left-enter-to{
	transform: translateX(0);
}     不写这个也可以，自动会找translateX轴的默认位置就是0 */
/*.left-leave{
	transform: translateX(0);
}   不写这个也可以因为初始位置就在0的位置哦...  */
.left-enter{
	transform: translateX(100%);
}
.left-enter-active, .left-leave-active{
	transition:0.5s;
}
.left-leave-to{
	transform: translateX(-100%);
}

.right-enter{
	transform: translateX(-100%);
}
.right-enter-active, .right-leave-active{
	transition:0.5s;
}
.right-leave-to{
	transform: translateX(100%);
}

/*.center{
	transition: all 0.3s;
    transform: translate3d(0, 0, 0);
}
.move-enter-active, .move-leave-active {
	transform: translate3d(-100%, 0, 0);
}*/




</style>
