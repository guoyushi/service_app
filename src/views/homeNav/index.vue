<template>
  <div class="wrapper">
    <top></top>
    <div class="main">
      <router-view></router-view>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import top from "@/components/header.vue";
import mainFooter from "@/components/footer.vue";

export default {
  name: "homeNav",
  components: {
    top,
    mainFooter
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  .main{
    width: 100%;
    height: 100%;
    padding: .4rem 0 .4rem 0;
    box-sizing: border-box;
  }
}
</style>