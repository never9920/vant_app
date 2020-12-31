<template>
  <div>
    <vnavbar :navdata="navdata"></vnavbar>
  </div>
</template>

<script>
import vnavbar from '../../components/vant/vnavbar'
export default {
name:"cart",
  data () {
    return {
      navdata:{
            title:"购物车",leftarrow:false
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