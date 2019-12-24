<template>
  <div class="wrapper">
    <div class="main">
      <router-view></router-view>
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
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow:hidden;
  .main{
    width: 100%;
    height: 100%;
    padding: 0 0 .4rem 0;
    box-sizing: border-box;
    overflow-y:auto;
  }
}
</style>