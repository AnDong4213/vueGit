 <template>
    <div class="address_page">
    	<h4 class="headh4">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" @click="$router.go(-1)">
                <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
            </svg>
            <p>添加新地址</p>
            <span @click="savedz">保存</span>
  		</h4>
  		<div class="fillinfo">
  			<p>
  				<input type="text" name="xm" placeholder="收货人" v-model="name">
  			</p>
  			<p>
  				<input type="text" name="phone" placeholder="联系电话" v-model="phone">
  			</p>
  			<p class="pstyle">
  				<input type="text" name="location" placeholder="所在地区" readonly="readonly" @click="selocation" v-model="location">
  				<svg class="address_right">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
          </svg>
  			</p>
  			<p>
  				<textarea name="" placeholder="详细地址" v-model="dzdetail" class="dzdetail"></textarea>
  			</p>
  		</div>
  		<div class="setdefault">
  			<i>设为默认地址</i>
        <div class="boxadd">
    			<input type="checkbox" name="moren" v-model="moren" @change="setdefault(moren)" />
    			<span><em>√</em></span>
    		</div>
  		</div>
      <div class="masklayer" ref="showmask">
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" @click="hidemask" v-if="svgarea">
              <polyline points="12,18 4,9 12,0" style="fill:none;stroke:#666;stroke-width:2"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" @click="returncity" v-if="svgcity">
              <polyline points="12,18 4,9 12,0" style="fill:none;stroke:#666;stroke-width:2"/>
          </svg>
          <span>选择地区</span>
        </p>
        <ul class="masklayerli" ref="showmaskli">
          <li v-for="(s,index) in area" :key="index" @click="selectarea(s,index)" v-if="areashow">
            {{s}}
            <img src="../assets/images/arrow.png" alt="">
          </li>
          <li v-for="(c,index) in city" :key="index" @click="selectcity(c,index)" v-if="cityshow">
            {{c}}
            <img src="../assets/images/arrow.png" alt="">
          </li>
          <li v-for="(d,index) in district" :key="index" @click="selectdistrict(d)" v-if="districtshow">
            {{d}}
            <img src="../assets/images/arrow.png" alt="">
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import {province,city,district} from '@/config/area'
import Vue from 'vue'
export default {
  data() {
    return {
      name: '',phone: '',location: '',dzdetail: '',moren: '',area : province,city : '',district : '',areaindex : '',areashow : true,cityshow : false,districtshow : false,svgarea : true,svgcity : false,region : '',dzarray : [],dzobj : {},addressitem : ''
    }
  },
  created() {
    //console.log(window.screen.height)
  },
  methods : {
    setdefault(de){
      this.moren = de;
    },
    verifyAddress(){
      this.name = this.name.replace(/\s+/g,'');
      this.phone = this.phone.replace(/\s+/g,'');
      this.location = this.location.replace(/\s+/g,'');
      this.dzdetail = this.dzdetail.replace(/\s+/g,'');
      this.addressitem = this.location+this.dzdetail;
      if(this.name == ''){
        alert('请输入收货人')
        return false;
      }
      if(!/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(this.phone)){
        alert('手机号码格式不正确，请重新输入')
        return false;
      }
      if(this.location == ''){
        alert('请选择所在地区')
        return false;
      }
      if(this.dzdetail == ''){
        alert('请输入详细地址')
        return false;
      }
      Vue.set(this.dzobj,'checked',this.moren);
      Vue.set(this.dzobj,'name',this.name);
      Vue.set(this.dzobj,'phone',this.phone);
      Vue.set(this.dzobj,'addressitem',this.addressitem);
    },
    savedz(){
      if(this.$local.getStore('addresswg')){
        let returndz = JSON.parse(this.$local.getStore('addresswg'));
        this.verifyAddress();
        if(this.dzobj.name){
          if(this.moren){
            returndz.unshift(this.dzobj);
          }else{
            returndz.push(this.dzobj);
          }
          this.$local.setStore('addresswg',returndz)
          this.$router.go(-1);
        }
      }else{
        this.verifyAddress();
        if(this.dzobj.name){
          this.dzarray.push(this.dzobj)
          this.$local.setStore('addresswg',this.dzarray)
          this.$router.go(-1);
        }
      }
    },
    selocation(){
      let ref = this.$refs.showmask;
      let refli = this.$refs.showmaskli;
      ref.style.transform = 'translateY(0)';
      refli.style.height = window.screen.height-34+'px';
    },
    hidemask(){
      let ref = this.$refs.showmask;
      ref.style.transform = 'translateY(100%)';
      this.cityshow = false;
      this.districtshow = false;
      this.areashow = true;
    },
    selectarea(s,index){
      this.city = city[index];
      this.areashow = false;
      this.cityshow = true;
      this.areaindex = index;
      this.region = s;
    },
    selectcity(c,index){
      this.district = district[this.areaindex][index];
      this.cityshow = false;
      this.districtshow = true;
      this.svgarea = false;
      this.svgcity = true;
      this.region = this.region + ' ' + c;
    },
    selectdistrict(d){
      this.region = this.region + ' ' + d;
      this.location = this.region;
      this.districtshow = false;
      this.areashow = true;
      let ref = this.$refs.showmask;
      ref.style.transform = 'translateY(100%)';
    },
    returncity(){
      this.cityshow = true;
      this.districtshow = false;
      this.svgarea = true;
      this.svgcity = false;
      this.region = province[this.areaindex];
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/address';
.setdefault {
    margin-top: 0.1rem;
    background-color: #fff;
    font-size: 0.12rem;
    padding: 0.1rem;
}
.boxadd{
		display: inline-block;
		width: 16px;
		height: 16px;
		position: relative;
		background: #fff;
		vertical-align: middle;
		border-radius: 2px;
		border: 1px solid #ccc;
    float: right;
    top: 1px;
	}
	.boxadd input{
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		width: 16px;
		height: 16px;
		z-index: 100;
	}
	.boxadd span{
	  color:#fff;
		font-size:12px;
		display: block;
		width: 14px;
		height: 14px;
		border-radius: 2px;
		margin:-1px 0 0 -1px;
		background: #eb6100;
	}
	.boxadd span em{
		position:absolute;
		left:3px;
	}
	.boxadd input[type="checkbox"] + span{
		opacity: 0;
	}
	.boxadd input[type="checkbox"]:checked + span{
		opacity: 1;
		border: 1px solid #eb6100;
		border-radius: 2px;
	}
.fillinfo {
    margin-top: 0.42rem;
    input {
        width: 100%;
        height: 0.4rem;
        padding: 0 0.1rem;
        margin-bottom: 1px;
    }
    .pstyle {
        position: relative;
    }
    .dzdetail {
        height: 0.6rem;
        width: 100%;
        border: 0 none;
        resize: none;
        -webkit-tap-highlight-color: transparent;
        outline: 0 none;
        padding: 0.1rem;
        line-height: 140%;
    }
    .address_right {
        width: 0.14rem;
        height: 0.14rem;
        fill: #999;
        position: absolute;
        right: 0.1rem;
        top: 0.14rem;
    }
}
.headh4 {
    @include addresshead(#eb6100,#fff,0.42rem);
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    span {
        display: inline-block;
        height: 100%;
        float: right;
        line-height: 0.42rem;
        margin-right: 0.06rem;
        font-weight: $fwn;
    }
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
.address_page {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #eee;
    z-index: 204;
}
.masklayer{
  position: fixed;
	bottom: 0;
	top: 0;
	left: 0;
	right: 0;
	background-color:#fff;
	z-index: 299;
	width: 100%;
	transition: all 0.3s ease;
	-webkit-transform: all 0.3s ease;
	transform: translateY(100%);
	-webkit-transform: translateY(100%);
  p{
    background-color: #eee;
    height: .34rem;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    svg{
      width: 0.14rem;
      height: 0.22rem;
      display: inline-block;
      position: relative;
      top: .08rem;
    }
  }
  .masklayerli{
    margin-top: .34rem;
      overflow: auto;
    li{
      padding: 0 .1rem;
      height: .4rem;
      line-height: .4rem;
      border-bottom: 1px solid #eee;
      font-size: .12rem;
      img{
        display: inline-block;
        width: .06rem;
        height: .1rem;
        float: right;
        position: relative;
        top: .15rem;
      }
    }
  }
}
</style>
