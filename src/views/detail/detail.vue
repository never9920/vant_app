<template>
  <div>
    <detailnavbar @titleclick="titleclick" :active="active"></detailnavbar>
    <vswipe :banner="topimg" :hight=hight></vswipe>
    <detailbaseinfo :goods="goods"></detailbaseinfo>
    <detailshop :shop="shop"></detailshop>
    <detailgoods :detailinfo="detailinfo" @imageload="imageload"></detailgoods>
    <detailparam :paraminfo="paraminfo" ref="param"></detailparam>
    <detailcomment :commentinfo="commentinfo" ref="comment"></detailcomment>
    <div class="word" ref="recommend">热门推荐</div>
    <vgrid :recommend="recommendlist" :num="num"></vgrid>
    <vgoods :paraminfo="paraminfo" :iid="iid" :topimg="topimg" :goodsinfo="goods"></vgoods>
    <backtop @click.native="totop" v-if="isshow"></backtop>
  </div>
</template>

<script>
import detailnavbar from './childcomps/detailnavbar'
import detailbaseinfo from "./childcomps/detailbaseinfo"
import detailshop from "./childcomps/detailshop"
import detailgoods from "./childcomps/detailgoods"
import detailparam from "./childcomps/detailparam"
import detailcomment from "./childcomps/detailcomment"
import backtop from 'components/backtop/backtop'

import vswipe from 'components/vant/vswipe'
import vgrid from 'components/vant/vgrid'
import vgoods from '../../components/vant/vgoods'
import {getdetail,getrecommend,Goods,Shop,Goodsparam} from 'network/detail.js'
export default {
name:"detail",
  data () {
    return {
      iid:null,
      topimg:[],
      goods:{},
      shop:{},
      detailinfo:{},
      paraminfo:{},
      commentinfo:{},
      hight:'300px',
      recommendlist:[],
      num:2,
      isshow:false,
      themetopy:[],
      active:0
    };
  },

  components: {
    detailnavbar,
    vswipe,
    detailbaseinfo,
    detailshop,
    detailgoods,
    detailparam,
    detailcomment,
    vgrid,
    vgoods,
    backtop
  },

  computed: {},

  mounted(){
      window.addEventListener('scroll',this.backshow)
  },

  created(){
    this.iid = this.$route.params.iid
    //console.log(this.iid)
    this.detaildata(this.iid)
    this.getrecommend()
  },

  methods: {
    titleclick(index){
      //console.log(index)
      const top = this.themetopy[index]
      scrollTo({top:top,behavior:'smooth'})
    },
    async detaildata(iid){
      const res = await getdetail(iid)
      const data = res.result
      //console.log(res.result)
      this.topimg = data.itemInfo.topImages;
      //console.log(this.topimg)
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //console.log(this.goods)
      this.shop = new Shop(data.shopInfo)
      //console.log(this.shop)
      this.detailinfo = data.detailInfo
      //console.log(this.detailinfo.detailImage)
      this.paraminfo = new Goodsparam(data.itemParams.info,data.itemParams.rule)
      //console.log(this.paraminfo)
      //判断是否有评论
      if(data.rate.list){
        this.commentinfo = data.rate.list[0]
      }
    },
    async getrecommend(){
      const {data:res} = await getrecommend()
      //console.log(res)
      this.recommendlist = res.list
    },
    imageload(){
      this.themetopy = [];
      this.themetopy.push(0);
      this.themetopy.push(this.$refs.param.$el.offsetTop- 44);
      this.themetopy.push(this.$refs.comment.$el.offsetTop);
      this.themetopy.push(this.$refs.recommend.offsetTop- 44);
      this.themetopy.push(Number.MAX_VALUE)
      //console.log(this.themetopy)
    },
    totop(){
      //console.log(scrollTop)
      scrollTo({top:0,behavior:'smooth'})
      //console.log('kkk')
    },
    backshow(){
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if(scrollTop >1500){
        this.isshow = true
      }else{
        this.isshow = false
      }
      let length = this.themetopy.length
      for(let i = 0;i<length-1;i++){
        /*if(this.currentindex!==i&&((i <this.themetopy.length-1 && -position.y >= this.themetopy[i] && -position.y < this.themetopy[i+1])||(i=== this.themetopy.length-1 &&-position.y>=this.themetopy[i]))){
           this.currentindex = i;
           //console.log(this.currentindex)
           this.$refs.nav.currentindex = this.currentindex
        }*/
        if(this.active!==i &&(scrollTop>=this.themetopy[i]&&scrollTop<this.themetopy[i+1])){
          this.active = i;
          //console.log(this.currentindex)
        }
      }
    }
  }
}

</script>
<style scoped>
.word{
  font-size: 20px;
}
</style>