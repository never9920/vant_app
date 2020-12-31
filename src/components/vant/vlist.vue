<template>
  <div>
      <van-list @load="onLoad">
          <slot></slot>
      </van-list>
  </div>
</template>

<script>
export default {
name:"vlist",
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {
      onLoad(){
          this.$emit('load')
      }
  }
}

</script>
<style scoped>
</style>