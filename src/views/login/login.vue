<template>
  <div class="login">
    <p @click="login">登录页</p>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    login() {
			this.$router.push('/')
		}
  }
};
</script>
<style scoped>
</style>