<template>
  <div class="stu_caijiqi_contain">
    <div class="top_contain">
      <div class="real_time_data">
        <div class="title">
          <i class="iconfont icon-shuiweitu"></i>
          <span>实时数据</span>
        </div>
        <div class="real_time_data_content">
          <div class="box">
            <div class="top"><span>23°C</span></div>
            <div class="bottom air_temperature">
              <span class="">空气温度</span>
            </div>
            <div class="sonleft air_temperature"></div>
            <div class="sonright"></div>
          </div>
          <div class="box">
            <div class="top"><span>23°C</span></div>
            <div class="bottom air_humidity">
              <span class="">空气湿度</span>
            </div>
            <div class="sonleft air_humidity"></div>
            <div class="sonright"></div>
          </div>
          <div class="box">
            <div class="top"><span>23°C</span></div>
            <div class="bottom Illuminance"><span>光照度</span></div>
            <div class="sonleft Illuminance"></div>
            <div class="sonright"></div>
          </div>
          <div class="box">
            <div class="top"><span>23°C</span></div>
            <div class="bottom dioxide_concentration">
              <span>二氧化碳浓度</span>
            </div>
            <div class="sonleft dioxide_concentration"></div>
            <div class="sonright"></div>
          </div>
          <div class="box">
            <div class="top"><span>23°C</span></div>
            <div class="bottom matrix_temperature"><span>基质温度</span></div>
            <div class="sonleft matrix_temperature"></div>
            <div class="sonright"></div>
          </div>
          <div class="box">
            <div class="top"><span>23°C</span></div>
            <div class="bottom matrix_humidity"><span>基质湿度</span></div>
            <div class="sonleft matrix_humidity"></div>
            <div class="sonright"></div>
          </div>
          <div class="box">
            <div class="top"><span>23°C</span></div>
            <div class="bottom matrix_pH"><span>基质pH值</span></div>
            <div class="sonleft matrix_pH"></div>
            <div class="sonright"></div>
          </div>
          <div class="box">
            <div class="top"><span>23°C</span></div>
            <div class="bottom matrix_EC"><span>基质EC值</span></div>
            <div class="sonleft matrix_EC"></div>
            <div class="sonright"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      lines: {
        curData: "二氧化碳浓度",
        color: "rgba(166, 166, 166, 1)",
      },
      option: {
        color: ["rgba(255, 141, 26, 1)"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLabel: {
            show: true,
            textStyle: {
              color: "rgba(166, 166, 166, 1)",
            },
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 40,
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            //分割线配置
            show: true,
            lineStyle: {
              color: "rgba(255, 255, 255, 0.15)",
            },
          },
          axisLine: {
            show: false, //是否显示轴线
            lineStyle: {
              color: "rgba(255, 255, 255, 0.15)", //刻度线的颜色
            },
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "rgba(166, 166, 166, 1)",
            },
            fontSize: 16,
            fontWeight: 400,
            // lineHeight:60,
            padding: [0, 5, 0, 0],
          },
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {},
            lineHeight: 40,
          },
        ],
      },
      xAxis_day: [
        "0:00",
        "3:00",
        "6:00",
        "9:00",
        "12:00",
        "15:00",
        "18:00",
        "21:00",
        "24:00",
      ],
      xAxis_week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      xAxis_month: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
    };
  },
  mounted() {
    var Echart = this.$echarts.init(document.getElementById("stu_echart"));
    Echart.setOption(this.option);
  },
  methods: {
    curTargrt(e) {
      let curDayTarget = e.target.className;
      if (curDayTarget == "month") {
        this.$refs.month.setAttribute("id", "removebackgound");
        this.$refs.week.setAttribute("id", "setbackground");
        this.$refs.day.setAttribute("id", "setbackground");
        let Echart = this.$echarts.init(document.getElementById("stu_echart"));
        Echart.setOption({
          xAxis: {
            data: this.xAxis_month,
          },
        });
      }
      if (curDayTarget == "week") {
        this.$refs.month.setAttribute("id", "setbackground");
        this.$refs.week.setAttribute("id", "removebackgound");
        this.$refs.day.setAttribute("id", "setbackground");
        let Echart = this.$echarts.init(document.getElementById("stu_echart"));
        Echart.setOption({
          xAxis: {
            data: this.xAxis_week,
          },
        });
      }
      if (curDayTarget == "day") {
        this.$refs.month.setAttribute("id", "setbackground");
        this.$refs.week.setAttribute("id", "setbackground");
        this.$refs.day.setAttribute("id", "removebackgound");
        let Echart = this.$echarts.init(document.getElementById("stu_echart"));
        Echart.setOption({
          xAxis: {
            data: this.xAxis_day,
          },
        });
      }
    },
    getrealTime(e) {
      let res = e.target.dataset.realtimes;
      this.lines.curData = res;
      if (res == "空气温度") this.lines.color = "rgba(67, 207, 124, 1)";
      if (res == "空气湿度") this.lines.color = "rgba(0, 186, 173, 1)";
      if (res == "光照度") this.lines.color = "rgba(255, 235, 59, 1)";
      if (res == "二氧化碳浓度") this.lines.color = "rgba(255, 141, 26, 1)";
      if (res == "基质温度") this.lines.color = "rgba(67, 71, 0, 1)";
      if (res == "基质湿度") this.lines.color = "rgba(56, 56, 56, 1)";
      if (res == "基质pH值") this.lines.color = "rgba(110, 22, 22, 1)";
      if (res == "基质EC值") this.lines.color = "rgba(212, 48, 48, 1)";
      let Echart = this.$echarts.init(document.getElementById("stu_echart"));
      Echart.setOption({
        color: [this.lines.color],
      });
    },
  },
  watch: {
    option: {
      handler(old, newData) {
        console.log(old);
        console.log(newData);
      },
    },
  },
};
</script>
  
  <style lang="scss" scoped>
.top_contain {
  display: flex;
  justify-content: space-between;
  padding-right: 30px;
}
.real_time_data {
  width: 320px;
  height: 350px;
  background-image: url(../assets/images/dataImg.png);
  background-size: 320px 350px;
  background-repeat: no-repeat;
  .title {
    margin: 5px 10px 5px 10px;
    width: 217px;
    height: 31.56px;
    font-weight: 700;
    line-height: 31.56px;
    span {
      font-size: 25px;
      padding-left: 10px;
      color: rgba(255, 255, 255, 1);
    }
    .iconfont {
      font-size: 29px;
      color: rgba(102, 255, 255, 1);
    }
  }
}
.real_time_data_content {
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px 20px;
  .box {
    text-align: center;
    border: 1px solid rgba(53, 115, 252, 1);
    height: 80px;
    width: 80px;
    border-radius: 50%;
    margin: 100px auto;
    position: relative;
    background-color: rgba(5, 13, 75, 1);
    top: 20px;
    left: 15px;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  .top {
    height: 40px;
    width: 80px;
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
    text-align: center;
    line-height: 40px;
  }

  .top span {
    font-size: 15px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }

  .bottom {
    height: 40px;
    width: 80px;
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 40px;
    text-align: center;
    line-height: 40px;
  }

  .bottom span {
    font-size: 10px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }

  .sonleft {
    position: absolute;
    width: 40px;
    height: 20px;
    border-radius: 100%;
    -o-border-radius: 100%;
    -ms-border-radius: 100%;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    top: 33px;
  }

  .sonright {
    width: 40px;
    height: 20px;
    position: absolute;
    border-radius: 100%;
    -o-border-radius: 100%;
    -ms-border-radius: 100%;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    top: 26px;
    right: 0;
    background-color: rgba(5, 13, 75, 1);
  }

  .air_temperature {
    background-color: rgba(67, 207, 124, 1);
  }
  .air_temperature {
    background-color: rgba(67, 207, 124, 1);
  }
  .air_humidity {
    background: rgba(0, 186, 173, 1);
  }
  .Illuminance {
    background: rgba(255, 235, 59, 1);
  }
  .dioxide_concentration {
    background: rgba(255, 141, 26, 1);
  }
  .matrix_temperature {
    background: rgba(67, 71, 0, 1);
  }
  .matrix_humidity {
    background: rgba(56, 56, 56, 1);
  }
  .matrix_pH {
    background: rgba(110, 22, 22, 1);
  }
  .matrix_EC {
    background: rgba(212, 48, 48, 1);
  }
}
.bottom_contain {
  margin-top: 10px;
  display: flex;
  .line {
    margin-left: 10px;
    background-image: url(../assets/images/echart.png);
    background-repeat: no-repeat;
    width: 1180px;
    height: 310px;
    background-size: 1180px 310px;
    .line_title {
      float: left;
      padding: 20px;
      i {
        color: rgba(102, 255, 255, 1);
        font-size: 25px;
      }
      span {
        font-size: 23px;
        font-weight: 700;
        padding-left: 5px;
        letter-spacing: -0.02px;
        color: rgba(255, 255, 255, 1);
      }
    }
    .x-axis-dataType {
      margin: 20px;
      float: right;
      width: 90px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
      div {
        border: 1px solid #000;
        font-size: 20px;
        color: rgba(102, 255, 255, 1);
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: linear-gradient(
          180deg,
          rgba(20, 62, 146, 1) 0,
          rgb(0, 0, 0, 1) 50%,
          rgba(20, 62, 146, 1) 100%
        );
        &:hover {
          cursor: default;
        }
      }
      .week {
        background: transparent;
      }
    }
  }
  .echart {
    width: 1140px;
    height: 270px;
    margin: 60px auto;
  }
}
#setbackground {
  background: linear-gradient(
    180deg,
    rgba(20, 62, 146, 1) 0,
    rgb(0, 0, 0, 1) 50%,
    rgba(20, 62, 146, 1) 100%
  ) !important;
}
#removebackgound {
  background: transparent !important;
}
</style>