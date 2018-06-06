<template>
	<div>
		<div class="layui-form-item">
		    <label class="layui-form-label">账户</label>
		    <div class="layui-block">
		        <input v-model="name" v-validate="'required|min:3|alpha'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" name="name" class="layui-input" placeholder="账户">
		        <span v-show="errors.has('name')" class="text-style" v-cloak> {{errors.first('name')}} </span>
		    </div>
		</div>
		
		<div class="column is-12">
	        <label class="label">Email</label>
	        <p class="control has-icon has-icon-right">
	            <input name="phone" v-model="phone" v-validate="'required|phone'" :class="{'input': true, 'is-danger': errors.has('phone') }" type="text" placeholder="Email">
	            <i v-show="errors.has('phone')" class="fa fa-warning"></i>
	            <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
	        </p>
	    </div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return {
				name : '',
				phone : ''
			}
		}
	}
</script>

<style>
	
</style>