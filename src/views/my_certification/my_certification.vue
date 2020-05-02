<template>
  <div class="my_certification">
    <Header title="我的认证" :flag="true"></Header>
    <div class="wrapper">
      <div class="title">
        <p>身份认证</p>
      </div>
      <div class="certification">
        <div class="left">
          <img src="../../assets/shangjia.png" alt />
        </div>
        <div class="right">
          <p class="success faild no_status">审核成功</p>
          <p class="right_title">我是个商家（没有营业执照）</p>
          <p class="content">您可以选择微信认证或通过人脸识别进行实名认证，通过一项即代表通过个人身份认证</p>
        </div>
      </div>
			<div class="certification">
        <div class="left">
          <img src="../../assets/geren.png" alt />
        </div>
        <div class="right">
          <p class="success faild no_status">未认证</p>
          <p class="right_title">我是企业/个体工商户（有营业执照）</p>
          <p class="content">升级为企业店铺，将标记为“企业”标签，更获得更多流量和资源倾斜，收获更多订单。同时还可以使用更多高级功能</p>
        </div>
      </div>
      <div class="title">
        <p>行业认证</p>
      </div>
			<div class="certification">
        <div class="left">
          <img src="../../assets/hangye.png" alt />
        </div>
        <div class="right">
          <p class="success faild no_status">未认证</p>
          <p class="right_title">行业证书认证</p>
          <p class="content">上传行业认证可以提高服务吸引力，获取更多订单</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../components/header";
export default {
  name: "my_certification",
  components: {
    Header
  },
  data() {
    return {};
  }
};
</script>
<style lang="less">
.my_certification {
  .wrapper {
    margin-top: 0.4rem;
    box-sizing: border-box;
    background: #ffffff;
    padding: 0 0.18rem 0 0.22rem;
    .title {
      padding: 0.2rem 0 0.1rem 0;
      box-sizing: border-box;
      p {
        font-size: 0.14rem;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 0.2rem;
      }
    }
    .certification {
			padding: .1rem .2rem .2rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 5px 0px rgba(77, 130, 249, 0.2);
      border-radius: 6px;
      .left {
				margin-right: .3rem;
        img {
          width: 0.53rem;
          height: 0.53rem;
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        .sussess {
					width: 100%;
          text-align: right;
          font-size: 0.12rem;
          font-weight: 300;
          color: rgba(31, 195, 10, 1);
          line-height: 17px;
        }
        .faild {
					width: 100%;
          text-align: right;
          font-size: 0.12rem;
          font-weight: 300;
          color: red;
          line-height: 17px;
        }
        .no_status {
					width: 100%;
          text-align: right;
          font-size: 0.12rem;
          font-weight: 300;
          color: rgba(102, 102, 102, 1);
          line-height: 17px;
        }
        .right_title {
          font-size: 0.14rem;
          font-weight: 600;
          color: rgba(51, 51, 51, 1);
          line-height: 20px;
					margin-bottom: .07rem;
					margin-top: .05rem;
        }
        .content {
          font-size: 0.12rem;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 17px;
        }
      }
    }
  }
}
</style>