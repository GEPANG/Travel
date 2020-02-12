import Vue from 'vue'
import Route from 'vue-router'
import Home from '@/pages/Home/Home'

Vue.use(Route)

const routes=[
    {
        path:'/',
        component:Home
    },
]

const router=new Route({
    routes
})

export default router