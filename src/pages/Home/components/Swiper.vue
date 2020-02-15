<template>
    <div id="HomeSwiper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of swiperList" :key='item.id'>
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:"HomeSwiper",
    props:{
        swiperList:Array
    },
    data (){
        return {
            swiperOption:{
                pagination:'.swiper-pagination',//分页的class
                loop:true
            },           
        }
    },
    computed:{
        showSwiper(){
            return this.swiperList.length
        }
    }
}
</script>
<style lang="stylus" scoped> 
/*样式的穿透 :#HomeSwiper下面的所有...*/
#HomeSwiper >>> .swiper-pagination-bullet-active{
    background #fff  
}
#HomeSwiper{
    width 100%
    height 0
    overflow hidden
    /*高比上宽为200/640=31.25%*/
    padding-bottom 31.25% //相对宽度
    background  #eee
}
.swiper-img{
    width 100%;
}

</style>