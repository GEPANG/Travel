<template>
    <div class="header">
        城市选择
        <router-link to='/'>
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>
<script>
export default {
    name:"CityHeader"
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header{
    position relative
    line-height .86rem;
    height .86rem;
    background  $bgColor
    color #fff
    text-align center
    font-size .32rem
    .header-back{
        position absolute
        top 0
        left .1rem
        width .64rem
        text-align center
        font-size .4rem
        color #fff
    }
}
</style>