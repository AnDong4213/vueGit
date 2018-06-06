<template>
	<div class="wrapper" ref="wrapper" style="position: relative;">
		<ul class="content" style="border: 1px solid #ccc;height: 220px;overflow: auto;position: absolute;top: 0;left: 0;">
			<li style="padding: 20px;" v-for="item,index in scrolldata" :key="index">
				{{item.total}}
			</li>
		</ul>
		<div class="loading-wrapper">
			
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll' 
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
				scrolldata : '',
				indexplus : 1,
	            indexpage : 5,
	            scroll : ''
			}
		},
		created(){
			/*this.$nextTick(()=>{
				let wrapper = document.querySelector('.wrapper') 
				let scroll = new BScroll(wrapper, {});
				console.log(this.$refs.wrapper)
			});
			axios.post('http://easy-mock.com/mock/59dc26741de3d46fa94c8025/example/scroll')
			.then((res)=>{
				var data = res.data;
				this.scrolldata = data;
			})*/
			//this.loadData();
		},
		methods : {
			loadData(){
				HTTP.post("/Domethid1",{str:JSON.stringify({
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
					//this.data = res.data.concat(this.data)
					this.scrolldata = data.result.memberzj_info.concat(this.scrolldata);
					this.scroll = new Bscroll(this.$refs.wrapper, {});
					//console.log(this.scrolldata)
					this.$nextTick(()=>{
						if(!this.scroll){
							this.scroll = new Bscroll(this.$refs.wrapper, {});
							this.scroll.on('touchend',(pos)=>{
								if(pos.y>30){
									alert(6)
								}
							})
						}else{
							this.scroll.refresh()
						}
					})
					
				})
			}
		}
	}
</script>

<style>
</style>