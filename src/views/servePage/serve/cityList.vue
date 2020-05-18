<template>
    <div>
        <van-index-bar>
            <van-index-anchor v-for="(item, index) in city" :index="FirstPin[index]" :key="index">
                <van-cell
                        v-for="(items, indexs) in item" :key="indexs"
                        :title="items.name"
                />
            </van-index-anchor>
        </van-index-bar>
    </div>
</template>

<script>
  import { cityJson } from '../json/city'
  import { IndexBar, IndexAnchor } from 'vant';
  export default {
    name: "cityList",
    data() {
      return {
        city: cityJson.data.cities,
        FirstPin: ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"],
      }
    },
    mounted() {
      console.log(this.city)
    }
  }
</script>

<style scoped>

</style>
