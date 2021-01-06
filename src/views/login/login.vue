<template>
  <div id="login">
    <vnavbar :navdata="navdata" @onClickLeft="goback"></vnavbar>
    <div class="picture">
    <img src="~assets/img/profile/login.png">
    </div>
    <vtablogin :activeindex="index">
      <template v-slot:one>
        <vform></vform>
        <vdivider :word="word"></vdivider>
        <vgridlogin></vgridlogin>
      </template>
      <template v-slot:two>
        <vfield></vfield>
      </template>
    </vtablogin>
  </div>
</template>

<script>
import vnavbar from 'components/vant/vnavbar'
import vtablogin from 'components/vant/vtablogin'
import vform from 'components/vant/vform'
import vgridlogin from 'components/vant/vgridlogin.vue'
import vdivider from 'components/vant/vdivider'
import vfield from 'components/vant/vfield.vue'
export default {
name:"login",
  data () {
    return {
      navdata:{
            title:"登录/注册",leftarrow:true
      },
      index:0,
      word:"第三方登录"
    };
  },

  components: {
    vnavbar,
    vtablogin,
    vform,
    vgridlogin,
    vdivider,
    vfield
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
#login{
  background-image: url("~assets/img/profile/bg.jpg");
  height: 667px;
}
.picture{
  width: 100%;
  text-align: center;
  margin:0 0 10px 0;
  font-size:15px;
  color: white;
}
.picture img{
  width: 30%;
  height: 112.5px;
  border-radius: 50%;
  margin:10px 0 0 0;
}

</style>