    <!--errors是组件内置的一个数据模型，用来存储和处理错误信息，可以调用以下方法：
    
    errors.first('field') - 获取关于当前field的第一个错误信息
    collect('field') - 获取关于当前field的所有错误信息(list)
    has('field') - 当前filed是否有错误(true/false)
    all() - 当前表单所有错误(list)
    any() - 当前表单是否有任何错误(true/false)
    add(String field, String msg) - 添加错误
    clear() - 清除错误
    count() - 错误数量
    remove(String field) - 清除指定filed的所有错误-->
    
    <!--      四、内置的校验规则
    after{target} - 比target要大的一个合法日期，格式(DD/MM/YYYY)
    alpha - 只包含英文字符
    alpha_dash - 可以包含英文、数字、下划线、破折号
    alpha_num - 可以包含英文和数字
    before:{target} - 和after相反
    between:{min},{max} - 在min和max之间的数字
    confirmed:{target} - 必须和target一样
    date_between:{min,max} - 日期在min和max之间
    date_format:{format} - 合法的format格式化日期
    decimal:{decimals?} - 数字，而且是decimals进制
    digits:{length} - 长度为length的数字
    dimensions:{width},{height} - 符合宽高规定的图片
    email - 不解释
    ext:[extensions] - 后缀名
    image - 图片
    in:[list] - 包含在数组list内的值
    ip - ipv4地址
    max:{length} - 最大长度为length的字符
    mimes:[list] - 文件类型
    min - max相反
    mot_in - in相反
    numeric - 只允许数字
    regex:{pattern} - 值必须符合正则pattern
    required - 不解释
    size:{kb} - 文件大小不超过
    url:{domain?} - (指定域名的)url   data-vv-delay="100"      -->

<template>
    <div class="columns is-multiline">
    	
	    <div class="column is-12">
	        <label class="label">Email (0.1s delay)</label>
	        <p class="control has-icon has-icon-right">
	            <input name="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
	            <i v-show="errors.has('email')" class="fa fa-warning"></i>
	            <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
	        </p>
	    </div>
	    
	    <div class="column is-12">
	        <label class="label">Name (0.5s delay)</label>
	        <p class="control has-icon has-icon-right">
	            <input name="name" v-validate="'required|alpha|max:4'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Name">
	            <i v-show="errors.has('name')" class="fa fa-warning"></i>
	            <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
	        </p>
	    </div>
	    
	    <!--<div class="column is-12">
	        <label class="label">Phone</label>
	        <p class="control has-icon has-icon-left">
	            <input name="phone" v-validate="'required|numeric|digits:8'" :class="{'input': true, 'is-danger': errors.has('phone') }" type="text" placeholder="Phone">
	            <i v-show="errors.has('phone')" class="fa fa-warning"></i>
	            <span v-show="errors.has('phone')" class="help is-danger has-text-right">{{ errors.first('phone') }}</span>
	        </p>
	    </div>-->
	    
	    <div class="column is-12">
	        <label class="label">Phone</label>
	        <p class="control has-icon has-icon-left">
	            <input name="phone" v-validate="'required|telnumber'" :class="{'input': true, 'is-danger': errors.has('phone') }" type="text" placeholder="Phone">
	            <i v-show="errors.has('phone')" class="fa fa-warning"></i>
	            <span v-show="errors.has('phone')" class="help is-danger has-text-right">{{ errors.first('phone') }}</span>
	        </p>
	    </div>
	    
	    <button @click="changeLocale">改变语言</button>
	</div>
</template>

<script>
	import Vue from 'vue'
	import VeeValidate, {Validator} from 'vee-validate'
	/*Vue.use(VeeValidate,{
		delay: 100,
		locale: 'cn',
		dictionary: {
			en: {
				messages: {
					numeric: () => 'english-必须是数字',
        		    required: ()=> "english-不能为空",
        		    email: 'english-邮箱格式不正确...'
				},
				attributes: {
					 email : 'jhi'      // 只有messages里的email注释掉才能起作用...
				}
			},
			cn: {
				messages: {
					numeric: () => '必须是数字',
        		    required: ()=> "不能为空",
        		    email: '邮箱格式不正确...'
				},
				attributes: {
					 email : ' '
				}
			}
		},
		strict: true     //  代表没有设置规则的表单不进行校验
	})*/
	Vue.use(VeeValidate)
	import zh from 'vee-validate/dist/locale/zh_CN';
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
  	
  	
  	
  	/*this.$validator.localize('cn', {
      messages: zh.messages,
      attributes: {
        email: '安乐邮件',
        phone: '安乐号码'
      }
    });
    this.$validator.localize('en', {
      attributes: {
        email: '安乐--邮件',
        phone: '安乐--号码'
      }
    });*/

    // start with english locale.
    // this.$validator.localize('en');
    
    this.$validator.extend('telnumber', {
	  // getMessage: field => 'The ' + field + ' value is not truthy.',
	  getMessage: () => 'zhaoanle...',
	  validate: value => {
	    return /^((13|14|15|16|17|18)[0-9]{1}\d{8})$/.test(value)
	  }
	});
    this.$validator.localize('cn', dictionary.cn);
  },
  methods: {
  	changeLocale() {
  		this.locale = this.$validator.locale === 'cn' ? 'en' : 'cn';
        this.$validator.localize(this.locale, dictionary[this.locale]);
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

