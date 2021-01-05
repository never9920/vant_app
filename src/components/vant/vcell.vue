<template>
  <div>
    <van-cell-group>
      <van-cell 
      :title="item.title" 
      :value="item.value" 
      v-for="(item,i) in cells" 
      :key="i" 
      is-link
      :icon="item.icon"
      title-class="left"
      @click="cellcon"/>
    </van-cell-group>
  </div>
</template>

<script>
export default {
name:"vcell",
  data () {
    return {
    };
  },

  props:{
      cells:{
          type:Array,
          default:[]
      }
  },

  components: {},

  computed: {},

  methods: {
      cellcon(){
          this.$emit('concell')
      }
  }
}

</script>
<style scoped>
.left{
    text-align: left;
}
</style>