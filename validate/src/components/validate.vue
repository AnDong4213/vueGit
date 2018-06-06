<template>
<div class="columns is-rtl is-multiline">
    <button @click="changeLocale" type="button" class="button is-primary">Change Locale To {{ nextLocale }}</button>
    <div class="column is-12">
        <label class="label">邮箱啦 (Email)</label>
        <p class="control has-icon has-icon-left">
            <input name="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
            <i v-show="errors.has('email')" class="fa fa-warning"></i>
            <span v-show="errors.has('email')" class="help is-danger has-text-right">{{ errors.first('email') }}</span>
        </p>
    </div>
    <div class="column is-12">
        <label class="label">手机啦... (Phone)</label>
        <p class="control has-icon has-icon-left">
            <input name="phone" v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('phone') }" type="text" placeholder="Phone">
            <i v-show="errors.has('phone')" class="fa fa-warning"></i>
            <span v-show="errors.has('phone')" class="help is-danger has-text-right">{{ errors.first('phone') }}</span>
        </p>
    </div>
</div>
</template>

<script>
	import Vue from 'vue'
	import VeeValidate, {Validator} from 'vee-validate'
	import zh from 'vee-validate/dist/locale/zh_CN'
	Vue.use(VeeValidate);
	export default {
	  name: 'locale-example',
	  data: () => ({
	    email: '',
	    phone: '',
	    locale: 'en',
	  }),
	  computed: {
	    nextLocale() {
	      return this.locale === 'en' ? 'zh' : 'English';
	    }
	  },
	  methods: {
	    changeLocale() {
	      this.locale = this.$validator.locale === 'zh' ? 'en' : 'zh';
	      this.$validator.localize(this.locale);
	    }
	  },
	  created() {
	    this.$validator.localize('zh', {
	      messages: zh.messages,
	      attributes: {
	        email: '邮箱--',
	        phone: '电话--'
	      }
	    });
	
	    // start with english locale.
	    this.$validator.localize('en');
	  }
	}
</script>

<style>
</style>