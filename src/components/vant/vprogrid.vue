<template>
  <div>
  <van-grid column-num="4" gutter="5" :border=false class="grid">
  <van-grid-item @click="change">
       <img src="~assets/img/profile/1.png" />
       <p>待付款</p>
  </van-grid-item>
  <van-grid-item @click="change">
       <img src="~assets/img/profile/2.png" />
       <p>待付款</p>
  </van-grid-item>
  <van-grid-item @click="change">
       <img src="~assets/img/profile/3.png" />
       <p>待付款</p>
  </van-grid-item>
  <van-grid-item @click="change">
       <img src="~assets/img/profile/4.png" />
       <p>待付款</p>
  </van-grid-item>
  </van-grid>
  </div>
</template>

<script>
export default {
name:"vprogrid",
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {
    change(item){
      //console.log(item)
      this.$router.push('/login')
    },
  }
}

</script>
<style scoped>
.grid img{
    width: 30px;
    height: 30px;
}
</style>