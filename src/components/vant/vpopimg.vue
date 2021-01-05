<template>
  <div>
    <van-popup v-model="show" >
        <img :src="imgs" class="picture"/>
    </van-popup>
  </div>
</template>

<script>
export default {
name:"vpopimg",
  data () {
    return {
        show:false
    };
  },
  props:{
      isshow:{
          type:Boolean,
          default:false
      },
      imgs:{
          type:String,
          default:''
      }
  },

  watch:{
      show(val){
          !val && this.$emit('close')
      },
      isshow(){
          this.show = this.isshow
      }
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
.picture{
    width: 375px;
}
</style>