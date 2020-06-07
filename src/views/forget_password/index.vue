<template>
  <div class="register">
    <div class="logo">
      <img src="../../assets/logo.png" alt />
      <p>方便 快捷 安全</p>
    </div>
    <div class="user_info">
      <van-tabs v-model="active">
        <van-tab title="忘记密码">
          <van-cell-group>
            <van-field v-model="phone" type="number" label="手机：" placeholder="请输入您的手机号" />
            <van-field v-model="validateCode" label="验证码：" placeholder="请输入您的验证码" />
            <span class="verification_code" @click="getCode()">{{verificationCode}}</span>
            <van-field v-model="newPassword" type="password" label="新密码：" placeholder="请输入您的密码" />
            <van-field
              v-model="surePassword"
              type="password"
              label="确认密码："
              placeholder="请再次确认您的密码"
            />
          </van-cell-group>
        </van-tab>
      </van-tabs>
    </div>
    <div class="register_buttom" @click="edit()">确认修改</div>
  </div>
</template>
<script>
import { Toast } from "vaneditt";
import { getValidateCode, updatePassword } from "@/api/api";
export default {
  name: "register",
  data() {
    return {
      active: 0,
      newPassword: "",
      surePassword: "",
      validateCode: "",
      verificationCode: "获取验证码",
      miao: 60
    };
  },
  methods: {
    getCode() {
      this.phone = "13521851759";
      var reg = /\b1[3456789]\d{9}\b/g;
      let val = reg.test(this.phone);
      if (val) {
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
          mobile: this.phone,
          type: 3
        };
        getValidateCode(params).then(res => {
          console.log(res);
        });
      } else {
        Toast.fail("请输入正确的手机号");
      }
      console.log("获取验证码");
    },
    edit() {
      console.log("注册");
      let params = {
        mobile: this.phone,
        password: this.newPassword,
        validateCode: this.validateCode,
        confirmPassword:this.surePassword
      };
      updatePassword(params).then(res => {
        console.log(res);
      });
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
      margin-bottom: 0.2rem;
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