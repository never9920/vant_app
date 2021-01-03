<template>
<vcard @del="del(product)">
  <div id="citem">
      <div class="iselector">
          <checkbutton :ischeck="product.checked" @click.native="checkbtn"></checkbutton>
      </div>
      <div class="iimg" @click="turn(product)">
          <img :src="product.image" alt="商品">
      </div>
      <div class="iinfo">
          <div class="ititle">{{product.title}}</div>
          <div class="idesc">商品描述：{{product.desc}}</div>
          <div class="ibottom">
              <div class="iprice left">¥{{product.price}}</div>
              <button class="jia right" @click="increase">+</button>
              <div class="icount right">{{product.count}}</div>
              <button class="jian right" @click="decrease">-</button>
          </div>
      </div>
  </div>
  </vcard>
</template>

<script>
import {mapActions} from 'vuex'
import vcard from 'components/vant/vcard'
import checkbutton from './checkbutton'
export default {
name:"cartitem",
props:{
    product:{
        type:Object,
        default:{}
    }
},
  data () {
    return {
    };
  },

  components: {
      checkbutton,
      vcard
  },

  computed: {},

  methods: {
    ...mapActions(['delcart']),
      increase(){
          this.product.count++
      },
      decrease(){
          if(this.product.count!==1){
              this.product.count--
          }
      },
      checkbtn(){
          this.product.checked =!this.product.checked;
      },
      turn(product){
          //console.log(product)
          this.$router.push('./detail/'+product.iid)
      },
      del(product){
        this.delcart(product).then(res=>{
            this.$toast('已删除商品')
        })
      }
  }
}

</script>
<style scoped>
#citem{
    width:375px;
    display: flex;
    font-size: 0;
    padding: 5px 0;
    border-bottom: 1px solid #ccc;
}
.iselector{
    width:14%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
}
.ititle,.idesc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.iimg{
    padding: 5px;
}
.iimg img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
}
.iinfo{
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
}
.iinfo .idesc{
    font-size: 14px;
    color: #666;
    margin-top: 15px;
}
.ibottom{
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right:10px;
    display: flex;
}
.ibottom .iprice{
    color:orangered;
}
.jia,.jian{
    width: 40px;
    text-align: center;
    border-radius: 5px;
    border:solid 1px;
    border-color:grey;
    margin: 0 5px;
    background-color:white;
    padding:0 10px;
    line-height:20px;
}
.icount{
    width: 20px;
    text-align: center;
}
.right{
    margin-left:auto
}
</style>