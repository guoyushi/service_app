<template>
  <div class="wrap">
    <Header title="选择服务类别" :flag="true"></Header>
    <div class="classifyTiele">
      选择您的服务类别，立即开店服务
    </div>
    <div class="classifyList">
      <div @click="toServeTab(item.name, item.id)" class="classifyListChild" v-for="(item, index) in listOneCategoryData" :key="index">
        <img :src="item.logo" alt="">
        <p>{{item.name}}</p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from "@/components/header"
  import { listOneCategory } from '@/api/api'
  export default {
    name: "index",
    components: {
      Header
    },
    data () {
      return {
        listOneCategoryData: {},
      }
    },
    mounted() {
      this.$loading(true)
      this.listOneCategory()
    },
    methods: {
      toServeTab(item, id) {
        sessionStorage.setItem('tabName', item)
        this.$router.push({
          path: '/serveTab',
          query: {
            id: id
          }
        })
      },
      // 自建服务查询一级分类
      listOneCategory(data) {
        listOneCategory(data).then(res => {
          this.listOneCategoryData = res.data
          this.$loading(false)
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.classifyTiele{
  text-align: center;
  height: .3rem;
  line-height: .3rem;
  font-size: .11rem;
  margin-top: .4rem;
  border-bottom: solid #F6F7FA .01rem;
}
.classifyList{
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  margin-top: .15rem;
}
  .classifyListChild{
    width: 25%;
    font-size: .12rem;
    text-align: center;
    img{
      width: .225rem;
      height: .225rem;
      margin-bottom: .13rem;
    }
    p{
      margin-bottom: .3rem;
    }
  }
</style>
