<template>
  <div :class={touming:touming}>
      <van-grid column-num="3" gutter="5" :border=false class="grid">
        <van-grid-item @click="download1">
          <img src="~assets/img/profile/qq.jpg"/>
        </van-grid-item>
        <van-grid-item @click="download2">
          <img src="~assets/img/profile/weibo.jpg" />
        </van-grid-item>
        <van-grid-item @click="download3">
          <img src="~assets/img/profile/weixin.jpg" />
        </van-grid-item>
      </van-grid>
  </div>
</template>

<script>
export default {
name:"vgridlogin",
  data () {
    return {
    };
  },

  props:{
    touming:{
      type:Boolean,
      default:true
    }
  },

  components: {},

  computed: {},

  methods: {
    download1(){
      this.$toast('请下载QQ')
    },
    download2(){
      this.$toast('请下载微博')
    },
    download3(){
      this.$toast('请下载微信')
    },
  }
}

</script>
<style lang="less">
.grid img{
    width: 40px;
    height: 40px;
}
.touming .van-grid-item__content{
  background-color:rgba(0,0,0,0.1);
}
</style>