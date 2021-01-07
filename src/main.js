import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './vant/vant.js'
import './assets/css/global.css'

import 'lib-flexible/flexible.js'
import FastClick from 'fastclick'

Vue.config.productionTip = false

FastClick.attach(document.body)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')