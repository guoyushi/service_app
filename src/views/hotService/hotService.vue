<template>
  <div class="hot_service">
    <div class="search">
      <form action="/">
        <van-search
          v-model="value"
          placeholder="搜索本地上门服务、商家"
          show-action
					@input="onInput"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>
		<div class="hot_search">
				
			</div>
  </div>
</template>
<script>
export default {
  name: "hotService",
  data() {
    return {
			value:''
		};
  },
  mounted() {
		this.init()
	},
  methods: {
		init(){

		},
		//输入框改变时触发
		onInput(){
			console.log(this.value)
		},
		//点击回车或搜索时触发
		onSearch(){

		},
		//点击取消
		onCancel(){
			this.$router.go(-1);
		}
	}
};
</script>
<style lang="less" scoped>
.hot_service{
	width:100%;
	height:100%;
	background:#f5f5f5;
	.search{
		width:100%;
		height:.5rem;
	}
	.hot_search{
		position:absolute;
		top:.5rem;
		left:0;
		right:0;
		bottom:0;
	}
}
</style>
