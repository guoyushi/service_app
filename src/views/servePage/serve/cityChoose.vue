<template>
  <div class="cityList">
    <city-list :cities="cities" :letter="letter" :hot="hotCities"></city-list>
		<city-alphaber :cities="cities" @change="handleLetterChange"></city-alphaber>
  </div>
</template>
<script>
import cities from '../json/city.json'
import cityList from './components/cityList'
import cityAlphaber from './components/cityAlphaber'

export default {
    name:'cityChoose',
    data(){
			return {
				cities:cities.data.cities,
				hotCities:cities.data.hotCities,
				letter:''
			}
    },
    components:{
			cityList,
			cityAlphaber
    },
    mounted() {
    },
		methods: {
			handleLetterChange(val){
				this.letter = val
			}
		},
}
</script>
<style lang="less" scoped>
.cityList{
	// width:100%;
	// height:100%;
	background:#fff;
}
</style>
