<template>
  <div class="header">
    <span @click="handleClick">{{ location }}</span>
      <span class="search">
        <van-search
          placeholder="快速搜索商家、服务"
          @focus="focus"
          v-model="value"
        />
      </span>
    <!--<mapDialog v-if="flag"></mapDialog>-->
  </div>
</template>

<script>
// import BMap from 'BMap'
// import mapDialog from "./mapDialog";
export default {
  name: "heard",
  data() {
    return {
      location: "正在定位",
      value: ""
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
    this.init();
  },
  methods: {
    init() {
      const geolocation = new BMap.Geolocation();
      var _this = this;
      geolocation.getCurrentPosition(
        function getinfo(position) {
          const myGeo = new BMap.Geocoder();
          _this.$store.commit("setPosition", position.point);
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
    //选择地址
    handleClick() {
      // this.$store.commit("setFlag", true);
      this.$router.push({
        path: "/city_choose"
      });
    },
    //搜索框获取焦点时
    focus() {
      this.$router.push({
        path: "/hot_service"
      });
    }
  },
  components: {
    // mapDialog
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 0.42rem;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  line-height: 0.42rem;
  aligin-items: center;
  span {
    font-size: 0.2rem;
  }
  .search {
    height: 0.42rem;
    margin-top: 0.06rem;
    .van-search {
      padding: 0;
      .van-search__content {
        background: #eeeeee !important;
        border-radius: 0.15rem;
        padding-left: 0.1rem;
      }
    }
  }
}
</style>
