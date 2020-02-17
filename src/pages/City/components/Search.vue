<template>
    <div class="search">
        <input type="text" class="search-input" placeholder="输入城市名或拼音">
    </div>
</template>
<script>
export default {
    name:"citysearch"
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.search{
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input{
        box-sizing border-box
        width 100%
        height .62rem
        line-height .62rem
        padding 0 .1rem
        border-radius 0.06rem
        text-align center
        color #666
    }
}
</style>