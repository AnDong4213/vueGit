<template lang="html">
  <div class="">
    我是About
    <hr />
    <ul class="nav">

      <!--<router-link tag="li" to="/about" exact>
        <a>study</a>
      </router-link>
      <router-link tag="li" to="/about/work">
        <a>work</a>
      </router-link>
      <router-link tag="li" to="/about/hobby">
        <a>hobby</a>
      </router-link>-->

      <router-link tag="li" :to="{name: 'About'}" exact>
        <a>study</a>
      </router-link>
      <router-link tag="li" :to="{name: work}">
        <a>work</a>
      </router-link>
      <router-link tag="li" :to="{name: 'Hobby'}">
        <a>hobby</a>
      </router-link>
    </ul>
    <hr />
    <p style="font-size:18px;">测试数据-----{{test}}</p>
    <router-view/>

  </div>
</template>

<script>
export default {
  data() {
    stydy();
    return {
      work: 'Work',
      test: '改变前...'
    }
  },
  beforeRouteEnter(to,from,next) {
    console.log('beforeRouteEnter')
	
    next((vm) => {
	  if (from.meta.title === 'document') {
		// console.log(vm.$router.go(0))
	  }
      vm.test = '我改变了哈...'
    })
  },
  beforeRouteUpdate(to,from,next) {
    console.log('beforeRouteUpdate')
    next()
  },
  beforeRouteLeave(to,from,next) {
	//console.log(to);
	//console.log(from)
    console.log('beforeRouteLeave')
    next()
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    // this.es6()
  },
  methods: {
    es6() {
      let param;
      function p1() {
        return new Promise((resolve,reject) => {
          setTimeout(function () {
            console.log("aaaaa");
            //resolve(123);
            param='第1';
            reject(123);
         },3000);
        })
      }
      function p2() {
        return new Promise(function(resolve, reject) {
           setTimeout(function () {
              console.log("bbbbb");
              param='第2';
              resolve(456); //继续向下
              //reject(456);  //截停
            },2000);
        });
      }
      function p3() {
       return new Promise(function(resolve, reject) {
          setTimeout(function () {
             console.log("cccccc");
             console.log('传来:'+param);
             param='第3';
             resolve(789);
           },1000);
       });
     }

      function p4() {
         return new Promise(function(resolve, reject) {
            setTimeout(function () {
               console.log("dddddd");
               console.log('传来:'+param);
               resolve('结束');
             },1000);
         });
       }
        p1().then(p2).then(p3)
        .then((data) => {
          console.log('data: '+data);
        })
        .catch((error) => {
          console.log('end,error: ' + error)
          if (error == 123) {
             p3().then(p4)
          } else if (error == 456) {
            p4()
          }
        })

    }
  }
}
function stydy() {

  /*let sleep = function(time) {
    return new Promise((resolve, reject) => {
      console.log('执行...')
      setTimeout(() => {
        resolve('OK')
        // reject(123)
      },time)
    })
  }
  let start = async function() {
    try {
      console.log('start')
      let rs = await sleep(3000)
      console.log('end: '+rs)  // end: OK
    } catch(err) {
      console.log(err);
    }
  }
  start()*/

  let sleep = function(time) {
    return new Promise((resolve, reject) => {
      console.log('执行...')
      setTimeout(() => {
        resolve('OK')
      },time)
    })
  }
  let haha = [19,2,3,4,5,6,7,8,9,11]
  let start = async function() {
    try {
      console.log('start')
      /*for (let i=0;i<10;i++) {
        await sleep(1000)
        console.log(`这是第${i}次等待...`);
      }*/
      for (let i of haha) {
        await sleep(1000)
        console.log(`这是第${i}次等待...`);
      }
      console.log('end')
    } catch(err) {
      console.log(err);
    }
  }
  // start()

}
</script>

<style scoped>

</style>
