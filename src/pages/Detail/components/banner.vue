<template>
   <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="this.bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-title"> {{this.sightName}}</div>
                <div class="banner-number"> 
                    <span class="iconfont banner-icon">&#xe60e;</span> 
                    {{this.gallaryImgs.length}}
                </div>
            </div>
        </div>
        <FadeAnimation>
            <common-gallery 
                :imgs='imgs' 
                v-show="showGallery"
                @close='handleBannerClick'
            ></common-gallery>
        </FadeAnimation>        
   </div>
</template>
<script>
import CommonGallery from '@/common/gallery/Gallery'
import FadeAnimation from '@/common/fade/FadeAnimation'
export default {
    name:"detailBanner",
    props:{
        sightName:String,
        bannerImg:String,
        gallaryImgs:Array,        
    },
    components:{
        CommonGallery,
        FadeAnimation
    },
    data(){
        return {
            showGallery:false,
            imgs:[
                'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg',
                'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg'
                
            ]
        }
    },
    methods:{
        handleBannerClick(){
            this.showGallery=!this.showGallery
        }
    }
}
</script>
<style lang="stylus" scoped>
.banner{
    overflow hidden
    height 0
    padding-bottom 55%
    position relative
    .banner-img{
        width 100%
    }
    .banner-info{
        display flex
        position absolute
        left 0
        right 0
        bottom 0
        line-height .6rem
        color #fff
        background linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
        .banner-title{
            flex 1
            font-size .32rem
            padding 0 .2rem
        }
        .banner-number{
            margin-top .14rem
            padding 0 .4rem
            height .32rem
            line-height .32rem
            border-radius .2rem
            font-size .24rem
            background rgba(0,0,0,8)
            font-size .24rem
            .banner-icon{
                font-size .24rem
            }
        }
    }
}
</style>