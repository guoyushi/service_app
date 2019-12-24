<template>
  <div class="home">
    <div class="header_top">
      <top></top>
    </div>
    <div>首页</div>
  </div>
</template>
<script>
import top from "@/components/header.vue";
  export default {
    name:'home',
    components:{
      top
    }
  }
</script>
<style lang="less" scoped>
.home{
  width:100%;
  height:100%;
  .header_top{
    padding-bottom:.4rem;
    box-sizing:border-box;
  }
}
</style>