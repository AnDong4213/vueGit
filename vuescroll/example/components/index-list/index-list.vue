<template>
  <div class="index-list">
  	
    <scroll ref="indexList" :listen-scroll="listenScroll" :probe-type="probeType" :data="data" :click="true" @scroll="scroll">
      <div class="index-list-content" ref="content">
        <div style="color: deeppink;" class="index-list-title" v-if="title" ref="title" @click="titleClick">{{title}}</div>
        <ul ref="groups">
          <li v-for="group in data" ref="listGroup">
            <h2 style="color: red;" class="index-list-anchor">{{group.name}}</h2>
            <ul>
              <li class="index-list-item border-bottom-1px" v-for="item in group.items" @touchstart="addActiveCls" @touchend="removeActiveCls" @click="selectItem(item)">
                {{item.name}}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </scroll>
    
    <div class="index-list-nav" @touchstart="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchMove">
      <ul>
        <li v-for="(item, index) in shortcutList" :data-index="index" :class="{active: currentIndex === index}">{{item}}</li>
      </ul>
    </div>
    
    <div style="color: yellowgreen;" class="index-list-fixed" ref="fixed" v-show="fixedTitle">
      {{fixedTitle}}
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
  import {getData, addClass, removeClass} from '../../common/js/dom'

  import Scroll from '../scroll/scroll.vue'

  const COMPONENT_NAME = 'index-list'
  const EVENT_SELECT = 'select'
  const EVENT_TITLE_CLICK = 'title-click'
  const ACTIVE_CLS = 'index-list-item_active'

  const TITLE_HEIGHT = 50
  const SUBTITLE_HEIGHT = 40
  const ANCHOR_HEIGHT = window.innerHeight <= 480 ? 17 : 18

  export default {
    name: COMPONENT_NAME,
    props: {
      title: {
        type: String,
        default: ''
      },
      data: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        currentIndex: 0,
        scrollY: -1,
        diff: -1
      }
    },
    created() {
      this.probeType = 3
      this.listenScroll = true
      this.listHeight = []
      this.touch = {}
      /* let delta = (190 - 20) / 17 | 0
      console.log(delta) */
      // 取余赋值运算符 (%=)   result %= expression    使用 %= 运算符与使用下面的语句是等效的： result = result % expression
      // console.log(this.shortcutList)
      console.log(this.data)
    },
    mounted() {
      setTimeout(() => {
        this._calculateHeight()
      }, 20)
    },
    computed: {
      fixedTitle() {
        if (this.scrollY > -TITLE_HEIGHT) {   //  50
          return ''
        }
        return this.data[this.currentIndex] ? this.data[this.currentIndex].name : ''
      },
      shortcutList() {
        return this.data.map((group) => {
          return group.name.substr(0, 1)
        })
      }
    },
    methods: {
      refresh() {
        this.$refs.indexList.refresh()
      },
      selectItem(item) {
        this.$emit(EVENT_SELECT, item)  // select
      },
      scroll(pos) {
        this.scrollY = pos.y
        // console.log(this.scrollY)
      },
      titleClick() {
        this.$emit(EVENT_TITLE_CLICK, this.title)   // title-click
      },
      onShortcutTouchStart(e) {
      	/* console.log(e.currentTarget)
      	console.log(e.target) */
        let anchorIndex = getData(e.target, 'index')
        
        // console.log(anchorIndex)
        let firstTouch = e.touches[0]
        this.touch.y1 = firstTouch.pageY
        this.touch.anchorIndex = anchorIndex

        this._scrollTo(anchorIndex)
      },
      onShortcutTouchMove(e) {
        let firstTouch = e.touches[0]
        this.touch.y2 = firstTouch.pageY
        let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0      
        /* window.innerHeight <= 480 ? 17 : 18 */
        // console.log(delta)
        let anchorIndex = parseInt(this.touch.anchorIndex) + delta
				// console.log(anchorIndex)
        this._scrollTo(anchorIndex)
      },
      addActiveCls(e) {
      	/* console.log(e)
      	console.log(e.currentTarget) */
        addClass(e.currentTarget, ACTIVE_CLS)
      },
      removeActiveCls(e) {
      	// console.log(e)
        removeClass(e.currentTarget, ACTIVE_CLS)   //  index-list-item_active
      },
      _calculateHeight() {
        const list = this.$refs.listGroup
        // console.log(list)
        if (!list) {
          return
        }
        this.listHeight = []
        let height = TITLE_HEIGHT   //  50
        this.listHeight.push(height)
        for (let i = 0; i < list.length; i++) {
          let item = list[i]
          // console.log(item.clientHeight)
          height += item.clientHeight
          this.listHeight.push(height)
        }
        // console.log(this.listHeight)
      },
      _scrollTo(index) {
        if (!index && index !== 0) {
          return
        }
        if (index < 0) {
          index = 0
        } else if (index > this.listHeight.length - 2) {
          index = this.listHeight.length - 2
        }
        this.$refs.indexList.scrollToElement(this.$refs.listGroup[index], 100)
        this.scrollY = this.$refs.indexList.scroll.y
        // console.log(this.$refs.indexList)
      }
    },
    watch: {
      data() {
        setTimeout(() => {
          this._calculateHeight()
        }, 20)
      },
      diff(newVal) {
      	// console.log(newVal)
        let fixedTop = (newVal > 0 && newVal < SUBTITLE_HEIGHT) ? newVal - SUBTITLE_HEIGHT : 0   //  40
        // console.log(fixedTop)
        if (this.fixedTop === fixedTop) {
          return
        }
        this.fixedTop = fixedTop
        this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0)`
      },
      scrollY(newY) {
        const listHeight = this.listHeight
        // console.log(newY)
        // console.log(listHeight)
        // 当滚动到顶部，newY>0
        if (newY > -TITLE_HEIGHT) {  //  50
          this.currentIndex = 0
          return
        }
        // 在中间部分滚动       // (10) [50, 206, 362, 568, 674, 880, 1086, 1242, 1398, 2104]
        for (let i = 0; i < listHeight.length - 1; i++) {
          let height1 = listHeight[i]
          let height2 = listHeight[i + 1]
          if (-newY >= height1 && -newY < height2) {
            this.currentIndex = i
            this.diff = height2 + newY
            // console.log(this.diff)
            return
          }
        }
        // 当滚动到底部，且-newY大于最后一个元素的上限
        this.currentIndex = listHeight.length - 2
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"
  @import "../../common/stylus/mixin.styl"
  @import "../../common/stylus/base.styl"

  .index-list
    position: relative
    width: 100%
    height: 100%
    .list-wrapper
      position: absolute
      left: 0
      top: 0
      right: 0
      bottom: 0
      overflow: hidden
      background: #fff
      .index-list-content
        background: $color-white
        border-radius: 2px
        .index-list-title
          padding: 14px 16px
          font-size: $fontsize-medium
          line-height: 1.6
          color: $color-dark-grey
          background-color: #ccc
        .index-list-anchor
          padding: 16px 16px 10px 16px
          line-height: 1
          font-size: $fontsize-medium
          color: $color-light-grey
          background: $color-title-background
        .index-list-item
          position: relative
          height: 50px
          line-height: 50px
          padding: 0 16px
          font-size: $fontsize-medium
          color: $color-dark-grey
          &:last-child
            border-none()
        .index-list-item_active
          /*background: $color-active-light-gray*/
          background: pink
    .index-list-fixed
      position: absolute
      z-index: 1
      top: 0
      left: 0
      width: 100%
      padding: 16px 16px 10px 16px
      box-sizing: border-box
      font-size: $fontsize-medium
      line-height: 1
      color: $color-light-grey
      /*background: $color-title-background*/
      /*background: #FDDD9B*/
      background: rgba(40,39,99,0.7)
    .index-list-nav
      position: absolute
      z-index: 30
      right: 0
      top: 50%
      transform: translateY(-50%)
      font-family: Helvetica
      >
        ul
          padding: 0
          margin: 0
          >
            li
              padding: 6px 16px 0 16px
              line-height: 1
              text-align: center
              box-sizing(border-box)
              font-size: $fontsize-small
              color: $color-grey
              &.active
                /*color: $color-main-l*/
                color: red
            @media (max-height: 480px)
              li
                padding-top: 3px

</style>
