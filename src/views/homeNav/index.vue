<template>
  <div class="wrapper">
    <div class="main">
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import mainFooter from "@/components/footer.vue";

export default {
  name: "homeNav",
  components: {
    mainFooter
  },
  mounted() {
    console.log(this.$route.meta)
  },
};
</script>
<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .main {
    width: 100%;
    position: absolute;
    bottom: 0.4rem;
    top: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    overflow-y: auto;
  }
}
</style>
