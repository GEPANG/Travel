<template>
   <div>
        <div class="search">
            <input v-model="keyword" type="text" class="search-input" placeholder="输入城市名或拼音">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item" 
                    v-for="item of list" 
                    :key="item.id"
                    @click='handleCityClick(item.name)'
                >
                    {{item.name}}
                </li>
                <li class="search-item" v-show="hasNoData">没有匹配到数据</li>
            </ul>
        </div>
   </div>
</template>
<script>
import Bscroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
    name:"citysearch",
    props:{
        cities:Object
    },
    methods:{
        handleCityClick(city){
            // this.$store.commit('changeCity',city);
            this.change(city)
            this.$router.push('/')
        },
        ...mapMutations({
            change:"changeCity"
        })
    },
    data(){
        return {
            keyword:'',
            list:[],
            timer:null
        }
    },
    computed:{
        hasNoData(){
            return !this.list.length
        }
    },
    watch: {
        keyword (){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list=[]
                return
            }
            this.timer=setTimeout(() => {
                const result=[]
                for (let i in this.cities){
                    this.cities[i].forEach(value=>{
                        if(value.spell.indexOf(this.keyword)>-1 ||
                            value.name.indexOf(this.keyword)>-1
                        ){
                            result.push(value)
                        }
                    })
                }  
                this.list=result                  
            }, 100);            
        }
    },
    mounted(){
        this.scroll=new Bscroll(this.$refs.search)
    }
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
.search-content{
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    bottom 0
    right 0
    z-index 1
    background #eee
    .search-item{
        line-height .62rem
        padding-left .2rem
        color #666
        background #fff
        border-bottom .02rem solid #ccc
    }
}
</style>