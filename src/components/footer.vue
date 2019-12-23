<template>
    <div class="footer">
      <router-link to="home">首页</router-link>
      <router-link to="categroy">分类</router-link>
      <router-link to="order">订单</router-link>
      <router-link to="my">我的</router-link>
    </div>
</template>
<script>
  export default {
    name:'foot',
    data(){
      return {

      }
    },
    mounted(){

    },
    methods:{

    }
  }
</script>
<style lang="less" scoped>
  .footer{
    height: .4rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    a{
      flex:1;
      text-align: center;
    }
  }
</style>