<template>
  <div>
    <vnavbar :navdata="navdata"></vnavbar>
  </div>
</template>

<script>
import vnavbar from '../../components/vant/vnavbar'
export default {
name:"profile",
  data () {
    return {
      navdata:{
            title:"我的",leftarrow:false
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