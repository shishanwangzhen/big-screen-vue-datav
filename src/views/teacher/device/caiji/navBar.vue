<template>
  <div class="navContain">
    <ul class="nav">
      <li v-for="(item, index) in navArr" :key="index" :class="{ active: index === curenIndex }"
        @click="itemClick(index)">
        {{ item }}
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navArr: ["采集器设备", "解码器", "参数配置"],
      curenIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.curenIndex = index;
      sessionStorage.setItem("curenIndex", index)
      if (this.curenIndex === 0) {
        this.$router.push({
          path: "/teacherPage/projectDetails/curProject/caijiqi/caijiqiItem",
          query: {
            projectName: this.$route.query.projectName,
            projectId: this.$route.query.projectId,
            deviceType: this.$route.query.deviceType
          }
        });
      }
      if (this.curenIndex === 1) {
        this.$router.push({
          path: "/teacherPage/projectDetails/curProject/caijiqi/decoder",
          query: {
            projectName: this.$route.query.projectName,
            projectId: this.$route.query.projectId,
            deviceType: this.$route.query.deviceType
          }
        });
      }
      if (this.curenIndex === 2) {
        this.$router.push({
          path: "/teacherPage/projectDetails/curProject/caijiqi/sensor",
          query: {
            projectName: this.$route.query.projectName,
            projectId: this.$route.query.projectId,
            deviceType: this.$route.query.deviceType
          }
        });
      }
    },
  },
};
</script>
 
<style lang="scss" scoped>
.navContain {
  display: flex;
}

.nav {
  margin-top: 10px;
  margin-left: 20px;
  border-radius: 9px;
  width: 274px;
  height: 760px;
  background: rgba(5, 13, 75, 1);
  box-shadow: inset 0px 1px 19.99px 0px rgba(18, 142, 232, 0.34);

  li {
    text-align: left;
    margin: 0 20px 20px 0;
    padding-left: 20px;
    line-height: 39.26px;
    color: rgba(255, 255, 255, 0.69);
    font-size: 16px;
    height: 39.26px;
    width: 100%;
    cursor: default;

    &:first-child {
      margin-top: 20px;
    }
  }
}

.active {
  background: linear-gradient(90deg,
      rgba(103, 255, 255, 0.6) 0%,
      rgba(137, 251, 255, 0.26) 41.47%,
      rgba(163, 248, 255, 0) 100%);
}
</style> 