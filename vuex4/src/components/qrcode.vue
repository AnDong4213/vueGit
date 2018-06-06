<template>
	<div>
		<h1>万港</h1>
		<qrcode :value="qrcodeUrl" v-if="qrcodeUrl" :options="{size: 180}"></qrcode>
		<VueBarcode :value="barcodenum" format="CODE128" height="120"></VueBarcode>
	</div>
</template>

<script>
	import Qrcode from '@xkeshi/vue-qrcode'
	import VueBarcode from 'vue-barcode'
	export default{
		components: {
		  qrcode: Qrcode,VueBarcode
		},
		data(){
    		return {
    		    qrcodeUrl : '',
    		    barcodenum : ''
    		}
    	},
    	created(){
    		this.qrcodeUrl = 'http.alibaba.com78678496749876';
    		this.barcodenum = 'http.alibaba.com78678496749876';
    	}
	}
</script>

<style scoped>
	
</style>