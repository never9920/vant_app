<template>
  <div>
    <van-swipe-cell>
      <slot></slot>
    <template #right>
      <van-button square text="删除" type="danger" class="delete-button" @click="del"/>
    </template>
  </van-swipe-cell>
  </div>
</template>

<script>
export default {
name:"vcard",
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {
    del(){
      this.$dialog.confirm({
        message: '是否删除该商品',
    }).then(() => {
      this.$emit('del')
    }).catch(() => {
      this.$toast('已取消删除')
    });
    }
  }
}

</script>
<style scoped>
  .goods-card {
    margin: 0;
    background-color: white;
  }

  .delete-button {
    height: 100%;
  }
</style>