<template>
  <div> 
    <vtabbar :bardata="bardata"></vtabbar>
  </div>
</template>

<script>
import vtabbar from '../vant/vtabbar'

export default {
name:"tabbar",
  data () {
    return {
        bardata:[
            {title:"首页",path:"/home",icon:"home-o"},
            {title:"分类",path:"/catagory",icon:"apps-o"},
            {title:"购物车",path:"/cart",icon:"shopping-cart-o"},
            {title:"我的",path:"/profile",icon:"manager-o"}]
    };
  },

  components: {vtabbar},

  computed: {},

  methods: {}
}

</script>
<style scoped>
</style>