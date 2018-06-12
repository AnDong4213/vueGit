import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
Vue.use(VeeValidate)
import zh from 'vee-validate/dist/locale/zh_CN'


const dictionary = {
	en: {
		messages: {
			numeric: () => 'english-必须是数字',
		    required: ()=> "english-不能为空",
		    email: 'english-邮箱格式不正确...'
		},
		attributes: {
			email : ''
		}
	},
	cn: {
		messages: {
			numeric: () => '必须是数字',
		    required: ()=> "不能为空",
		    email: '邮箱格式不正确...',
		    telnumber: '手机号码格式不正确'
		},
		attributes: {
			 email : ' ',
			 telnumber: ''
		}
	}
}


Validator.extend('telnumber', {
  // getMessage: field => 'The ' + field + ' value is not truthy.',
  getMessage: () => 'zhaoanle...',
  validate: value => {
    return /^((13|14|15|16|17|18)[0-9]{1}\d{8})$/.test(value)
  }
});
Validator.localize('cn', dictionary.cn);




