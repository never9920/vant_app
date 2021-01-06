<template>
  <div :class={bgc:bgc}>
    <van-tabs v-model="active">
      <van-tab title="登录">
          <slot name="one"></slot>
      </van-tab>
      <van-tab title="注册">
          <slot name="two"></slot>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
name:"vtablogin",
  data () {
    return {
        active:0
    };
  },

  props:{
      activeindex:{
          type:Number,
          default:0
      },
      bgc:{
        type:Boolean,
        default:true
      },
  },

  watch:{
      active(val){
          return this.$emit('change',val)
      },
      activeindex(val){
          this.active = val
      }
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style lang="less">
.bgc .van-tab{
  background-color:rgba(0,0,0,0.1);
}
</style>