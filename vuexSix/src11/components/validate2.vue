<template>
    <div class="columns is-multiline">
	    <form @submit.prevent="validateBeforeSubmit">
		    <div class="column is-12">
		        <label class="label">Phone</label>
		        <p class="control has-icon has-icon-left">
		            <input name="phone" v-validate="'required|telnumber'" :class="{'input': true, 'is-danger': errors.has('phone') }" type="text" placeholder="Phone">
		            <!--<i v-show="errors.has('phone')" class="fa fa-warning"></i>-->
		            <span v-show="errors.has('phone')" class="help is-danger has-text-right">{{ errors.first('phone') }}</span>
		        </p>
		    </div>
		    <button type="submit">提交</button>
		</form>    
	</div>
</template>

<script>
	import '@/assets/validate.js'
	
export default {
  data() {
  	return {
  		email: '',
	    phone: '',
	    locale: 'cn'
  	}
  },
  computed: {
  	
  },
  created() {
  	
  },
  methods: {
  	validateBeforeSubmit() {
  		this.$validator.validateAll().then((result) => {
	        if(result) {
	            console.log(88)
	        }
        })
  	}
  }
}
</script>
<style scoped>
	.is-multiline{
		padding: 20px;
	}
	.is-danger{color: red;}
</style>

