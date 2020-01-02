<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.currentCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
            class="button-wrapper"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <ul class="item-list">
          <li
            class="border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{ innerItem.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {},
  data() {
    return {
      currentCity: "北京"
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    });
  },
  watch: {
    letter() {
      if (this.letter) {
        console.log(this.letter);
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  },
  methods: {
    handleCityClick() {
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="less" scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }
  &:after {
    border-color: #ccc;
  }
}
.border-bottom {
  border-bottom: 0.01rem solid #ccc;
}
.list {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  .title {
    line-height: 0.4rem;
    background: #eee;
    color: #666;
    padding-left: 0.2rem;
    font-size: 0.2rem;
  }
}
.button-list {
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  .button-wrapper {
    width: 25%;
    .button {
      font-size: 0.14rem;
      margin: 0.05rem;
      padding: 0.05rem 0;
      border-radius: 0.03rem;
      text-align: center;
      border: 0.02rem solid #ccc;
    }
  }
}
.item-list {
  li {
    line-height: 0.4rem;
    color: #666;
    padding-left: 0.2rem;
    cursor: pointer;
    font-size: 0.14rem;
  }
}
</style>
