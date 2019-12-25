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
    position:absolute;
    bottom:.4rem;
    top:0;
    left:0;
    right:0;
    box-sizing: border-box;
    overflow-y:auto;
  }
}
</style>