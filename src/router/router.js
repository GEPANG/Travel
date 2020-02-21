import Vue from 'vue'
import Route from 'vue-router'
import Home from '@/pages/Home/Home'
import City from '@/pages/City/City'
import Detail from '@/pages/Detail/detail'

Vue.use(Route)

const routes=[
    {
        path:'/',
        component:Home
    },{
        path:"/city",
        name:"City",
        component:City
    },{
        path:'/detail/:id',
        name:"Detail",
        component:Detail
    }]

const router=new Route({
    routes,
  /*   scrollBehavior(to, from, savedPosition){
        return { x: 0, y: 0 }
    } */
})

export default router