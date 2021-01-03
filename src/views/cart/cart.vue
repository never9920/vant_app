<template>
  <div>
    <vnavbar :navdata="navdata">
      <template v-slot:title>
        购物车({{cartlength}})
      </template>
    </vnavbar>
    <cartlist class="list"></cartlist>
    <vsubmit></vsubmit>
  </div>
</template>

<script>
import vnavbar from 'components/vant/vnavbar'
import cartlist from './chidcomps/cartlist'
import vsubmit from '../../components/vant/vsubmit'
import {mapGetters} from 'vuex'
export default {
name:"cart",
  data () {
    return {
      navdata:{
            leftarrow:false
        }
    };
  },

  components: {
    vnavbar,
    cartlist,
    vsubmit
  },

  computed: {
    ...mapGetters(['cartlength']),
    },

  methods: {}
}

</script>
<style scoped>
.list{
  width:100%
}

</style>