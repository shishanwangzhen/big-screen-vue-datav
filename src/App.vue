<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
export default {
  name: 'app',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  },
  // beforeMount() {
  //   console.log('this.$axios',this.$axios)
  //   this.$axios
  //     .get("http://apis.juhe.cn/simpleWeather/query", {
  //       params: { city: "南京" },
  //     })
  //     .then((res) => {
  //       console.log('获取到的天气',res)
  //     })
  //     .catch((err) => {
  //       console.log("获取天气请求错误", err);
  //     });
  // },
  mounted() {
    // this.$store.dispatch('project/projectList')
  }
}
</script>
<style lang="scss">
#app {
  width: 1920px;
  height: 937px;
  overflow: hidden;
  position: relative;
  background: rgb(4, 7, 47);
}
</style>
