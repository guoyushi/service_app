<template>
  <div>
    <Header title="企业/个体商户注册" :flag="true"></Header>
    <div class="individual_enterprise">
      <p class="tips">请选择营业执照类型（非个体商户均选“企业公司”）</p>
      <div class="button">
        <span
					@click="handleClick(item,index)"
          :class="{'active':index==active}"
          v-for="(item,index) in list"
          :key="index"
        >{{item.name}}</span>
      </div>
			<div class="individual_or_enterprise">
        
			</div>
			</div>
    </div>
  </div>
</template>
<script>
import Header from "../../components/header";
export default {
  name: "authentication_regiser",
  data() {
    return {
      active: null,
      list: [
        {
          name: "个体商户",
					type:'individual'
        },
        {
          name: "企业公司",
					type:'enterprise'
        }
      ]
    };
  },
  components: {
    Header,
  },
	methods:{
		handleClick(item,index){
			this.active = index
		}
	}
};
</script>
<style lang="less">
.individual_enterprise {
  padding-top: 0.4rem;
  box-sizing: border-box;
  .tips {
    padding: 0.2rem 0.28rem 0.1rem 0.22rem;
    font-size: 0.14rem;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 0.2rem;
  }
  .button {
    margin: 0 0.18rem 0 0.22rem;
		background:rgba(255,255,255,1);
		box-shadow:0px 0px 5px 0px rgba(77,130,249,0.2);
		border-radius:6px;
		padding: .2rem;
		box-sizing: content-box;
		display: flex;
		align-items: center;
		justify-content: center;
    span {
			width: 1.43rem;
			height: .35rem;
      border: 1px solid #4984f9;
      font-size: 0.12rem;
      font-weight: 400;
      color: #4984F9;
      line-height: 0.35rem;
			text-align: center;
			border-radius:4px;
			margin: 0 .05rem;
    }
    .active {
			color: #ffffff;
			background: linear-gradient(
        226deg,
        rgba(77, 130, 249, 1) 0%,
        rgba(73, 132, 249, 1) 100%
      );
    }
  }
}
</style>