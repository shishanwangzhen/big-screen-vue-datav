<template>
  <div class="top">
    <div class="systemName_contain">
      <div class="systemName">
        <span>江苏农林职业技术学院信工院物联网实训云平台</span>
      </div>
    </div>
    <div class="stick"></div>
    <div class="left">
      <div class="member"></div>
      <div class="device"></div>
    </div>
    <div class="right">
      <div class="userName">
        <img src="../../assets/images/head_portrait.png" alt="头像" />
        <span class="roleName">{{ username }}</span>
      </div>
      <div>
        <img src="../../assets/images/sign_out.png" alt="退出" @click="logOut" />
      </div>
    </div>
    <div class="projectSelection">
      <span>花里胡哨</span>
    </div>
    <span class="tainqi">
      {{ nowYear }}{{ nowDate }}
      {{ nowWeek }} <span>{{ datetime }}</span>
    </span>
    <div style="display:flex">
      <v-ordinaryNav v-if="false"></v-ordinaryNav>
      <v-superNav></v-superNav>
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import ordinaryNav from './ordinaryStudent/navigationBar'
import superNav from './superStudent/navigationBar.vue'
export default {
  inject: ["reload"],
  components:{
    'v-ordinaryNav':ordinaryNav,
    'v-superNav':superNav
  },
  data() {
    return {
      username: "管理员",
      datetime: "",
      nowDate: "",
      nowYear: "",
      nowWeek: "",
      tainqi: '天气'
    };
  },
  methods: {
    logOut() {
      this.$router.push("/cover");
    },
    getTime() {
      setInterval(() => {
        let date = new Date();

        // 获取时间：时分秒
        const hour =
          date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        const minute =
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        const secound =
          date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        this.datetime = hour + ":" + minute + ":" + secound;

        // 获取日期：年月日
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        this.nowDate = month + "-" + day;
        this.nowYear = year + "-";

        // 获取星期几
        const weeks = new Array(
          "周日",
          "周一",
          "周二",
          "周三",
          "周四",
          "周五",
          "周六"
        );
        this.nowWeek = weeks[new Date().getDay()];
      }, 1000);
    },
  },
  beforeMount() {
    this.getTime();
    // this.$axios
    //   .get("http://wthrcdn.etouch.cn/weather_mini", {
    //     params: { city: "南京市" },
    //   })
    //   .then((res) => {
    //     this.dataType = res.data.data.forecast[0].type;
    //     console.log(res.data.data.forecast[0].type);
    //   })
    //   .catch((err) => {
    //     console.log("获取天气请求错误", err);
    //   });
  },
};
</script>

<style lang="scss" scoped>
.systemName_contain {
  width: 1920px;
  height: 93px;
  background: linear-gradient(180deg,
      transparent 10%,
      rgba(54, 247, 255, 1) 90%,
      rgba(54, 247, 255, 1) 100%);
  clip-path: polygon(0 0,
      100% 0,
      100% 40%,
      85% 40%,
      82.5% 100%,
      60% 100%,
      59% 90%,
      41% 90%,
      40% 100%,
      17.5% 100%,
      15% 40%,
      0 40%);
}

.systemName {
  text-align: center;
  line-height: 90.75px;
  width: 1920px;
  height: 90.75px;
  opacity: 1;
  background: linear-gradient(180deg,
      rgb(5, 34, 91) 0%,
      rgba(14, 95, 255, 1) 100%);
  clip-path: polygon(0 0,
      100% 0,
      100% 40%,
      85% 40%,
      82.5% 100%,
      60% 100%,
      59% 90%,
      41% 90%,
      40% 100%,
      17.5% 100%,
      15% 40%,
      0 40%);

  span {
    font-size: 45px;
    font-weight: 900;
    letter-spacing: 5px;
    color: rgba(255, 255, 255, 1);
  }
}

.stick {
  margin: -5px 785px;
  width: 350px;
  height: 5px;
  opacity: 1;
  border-radius: 2.5px;
  background: linear-gradient(90deg,
      rgba(0, 173, 189, 1) 0%,
      rgba(0, 255, 199, 1) 54.14%,
      rgba(0, 182, 199, 1) 100%);
}

@mixin diamond {
  width: 170px;
  height: 53px;
  background: linear-gradient(180deg,
      rgb(5, 34, 91) 0%,
      rgb(5, 49, 135) 100%);
}

.left {
  margin-top: -52px;

  div {
    cursor: pointer;
    text-align: center;
    line-height: 53px;
    font-size: 18px;
    font-weight: 900;
    letter-spacing: -0.01px;
    color: rgba(255, 255, 255, 1);
    clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);
    display: inline-block;
    @include diamond();
  }

  .member {
    margin-right: -20px;
    margin-left: 5px;
    // color: rgba(102, 255, 255, 1) ;
    // background: linear-gradient(180deg, rgba(14, 95, 255, 1) 0%, rgba(14, 95, 255, 0.43) 100%);
  }
}

.right {
  margin-top: -53px;
  margin-left: 1590px;

  div {
    text-align: center;
    line-height: 75px;
    clip-path: polygon(25% 0, 100% 0, 75% 100%, 0 100%);
    display: inline-block;
    @include diamond();

    img {
      width: 35px;
      height: 35px;
      margin-right: 10px;
    }
  }

  .userName {
    vertical-align: bottom;
    line-height: 53px;
    margin-right: -20px;
    margin-left: 5px;

    img {
      vertical-align: middle;
    }
  }
}

.projectSelection {
  width: 657px;
  height: 47px;
  
  // border: 1px solid rgb(19, 201, 150);
  background-image: url(../../assets/images/selectbg.png);
  background-repeat: no-repeat;
  background-size: 675px 47px;
  margin-left: 640px;
  margin-top: 10px;
  display: inline-block;
  text-align: center;
  padding-top: 10px;

  span {
    left: 276px;
    top: 5px;
    width: 72px;
    height: 35px;
    line-height: 35px;
    opacity: 1;
    /** 文本1 */
    font-size: 20px;
    font-weight: 400;
    color: rgba(0, 255, 244, 1);
    text-align: left;
    vertical-align: top;

  }
}

span {
  font-size: 16.36px;
  font-weight: 400;
  color: rgba(180, 181, 193, 1);
}

.tainqi {
  padding-left: 170px;
}

span span:nth-child(1) {
  color: rgba(102, 255, 255, 1);
}

span span:nth-child(2) {
  font-size: 20px;
  font-weight: 500;
  color: rgba(102, 255, 255, 1);
}

.select_group {
  margin-top: 5px;
  color: rgba(102, 255, 255, 1);
  font-size: 18px;
  border: none;
  background-color: rgb(4, 7, 47);
  text-align: center;

  option {
    padding: 5px;
  }
}

#text {
  color: rgba(102, 255, 255, 1);
  background: linear-gradient(180deg, rgba(14, 95, 255, 1) 0%, rgba(14, 95, 255, 0.43) 100%);
}

#text2 {
  color: white;
  background: linear-gradient(180deg,
      rgb(5, 34, 91) 0%,
      rgb(5, 49, 135) 100%);
}
</style>