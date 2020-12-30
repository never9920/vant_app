import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () =>
    import ('../views/home/home')
const cart = () =>
    import ('../views/cart/cart')
const catagory = () =>
    import ('../views/catagory/catagory')
const profile = () =>
    import ('../views/profile/profile')

Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/cart',
        component: cart
    },
    {
        path: '/catagory',
        component: catagory
    },
    {
        path: '/profile',
        component: profile
    },
    {
        path: '/home',
        component: home
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router