<template>
  <div class="deviceContain">
    <v-main></v-main>
  </div>
</template>

<script>
import main from '../device/main/index.vue'
export default {
  components:{
    "v-main":main,
  },
  data(){
    return{
      datetime: "",
      nowDate: "",
      nowYear: "",
      nowWeek: "",
      dataType: "",

    }
  },
  mounted() {
    // this.getTime()
    // this.$axios
    //   .get("http://wthrcdn.etouch.cn/weather_mini", {
    //     params: { city: "南京市" },
    //   })
    //   .then((res) => {
    //     this.dataType = res.data.data.forecast[0].type;
    //     console.log(res.data.data.forecast[0].type);
    //   })
    //   .catch((err) => {
    //     console.log("获取天气失败", err);
    //   });
  },
  methods: {
    // getTime() {
    //   setInterval(() => {
    //     let date = new Date();

    //     // 获取时间：时分秒
    //     const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    //     const minute =date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    //     const secound =date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    //     this.datetime = hour + ":" + minute + ":" + secound;

    //     // 获取日期：年月日
    //     const year = date.getFullYear();
    //     const month = date.getMonth() + 1;
    //     const day = date.getDate();
    //     this.nowDate = month + "-" + day;
    //     this.nowYear = year + "-";

    //     // 获取星期几
    //     const weeks = new Array(
    //       "周日",
    //       "周一",
    //       "周二",
    //       "周三",
    //       "周四",
    //       "周五",
    //       "周六"
    //     );
    //     this.nowWeek = weeks[new Date().getDay()];
    //   }, 1000);
    // },
  },

}
</script>

<style>
  body{
    background: rgb(4,7,47);
  }
  .deviceTop{
    display: flex;
    justify-content: space-between;
  }
  .liner {
  display: inline-block;
  margin-right: 30px;
  margin-top: 20px;
  width: 65vw;
  height: 2px;
  background: linear-gradient(to right,
      rgb(200, 200, 200),
      rgb(0, 255, 244) 51.7%,
      rgb(151, 151, 151) 100%);
  /* border: 1px solid        */
}
span {
  font-size: 16.36px;
  font-weight: 400;
  color: rgba(180, 181, 193, 1);
}

span span:nth-child(1) {
  color: rgba(102, 255, 255, 1);
}

span span:nth-child(2) {
  font-size: 24px;
  font-weight: 500;
  color: rgba(102, 255, 255, 1);
}

</style>