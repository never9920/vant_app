<template>
  <div>
    <van-popup
    v-model="isshow"
    round
    position="bottom"
    style="height: 90%; padding-top: 4px;"
    >
    <van-coupon-list
    :coupons="coupons"
    @change="onChange"
    :show-exchange-bar = "false"
    close-button-text="确定"
    />
</van-popup>
  </div>
</template>

<script>
export default {
name:"vpopcou",
props:{
    show:{
        type:Boolean,
        default:false
    }
},
  data () {
    return {
        coupons : [{
            available: 1,
            condition: '无使用门槛\n最多优惠12元',
            reason: '',
            value: 150,
            name: '优惠券名称',
            startAt: 1489104000,
            endAt: 1514592000,
            valueDesc: '1.5',
            unitDesc: '元',
        }],
        isshow:false
    };
  },

  watch:{
    show(val){
        this.isshow = val
    },
    isshow(val){
        !val && this.$emit('close')
    }
},

  components: {},

  computed: {},

  methods: {
    onChange(index) {
      this.isshow = false;
    },
  }
}

</script>
<style scoped>
</style>