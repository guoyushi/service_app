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
      bannerImg: [],
      homeNav: []
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
        let num = Math.ceil(arr.length / 10);
        this.homeNav = new Array(num);
        for (let i = 0; i < num; i++) {
          this.homeNav[i] = arr.slice(i * 10, i * 10 + 10);
        }
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
      padding: 0.05rem;
      background-color: #fff;
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
      .van-swipe__indicator{
        background-color:#000!important;
      }
      .van-swipe__indicator--active {
        background-color: #1989fa!important;
      }
    }
  }
}
</style>
