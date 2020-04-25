<template>
  <div class="footer">
    <div
      class="item"
      v-for="(item,index) in allLists"
      :key="index"
      @click="handleClick(item,index)"
      :class="index==active ? 'active' : ''"
    >
      <img :src="index === active ? item.img : item.src" alt="">
      <span>{{item.name}}</span>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "foot",
  data() {
    return {
      active: 0,
      allLists: [
        {
          path:'/home',
          name: "首页",
          img:require('../assets/gongzuotai2@2x.png'),
          src:require('../assets/gongzuotai3@2x.png')
        },
        {
          path:'/message',
          name: "消息",
          img:require('../assets/xiaoxi4@2x.png'),
          src:require('../assets/xiaoxi3@2x.png')
        },
        {
          path:'/order',
          name: "订单",
          img:require('../assets/dingdan3@2x.png'),
          src:require('../assets/dingdan2@2x.png')
        },
        {
          path:'/my',
          name: "我的",
          img:require('../assets/kehu3@2x.png'),
          src:require('../assets/kehu2@2x.png')
        }
      ]
    };
  },
  mounted() {
    if(sessionStorage.getItem('active')){
      this.active = Number(sessionStorage.getItem('active'))
    }
  },
  methods: {
    handleClick(item, index) {
      this.active = index;
      sessionStorage.setItem('active',index)
      this.$router.push({
        path:item.path
      })
    }
  }
};
</script>
<style lang="less" scoped>
.footer {
  height: 0.55rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 22px;
      height: 22px;
    }
    span {
      margin-top: 0.06rem;
      font-weight: 500;
      color: rgba(222, 222, 222, 1);
      line-height: 0.14rem;
      font-size: 0.1rem;
    }
  }
  .active {
      span {
        color: rgba(68, 68, 68, 1);
      }
    }
}
</style>