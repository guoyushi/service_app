<template>
  <div class="header">
    <span @click="handleClick">{{ location }}</span>
    <mapDialog v-if="flag"></mapDialog>
  </div>
</template>

<script>
// import BMap from 'BMap'
import mapDialog from "./mapDialog";
export default {
  name: "heard",
  data() {
    return {
      location: "正在定位"
    };
  },
  computed: {
    flag() {
      return this.$store.state.header.flag;
    },
    title() {
      return this.$store.state.header.title;
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
			const geolocation = new BMap.Geolocation();
      var _this = this;
      geolocation.getCurrentPosition(
        function getinfo(position) {
          const myGeo = new BMap.Geocoder();
          _this.$store.commit('setPosition',position.point)
          myGeo.getLocation(
            new BMap.Point(position.point.lng, position.point.lat),
            data => {
              console.log(data);
              if (data.addressComponents) {
                const result = data.addressComponents;
                const location = {
                  creditLongitude: position.point.lat, // 经度
                  creditLatitude: position.point.lng, // 纬度
                  creditProvince: result.province || "", // 省
                  creditCity: result.city || "", // 市
                  creditArea: result.district || "", // 区
                  creditStreet:
                    (result.street || "") + (result.streetNumber || "") // 街道
                };
                _this.location = location.creditStreet;
              }
            }
          );
        },
        function(e) {
          console.log(e);
          _this.location = "定位失败";
        },
        { provider: "baidu" }
      );
    },
    handleClick() {
      this.$store.commit("setFlag", true);
    }
  },
  components: {
    mapDialog
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 0.4rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  span {
    font-size: 0.2rem;
  }
}
</style>
