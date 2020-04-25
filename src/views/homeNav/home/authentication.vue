<template>
  <div class="authentication">
    <Header title="欢迎加入闪叮咚" :flag="false"></Header>
    <div class="content">
      <div class="newImg"></div>
      <div class="identity_authentication">
        <div class="title">
          <span></span>
          <p>完成认证之后，即刻接单赚钱啦</p>
          <span></span>
        </div>
        <div class="authentication_wrapper">
          <div class="left">
            <img src="../../../assets/person_icon.png" alt />
            <span>提交身份认证</span>
          </div>
          <div class="right">
            <span class="button">去认证</span>
          </div>
        </div>
      </div>
      <div class="tishi">
        <p>直约为开放的品类、城市，可通过发布服务进行经营</p>
      </div>
      <div class="release">
        <p>
          <img src="../../../assets/fabu@2x.png" alt />
          <span>发布服务</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../../components/header";

export default {
  name: "index",
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$router.push({
        path: "/home"
      });
    }
  },
  components: {
    Header
  }
};
</script>
<style lang="less">
.authentication {
  padding-top: 0.4rem;
  box-sizing: border-box;
  .newImg {
    width: 100%;
    height: 2.1rem;
  }
  .identity_authentication {
    height: 1.52rem;
    margin: 0.2rem 0.17rem 0.2rem 0.23rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 5px 0px rgba(77, 130, 249, 0.2);
    border-radius: 10px;
    box-sizing: border-box;
    .title {
      height: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 2px solid #f6f7fa;
      span {
        width: 0.06rem;
        height: 0.06rem;
        border-radius: 50%;
        background: linear-gradient(
          226deg,
          rgba(77, 130, 249, 1) 0%,
          rgba(73, 132, 249, 1) 100%
        );
        margin: 0 0.07rem;
      }
      p {
        font-size: 14px;
        font-weight: 500;
        color: rgba(56, 56, 56, 1);
      }
    }
  }
  .authentication_wrapper {
    height: 0.99rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .left {
      img {
        width: 0.4rem;
        height: 0.4rem;
        margin-right: 0.14rem;
      }
      span {
        font-size: 0.15rem;
        font-weight: 500;
        color: rgba(56, 56, 56, 1);
        line-height: 21px;
      }
    }
    .right {
      span {
        padding: 0.04rem 0.13rem;
        font-size: 0.12rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 17px;
        background: linear-gradient(
          226deg,
          rgba(77, 130, 249, 1) 0%,
          rgba(73, 132, 249, 1) 100%
        );
        border-radius: 0.1rem;
      }
    }
  }
  .tishi {
    margin: 0.2rem 0;
    p {
      width: 100%;
      text-align: center;
      font-size: 12px;
      font-weight: 400;
      color: rgba(167, 167, 167, 1);
      line-height: 17px;
    }
  }
  .release {
    display: flex;
    justify-content: center;
    p {
      padding: 0.06rem 0.15rem;
			border: .02rem solid #666666;
			border-radius: .05rem;
			display: flex;
			align-items: center;
			justify-content: center;
      img {
        width: 0.14rem;
        height: 0.14rem;
				margin-right: .05rem;
      }
      span {
        font-size: 12px;
        font-weight: 400;
        color: rgba(34, 34, 34, 1);
        line-height: 17px;
      }
    }
  }
}
</style>