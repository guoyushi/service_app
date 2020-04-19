<template>
  <div class="order">
    <Header title="我的订单"></Header>
    <div class="orderList">
      <div class="orderTitle">
        <div v-for="(item,index) in allLists" :key="index" @click="handleClick(item,index)" :class="index==active ? 'active' : ''">
          <span>{{item.name}}</span>
          <span>{{item.number}}</span>
        </div>
        <!--<van-tabbar v-model="active">
					<van-tabbar-item icon="home-o">标签</van-tabbar-item>
					<van-tabbar-item icon="search">标签</van-tabbar-item>
					<van-tabbar-item icon="friends-o">标签</van-tabbar-item>
					<van-tabbar-item icon="setting-o">标签</van-tabbar-item>
        </van-tabbar>-->
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../components/header";
export default {
  name: "index",
  data() {
    return {
      active: 0,
      allLists: [
        {
          name: "全部",
          number: 1
        },
        {
          name: "新订单",
          number: 1
        },
        {
          name: "待服务",
          number: 1
        },
        {
          name: "服务中",
          number: 1
        },
        {
          name: "已完成",
          number: 1
        }
      ]
    };
  },
	methods:{
		handleClick(item,index){
			this.active = index
		}
	},
  components: {
    Header
  }
};
</script>
<style lang="less">
.orderList {
  padding-top: 0.4rem;
  box-sizing: border-box;
  // .orderTitle{
  // 	.van-tabbar{
  // 		position: relative;
  // 	}
  // }
  .orderTitle {
    display: flex;
    justify-content: space-around;
    align-items: center;
		.active{
			border-bottom: 1px solid #4984F9;
			span{
				color:#4984F9;
			}
		}
    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      bottom: 1px solid #e1e1e1;
      span {
        font-size: 0.13rem;
        font-weight: 400;
        color: rgba(56, 56, 56, 1);
        line-height: 0.18rem;
      }
    }
  }
}
</style>