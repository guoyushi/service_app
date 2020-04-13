<template>
  <div class="homeWrapper">
    <div class="header">
      <span>
        <img src="../../../assets/search.png" alt />
      </span>
      <span class="title">闪叮咚欢迎您</span>
      <span>
        <img src="../../../assets/lianjie.png" alt />
      </span>
    </div>
    <div class="month_money">
      <p class="shouru">本月收入</p>
      <div class="money">
        <p class="shou">
          <span class="yang">￥</span>
          <span class="price">3467.3</span>
          <img src="../../../assets/shangsheng@2x.png" alt />
          <span class="yangs">￥</span>
          <span class="prices">467.3</span>
        </p>
        <div class="date" @click="dateCheck()">
          <img src="../../../assets/date.png" alt />
          <span>{{date}}</span>
        </div>
      </div>
    </div>
    <div class="lists">
      <div class="newList">
        <span>新订单</span>
        <span>{{newList}}</span>
        <i></i>
      </div>
      <div class="newList">
        <span>待服务</span>
        <span>{{unservice}}</span>
        <i></i>
      </div>
      <div class="newList">
        <span>待完成</span>
        <span>{{unfinish}}</span>
      </div>
    </div>
    <div class="text_scroll">
      <textScroll />
    </div>
    <div class="project_list">
      <div class="item">
        <img src="../../../assets/dianpu.png" alt="">
        <span>店铺管理</span>
      </div>
      <div class="item">
        <img src="../../../assets/fuwu.png" alt="">
        <span>服务管理</span>
      </div>
      <div class="item">
        <img src="../../../assets/pingjia.png" alt="">
        <span>评价管理</span>
      </div>
      <div class="item">
        <img src="../../../assets/yingxiao.png" alt="">
        <span>营销推广</span>
      </div>
      <div class="item">
        <img src="../../../assets/jingying.png" alt="">
        <span>经营分析</span>
      </div>
      <div class="item">
        <img src="../../../assets/wode.png" alt="">
        <span>我的钱包</span>
      </div>
      <div class="item">
        <img src="../../../assets/baozhang.png" alt="">
        <span>服务保障</span>
      </div>
      <div class="item">
        <img src="../../../assets/bangzhu.png" alt="">
        <span>帮助中心</span>
      </div>
    </div>
    <div class="time" v-if="flag">
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @confirm="confirmPicker"
        @cancel="flag = false"
      />
    </div>
  </div>
</template>
<script>
import textScroll from '@/components/text-scroll'
export default {
  name: "home",
  components:{
    textScroll
  },
  data() {
    return {
      date: "7月", //展示
      year: "", //传给后台的年份
      month: "", //传给后台的月份
      flag: false,
      newList:0,//新订单
      unservice:0,//待服务
      unfinish:0,//待完成
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date()
    };
  },
  methods: {
    formatter(type, val) {
      if (type === "year") {
        return `${val}年`;
      } else if (type === "month") {
        return `${val}月`;
      }
      return val;
    },
    dateCheck() {
      this.flag = true;
    },
    confirmPicker(value) {
      const date = new Date(value);
      this.year = date.getFullYear();
      this.month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      this.date = this.month + "月";
      this.flag = false;
    }
  }
};
</script>
<style lang="less">
.homeWrapper {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  .header {
    height: 0.4rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
    box-sizing: border-box;
    align-items: center;
    border-bottom: 1px solid rgba(240, 240, 240, 1);
    span {
      img {
        width: 0.175rem;
        height: 0.175rem;
      }
    }
    .title {
      font-size: 0.16rem;
      line-height: 0.22rem;
      font-weight: 600;
      color: rgba(56, 56, 56, 1);
    }
  }
  .month_money {
    padding: 0 0.2rem;
    margin-bottom: 0.23rem;
    .shouru {
      padding: 0.18rem 0 0.04rem 0.12rem;
      font-weight: 500;
      color: rgba(153, 153, 153, 1);
      line-height: 17px;
      font-size: 0.12rem;
    }
    .money {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .shou {
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 24px;
        font-size: 0.2rem;
        .yang {
          font-size: 0.14rem;
        }
        img {
          margin-left: 0.09rem;
          width: 0.06rem;
          height: 0.07rem;
        }
        .yangs {
          font-weight: bold;
          color: rgba(77, 130, 249, 1);
          line-height: 14px;
          font-size: 0.1rem;
        }
        .prices {
          font-weight: bold;
          color: rgba(77, 130, 249, 1);
          line-height: 14px;
          font-size: 0.12rem;
        }
      }
      .date {
        border-radius: 6px;
        border: 1px solid rgba(208, 208, 208, 1);
        padding: 0.1rem 0.08rem;
        display: flex;
        justify-content: space-between;
        align-self: center;
        img {
          width: 0.15rem;
          height: 0.16rem;
        }
        span {
          font-weight: bold;
          color: rgba(102, 102, 102, 1);
          line-height: 0.16rem;
          font-size: 0.12rem;
          margin-left: 0.1rem;
        }
      }
    }
  }
  .lists {
    margin: 0 .2rem;
    margin-bottom: .18rem;
    box-sizing: content-box;
    height: 86px;
    background: linear-gradient(
      226deg,
      rgba(77, 130, 249, 1) 0%,
      rgba(73, 132, 249, 1) 100%
    );
    box-shadow: 0px 2px 5px 0px rgba(77, 130, 249, 0.5);
    border-radius: 6px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .newList{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      i{
        position: absolute;
        right: 0;
        top: .05rem;
        bottom: .05rem;
        width: .01rem;
        background: #ffffff;
        opacity: 0.5;
      }
      span{
        &:nth-child(1){
          font-weight:500;
          color:rgba(255,255,255,1);
          line-height:.17rem;
          font-size: .12rem;
        }
        &:nth-child(2){
          font-weight:500;
          color:rgba(255,255,255,1);
          line-height:.28rem;
          font-size: .24rem;
        }
      }
    }
  }
  .time {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
    .van-picker {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
  .project_list{
    border-top: 1px solid #F6F7FA;
    margin-top: 0.15rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    .item{
      margin-top: .28rem;
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img{
        width: .23rem;
        height: .23rem;
      }
      span{
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:17px;
        font-size: .12rem;
        margin-top: .14rem;
      }
    }
  }
}
</style>