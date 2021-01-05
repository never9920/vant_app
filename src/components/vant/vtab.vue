<template>
  <div>
      <van-tabs v-model="activeName" :sticky="sticky" :lazy-render=false offset-top="46px">
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
      },
      sticky:{
        type:Boolean,
        default:true
      },
      currenttype:{
        type:String,
        default:'pop'
      },
  },
  watch:{
    activeName(val){
      return this.$emit('typechange',val)
    },
    currenttype(){
      this.activeName=this.currenttype
    }
  },

  components: {},

  computed: {},

  methods: {
  }
}

</script>
<style scoped>
</style>