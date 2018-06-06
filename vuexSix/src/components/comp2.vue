<template>
    <div class="ww" ref="wrapper">
    	<h1>更新</h1>
		<slot>
			<strong>更好</strong>
		</slot>
		<slot name="ppp"></slot>
		<hr />
		<ul>
			<li v-for="(item,index) in data" :key="index">{{item.title}}</li>
		</ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
const COMPONENT_NAME = 'scroll'
const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'
export default {
  props: {
	data: {
		type: Array,
		default: function () {
			return []
		}
	},
	probeType: {
		type: Number,
		default: 1
	},
	click: {
		type: Boolean,
		default: true
	},
	listenScroll: {
        type: Boolean,
        default: false
	},
	listenBeforeScroll: {
		type: Boolean,
		default: false
	},
	direction: {
		type: String,
		default: DIRECTION_V
	},
	scrollbar: {
		type: null,
		default: false
	},
	pullDownRefresh: {
		type: null,
		default: false
	},
	pullUpLoad: {
		type: null,
		default: false
	},
	startY: {
		type: Number,
		default: 0
	},
	refreshDelay: {
		type: Number,
		default: 20
	},
	freeScroll: {
		type: Boolean,
		default: false
	},
	mouseWheel: {
		type: Boolean,
		default: false
	}
  },
  data() {
	return {
		beforePullDown: true,
        isRebounding: false,
        isPullingDown: false,
        isPullUpLoad: false,
        pullUpDirty: true,
        pullDownStyle: '',
        bubbleY: 0
	}
  },
  computed: {
  	
  },
  created() {
  	
  },
  mounted() {
	this.$nextTick(() => {
		this.initScroll()
	})
  },
  methods : {
	initScroll() {
		if (!this.$refs.wrapper) {
          return
        }
		let options = {
          probeType: this.probeType,
          click: this.click,
          scrollY: this.freeScroll || this.direction === DIRECTION_V,
          scrollX: this.freeScroll || this.direction === DIRECTION_H,
          scrollbar: this.scrollbar,
          pullDownRefresh: this.pullDownRefresh,
          pullUpLoad: this.pullUpLoad,
          startY: this.startY,
          freeScroll: this.freeScroll,
          mouseWheel: this.mouseWheel
        }
		this.scroll = new BScroll(this.$refs.wrapper, options)
	},
  	haha() {
      console.log('haha')
	}
  }
}
</script>

<style scoped>
	.ww{color:red;}
	h1{display:inline-block;padding:0;margin:0;}
</style>
