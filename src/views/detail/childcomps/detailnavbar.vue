<template>
  <div>
      <vnavbar :navdata="navdata" @onClickLeft="goback">
      <template v-slot:title>
       <div class="title">
              <div  v-for="(item,index) in titles" 
              :key="index"
              class="ditem"
              :class="{active:index===currentindex}"
              @click="titleclick(index)">
              {{item}}  
              </div>
          </div>
      </template>
    </vnavbar>
  </div>
</template>

<script>
import vnavbar from 'components/vant/vnavbar'
export default {
name:"detailnavbar",
  data () {
    return {
        titles:['商品','参数','评论','推荐'],
        currentindex:0,
        navdata:{leftarrow:true,fixed:true},
    };
  },

  props:{
    active:{
      type:Number,
      default:0
    }
  },

  watch:{
    active(){
      this.currentindex = this.active
    }
  },

  components: {
      vnavbar
  },

  computed: {},

  methods: {
       titleclick(index){
         this.currentindex=index;
         this.$emit('titleclick',index)
      },
      goback(){
          this.currentindex = 0
          this.$router.back();
      }
  }
}

</script>
<style scoped>

.title{
    width:200px;
    display: flex;
    font-size: 15px;
}
.ditem{
    flex:1;
}
.active{
    color: pink;    
}
</style>