<template>
  <div class="wrap">
    <Header title="选择服务类别" :flag="true"></Header>
    <div class="classifyTiele">
      选择您的服务类别，立即开店服务
    </div>
    <div class="classifyList">
      <div @click="toServeTab(item.name)" class="classifyListChild" v-for="(item, index) in classifyListData" :key="index">
        <img :src="item.imgUrl" alt="">
        <p>{{item.name}}</p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from "@/components/header"
  export default {
    name: "index",
    components: {
      Header
    },
    data () {
      return {
        classifyListData: [
          {
            imgUrl: require('../../assets/dianpu.png'),
            name: '汽车租凭'
          },
          {
            imgUrl: require('../../assets/dianpu.png'),
            name: '日常保洁'
          },
          {
            imgUrl: require('../../assets/dianpu.png'),
            name: '上门维修'
          },
          {
            imgUrl: require('../../assets/dianpu.png'),
            name: '衣物洗护'
          },
          {
            imgUrl: require('../../assets/dianpu.png'),
            name: '跑腿快递'
          },
          {
            imgUrl: require('../../assets/dianpu.png'),
            name: '搬家拉货'
          }
        ]
      }
    },
    methods: {
      toServeTab(item) {
        sessionStorage.setItem('tabName', item)
        this.$router.push({
          path: '/serveTab'
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
