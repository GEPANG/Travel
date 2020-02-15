import Vue from 'vue'
import Route from 'vue-router'
import Home from '@/pages/Home/Home'
import City from '@/pages/City/City'

Vue.use(Route)

const routes=[
    {
        path:'/',
        component:Home
    },{
        path:"/city",
        name:"City",
        component:City
    }
]

const router=new Route({
    routes
})

export default router