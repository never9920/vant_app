<template>
  <div>
      <van-sidebar v-model="activeKey" @change="typech">
        <van-sidebar-item :title=item.title v-for="(item,i) in catelist" :key="i">
            <slot></slot>
        </van-sidebar-item>
      </van-sidebar>
  </div>
</template>

<script>
export default {
name:"vsidebar",
  data () {
    return {
        activeKey:0
    };
  },

  props:{
      catelist:{
          type:Array
      }
  },

  components: {},

  computed: {},

  methods: {
      typech(index){
         return this.$emit('change',index) 
      }
  }
}

</script>
<style scoped>
</style>