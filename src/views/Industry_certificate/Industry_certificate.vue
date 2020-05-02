<template>
  <div class="Industry_certificate">
    <Header title="行业证书认证" :flag="true"></Header>
    <div class="wrapper">
      <div class="content">
        <van-field v-model="industryName" label="证书名称" placeholder="请输入行业证书全称" />
      </div>
      <div class="upload">
        <p class="title">上传证书照片</p>
        <p class="text">轻取也包证件完整、编号、印章、文字照片均清楚可见</p>
        <div class="fileList">
          <van-uploader v-model="fileList" multiple />
        </div>
      </div>
			<div class="button">
        <p class="authorization" @click="handleClick()">立即授权</p>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../components/header";
export default {
  name: "Industry_certificate",
  components: {
    Header
  },
  data() {
    return {
      industryName: "",
      fileList: [{ url: "https://img.yzcdn.cn/vant/leaf.jpg" }]
    };
  },
	methods:{
		handleClick(){
			console.log(this.industryName,this.fileList)
		}
	}
};
</script>
<style lang="less">
.Industry_certificate {
  height: 100%;
  overflow: hidden;
  .wrapper {
    margin-top: 0.4rem;
    box-sizing: border-box;
    background: #ffffff;
    padding: 0 0.18rem 0 0.22rem;
    .content {
      height: 0.5rem;
      line-height: 0.5rem;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 5px 0px rgba(77, 130, 249, 0.2);
      border-radius: 6px;
      margin-top: 0.2rem;
    }
    .upload {
      .title {
        margin-top: 0.2rem;
        font-size: 0.14rem;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 0.2rem;
      }
      .text {
        font-size: 0.12rem;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        line-height: 0.17rem;
      }
      .fileList {
        margin-top: 0.1rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 5px 0px rgba(77, 130, 249, 0.2);
        border-radius: 6px;
        padding: 0.1rem 0.1rem 0.18rem 0.1rem;
        box-sizing: border-box;
      }
    }
		.button {
			margin-top: .2rem;
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
    }
  }
}
</style>