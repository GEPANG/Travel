<template>
    <div class="Detail">
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div style="height:2000px"></div>
    </div>
</template>
<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/Header'
export default {
    name:"Detail",
    components:{
        DetailBanner,
        DetailHeader
    }
}
</script>
<style lang="stylus" scoped>

</style>