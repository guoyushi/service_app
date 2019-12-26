<template>
  <div id="app">
    <transition :name="SkipSwitchName">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition :name="SkipSwitchName">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      SkipSwitchName: ""
    };
  },
  mounted() { },
  watch: {
    $route(to, from) {
      if (to.meta.tx < from.meta.tx) {
        this.SkipSwitchName = "Skleft";
      } else {
        this.SkipSwitchName = "Skrigh";
      }
    }
  }
};
</script>

<style lang="less">
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #eee;
  .Skright-enter-active,
  .Skright-leave-active,
  .Skleft-enter-active,
  .Sklef-leave-active {
    transition: all 300ms;
  }
  .Skright-enter {
    transform: translate3d(100%, 0, 0);
  }
  .Skright-leave-to {
    transform: translate3d(-100%, 0, 0);
  }
  .Skleft-enter {
    transform: translate3d(100%, 0, 0);
  }
  .Skleft-leave-to {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
