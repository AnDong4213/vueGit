<template>
  <div class="switch-option">
  	<p>{{value}}</p>
    <span class="name">{{name}}</span>
    <div class="switch-ellipse" :class="{'active': checked }" @click="clickSwitch">
      <span class="switch-circle" :class="{'active': checked }"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'switch-option'
  export default {
    name: COMPONENT_NAME,
    props: {
      name: {
        type: String
      },
      value: null
    },
    data() {
      return {
        checked: this.value
      }
    },
    created() {
    	/*console.log(this.checked)*/
    },
    watch: {
      checked (newValue) {
        this.$emit('update1:value', newValue)
      }
    },
    methods: {
      clickSwitch () {
        this.checked = !this.checked
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../stylus/variable.styl"

  .switch-option
    display flex
    justify-content space-between
    align-items stretch
    width: 100%
    height: 100%
    padding 0 15px
    box-sizing border-box
    .name
      display flex
      align-items: center
      flex: 0 1 auto
    .switch-ellipse
      align-self: center
      flex: 0 0 auto
      margin-top: 5px
      display: inline-block
      position: relative
      height: 31px
      width: 51px
      background-color: #fff
      border-radius: 1000px
      border: 2px solid rgba(0, 0, 0, .1)
      transition: all 0.1s
      &.active
        /*background-color: #3b99fc*/
        background-color: #999
        border-color: transparent
        transition: all 0.2s ease 0.2s
      .switch-circle
        position: absolute
        display: inline-block
        height: 27px
        width: 27px
        background: white
        border-radius: 50%
        border: 1px solid rgba(0, 0, 0, .1)
        /*box-shadow: -1px 1px 1px #999*/
        box-shadow: -1px 1px 1px #f0f
        top: 1px
        left: 0
        transition: all 0.3s
        &.active
          left: 21px
          transition: all 0.4s ease 0.1s

</style>
