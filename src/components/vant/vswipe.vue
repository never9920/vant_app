<template>
  <div>
    <van-swipe :autoplay="3000" class="swiper">
     <van-swipe-item v-for="(item,i) in banner" :key="i">
       <a :href="item.link">
       <img v-lazy="item.image"/>
       </a>
     </van-swipe-item>
   </van-swipe>
  </div>
</template>

<script>
export default {
  props:{
    banner:{
      type:Array,
      default:[]
    }
  },
name:"swipe",
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
.swiper img{
  width:100%;
  height: 180px;
}
</style>