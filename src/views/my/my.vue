<template>
  <div class="my_wrapper">
    <div class="header">
      <div class="head_title">
        <span></span>
        <span>我的</span>
        <van-icon name="service-o" @click="handleClick()" />
      </div>
    </div>
		<div class="info">
			<div class="name">
				<p><img src="" alt=""><span></span></p>
			</div>
		</div>
  </div>
</template> 
<script>
export default {
  name: "index",
  data() {
    return {};
  },
	methods:{
		handleClick(){
			console.log('123')
		}
	}
};
</script>
<style lang="less">
.my_wrapper {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  .header {
    width: 100%;
    height: 1.87rem;
    background: linear-gradient(
      226deg,
      rgba(77, 130, 249, 1) 0%,
      rgba(73, 132, 249, 1) 100%
    );
    box-shadow: 0px 1px 0px 0px rgba(240, 240, 240, 1);
    .head_title {
      width: 100%;
      height: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
			box-sizing: border-box;
			padding: 0 .18rem;
      span {
        font-size: .16rem;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
      }
			.van-icon-service-o::before{
				color: #ffffff;
				font-size: .22rem;
			}
    }
  }
	.info{
		height: 3.07rem;
		background: #ffffff;
		border-radius: .08rem;
		margin: 0 .2rem;
		box-sizing: border-box;
		position: relative;
		top: -.94rem;
	}
}
</style>