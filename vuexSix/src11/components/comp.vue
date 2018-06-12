<template>
    <div class="ww">
    	<h1>更新</h1>
    	<p @click="haha"><i>{{foo}}</i></p>
    </div>
</template>

<script>
export default {
  props : ['foo', 'bar'],
  computed: {
  	hehe() {
  		return this.bar
  	}
  },
  created() {
  	console.log(this.bar)
  },
  methods : {
  	haha(){
  		console.log('00')
  		this.$emit("update:both", this.hehe)
  	}
  }
}
</script>
