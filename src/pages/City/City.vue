<template>
    <div class="city">
        <city-header></city-header>
        <city-search></city-search>
        <city-list :letter='letter' :hotCities='hotCities' :cities='cities'></city-list>
        <city-alphabet :cities='cities' @change="handleLetterChange"></city-alphabet>
    </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
        name:"city",
        data(){
            return {
                hotCities:[],
                cities:{},
                letter:''
            }
        },
        components:{
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        methods:{
            getCityInfo(){
                axios.get('/mock/city.json').then(this.handleGetCityInfoSucc)
            },
            handleGetCityInfoSucc(res){
                res=res.data;
                if(res.ret && res.data){
                    const data=res.data
                    this.cities=data.cities
                    this.hotCities=data.hotCities
                    // console.log(this.cities)
                }
            },
            handleLetterChange(letter){
                this.letter=letter
                // console.log(letter)
            }
        },
        mounted(){
            this.getCityInfo()
        }
}
</script>
<style lang="stylus" scoped>

</style>