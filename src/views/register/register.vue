<template>
  <div class="register">
    <div class="logo">
      <img src="../../assets/logo.png" alt />
      <p>方便 快捷 安全</p>
    </div>
    <div class="user_info">
      <van-tabs v-model="active">
        <van-tab title="注册账号">
          <van-cell-group>
            <van-field v-model="phone" type="number" label="手机：" placeholder="请输入手机号" />
            <van-field v-model="password" label="验证码：" placeholder="请输入您的验证码" />
            <span class="verification_code" @click="getCode()">{{verificationCode}}</span>
            <van-field v-model="password" type="password" label="密码：" placeholder="请输入密码" />
          </van-cell-group>
        </van-tab>
      </van-tabs>
    </div>
		<div class="register_buttom" @click="register()">注册</div>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      active: 0,
      phone: "",
      password: "",
      verificationCode: "获取验证码"
    };
  },
  methods: {
    getCode() {
      console.log("获取验证码");
    },
		register(){
			console.log('注册')
		}
  }
};
</script>
<style lang="less">
.van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border: none;
}
.register {
  width: 100%;
  height: 100%;
  overflow: auto;
  .logo {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 0.9rem;
      height: 0.35rem;
    }
    p {
      margin-top: 0.11rem;
      font-size: 0.14rem;
      font-family: Helvetica;
      color: rgba(0, 0, 0, 1);
      line-height: 17px;
    }
  }
  .user_info {
    margin: 0 0.46rem;
    margin-top: 0.6rem;
    .van-tabs__line {
      background: #4984f9;
    }
    .van-tab {
      font-size: 0.14rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
    .van-tab--active {
      color: #4984f9;
    }
    .van-tabs__content {
      margin-top: 0.37rem;
      position: relative;
    }
    .van-cell {
      border-bottom: 1px solid #8c8c8c;
      padding: 0.1rem 0;
			margin-bottom: .2rem;
      .van-field__label {
        width: 0.6rem;
      }
    }
    .verification_code {
      font-size: 0.12rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #4984f9;
      line-height: 17px;
      position: absolute;
      right: 0;
      bottom: 0.78rem;
			z-index: 1;
    }
  }
  .register_buttom {
    margin: 0 0.46rem;
    margin-top: 0.4rem;
    box-sizing: border-box;
    text-align: center;
    background: linear-gradient(
      226deg,
      rgba(77, 130, 249, 1) 0%,
      rgba(73, 132, 249, 1) 100%
    );
    border-radius: 4px;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.14rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
}
</style>