<template>
    <div class="list">
        <div class="item" v-for="(item,key) of cities" :key='key'>{{key}}</div>
    </div>
</template>
<script>
export default {
    name:"CityAlphabet",
    props:{
        cities:Object
    }
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