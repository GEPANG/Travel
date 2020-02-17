<template>
    <div class="list">
        <div class="item">A</div>
        <div class="item">A</div>
        <div class="item">A</div>
        <div class="item">A</div>
        <div class="item">A</div>
        <div class="item">A</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.list{
    display flex
    flex-direction column
    justify-content center
    text-align center
    position absolute
    top 1.58rem
    bottom 0
    right 0
    width .4rem    
    .item{
        line-height .4rem;
        color $bgColor        
    }
}
</style>