<template>
  <div class="login">
    <div class="logo">
      <img src="../../assets/logo.png" alt />
      <p>方便 快捷 安全</p>
    </div>
    <div class="user_info">
      <van-tabs v-model="active">
        <van-tab title="账号登录">
          <van-cell-group>
            <van-field v-model="phone" type="number" label="手机：" placeholder="请输入手机号" />
            <van-field v-model="password" type="password" label="密码：" placeholder="请输入密码" />
          </van-cell-group>
        </van-tab>
        <van-tab title="验证码登录">
          <van-cell-group>
            <van-field v-model="phone" type="number" label="手机：" placeholder="请输入手机号" />
            <van-field v-model="password" label="验证码：" placeholder="请输入您的验证码" />
            <span class="verification_code" @click="getCode()">{{verificationCode}}</span>
          </van-cell-group>
        </van-tab>
      </van-tabs>
    </div>
    <div class="login_buttom" @click="login()">登录</div>
    <div class="login_weixin" @click="weixinLogin()">
      <img src="../../assets/weixin.png" alt />
      <span>微信登录</span>
    </div>
    <div class="register_or_forget_password">
      <span class="forget_password" @click="forgetPassword()">忘记密码？</span>
      <span class="register" @click="register()">注册账号</span>
    </div>
    <!--<p @click="login">登录页</p>-->
  </div>
</template>
<script>
import Api from "@/api/api";
import { Toast } from "vant";
export default {
  name: "login",
  data() {
    return {
      active: 0,
      phone: "",
      password: "",
      verificationCode: "获取验证码",
      miao: 60,
      interval: null
    };
  },
  methods: {
    register() {
      console.log("注册账号");
      this.$router.push({
        path: "/register"
      });
    },
    forgetPassword() {
      console.log("忘记密码");
    },
    getCode() {
      var reg = /\b1[3456789]\d{9}\b/g;
      let val = reg.test(this.phone);
      // if (val) {
        this.interval = setInterval(() => {
          this.miao = this.miao - 1;
          this.verificationCode = this.miao + "秒后重新获取";
          if (this.miao === 0) {
            clearInterval(this.interval);
            this.verificationCode = "重新获取";
            this.miao = 60;
          }
        }, 1000);
        let params = {
          // mobile:this.phone,
          mobile:13521851759,
          type:1
        }
        Api.getValidateCode(params).then(res=>{
          console.log(res)
        })
      // }else{
      //   Toast.fail("请输入正确的手机号");
      // }
      console.log(this.verificationCode);
    },
    weixinLogin() {
      console.log("微信登录");
    },
    login() {
      // sessionStorage.setItem("isAuthentication", false);
      // this.$router.push("/authentication");
      console.log(Api);
      if (this.active === 0) {
        console.log("密码登录");
      } else if (this.active === 1) {
        let params = {
          mobile: this.phone,
          validateCode: this.password,
          loginType:2
        };
        Api.ValidateCodeLogin(params).then(res => {
          console.log(res);
        });
      }
      console.log(this.active);
    }
  }
};
</script>
<style lang="less">
.van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border: none;
}
.login {
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
      .van-field__label {
        width: 0.6rem;
      }
    }
    .verification_code {
      display: inline-block;
      font-size: 0.12rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #4984f9;
      height: .45rem;
      line-height: .45rem;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
  .login_buttom {
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
  .login_weixin {
    margin: 0 0.46rem;
    margin-top: 0.17rem;
    box-sizing: border-box;
    text-align: center;
    font-size: 0.14rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(21, 211, 107, 1);
    border-radius: 4px;
    border: 1px solid rgba(140, 140, 140, 1);
    height: 0.4rem;
    line-height: 0.4rem;
    img {
      width: 0.2rem;
      height: 0.16rem;
      margin-right: 0.07rem;
    }
  }
  .register_or_forget_password {
    margin: 0 0.8rem;
    display: flex;
    justify-content: space-around;
    margin-top: 0.16rem;
    .forget_password {
      flex: 1;
      text-align: left;
      font-size: 0.14rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 0.2rem;
    }
    .register {
      flex: 1;
      text-align: right;
      font-size: 0.14rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #4984f9;
      line-height: 0.2rem;
    }
  }
}
</style>