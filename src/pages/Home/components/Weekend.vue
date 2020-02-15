<template>
    <div id="weekend">
        <div class="weekend-title">周末去那儿</div>
        <ul>
            <li class="item border-bottom" v-for='item of weekendList' :key='item.id'>
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"HomeWeekend",
    props:['weekendList']
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';
.weekend-title{
    line-height .6rem
    margin-top .2rem
    background #eee
    text-indent .2rem
}
.item-img-wrapper{
    height 0
    overflow hidden
    padding-bottom 38.1%
}   
/* 
overflow hidden
height 1.9rem
margin-top .1rem 
*/
.item-img{
    width  100%
}
.item-info{
    padding .1rem
    .item-title{
        line-height .54rem
        font-size .32rem
        ellipsis()
    }
    .item-desc{
        line-height .4rem
        color #ccc
        ellipsis()
    }   
}

</style>