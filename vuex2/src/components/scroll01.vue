<template>
	<div class="foods-wrapper" ref="foodsWrapper">
	   <ul class="ul" style="border: 1px solid #ccc;height: 220px;width: 220px;overflow: auto;position: absolute;top: 0;left: 0;">     
		    <li style="padding: 20px;" v-for="item,index in goods">{{item.total}}</li>
		 </ul>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import axios from 'axios'
	import queryString from 'queryString'
	let HTTP = axios.create({
		baseURL : 'http://jk.dianpass.com/MemberShipService.asmx',
	    responseType : '',
	    transformRequest : [function(data){
	      return queryString.stringify(data);
	    }],
	    transformResponse: [function (data) {
		    data = data.substring(data.indexOf('{'));
		    data = data.substring(0,data.lastIndexOf('}')+1);
		    data = JSON.parse(data);
		    return data
		}]
	});
	export default{
		data(){
			return {
				totalpage : '',
				pageno : '',
				goods : '',
				indexplus : 1,
	            indexpage : 5,
	            scroll : '',
	            options: {
		          pullDownRefresh: {
		            threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
		            stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
		          },
		          pullUpLoad: {
		            threshold: -20 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
		          },
		//          pullDownRefresh: false, //关闭下拉
		//          pullUpLoad: false, // 关闭上拉
		          click: true,
		          probeType: 3,
		          startY: 0,
		          scrollbar: false
		        }
			}
		},
		created(){
			this.$nextTick(() => {
			    this._initScroll()
			    this.setData()
			})
		},
		methods : {
			_initScroll () {
			  this.foodsScroll = new BScroll(this.$refs.foodsWrapper, this.options)
			  // 下拉
			  this.foodsScroll.on('pullingDown', () => {
			    // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
			    //this.goods = [] // 重置数据
			    //this.pageno = this.indexplus; // 重置分页数
			    this.setData() //获取数据方法   
			  })
			  // 上拉
			  this.foodsScroll.on('pullingUp', () => {
			    if (this.indexplus < this.totalpage) { //判断是否继续上拉刷新
			      this.setData() //获取数据方法   
			    }
			  })
			},
			pullingDownUp () {
			  this.indexplus++;
			  this.foodsScroll.finishPullDown()
			  this.foodsScroll.finishPullUp()
			  this.foodsScroll.refresh()
			},
			setData () {
			 HTTP.post("/Domethid",{str:JSON.stringify({
				methid:"M_CARD_B",
				id:'1104',
				dmno:'101',
				accid:'201708101640436256',
				type:'money',
				pageno : this.indexplus.toString(),
				pagesize : this.indexpage.toString()
			})})
			.then(res=>{
				var data = res.data;
				//console.log(data)
				this.totalpage = data.result.totalpage;
				this.goods = data.result.memberzj_info.concat(this.goods);
				this.$nextTick(() => {       
			      this.pullingDownUp()
			    })
			})
			 
			}
			
		}
	}
</script>

<style>
</style>