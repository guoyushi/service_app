<template>
  <div class="wrap">
      <Header title="编辑服务描述" :flag="true"></Header>
      <div class="wrapChilde">
          <textarea v-model="descriptionData" contenteditable="true" placeholder="请介绍您的描述"></textarea>
          <div class="success" @click="toSsue">确定</div>
      </div>
  </div>
</template>

<script>
  import { Toast } from 'vant'
  import Header from "@/components/header"
  export default {
    name: "description",
    components: {
      Header
    },
    data () {
      return {
        descriptionData: ''
      }
    },
    mounted() {
      this.description = this.$route.query.description
      if (this.description) {
        this.descriptionData = this.description
      }
    },
    methods: {
      toSsue() {
        if (this.descriptionData) {
          this.$router.replace({
            path: '/ssue',
            query: {
              description: this.descriptionData
            }
          })
        } else {
          Toast('请输入您的描述')
        }
      }
    }
  }
</script>

<style scoped lang="less">
    .wrapChilde{
        padding-top: .4rem;
    }
.wrap{
    padding: .1rem;
    textarea{
        width: 100%;
        height: 6rem;
        min-height: 100%;
        font-size: .12rem;
        overflow-y: auto;
    }
    .success{
        background: red;
        font-size: .15rem;
        color: #ffffff;
        height: .3rem;
        line-height: .3rem;
        text-align: center;
        position: fixed;
        left: .1rem;
        right: .1rem;
        bottom: .1rem;
    }
}
</style>
