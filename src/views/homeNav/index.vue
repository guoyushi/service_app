<template>
  <div class="wrapper">
    <router-view></router-view>
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
  .main{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
}
</style>