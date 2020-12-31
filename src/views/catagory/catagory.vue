<template>
  <div>
    <vnavbar :navdata="navdata"></vnavbar>
  </div>
</template>

<script>
import vnavbar from '../../components/vant/vnavbar'
export default {
name:"catagory",
  data () {
    return {
      navdata:{
            title:"商品分类",leftarrow:false
        }
    };
  },

  components: {vnavbar},

  computed: {},

  methods: {}
}

</script>
<style scoped>
</style>