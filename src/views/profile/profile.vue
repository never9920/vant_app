<template>
  <div id="bgc">
    <vnavbar :navdata="navdata"></vnavbar>
    <div class="picture"  @click="login">
    <img src="~assets/img/profile/touxiang.jpg"/>
    <div>登录/注册&nbsp;＞</div>
    </div>
    <vcell :cells="cells1" @concell="login"></vcell>
    <vprogrid class="grid"></vprogrid>
    <vcell :cells="cells2" class="grid" @concell="login"></vcell>
    <vcell :cells="cells3"  @concell="showdis"></vcell>
    <vpopcou :show="show" @close="close"></vpopcou>
  </div>
</template>

<script>
import vnavbar from 'components/vant/vnavbar'
import vcell from 'components/vant/vcell'
import vprogrid from 'components/vant/vprogrid'
import vpopcou from 'components/vant/vpopcou'
export default {
name:"profile",
  data () {
    return {
      navdata:{
            title:"我的",leftarrow:false
      },
      cells1:[{title:"我的订单",value:"查看全部订单"}],
      cells2:[
      {title:"我的钱包",icon:"idcard"},
      {title:"我的收藏",icon:"shop-collect-o"},
      {title:"我的推荐",icon:"after-sale"},
      {title:"我的积分",icon:"discount"},
      {title:"付款方式",icon:"coupon-o"}],
      cells3:[{title:"优惠券",icon:"point-gift-o"}],
      show:false
    };
  },

  components: {
    vnavbar,
    vcell,
    vprogrid,
    vpopcou
  },

  computed: {},

  methods: {
    login(){
      this.$router.push('/login')
    },
    showdis(){
      this.show = true
    },
    close(){
      this.show = false
    }
  }
}

</script>
<style scoped>
#bgc{
  background-color: #f1f1f1;
}
.picture{
  text-align: center;
  margin:0 0 10px 0;
  font-size:15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding:  10px;
  background: linear-gradient(90deg, white, pink);
}
.picture img{
  height: 60px;
  width:60px;
  border-radius: 50%;
}
.grid{
  background-color: #fff;
  margin-bottom:10px ;
}
</style>