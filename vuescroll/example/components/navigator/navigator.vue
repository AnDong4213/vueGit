<template>
  <div ref="viewport" class="navigator-component">
  	
    <scroll ref="scroll" direction="horizontal">
      <ul class="tab-list" ref="tabList">
        <!--<li v-for="item in navList" class="tab-item" @click="selectNav(item)">
          <slot name="item" :text="item.name" :index="item.id">
            <span class="tab-name" :class="{'link-active':isCurrentTab(item.id)}">{{item.name}}--</span>  如果有name="item"属性就是没用的代码...
          </slot>
        </li>-->
				<li v-for="item in navList" class="tab-item" @click="selectNav(item)">
					<span class="tab-name" :class="{'link-active':isCurrentTab(item.id)}">{{item.name}}--</span>
				</li>
      </ul>
    </scroll>
    
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'example/components/scroll/scroll.vue'

  const EVENT_CHANGE = 'change'

  export default {
    props: {
      navList: {
        type: Array,
        default() {
          return [{
            id: 1,
            name: 'default'
          }]
        }
      },
      currentTabIndex: {
        type: Number,
        default: null
      }
    },
    data() {
      return {
        currentTab: 4,
        current: 1
      }
    },
    mounted() {
      this._initTabListWidth()
      this.$emit(EVENT_CHANGE) // change
      if (this.currentTabIndex === null) {
        this.current = this.currentTab
      } else {
        this.current = this.currentTabIndex
      }
      setTimeout(() => {
        this._adjust(this.current)
      }, 500)
    },
    methods: {
      isCurrentTab (index) {
        return index === this.current
      },
      selectNav(item) {
        this.current = item.id
        this._adjust(item.id)
        this.$emit(EVENT_CHANGE, item)  // change
      },
      _initTabListWidth() {
        const tabList = this.$refs.tabList
        const items = tabList.children
        let width = 0
        for (let i = 0; i < items.length; i++) {
          width += items[i].clientWidth
        }
        tabList.style.width = (width + 1) + 'px'
      },
      _adjust(tabId) {
        const viewportWidth = this.$refs.viewport.clientWidth
        const tabListWidth = this.$refs.tabList.clientWidth
        // console.log(`${viewportWidth}--${tabListWidth}`)
        const minTranslate = Math.min(0, viewportWidth - tabListWidth)
        // console.log(minTranslate)   // -141
        const middleTranslate = viewportWidth / 2
        const items = this.$refs.tabList.children
        let width = 0
        this.navList.every((item, index) => {
          if (item.id === tabId) {
            return false
          }
          width += items[index].clientWidth
          return true
        })
        let translate = middleTranslate - width
        // console.log(`${width}**${translate}`)
        translate = Math.max(minTranslate, Math.min(0, translate))
        this.$refs.scroll.scrollTo(translate, 0, 300) // 负值向右...
      }
    },
    components: {Scroll}
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' type="text/stylus">
  .navigator-component
    .list-wrapper
      background: none
      .scroll-content
      //用于横向滚动
        display: inline-block
      .tab-list
        margin: 0 auto
        .tab-item
          display: inline-block
          line-height: 54px;
          .tab-name
            display: block
            position: relative
            padding: 0 15px 0 14px
            font-size: 14px
            color: #666
            &.link-active
              transition: all 0.2s
              transform: scale(1.04)
              /*color: #fc9153*/
              color: red
</style>
