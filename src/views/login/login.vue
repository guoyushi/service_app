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
      sessionStorage.setItem('isAuthentication',false)
			this.$router.push('/authentication')
		}
  }
};
</script>
<style scoped>
</style>