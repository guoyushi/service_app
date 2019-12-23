<template>
  <div class="header">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'heard',
  props: {
    msg: String
  },
  computed:{
    title(){
      return this.$store.state.home.title
    }
  },
  mounted(){
  },
  methods:{
    add(){
      console.log(this.$store)
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
  span{
    font-size: .2rem;
  }
}
</style>
