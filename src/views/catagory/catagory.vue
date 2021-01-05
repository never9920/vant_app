<template>
  <div>
    <vnavbar :navdata="navdata"></vnavbar>
    <div class="divide">
    <div class="left">
    <vsidebar :catelist="catelist" @change="change"></vsidebar>
    </div>
    <div class="right" id="right" ref="right">
    <vgrid :recommend="showsubcata" :num ="num1"></vgrid>
    <vtab :tabdata="tabdata" @typechange="typechange" :currenttype="currenttype" :sticky="sticky">
      <vgrid :recommend="showrecommends" :num="num2"></vgrid>
    </vtab>
    </div>
    </div>
    <backtop @click.native="totop" v-if="isshow"></backtop>
  </div>
</template>

<script>
import vnavbar from 'components/vant/vnavbar'
import vsidebar from 'components/vant/vsidebar'
import vgrid from 'components/vant/vgrid'
import vtab from 'components/vant/vtab'
import backtop from 'components/backtop/backtop'

import {getcata,getsub,getsubdetail} from 'network/catagory'
export default {
name:"catagory",
  data () {
    return {
      navdata:{
            title:"商品分类",leftarrow:false
      },
      catelist:[],
      showdata:{},
      activeindex : -1,
      num1:3,
      num2:2,
      currenttype:'pop',
      tabdata:[
        {title:"流行",name:"pop"},
        {title:"新款",name:"new"},
        {title:"精选",name:"sell"},
      ],
      sticky:false,
      isshow:false
    };
  },

  components: {
    vnavbar,
    vsidebar,
    vgrid,
    vtab,
    backtop
  },

  created(){
    this.getcata()
  },

  mounted(){
      document.getElementById("right").addEventListener('scroll',this.backshow)
  },

  computed: {
    showsubcata(){
      if(this.activeindex===-1) return []
      return this.showdata[this.activeindex].subcata.list
    },
    showrecommends(){
      if(this.activeindex===-1) return []
      return this.showdata[this.activeindex].catadetail[this.currenttype] 
    }
  },

  methods: {
    async getcata(){
      const res = await getcata()
      //console.log(res)
      this.catelist = res.data.category.list
        //console.log(this.catelist)
        for(let i=0;i<this.catelist.length;i++){
          this.showdata[i]={
            subcata:{},
            catadetail:{
              'pop':[],
              'new':[],
              'sell':[]
            }
          }
        }
        this.getsub(0)
    },
    async getsub(index){
      this.activeindex = index
      const maitKey = this.catelist[index].maitKey
      const res =await getsub(maitKey)
      this.showdata[index].subcata = res.data
      //console.log(this.showdata[this.activeindex].subcata.list)
      this.showdata = {...this.showdata}
      this.getsubdetail('pop')
      this.getsubdetail('new')
      this.getsubdetail('sell')
    },
    async getsubdetail(type){
      const miniWallkey = this.catelist[this.activeindex].miniWallkey
      const res = await getsubdetail(miniWallkey,type)
      this.showdata[this.activeindex].catadetail[type] = res
      //console.log(res)
      //console.log(this.showdata[this.activeindex].catadetail[this.currenttype])
      this.showdata={...this.showdata}
    },
    typechange(vals){
      //console.log(this.goodslist)
      this.currenttype = vals
    },
    totop(){
      //console.log(scrollTop)
      this.$refs.right.scrollTo({top:0,behavior:'smooth'})
      //console.log('kkk')
    },
    change(index){
      this.activeindex = index
      this.getsub(index)
      this.currenttype= 'pop'
      this.$refs.right.scrollTo({top:0,behavior:'smooth'})
    },
    backshow(){
      var scrollTop = document.getElementById("right").scrollTop
      //console.log(scrollTop)
      if(scrollTop >1500){
        this.isshow = true
      }else{
        this.isshow = false
      }
    }
  }
}

</script>
<style scoped>
.divide{
  overflow: hidden; 
  position:fixed; 
  top:46px;
  bottom:50px; 
  left:0; 
  right:0
}
.left{
  width:80px;
  float:left; 
  overflow:auto;
  height: 100%
}
.right{
  width:calc(100% - 80px);
  float:right;
  overflow:auto;
  height: 100%
}
</style>