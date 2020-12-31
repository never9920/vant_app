<template>
  <div>
      <van-tabs v-model="activeName" sticky :lazy-render=false>
        <van-tab :title="item.title" :name="item.name" v-for="(item,i) in tabdata" :key="i">
            <slot>{{item.title}}</slot>
        </van-tab>
      </van-tabs>
  </div>
</template>

<script>
export default {
name:"vtab",
  data () {
    return {
        activeName:'pop'
    };
  },
  props:{
      tabdata:{
          type:Array,
          default:[]
      }
  },
  watch:{
    activeName(val){
      return this.$emit('typechange',val)
    }
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
</style>