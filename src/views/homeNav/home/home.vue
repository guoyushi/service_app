<template>
  <div class="home">
    <div class="header_top">
      <top></top>
    </div>
    <div class="swiper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
import top from "@/components/header.vue";
export default {
  name: "home",
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },
  components: {
    top
  }
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  .header_top {
    padding-bottom: 0.4rem;
    box-sizing: border-box;
    position:absolute;
    top:0;
    left:0;
    height:.4rem;
    right:0;
    z-index:1;
  }
  .swiper{
    width:100%;
    height:1rem;
    margin-top:.4rem;
    img{
      width:100%;
      height:100%;
    }
  }
}
</style>
