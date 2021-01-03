<template>
  <div id="home" ref="contain">
      <vnavbar :navdata="navdata" @onClickRight="search"></vnavbar>
      <vswipe :banner="banner"></vswipe>
      <vgrid :recommend="recommend"></vgrid>
      <feature></feature>
      <vtab :tabdata="tabdata" @typechange="typechange" ref="tabbar">
          <vlist @load="addmore">
          <vgrid :recommend="goodslist" :num="num"></vgrid>
          </vlist>
      </vtab>
      <backtop @click.native="totop" v-if="backcom"></backtop>
      <vpopup :show="show" @close="close"></vpopup>
  </div>
</template>

<script>
import vnavbar from 'components/vant/vnavbar'
import vpopup from 'components/vant/vpopup'
import vswipe from 'components/vant/vswipe'
import vgrid from 'components/vant/vgrid'
import vtab from 'components/vant/vtab'
import vlist from 'components/vant/vlist'
import backtop from 'components/backtop/backtop'

import feature from './childcomps/feature'

import {gethomedata,gethomegoods} from 'network/home.js'
export default {
name:"home",
  data () {
    return {
        navdata:{
            title:"购物街",leftarrow:false,icon:true,fixed:true
        },
        show:false,
        banner:[],
        recommend:[],
        tabdata:[
        {title:"流行",name:"pop"},
        {title:"新款",name:"new"},
        {title:"精选",name:"sell"},],
        currenttype:'pop',
        goods:{
         'pop':{page:0,list:[]},
         'new':{page:0,list:[]},
         'sell':{page:0,list:[]},
       },
       num:2
    };
  },
  created(){
      this.getdata(),
      this.gethomegoods('pop')
      this.gethomegoods('new')
      this.gethomegoods('sell')
  },

  components: {
      vnavbar,
      vpopup,
      vswipe,
      vgrid,
      feature,
      vtab,
      vlist,
      backtop
  },

  computed: {
      goodslist(){
          return this.goods[this.currenttype].list
      },
      backcom(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop>1500){
            return true
        } else return true 
      }
  },

  methods: {
      search(){
          this.show=true
      },
      close(){
          this.show = false
      },
      async getdata(){
          const {data:res} = await gethomedata()
          //console.log(res)
          this.banner = res.banner.list,
          this.recommend = res.recommend.list
          //console.log(this.banner,this.recommend)
      },
      async gethomegoods(type){
          const page = this.goods[type].page + 1
          const {data:res} = await gethomegoods(type,page)
          this.goods[type].list.push(...res.list)
          this.goods[type].page+=1
          //console.log(this.goods[type]) 
      },
      typechange(vals){
          //console.log(this.goodslist)
          this.currenttype = vals
      },
      addmore(){
          this.gethomegoods(this.currenttype)
      },
      totop(){
          //console.log(scrollTop)
          scrollTo({top:0,behavior:'smooth'})
      },
  }
}

</script>
<style scoped>
</style>