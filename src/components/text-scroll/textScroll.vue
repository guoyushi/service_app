<template>
  <div class="TextScroll">
    <transition-group tag="ul" :name="scrollType">
      <li
        v-for="(item,index) in dataList"
        v-show="index==count"
        :key="index"
      >
        <p>{{ item.text }}</p>
      </li>
    </transition-group>
  </div>
</template>
<script>
  export default {
    name: 'TextScroll',
    props: {
      dataList: {
        type: Array,
        default: () => []
      },
      scrollType: {
        type: String,
        default: 'scroll-up'
      }
    },
    data () {
      return {
        count: 0, // 当前索引
        intervalId: null, // 定时器ID
        playTime: 3000 // 定时器执行间隔
      }
    },
    created () {
      this.intervalId = setInterval(() => { // 定义定时器
        this.getText()
      }, this.playTime)
    },
    destroyed () {
      clearInterval(this.intervalId) // 清除定时器
    },
    methods: {
      getText () {
        let len = this.dataList.length // 获取数组长度
        if (len === 0) {
          return // 当数组为空时，直接返回
        }
        if (this.count === len - 1) { // 当前为最后一个时
          this.count = 0 // 从第一个开始
        } else {
          this.count++ // 自增
        }
      }
    }
  }
</script>

<style scoped>
  .TextScroll{
    background: #fff;
    width: 100%;
  }
  .TextScroll ul{
    position: relative;
    padding-left: .54rem;
    height: .2rem;
    width: 100%;
    overflow: hidden;
  }
  .TextScroll li{
    width: 100%;
    height: .2rem;
    line-height: .2rem;
    font-weight:400;
    color:rgba(102,102,102,1);
    overflow: hidden;
    position: absolute;
  }
  .TextScroll li p{
    font-size: .1rem;/*px*/
    padding:0 0.2rem;
    line-height: .14rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /* 向左匀速滚动动画 */
  .scroll-left-linear-enter-active,
  .scroll-left-linear-leave-active{
    transition: all 3s linear;   /*此时间必须和 playTime 保持一致*/
  }
  .scroll-left-linear-enter{
    transform: translate3d(100%,0,0);
  }
  .scroll-left-linear-leave-to{
    transform: translate3d(-100%,0,0);
  }
</style>
