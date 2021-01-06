<template>
  <div>
      <van-divider class="word">
        {{word}}
      </van-divider>
  </div>
</template>

<script>
export default {
name:"vdivider",
  data () {
    return {
    };
  },

  props:{
      word:{
          type:String,
          default:''
      }
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
.word{
  font-size: 15px;
  color: black;
}
</style>