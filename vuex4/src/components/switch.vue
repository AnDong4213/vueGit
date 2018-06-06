<template>
<div>
	
<div class="group">
    <switch-option class="item" name="滚动条" :value="scrollbar" @update1:value="updateScrollbar"></switch-option>
    <switch-option v-if="scrollbar" name="fade" :value="scrollbarFade" @update1:value="updateScrollbarFade"></switch-option>
 </div>
 
 <div class="group">
	<switch-option class="item" name="上拉加载" :value="pullUpLoad" @update1:value="updatePullUpLoad"></switch-option>
	<input-option v-if="pullUpLoad" class="item" name="threshold" :value="pullUpLoadThreshold" @update1:value="updatePullUpLoadThreshold"></input-option>
	<input-option v-if="pullUpLoad" class="item" name="moreTxt" :value="pullUpLoadMoreTxt" @update1:value="updatePullUpLoadMoreTxt"></input-option>
    <input-option v-if="pullUpLoad" class="item last" name="noMoreTxt" :value="pullUpLoadNoMoreTxt" @update1:value="updatePullUpLoadNoMoreTxt"></input-option>
</div>

</div>	
</template>

<script>
	import switchOption from '@/components/switch-option'
	import inputOption from '@/components/input-option'
	
	export default{
		components: {
		  
		},
		data() {
    		return {
    		    scrollbar: true,
                scrollbarFade: true,
                pullUpLoad: true,
                pullUpLoadThreshold: 0,
                pullUpLoadMoreTxt: '加载更多',
                pullUpLoadNoMoreTxt: '没有更多数据了'
    		}
    	},
    	created() {
    		
    	},
    	methods: {
    		updateScrollbar(val) {
		        this.scrollbar = val
		    },
		      updateScrollbarFade(val) {
		        this.scrollbarFade = val
		    },
		    updatePullUpLoad(val) {
		        this.pullUpLoad = val
		    },
		    updatePullUpLoadThreshold(val) {
		        this.pullUpLoadThreshold = val
		    },
		    updatePullUpLoadMoreTxt(val) {
		        this.pullUpLoadMoreTxt = val
		    },
		    updatePullUpLoadNoMoreTxt(val) {
		        this.pullUpLoadNoMoreTxt = val
		    }
    	},
    	components: {switchOption, inputOption}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	
</style>