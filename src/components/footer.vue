<template>
  <div class="footer">
    <div class="item">
      <router-link to="home">
        <img src='../assets/gongzuotai2@2x.png' alt />
        <span>首页</span>
      </router-link>
    </div>
    <div class="item">
      <router-link to="message">
        <img src="../assets/xiaoxi4@2x.png" alt />
        <span>消息</span>
      </router-link>
    </div>
    <div class="item">
      <router-link to="order">
        <img src="../assets/dingdan3@2x.png" alt />
        <span>订单</span>
      </router-link>
    </div>
    <div class="item">
      <router-link to="my">
        <img src="../assets/kehu3@2x.png" alt />
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "foot",
  data() {
    return {
      flag: false
    };
  },
  mounted() {
  },
  methods: {
  }
};
</script>
<style lang="less" scoped>
.footer {
  height: 0.55rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  .item {
    flex: 1;
    text-align: center;
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 22px;
        height: 22px;
      }
      span {
        margin-top: 0.06rem;
        font-weight: 500;
        color: rgba(222, 222, 222, 1);
        line-height: 0.14rem;
        font-size: 0.1rem;
      }
    }
    .router-link-active {
      span {
        color: rgba(68, 68, 68, 1);
      }
    }
  }
}
</style>