<template>
  <div>
      <van-nav-bar
      :navdata="navdata"
      :title="navdata.title"
      :left-text="navdata.left"
      :right-text="navdata.right"
      :left-arrow="navdata.leftarrow"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      :fixed="navdata.fixed"
      :placeholder="navdata.fixed"
      class="nav"
      >
      <slot slot="title" name="title"></slot>
      <template #right v-if="navdata.icon">
        <van-icon name="search" size="18" />
      </template>
      </van-nav-bar>
  </div>
</template>

<script>
export default {
name:"vnavbar",
props:{
    navdata:{
        type:Object,
        default:{}
    }
},
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {
      onClickLeft(){
          this.$emit('onClickLeft')
      },
      onClickRight(){
          this.$emit('onClickRight')
      }
  }
}

</script>
<style scoped>
.nav{
  background-color:#f1f1f1;
}
</style>