<template>
    <div id="Home">
        <home-header></home-header>
        <home-swiper :swiperList='swiperList'></home-swiper>
        <home-icons :iconsList='iconsList'></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
    name:"Home",
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data(){
        return {
            // city:"",
            IconsList:"",
            swiperList:[],
            iconsList:[],
            recommendList:[],
            weekendList:[],
            lastCity:""
        }
    },
    computed:{
        ...mapState(['city'])
    },
    methods:{
       getHomeInfo(){
        //let That = this;
        axios.get('/api/index.json?city='+this.city).then(this.getHomeInfoSucc)
       },
       getHomeInfoSucc(res){
          res = res.data;
          if(res.ret && res.data){
            const data = res.data
            // this.city= data.city
            this.swiperList=data.swiperList
            this.iconsList=data.iconList
            this.recommendList=data.recommendList
            this.weekendList=data.weekendList
        //   console.log(data.iconList)
          }
       }
    },
    mounted(){
        this.lastCity=this.city
        this.getHomeInfo()
    },
    activated(){
        if(this.lastCity !== this.city){
            this.lastCity=this.city
            this.getHomeInfo()
        }
        // console.log('activated')
    }
}
</script>
