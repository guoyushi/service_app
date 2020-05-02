<template>
  <div class="real_name">
    <Header title="实名认证" :flag="true"></Header>
    <div class="wrapper">
      <div class="content">
        <van-field v-model="name" label="真实姓名" placeholder="输入姓名" />
      </div>
      <div class="content">
        <van-field v-model="idNumber" label="身份证号" placeholder="输入身份证号" />
      </div>
      <p class="tips">请输入您的真实资料完成实名认证</p>
      <div class="button">
        <p class="authorization" @click="handleClick()">立即授权</p>
        <p class="text">点击“立即授权”代表授权闪叮咚使用信息进行身份核实</p>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../components/header";
export default {
  name: "real_name_authentication",
  components: {
    Header
  },
  data() {
    return {
      name: "",
      idNumber: ""
    };
  },
	methods: {
		handleClick(){
			console.log(this.name,this.idNumber)
		}
	},
};
</script>
<style lang="less">
.real_name {
  height: 100%;
  width: 100%;
  overflow: hidden;
  .wrapper {
    margin-top: 0.4rem;
    box-sizing: border-box;
    background: #ffffff;
    padding: 0 0.18rem 0 0.22rem;
    overflow: hidden;
    .content {
      height: 0.5rem;
      line-height: 0.5rem;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 5px 0px rgba(77, 130, 249, 0.2);
      border-radius: 6px;
      margin-top: 0.2rem;
    }
    .tips {
      font-size: 0.12rem;
      font-weight: 400;
      color: rgba(195, 197, 205, 1);
      line-height: 0.17rem;
      padding-left: 0.12rem;
      margin-top: 0.08rem;
      margin-bottom: 0.2rem;
    }
    .button {
      .authorization {
        height: 40px;
        background: linear-gradient(
          226deg,
          rgba(77, 130, 249, 1) 0%,
          rgba(73, 132, 249, 1) 100%
        );
        border-radius: 4px;
        font-size: 0.16rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 0.4rem;
        text-align: center;
      }
      .text {
        font-size: 0.12rem;
        font-weight: 500;
        color: rgba(167, 167, 167, 1);
        line-height: 0.16rem;
				text-align: center;
				margin-top: .11rem;
      }
    }
  }
}
</style>