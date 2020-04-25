<template>
  <div class="header">
    <img src="../assets/back.png" alt="" @click="back()" v-if="flag">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'heard',
  props: {
    title: String,
    flag: Boolean
  },
  mounted(){
  },
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.header{
  height: .4rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  line-height: .4rem;
  border-bottom: 1px solid #efefef;
  img{
    position: absolute;
    bottom: .09rem;
    left: .2rem;
    width: .18rem;
    height: .18rem;
  }
  span{
    font-size: .2rem;
  }
}
</style>
