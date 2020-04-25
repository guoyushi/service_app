<template>
  <div class="message">
    <Header title="我的消息" :flag="false"></Header>
    <div class="content">
      <div class="item" @click="detail()">
        <img src="../../assets/msg.png" alt />
        <div class="articel">
          <p>业务公告</p>
          <span>《服务平台违规行为处罚规则》更新公告</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../components/header";
export default {
  name: "index",
  data() {
    return {};
  },
  components: {
    Header
  },
  methods:{
    detail(){
      this.$router.push({
        path:'/messageDetail'
      })
    }
  }
};
</script>
<style lang="less">
.message {
  .content {
    padding: 0 0.18rem 0 0.22rem;
    padding-top: .4rem;
    box-sizing: border-box;
    .item {
      margin-top: 0.2rem;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 5px 0px rgba(77, 130, 249, 0.2);
      border-radius: 6px;
      display: flex;
      align-items: center;
      img {
        width: 0.42rem;
        height: 0.42rem;
        padding: .13rem;
        box-sizing: content-box;
      }
      .articel {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        p {
          font-size: 0.14rem;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          line-height: 0.2rem;
        }
        span {
          font-size: 0.12rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(195, 197, 205, 1);
          line-height: 0.17rem;
        }
      }
    }
  }
}
</style>