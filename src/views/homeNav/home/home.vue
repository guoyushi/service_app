<template>
  <div class="home">
    <div class="header_top">
      <top></top>
    </div>
    <div class="content">
      <div class="swiper">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in bannerImg" :key="index">
            <img v-lazy="image.imgUrl" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="nav">
        <van-swipe indicator-color="white">
          <van-swipe-item v-for="(item, index) in homeNav" :key="index">
            <ul class="itemNav">
              <li v-for="(items, ind) in item" :key="ind">
                <img :src="items.iconUrl" />
                <span>{{ items.name }}</span>
              </li>
            </ul>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="atOnce">
        <div class="title">
          即刻达
          <span>最快30分钟上门</span>
        </div>
        <ul>
          <li v-for="(item, index) in ext" :key="index">
            <img :src="item.iconUrl" />
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <div class="recommend">
        <div class="box" v-for="(item, index) in recommend" :key="index">
          <h2>{{ item.categoryName }}<a>更多></a></h2>
          <ul>
            <li v-for="(itm, ind) in item.items" :key="ind">
              <img :src="itm.pic_url" />
              <div class="name">{{ itm.name }}</div>
              <div class="price">
                <strong>{{ itm.price }}</strong
                >{{ itm.price_unit }}
                <span v-if="itm.promotion.total_reduce">
                  <em>满减{{ itm.promotion.total_reduce[0].reduce }}</em>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import top from "@/components/header.vue";
import api from "@/api/request/home";
export default {
  name: "home",
  data() {
    return {
      bannerImg: [], //banner图
      homeNav: [], //导航
      ext: [], //即刻达
      recommend: [] // 服务排行
    };
  },
  components: {
    top
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let params = {
        h5: 1,
        lot: 116.40400898082,
        lat: 39.91273268484
      };
      api.getBannerUrl(params).then(res => {
        this.bannerImg = res.data;
      });
      let categroy = {
        lot: 116.40400898082,
        lat: 39.91273268484,
        weidian: false,
        recommendOnly: true,
        includeChaoshi: true,
        hasChaoshi: false,
        includeExtCategory: true,
        channel: "daoway"
      };
      api.getCategroy(categroy).then(res => {
        console.log(res);
        let arr = res.data;
        this.ext = res.ext;
        let num = Math.ceil(arr.length / 10);
        this.homeNav = new Array(num);
        for (let i = 0; i < num; i++) {
          this.homeNav[i] = arr.slice(i * 10, i * 10 + 10);
        }
      });
      let recommend_top = {
        lot: 116.40400898082,
        lat: 39.91273268484,
        start: 0,
        size: 3,
        includeNotInScope: true,
        channel: "daoway",
        manualCity: "北京"
      };
      api.getRecommend(recommend_top).then(res => {
        console.log(res);
        this.recommend = res.data;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  .header_top {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    height: 0.4rem;
    right: 0;
    z-index: 1;
  }
  .content {
    position: absolute;
    top: 0.4rem;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    .swiper {
      width: 100%;
      height: 1.5rem;
    }
    .nav {
      padding: 0.1rem;
      background-color: #fff;
    }
    .atOnce {
      margin: 0.1rem 0;
      height: 1.05rem;
      background: #fff;
      .title {
        margin: 10px 3% 0;
        padding: 10px 0;
        font-size: 0.14rem;
        font-weight: bold;
        span {
          float: right;
          font-size: 0.12rem;
          color: #9d9d9d;
          font-weight: normal;
        }
      }
      ul {
        margin: 0.1rem 2% 0;
        display: flex;
        li {
          width: 20%;
          text-align: center;
          padding: 0 1%;
          border-right: 0.01rem solid #eee;
          height: 0.26rem;
          padding-bottom: 0.4rem;
          box-sizing: border-box;
          &:last-child {
            border: none;
          }
          img {
            display: block;
            width: 0.25rem;
            height: auto;
            margin: 0 auto 0.08rem;
          }
          span {
            font-size: 0.12rem;
            color: #3d4145;
            position: relative;
            top: -0.1rem;
          }
        }
      }
    }
    .recommend {
      .box {
        padding: 0.05rem 0 0 0.02rem;
        clear: both;
        background: #fff;
        margin-top: 0.06rem;
        position: relative;
        overflow: hidden;
        h2 {
          border-left: 0.05rem solid #fb461c;
          height: 0.15rem;
          line-height: 0.15rem;
          margin: 0.12rem 0;
          padding-left: 0.06rem;
          font-size: 0.17rem;
          a {
            float: right;
            color: #898989;
            font-weight: normal;
            font-size: 0.12rem;
            margin-right: 0.06rem;
          }
        }
        ul {
          position: relative;
          left: 0.03rem;
          li {
            display: inline-block;
            width: 32%;
            margin-top: 0.06rem;
            margin-left: 1%;
            &:first-child {
              margin-left: 0;
            }
            img {
              width: 100%;
              border-radius: 0.05rem;
            }
            .name {
              font-size: 0.14rem;
              margin-top: 0.04rem;
              height: 0.14rem;
              overflow: hidden;
            }
            .price {
              height: 0.3rem;
              line-height: 0.3rem;
              color: #e94840;
              font-size: 0.12rem;
              strong {
                font-size: 0.16rem;
                font-weight: normal;
              }
              span {
                height: .3rem;
                overflow: hidden;
                line-height: .3rem;
                margin-left: .01rem;
                font-size: 0.12rem;
                em {
                  display: table-cell;
                  margin-right: .06rem;
                  line-height: normal;
                  border: 0.5px solid #e94840;
                  border-radius: 0.03rem;
                  padding: 0 0.03rem;
                  text-decoration: none;
                  color: #f2504d;
                  font-size: 0.1rem;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
.swiper {
  .van-swipe {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.nav {
  .van-swipe {
    .itemNav {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      & > li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 20%;
        height: 0.82rem;
        img {
          display: block;
          vertical-align: middle;
          width: 0.45rem;
          height: 0.45rem;
        }
        span {
          font-size: 0.1rem;
          margin-top: 0.06rem;
          color: #000;
        }
      }
    }
    .van-swipe__indicators {
      bottom: 0;
      .van-swipe__indicator {
        background-color: #000 !important;
      }
      .van-swipe__indicator--active {
        background-color: #1989fa !important;
      }
    }
  }
}
</style>
