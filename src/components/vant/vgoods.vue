<template>
  <div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服"  />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="tocart"/>
      <van-goods-action-icon icon="star-o" text="收藏"  @click="collect" v-if="show"/>
      <van-goods-action-icon icon="star" text="已收藏"  @click="collect" v-else color="#ff5000"/>
      <van-goods-action-button type="warning" text="加入购物车" @click="addtocart"/>
      <van-goods-action-button type="danger" text="立即购买"  @click="addtocart"/>
    </van-goods-action>
    <van-sku
    v-model="isshow"
    :sku="sku"
    :goods="goods"
    :goods-id="iid"
    @buy-clicked="onBuyClicked"
    @add-cart="onAddCartClicked" 
    />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
name:"vgoods",
  data () {
    return {
      show:true,
      isshow:false,
      sku: {
      // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
      // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
    tree: [
      {
        k: '颜色',
        k_id: '1',
        v: [
          {
            id: '1',
            name: '黑色'
          },
          {
            id: '2',
            name: '蓝色'
          },
          {
            id: '3',
            name: '绿色'
          },
          {
            id: '4',
            name: '白色'
          }
        ],
        k_s: 's1',
        count: 4
      },
      {
        k: '尺寸',
        k_id: '2',
        v: [
          {
            id: '1',
            name: 'S'
          },
          {
            id: '2',
            name: 'M'
          },
          {
            id: '3',
            name: 'L'
          },
          {
            id: '4',
            name: 'XL'
          }
        ],
        k_s: 's2',
        count: 4
      }
    ],
    list: [
      {
        id: 2259,
        price:'', //价格
        s1: '1',
        s2: '1',
        stock_num: 1000, //库存 
      },
      {
        id: 2260,
        price: '',
        s1: '1',
        s2: '2',
        stock_num: 1000, //库存 
      },
      {
        id: 2257,
        price: '',
        s1: '1',
        s2: '3',
        stock_num: 1000, //库存 
      },
      {
        id: 2258,
        price: '',
        s1: '1',
        s2: '4',
        stock_num: 1000, //库存 
      },
      {
        id: 2261,
        price: '',
        s1: '2',
        s2: '2',
        stock_num: 1000, //库存 
      },
      {
        id: 2262,
        price: '',
        s1: '2',
        s2: '4',
        stock_num: 1000, //库存 
      },
      {
        id: 2263,
        price: '',
        s1: '3',
        s2: '1',
        stock_num: 1000, //库存 
      },
      {
        id: 2264,
        price: '',
        s1: '3',
        s2: '2',
        stock_num: 1000, //库存 
      },
      {
        id: 2265,
        price: '',
        s1: '3',
        s2: '4',
        stock_num: 1000, //库存 
      },
      {
        id: 2266,
        price: '',
        s1: '4',
        s2: '2',
        stock_num: 1000, //库存 
      },
      {
        id: 2266,
        price: '',
        s1: '4',
        s2: '4',
        stock_num: 1000, //库存 
      },
    ],
    price: '',
    stock_num: 10000, // 商品总库存
    none_sku: false,  // 是否无规格商品 
  },
  goods: {
    // 默认商品 sku 缩略图
    picture: {}
  }
    };
  },
  props:{
    paraminfo:{
      type:Object
    },
    iid:{
      type:String
    },
    topimg:{
      type:Array
    },
    goodsinfo:{
      type:Object
    }
  },
  beforeUpdate(){
    this.goods.picture = this.topimg[0]
    //console.log(this.goods.picture)
    this.sku.price = this.goodsinfo.realPrice
    for(let i = 0 ,slength = this.sku.list.length;i<slength;i++){
      this.sku.list[i].price = this.goodsinfo.realPrice*100
    }
  },

  components: {},

  computed: {},

  methods: {
    ...mapActions(['addcart']),
      collect(){
          //console.log('kkk')
          this.show = !this.show
      },
      tocart(){
        this.$router.push('/cart')
      },
      addtocart(){
        this.isshow=true
      },
      onBuyClicked(data){
      //console.log(data)
      const product = {}
      product.image = this.topimg[0];
      product.title = this.goodsinfo.title;
      product.desc = this.goodsinfo.desc;
      product.price = this.goodsinfo.realPrice
      product.iid = this.iid;
      product.num = data.selectedNum;
      //console.log(product)
      this.addcart(product).then(res=>{
        this.$router.push('/cart')
      })
      },
      onAddCartClicked(data){
      const product = {}
      product.image = this.topimg[0];
      product.title = this.goodsinfo.title;
      product.desc = this.goodsinfo.desc;
      product.price = this.goodsinfo.realPrice
      product.iid = this.iid;
      product.num = data.selectedNum;
      this.addcart(product).then(res=>{
        this.$toast('已添加到购物车')
        this.isshow = false
      })
      },
  }
}

</script>
<style scoped>
</style>