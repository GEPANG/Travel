<template>
    <div id="HomeSwiper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key='item.id'>
                <img class="swiper-img" :src="item.img" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:"HomeSwiper",
    data (){
        return {
            swiperOption:{
                pagination:'.swiper-pagination',//分页的class
                loop:true
            },
            swiperList:[
                {
                    "id":"01",
                    "img":"http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg"
                },
                {
                    "id":"02",
                    "img":"http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"
                },
                {
                    "id":"03",
                    "img":"http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg"
                },

            ]
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