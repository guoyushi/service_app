<template>
  <div class="wrapper">
    <header>
      <div class="nav">
        <img src="../../assets/img/logo.png" alt />
        <div class="active">
          <p>首页</p>
          <p>Home page</p>
        </div>
        <div>
          <p>热门推荐</p>
          <p>Hot recommendations</p>
        </div>
        <div>
          <p>产品分类</p>
          <p>Product classification</p>
        </div>
        <div>
          <p>服务保证</p>
          <p>Service assurance</p>
        </div>
        <div>
          <p>关于我们</p>
          <p>About us</p>
        </div>
      </div>
    </header>
    <main>
      <div class="banner">
        <div class="content">
          <p>SHAN DING DONG</p>
          <p>闪叮咚</p>
          <p>高品质到家服务直约平台</p>
          <p>
            服务类型齐全，直接面对商家安全可靠效率高，轻松预约即可上门，生活不可缺少
            <br />仪式感，爱生活找闪叮咚。
          </p>
        </div>
      </div>
      <div class="all_content">
        <div class="title">
          <p>
            <b></b>
            <span>关于我们</span>
            <b></b>
          </p>
          <p>About us</p>
        </div>
        <div class="small_title">
          <p>闪叮咚上门服务</p>
          <p>
            随着生活节奏的加快，加班成为大多数人的现状，属于自己的私人时间越来越少，很多事情想做却做不成，闪叮咚为您提供快捷
            <br />高效的上门服务，上门清洗、上门维修、上门整理、上门安装、上门化妆、上门按摩多种服务让您足不出户就可以解决。
          </p>
        </div>
        <div class="detail">
          <ul>
            <li>
              <img src="../../assets/img/img1.png" alt />
              <p>保洁维修</p>
              <span>Cleaning and maintenance</span>
            </li>
            <li>
              <img src="../../assets/img/img5.png" alt />
              <p>搬家拉货</p>
              <span>Moving goods</span>
            </li>
            <li>
              <img src="../../assets/img/img4.png" alt />
              <p>美容按摩</p>
              <span>Beauty massage</span>
            </li>
            <li>
              <img src="../../assets/img/img3.png" alt />
              <p>跑腿快递</p>
              <span>Running Express</span>
            </li>
          </ul>
        </div>
        <div class="title">
          <p>
            <span></span>
            <span>热门服务</span>
            <span></span>
          </p>
          <p>Hot services</p>
        </div>
        <div class="img_detail">
          <div class="left">
            <img src="../../assets/img/img2.png" alt />
          </div>
          <div class="right">
            <img src="../../assets/img/img7.png" alt />
            <img src="../../assets/img/img8.png" alt />
            <img src="../../assets/img/img9.png" alt />
            <img src="../../assets/img/img6.png" alt />
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="foot_nav">
        <span>首页</span>
        <span>热门推荐</span>
        <span>产品推荐</span>
        <span>服务保证</span>
        <span>关于我们</span>
      </div>
      <div class="foot_content">
        <div class="QR_code">
          
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "homeNav"
};
</script>
<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  header {
    width: 100%;
    height: 1.42rem;
    .nav {
      width: 10.96rem;
      margin: 0 auto;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 1.42rem;
        height: 0.46rem;
        margin-right: 1.4rem;
      }
      .active {
        border-bottom: 1px solid #e52a30;
        box-sizing: border-box;
        p {
          font-size: 0.14rem;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: rgba(229, 42, 48, 1);
          &:first-child {
            font-size: 0.14rem;
          }
          &:last-child {
            font-size: 0.12rem;
            line-height: 0.3rem;
          }
        }
      }
      div {
        padding: 0 0.26rem;
        p {
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: rgba(89, 89, 89, 1);
          text-align: center;
          &:first-child {
            font-size: 0.14rem;
          }
          &:last-child {
            font-size: 0.12rem;
            line-height: 0.3rem;
          }
        }
      }
    }
  }
  main {
    .banner {
      width: 100%;
      height: 9.37rem;
      background: url("../../assets/img/banner.png") no-repeat;
      background-size: 100% 100%;
      .content {
        width: 10.96rem;
        margin: 0 auto;
        padding-top: 1.43rem;
        box-sizing: border-box;
        p {
          &:first-child {
            font-size: 0.18rem;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: rgba(69, 69, 69, 1);
            line-height: 0.3rem;
          }
          &:nth-child(2) {
            font-size: 0.94rem;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: rgba(69, 69, 69, 1);
            line-height: 0.66rem;
            letter-spacing: 1px;
            margin-top: 0.33rem;
          }
          &:nth-child(3) {
            font-size: 0.66rem;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: rgba(69, 69, 69, 1);
            line-height: 0.66rem;
            letter-spacing: 1px;
            margin-top: 0.38rem;
          }
          &:last-child {
            font-size: 0.2rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(69, 69, 69, 1);
            line-height: 0.3rem;
            margin-top: 0.64rem;
          }
        }
      }
    }
    .all_content {
      width: 11.26rem;
      margin: 0 auto;
      .title {
        margin-top: 0.85rem;
        p {
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            font-size: 0.48rem;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: rgba(58, 57, 63, 1);
            line-height: 0.67rem;
            margin: 0 0.4rem;
          }
          b {
            width: 0.81rem;
            height: 0.02rem;
            background: #979797;
          }
          &:last-child {
            font-size: 0.2rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(105, 105, 105, 1);
            line-height: 0.28rem;
          }
        }
      }
      .small_title {
        p {
          &:first-child {
            font-size: 0.32rem;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: rgba(64, 64, 64, 1);
            line-height: 0.45rem;
            margin-top: 0.65rem;
            text-align: center;
          }
          &:last-child {
            font-size: 0.2rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(118, 118, 118, 1);
            line-height: 0.28rem;
            text-align: center;
            margin-top: 0.24rem;
          }
        }
      }
      .detail {
        margin-top: 1.12rem;
        ul {
          display: flex;
          justify-content: space-around;
          li {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            img {
              width: 2.36rem;
              height: 2.36rem;
              border-radius: 50%;
            }
            p {
              font-size: 0.2rem;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: rgba(43, 43, 43, 1);
              line-height: 0.28rem;
              margin-top: 0.41rem;
            }
            span {
              font-size: 0.18rem;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: rgba(43, 43, 43, 1);
              line-height: 0.28rem;
            }
          }
        }
      }
      .img_detail {
        display: flex;
        .left {
          flex: 1;
          padding-right: 0.2rem;
          box-sizing: border-box;
          img {
            width: 5.9rem;
            height: 5.9rem;
          }
        }
        .right {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          img {
            box-sizing: border-box;
            width: 50%;
            height: auto;
            padding-right: 0.2rem;
            &:nth-child(1),
            &:nth-child(2) {
              margin-bottom: 0.2rem;
            }
          }
        }
      }
    }
  }
  footer {
    margin: 0 auto;
    margin-top: 1.08rem;
    background: #292c37;
    padding: 0.4rem 0 0.38rem 0;
    .foot_nav {
      display: flex;
      justify-content: center;
      span {
        font-size: .2rem;
        padding-right: .32rem;
        margin-right: .32rem;
        border-right: 1px solid #ffffff;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: .28rem;
        &:last-child{
          border:none;
        }
      }
    }
  }
}
</style>