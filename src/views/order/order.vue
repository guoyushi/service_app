<template>
  <div class="order">
    <Header title="我的订单"></Header>
    <div class="orderList">
      <div class="orderTitle">
        <div
          v-for="(item,index) in allLists"
          :key="index"
          @click="handleClick(item,index)"
          :class="index==active ? 'active' : ''"
        >
          <span>{{item.name}}</span>
          <span>{{item.number}}</span>
        </div>
      </div>
      <div class="list">
        <div class="item" v-for="(item,index) in list" :key="index">
          <div class="top">
            <p>
              <img :src="item.img" alt />
              <span>{{item.name}}</span>
            </p>
            <span>{{item.status}}</span>
          </div>
          <div class="content">
            <img :src="item.src" alt />
            <div class="right">
              <p class="place_order">下单时间</p>
              <p class="time">{{item.time}}</p>
              <p class="price">
                <span>￥</span>
                <span>{{item.price}}</span>
              </p>
              <span class="evaluate" @click="evaluate()">评价</span>
            </div>
          </div>
        </div>
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
      list: [
        {
          name: "日常保洁",
          status: "待服务",
          time: "2020-03-30",
          img: require("../../assets/baojie@2x.png"),
          src: require("../../assets/img.jpg"),
          price: 399.0
        },
        {
          name: "日常保洁",
          status: "待服务",
          time: "2020-03-30",
          img: require("../../assets/baojie@2x.png"),
          src: require("../../assets/img.jpg"),
          price: 399.0
        },
        {
          name: "日常保洁",
          status: "待服务",
          time: "2020-03-30",
          img: require("../../assets/baojie@2x.png"),
          src: require("../../assets/img.jpg"),
          price: 399.0
        },
        {
          name: "日常保洁",
          status: "待服务",
          time: "2020-03-30",
          img: require("../../assets/baojie@2x.png"),
          src: require("../../assets/img.jpg"),
          price: 399.0
        },
        {
          name: "日常保洁",
          status: "待服务",
          time: "2020-03-30",
          img: require("../../assets/baojie@2x.png"),
          src: require("../../assets/img.jpg"),
          price: 399.0
        }
      ],
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
  methods: {
    handleClick(item, index) {
      this.active = index;
    },
    evaluate(){
      console.log('评价')
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
    margin-top: .07rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .active {
      border-bottom: 1px solid #4984f9;
      span {
        color: #4984f9;
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
  .list {
    position: fixed;
    bottom: .65rem;
    top: .9rem;
    left: 0;
    right: 0;
    padding: 0 0.18rem 0 0.21rem;
    overflow-y: auto;
    .item {
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 5px 0px rgba(77, 130, 249, 0.2);
      border-radius: 6px;
      padding: 0.16rem 0.16rem 0.2rem 0.1rem;
      margin-top: .2rem;
      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          img {
            width: 0.18rem;
            height: 0.2rem;
            margin-right: 0.06rem;
          }
          span {
            font-size: 0.14rem;
            font-weight: 400;
            color: rgba(56, 56, 56, 1);
            line-height: 0.2rem;
          }
        }
        span {
          font-size: 0.12rem;
          font-weight: 300;
          color: rgba(102, 102, 102, 1);
          line-height: 0.17rem;
        }
      }
      .content {
        margin-top: 0.1rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img {
          width: 0.89rem;
          height: 0.89rem;
          border-radius: 0.06rem;
          margin-right: 0.12rem;
        }
        .right {
          position: relative;
          flex: 1;
          height: 100%;
          .place_order {
            font-size: 0.12rem;
            font-weight: 400;
            color: rgba(56, 56, 56, 1);
            line-height: 0.17rem;
          }
          .time {
            font-size: 0.12rem;
            font-weight: bold;
            color: rgba(195, 197, 205, 1);
            line-height: 0.14rem;
            margin-top: 0.03rem;
          }
          .price {
            font-size: 0.16rem;
            font-weight: bold;
            color: #ef382b;
            line-height: 16px;
            margin-top: 0.15rem;
            span {
              &:first-child {
                font-size: 0.12rem;
              }
            }
          }
          .evaluate {
            position: absolute;
            bottom: -.12rem;
            right: 0;
            padding: .04rem .19rem;
            border:1px solid #4984F9;
            font-size: 0.12rem;
            font-weight: 400;
            color: rgba(56, 56, 56, 1);
            line-height: 17px;
            border-radius: .06rem;
            color: #4984F9;
          }
        }
      }
    }
  }
}
</style>