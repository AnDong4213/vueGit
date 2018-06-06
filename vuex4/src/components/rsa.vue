<template>
    <div class="haha">
    	hehe
    </div>
</template>

<script>
	
	export default {
	  computed : {
	  	
	  },
	  created(){
	  	let jse = new this.$$jsEncrypt()
	  	jse.setPublicKey('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDMPst4TgYyvpZdSRtITRVNIWgz4s1eOXUHIk8/Xo3WJpw8NrjbsNvsfCSOyXS+GhG0+LsotVDC+IdNQgm/CxUC/SCbPp/tVpzzWLDnYSmx8z6URvVNZBC5FxVYvrAsKAZbNGHKr7vrIvFh57PqyrrapPsgj6+AhbfVQC8yYAFnqQIDAQAB')
	  	let encrypted = jse.encrypt('赵安东')
	  	console.log(encrypted)
	  	
	  	// 设置密钥
/*jse.setPrivateKey(`MIICXgIBAAKBgQC8ygMKjJLSUpnfXqt8lRSAdDxAHWKi9GbTFkCbAjkRCR6VUakxxXLXHQUtPCizKcvNpuYqZ5bO8LEgpY7SL3JEdEI9OuMnZ6ToeHPfcHeS+EgN0oYmdQ49RB5wZkcBEFk80OBEAM6VhnE0IuHGkU5ko9oPHq3boEQ3Ej6r3T+UhQIDAQABAoGBAIO8JwEedHlE4FBovBsT4Bl+gmhu2NxC1NlpBq3jkDSd+3RQZlLvp6IJgwo8l13lxWv8kVF3tVkzxTW1sQJjz0RYShH8vXLl94gf6mFkJbeOPP6uA0mGDG81yINwKUpE0RM6ZM9yKEeVdK3u67TkEBcC6Td5KBl8Yof3q7qxiOWhAkEA4BXEtpnfhgm37s1VjDxdIHTtWL1PihMT+SCOqp+Vv27ABVrxtDW/w2R3ZzR5ezROI2v1DVhj5wvsxPGXx6OpSQJBANetVvazS/5SQNvb+Cmjw9Rt5NilyxfX5IsSswaIojbwhZY2FVZy
AlFH9K/YS2FYFyU7iIqN6IIkOxXpOcj/bV0CQQCRYM4MgWuotClmfkSgBJGOew144uj1dUch+2NTgtFOLvXZA5WICs7sXwOwKzUdH2QKSwHitJOr0+q6ItsLpDwxAkBXzvDK+/CCmIZjfMkqWsxN3nf/ZHCtQm5/2Jsem94/M+mPYHGLgltDMGKEfTEjbrPtqrFKh8ATzCBqKUwncybZAkEAmVNW1dftWWoriZZXXMvfFkTDgYvRmytoVEThhnd0J/AOhZiUAs9+kHfGKivlTE209AY6Bw8aRzuTCziSwQhhBQ==`)
// 解密加密过的字符串
let decrypted = jse.decrypt(encrypted)
// 打印结果
console.log(decrypted)*/
	  	
	  },
	  methods : {
	  	
	  }
	  
	}
</script>

<style scoped>
	.haha{color: red;}
</style>
