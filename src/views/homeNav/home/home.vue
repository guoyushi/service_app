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
    </div>
  </div>
</template>
<script>
import top from "@/components/header.vue";
import api from "@/api/request/home"
export default {
  name: "home",
  data() {
    return {
      bannerImg: []
    };
  },
  components: {
    top
  },
  mounted() {
    this.init()
  },
  methods: {
    init(){
      let params = {
        h5:1,
        lot:116.40400898082,
        lat:39.91273268484
      }
      api.getBannerUrl(params).then(res=>{
        this.bannerImg = res.data
      })
    }
  },
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
    overflow-y:auto;
    .swiper {
      width: 100%;
      height: 1.5rem;
      .van-swipe {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
