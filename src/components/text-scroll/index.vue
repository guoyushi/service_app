<template>
  <div class="PageTextScroll">
    <img src="../../assets/dianpu.png" alt="">
    <text-scroll
      :data-list="data"
      scroll-type="scroll-left-linear"
    />
  </div>
</template>
<script>
  import TextScroll from './textScroll'
  export default {
    name: 'PageTextScroll',
    components: {
      TextScroll
    },
    data () {
      return {
        data: [
          { id: 1, text: '放低大撒的撒姿态' },
          { id: 2, text: '努力撒大大进取' },
          { id: 3, text: '勇范德萨范德萨于探索' },
          { id: 4, text: '乐于分享' }
        ]
      }
    }
  }
</script>
<style lang="less">
.PageTextScroll{
  padding-left: .47rem;
  box-sizing: content-box;
  position: relative;
  img{
    position: absolute;
    left: .2rem;
    width: .17rem;
    height: .17rem;
  }
}
</style>
