<template>
  <div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服"  />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="collect"/>
      <van-goods-action-icon icon="star-o" text="收藏"  @click="collect"/>
      <van-goods-action-button type="warning" text="加入购物车" @click="collect"/>
      <van-goods-action-button type="danger" text="立即购买" @click="collect"/>
    </van-goods-action>
  </div>
</template>

<script>
export default {
name:"vgoods",
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {
      collect(){
          console.log('kkk')
      }
  }
}

</script>
<style scoped>
</style>