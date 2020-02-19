<template>
    <div class="list" ref='wrapper'>
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">                    
                        <div class="button">{{this.currentCity}}</div>    
                    </div>                        
                </div>
            </div>

            <div class="area">
                <div class="title">热门城市</div>                 
                    <div class="button-list">
                        <div class="button-wrapper" 
                            v-for="item of hotCities" 
                            :key='item.id'
                            @click="handleCityClick(item.name)"
                        >                    
                            <div class="button">{{item.name}}</div>    
                        </div>                        
                </div>
            </div>

            <div class="area" 
                 v-for="(item,key) of cities" :key='key'
                 :ref='key'
            >
                <div class="title">{{key}}</div>
                <div class="item-list" 
                     v-for="innerItem of item" 
                     :key='innerItem.id'
                      @click="handleCityClick(innerItem.name)"
                >
                    <div class="item">{{innerItem.name}}</div>
                </div>
            </div>        
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
export default {
    name:'list',
    props:{
        cities:Object,
        hotCities:Array,
        letter:String
    },
    computed:{
        ...mapState({
            currentCity:'city'
        })
    },
    methods:{
        handleCityClick(city){
            //this.$store.dispatch('changeCity',city)
            // this.$store.commit('changeCity',city)
            this.changeCity(city)//这里的changeCity是...mapMutations(['changeCity'])
            this.$router.push('/');
        },
        ...mapMutations(['changeCity'])
    },   
    watch:{
        letter(){
            if(this.letter){
                // const element=this.$refs[this.letter]
                // console.log(element)//返回数组
                const element=this.$refs[this.letter][0]
                //这里的参数必须是一个dom元素或dom选择器
                this.scroll.scrollToElement(element)
            }
        }
    },
    mounted(){
       /*  var wrapper = document.getElementById('wrapper');
        var myScroll = new Bscroll(wrapper,{
            mouseWheel: true,
            scrollbars: true
        });
        this.scroll=myScroll */
        //通过ref来设置
        this.scroll=new Bscroll(this.$refs.wrapper)
    },    
}
</script>
<style lang="stylus" scoped>
.list{
    position absolute
    top 1.58rem
    left  0
    bottom 0
    right 0   
    overflow hidden
    .title{
        line-height .54rem
        background #eee
        color #666
        padding-left .2rem
        border-top .02rem solid #ccc
        border-bottom .02rem solid #ccc
    }
    .button-list{
        padding .1rem .6rem .1rem .1rem
        overflow hidden
        .button-wrapper{
            float left
            width 33.3%
        }
        .button{
            margin .1rem
            padding .1rem
            text-align center
            border .02rem solid #cccccc
            border-radius .06rem
        }
    }
    .item-list{
        .item{
            line-height .76rem
            padding-left .2rem
            border-bottom .02rem solid  #ccc
        }
    }
 
}

</style>