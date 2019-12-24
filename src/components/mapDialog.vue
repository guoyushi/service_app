<template>
  <div class="map">
    <span class="close" @click="close">←</span>
    <baidu-map
      class="bm-view"
      :center="center"
      :zoom="zoom"
      @ready="handler"
      :scroll-wheel-zoom="true"
    >
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :dragging="true" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <bm-marker :position="autoLocationPoint" :dragging="true" animation="BMAP_ANIMATION_BOUNCE" :icon="{url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif', size: {width: 300, height: 157}}"></bm-marker>
    </baidu-map>
  </div>
</template>
<script>
export default {
  name: "mapDialog",
  props: [],
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
      autoLocationPoint: { lng: 0, lat: 0 },
      // initLocation: false
    };
  },
  mounted() {},
  methods: {
    close() {
      this.$store.commit("setFlag", false);
    },
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.zoom = 17; // 获取地理位置
      var self = this; //全局的this在方法中不能使用，需要重新定义一下
      var geolocation = new BMap.Geolocation(); //调用百度地图api 中的获取当前位置接口
      geolocation.getCurrentPosition(function(r) {
        console.log(r); //获取当前位置经纬度
        var myGeo = new BMap.Geocoder();
        myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function(
          result
        ) {
          if (result) {
            console.log(result);
            self.geohash = result.point.lat + "," + result.point.lng;
            self.center.lat = result.point.lat;
            self.center.lng = result.point.lng; 
            self.autoLocationPoint = {lng: r.longitude, lat: r.latitude};   // 自定义覆盖物 
            // self.initLocation = true;
            // console.log(result.point.lat); self.RECORD_ADDRESS({'latitude':result.point.lat,'longitude':result.point.lng});
          }
        });
      });
    }
  }
};
</script>
<style lang="less" scoped>
.map {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f0f0f0;
  z-index: 1;
  .close {
    position: absolute;
    top: 0;
    left: 0;
    height: 0.4rem;
    line-height: 0.4rem;
  }
  .bm-view {
    width: 100%;
    height: 3rem;
    margin-top: 0.4rem;
  }
}
</style>
