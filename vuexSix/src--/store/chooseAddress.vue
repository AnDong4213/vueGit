<template>
	<div class="rating_page">
	  <h4 class="headh4">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" @click="$router.go(-1)">
          <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
      </svg>
      <p>选择地址</p>
		</h4>
	  <div class="add_dz" ref="adddz">
	    <p v-if="!returndz">您还没有添加过收货地址哦</p>
	    <ul v-if="returndz">
	      <li class="dzitem" v-for="item in returndz">
					<p><i>{{item.name}}</i><em>{{item.phone}}</em></p>
					<p class="pp">{{item.addressitem}}</p>
					<div class="dzdiv">
						<div class="box">
							<input type="radio" name="xz" :checked="item.checked" />
							<span><em>√</em></span>
							<em>设为默认</em>
						</div>
						<span><i class="iconfont icon-delete02" @click=""></i> 删除</span>
						<!-- <span><i class="iconfont icon-bianji02" @click=""></i> 编辑</span> -->
					</div>
	      </li>
	    </ul>
	  </div>
	  <router-link tag="div" :to='{path:"/submitorder/chooseAddress/addAddress"}' class="address">
	    <img src="../assets/images/add_address.png">
	    <span class="add">新增收货地址</span>
	  </router-link>
	  <transition name="router-slid" mode="out-in">
	    <router-view></router-view>
	  </transition>
	</div>
</template>

<script>
export default {
  data() {
    return {
			returndz : ''
    }
  },
  created() {
		this.returndz = JSON.parse(this.$local.getStore('addresswg'));
		//console.log(this.returndz)
  },
	mounted(){
		this.address();
	},
	watch : {
		$route(){
			this.returndz = JSON.parse(this.$local.getStore('addresswg'));
		}
	},
  methods: {
		address(){
			let adddz = this.$refs.adddz;
      adddz.style.height = window.screen.height-100+'px';
		}
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/address';
.headh4 {
    @include addresshead(#eb6100,#fff,0.42rem);
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    svg {
        width: 0.14rem;
        height: 0.22rem;
        margin-top: 0.12rem;
        margin-left: 0.06rem;
    }
    p {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        width: 50%;
        color: #fff;
        text-align: center;
        font-size: $fs18;
        font-weight: $fwn;
    }
}
.add_dz {
    margin-top: 0.54rem;
		overflow: auto;
    p {
        margin-top: 0.6rem;
        text-align: center;
        color: #999;
    }
		.dzitem{
			.pp{font-size: .12rem;}
			p{
				margin-top: 0.06rem;
				padding: 0 0.1rem;
        text-align: left;
        color: #333;
				em{
					display: inline-block;
					float: right;
				}
			}
		}
}
.dzdiv{
	border-top: 1px solid #eee;
	border-bottom: 6px solid #eee;
	padding: 0.1rem;
	width: 100%;
	font-size: .13rem;
	color: #333;
	margin-top: .1rem;
	span{
		display: inline-block;
		float: right;
		margin-left: .12rem;
		margin-top:.02rem;
	}
}
.address {
    @include addresshead(#fff,#eb6100,0.56rem);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
		border-top: 1px solid #eee;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 204;
    img {
        width: 0.24rem;
    }
    .add {
        font-size: 0.16rem;
        color: #eb6100;
        margin-left: 0.1rem;
    }
}
.rating_page {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 202;
}
.box{
		display: inline-block;
		width: 16px;
		height: 16px;
		position: relative;
		background: #fff;
		vertical-align: middle;
		border-radius: 2px;
		border: 1px solid #ccc;
	}
	.box input{
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		width: 16px;
		height: 16px;
		z-index: 100;
	}
	.box span{
	  color:#fff;
		font-size:12px;
		display: block;
		width: 14px;
		height: 14px;
		border-radius: 2px;
		margin:-1px 0 0 -1px;
		background: #eb6100;
	}
	.box > span > em{
		position:absolute;
		left:2px;
	}
	.box > em{
		width: .6rem;
		display: inline-block;
		position: relative;
		top: -0.15rem;
		left: .2rem;
	}
	.box input[type="radio"] + span{
		opacity: 0;
	}
	.box input[type="radio"]:checked + span{
		opacity: 1;
		border: 1px solid #eb6100;
		border-radius: 2px;
	}
	.box input[type="radio"]:checked ~ em{
		top: -0.17rem !important;
		color: #eb6100;
}
.router-slid-enter-active,
.router-slid-leave-active {
    transition: all 0.3s;
}
.router-slid-enter,
.router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
}
</style>
