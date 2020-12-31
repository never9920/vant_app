<template>
  <div id="app">
    <keep-alive exclude="detail">
    <router-view/>
    </keep-alive>
    <tabbar v-show="this.$route.meta.isshow"></tabbar>
  </div>
</template>

<script>
import tabbar from './components/tabbar/tabbar'
export default {
  name: 'app',
  components: {
    tabbar
  }
}
</script>

<style>
</style>
