<template>
	<div class="keke">
		<h1 @click="chooseLanguage">chooseLanguage</h1>
		<h1>{{$t('message.about')}}</h1>
	</div>
</template>

<script>
	
	export default{
		components: {
		  
		},
		data() {
    		return {
    		    
    		}
    	},
    	created() {
    		console.log(this.$i18n.t('message.about'))
    	},
    	methods: {
    		chooseLanguage() {
    			this.$i18n.locale == 'en' ? this.$i18n.locale = 'zh' : this.$i18n.locale = 'en'
    		}
    		
    	}
	}
</script>

<style scoped>
	.keke{color: lightpink;}
	h1{cursor: pointer;}
</style>