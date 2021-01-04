<template>
  <div>
  <van-grid :column-num="num" :gutter="5" :border=false>
  <van-grid-item v-for="(item,i) in recommend" :key="i" @click="change(item)">
       <van-image :src="item.img || item.image || item.show.img" class="every" radius="5px"/>
       <div class="info">
       <p>{{item.title}}</p>
       <span class="price" v-if="item.price">¥{{item.price}}</span>
       <img src="~assets/img/common/collect.svg" v-if="item.price">
      <span class="collect" v-if="item.cfav">{{item.cfav}}</span>
      </div>
  </van-grid-item>
  </van-grid>
  </div>
</template>

<script>
export default {
name:"vgrid",
  data () {
    return {
    };
  },
  props:{
      recommend:{
          type:Array,
          default:()=>[]
      },
      num:{
        type:Number,
        default:4
      }
  },

  components: {},

  computed: {
    getimg(item){
      return item.img || item.image || item.show.img
    }
  },

  methods: {
    change(item){
      //console.log(item)
      if(item.item_id){
        this.$router.push(item.item_id);
        this.$router.go(0);
      }else if(item.iid){
        this.$router.push('/detail/'+item.iid)
      }else{
        window.location.href = item.link
      }
    },
  }
}

</script>
<style scoped>
</style>