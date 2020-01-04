<template>
  <ul class="list" ref='list'>
    <li
      class="item"
      v-for="(item, index) in letters"
      :key="index"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick(item)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null,
			offsetTop:0
    }
  },
	mounted() {
		this.offsetTop = this.$refs.list.offsetTop
	},
  updated () {
    this.startY = this.$refs['A'][0].offsetTop

  },
  methods: {
    handleLetterClick (item) {
      this.$emit('change', item)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // const startY = this.$refs['A'][0].offsetTop
					// console.log(e.target.style)
          const touchY = e.touches[0].clientY - this.offsetTop
					let height = e.target.offsetHeight //获取不同型号手机的item高度
          const index = Math.floor((touchY - this.startY) / height)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0.5rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item {
    line-height: 0.25rem;
    width: 100%;
    text-align: center;
    color: #ff4775;
    font-size: 0.14rem;
  }
}
</style>
