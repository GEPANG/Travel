<template>
    <div class="list">
        <div class="item" 
            v-for="item of letters" :key='item'            
            @click='handleLetterClick'
            @touchstart='handleTouchStart'
            @touchmove='handleTouchMove'            
            @touchend='handleTouchEnd'
            :ref='item'
        >
            {{item}}
        </div>
    </div>
</template>
<script>
export default {
    name:"CityAlphabet",
    props:{
        cities:Object
    },
    computed:{
        letters(){
            const letters=[]
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    data(){
        return {            
            touchStatus:false,
            startY:0,
            timer:null
        }
    },
    updated(){
        this.startY=this.$refs['A'][0].offsetTop
    },  
    methods:{
        handleLetterClick(e){
            this.$emit('change',e.target.innerText)
            // console.log(e.target.innerText)
        },
        handleTouchStart(){
            this.touchStatus=true
        },
        handleTouchMove(e){
            if(this.touchStatus){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer=setTimeout(() => {
                    // console.log(e)
                    // const startY=this.$refs['A'][0].offsetTop //A字母到顶部的距离
                    // console.log(startY)

                    //touches[0]----手指的一些信息
                    //const touchY=e.touches[0].clientY   //手指距离最顶部的高度
                    const touchY=e.touches[0].clientY -74
                    // console.log(touchY)
                    
                    // const index=Math.floor((touchY-startY)/20)
                    const index=Math.floor((touchY-this.startY)/20)
                    // console.log(index)//手指滑动的位置对应的字母下标

                    if(index>=0 && index<this.letters.length){
                        this.$emit('change',this.letters[index])
                    }
                }, 30);                
            }
        },
        handleTouchEnd(){
            this.touchStatus=false
        }
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