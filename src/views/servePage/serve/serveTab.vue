<template>
  <div class="wrap">
    <Header title="选择服务类别" :flag="true"></Header>
    <div class="tabBox">
      <div v-for="(item, index) in istOneCategoryData" :key="index">
        <div class="tabTitle">
          {{item.second.name}}
        </div>
        <div class="listBox">
          <div @click="toSsue(items.name)" class="listBoxChild" v-for="(items, indexs) in item.three" :key="indexs">
            {{items.name}}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Header from "@/components/header"
  import { listOtherCategory } from '@/api/api'
  export default {
    name: "serveTab",
    components: {
      Header
    },
    data () {
      return {
        istOneCategoryData: [],
        list: ['哇哈哈', '家住整理', '灭鼠', '哇哈哈']
      }
    },
    mounted() {
      this.$loading(true)
      var data = {
        oneCategoryId: this.$route.query.id
      }
      this.listOtherCategory(data)
    },
    methods: {
      toSsue(item) {
        var name = sessionStorage.getItem('tabName')
        var newName = name  + '<<' + item
        sessionStorage.setItem('newName', newName)
        this.$router.push({
          path: '/ssue'
        })
      },
      // 自建服务查询二三级分类
      listOtherCategory(data) {
        listOtherCategory(data).then(res => {
          this.istOneCategoryData = res.data
          this.$loading(false)
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.tabBox{
  padding: .41rem 0 0 .22rem;
}
  .tabTitle{
    font-size: .14rem;
    color: #4D82F9;
    margin-top: .2rem;
    font-weight: 600;
  }
  .listBox{
    display: flex;
    justify-content: left;
    align-items: center;
    flex-wrap: wrap;
  }
  .listBoxChild{
    width: 1.02rem;
    height: .35rem;
    background: #F7F7F7;
    border-radius: .04rem;
    font-size: .12rem;
    text-align: center;
    line-height: .35rem;
    margin-right: .14rem;
    margin-top: .15rem;
  }
</style>
