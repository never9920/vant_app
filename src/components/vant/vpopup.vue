<template>
  <div>
      <van-popup 
      v-model="isshow" 
      position="top" 
      :style="{ height: '70%' }"
      round>
    <form action="/">
      <van-search
      show-action
      placeholder="请输入搜索关键词"
      @cancel="onCancel"
      />
    </form>
      </van-popup>
  </div>
</template>

<script>
export default {
name:"vpopup",
props:{
    show:{
        type:Boolean,
        default:false
    }
},
watch:{
    show(val){
        this.isshow = val
    },
    isshow(val){
        !val && this.$emit('close')
    }
},
  data () {
    return {
        isshow:false
    };
  },

  components: {},

  computed: {},

  methods: {
      onCancel(){
          this.isshow=false
      }
  }
}

</script>
<style scoped>
</style>