<template>
  <div>
      <van-submit-bar :price="totalprice*100" button-text="提交订单" @submit="calc">
      <van-checkbox v-model="checked" @click="cclick">全选</van-checkbox>
       </van-submit-bar>
  </div>
</template>

<script>
export default {
name:"vsubmit",
  data () {
    return {
    };
  },

  components: {},

  computed: {
    totalprice(){
      return  this.$store.getters.cartlist.filter(item=>{
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    checked:{
      get(){
        if(this.$store.getters.cartlist.length === 0) return false
        return !(this.$store.getters.cartlist.filter(item=>!item.checked).length)
      },
      set(val){}
    }
  },

  methods: {
    cclick(){
      if(this.checked){
        this.$store.getters.cartlist.forEach(item => item.checked = false);
      }else{
        this.$store.getters.cartlist.forEach(item => item.checked = true);
      }
    },
    calc(){
      if(!this.$store.getters.cartlist.some(item=>item.checked)){
        this.$toast('请选择购买的商品')
      }else{
        this.$router.push('/login')
      }
    }
  }
}

</script>
<style scoped>
.van-submit-bar{
  bottom:50px
}
</style>