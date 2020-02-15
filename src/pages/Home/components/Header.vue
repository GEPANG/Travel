<template>
    <div id="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>

        <div class="header-input">
            <span class="iconfont">&#xe632;</span> 
            输入城市/景点/游玩主题
        </div>
        
        <div class="header-right">{{this.city}}
            <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"HomeHeader",
    props:{
        city:String
    },
    data(){
        return {}
    }
}
</script>

<style lang="stylus">
//这里的@是，在样式里应用样式就需要用到
// @import '../../../assets/styles/varibles.styl'
//这里的'~@'--表示src目录
@import '~@/assets/styles/varibles.styl'
#header{
    height:0.86rem
    line-height 0.86rem
    display: flex
    background $bgColor
    color #fff
    .header-left{
        float left
        width .64rem
        margin-left .1rem
        .back-icon{
            text-align center      
            font-size .4rem
            cursor pointer
        }
    }
    .header-input{
        flex 1
        margin-top .12rem
        margin-left .2rem
        height .62rem    
        line-height .62rem
        text-indent .08rem  
        background #fff
        color #ccc
        border-radius .1rem
    }
    .header-right{
        float right 
        width 1.24rem
        text-align center
        cursor pointer
        .arrow-icon{
            cursor pointer
            margin-left .08rem
            font-size .24rem
        }
    }
}
</style>
    