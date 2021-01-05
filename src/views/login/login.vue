<template>
  <div>
    <vnavbar :navdata="navdata" @onClickLeft="goback"></vnavbar>
  </div>
</template>

<script>
import vnavbar from 'components/vant/vnavbar'
export default {
name:"login",
  data () {
    return {
      navdata:{
            title:"登录/注册",leftarrow:true
      },
    };
  },

  components: {
    vnavbar
  },

  computed: {},

  methods: {
    goback(){
          this.$router.back();
    }
  }
}

</script>
<style scoped>
</style>