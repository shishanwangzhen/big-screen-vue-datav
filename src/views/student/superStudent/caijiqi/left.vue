<template>
  <div>
    <div class="topBox">
      <!-- 表头 -->
      <ul class="th">
        <li v-for="item in thList" :key="item">{{ item }}</li>
        <li>操作</li>
      </ul>
      <div class="tbBox">
        <!-- 内容 -->
        <ul class="tb"></ul>
      </div>
    </div>
    <div class="bottomBox">
      <div class="line_title">
        <i class="iconfont icon-jurassic_broken-line"></i>
        <span>实时曲线-{{ curShowData }}</span>
      </div>
      <div class="x-axis-dataType" @click="curTargrt">
        <div class="month" ref="month">月</div>
        <div class="week" ref="week">周</div>
        <div class="day" ref="day">日</div>
      </div>
      <div class="echarts" id="echarts"></div>
    </div>
  </div>
</template>

<script>
export default {
  inject:['reload'],
  data() {
    return {
      thList: ["采集器名称", "状态", "序列号", "设备协议", "上报周期"],
      xAxis_day: ["0:00", "3:00", "6:00", "9:00", "12:00", "15:00", "18:00", "21:00", "24:00"],
      xAxis_week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      xAxis_month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
      curShowData: '二氧化碳浓度',
      option: {
        color: ["rgba(255, 141, 26, 1)"],
        grid: {
          left: '80',
          bottom: '35'
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line"
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ["0:00", "3:00", "6:00", "9:00", "12:00", "15:00", "18:00", "21:00", "24:00"],
          axisLabel: {
            show: true,
            textStyle: {
              color: "rgba(166, 166, 166, 1)",
            },
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 40
          },
        },
        yAxis: {
          type: 'value',
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
            padding: [0, 5, 0, 0]

          },
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1290, 1330,],
            type: 'line',
            areaStyle: {},
            lineHeight: 30,
          }
        ]
      }
    }
  },
  methods: {
    curTargrt(e) {
            let curDayTarget = e.target.className
            if (curDayTarget == 'month') {
                this.$refs.month.setAttribute('id', 'removebackgound')
                this.$refs.week.setAttribute('id', 'setbackground')
                this.$refs.day.setAttribute('id', 'setbackground')
                let Echart = this.$echarts.init(document.getElementById("echarts"));
                Echart.setOption({
                    xAxis: {
                        data: this.xAxis_month
                    }
                })
            }
            if (curDayTarget == 'week') {
                this.$refs.month.setAttribute('id', 'setbackground')
                this.$refs.week.setAttribute('id', 'removebackgound')
                this.$refs.day.setAttribute('id', 'setbackground')
                let Echart = this.$echarts.init(document.getElementById("echarts"));
                Echart.setOption({
                    xAxis: {
                        data: this.xAxis_week
                    }
                })
            }
            if (curDayTarget == 'day') {
                this.$refs.month.setAttribute('id', 'setbackground')
                this.$refs.week.setAttribute('id', 'setbackground')
                this.$refs.day.setAttribute('id', 'removebackgound')
                let Echart = this.$echarts.init(document.getElementById("echarts"));
                Echart.setOption({
                    xAxis: {
                        data: this.xAxis_day
                    }
                })
            }
        },

  },
  mounted() {
    var Echart = this.$echarts.init(document.getElementById("echarts"));
    Echart.setOption(this.option);
   
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../assets/scss/scroll.scss';

@mixin common {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  font-size: 18px;
  color: whitesmoke;
  padding-left: 20px;
}

.topBox {
  .th {
    @include common();
    width: 950px;
    margin-left: 30px;
    margin-top: 15px;
    height: 40px;
    line-height: 40px;
    border-top-left-radius: 6.29px;
    border-top-right-radius: 6.29px;
    background: rgba(12, 54, 122, 0.58);
    box-shadow: inset 10px 10px 20px 10px rgb(18 142 232 / 34%);
  }

  .tbBox {
    width: 950px;
    height: 450px;
    overflow-y: scroll;
    border-bottom-left-radius: 6.29px;
    border-bottom-right-radius: 6.29px;
    background: rgba(5, 13, 75, 1);
    border: 2.92px solid rgba(8, 72, 138, 1);
    box-shadow: inset 0px 1.46px 29.24px 0px rgba(18, 142, 232, 0.34);
    margin-left: 30px;

    .tb {
      @include common();

      li {
        height: 40px;
        line-height: 40px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}

.bottomBox {
  margin-left: 30px;
  margin-top: 10px;
  width: 950px;
  height: 250px;
  background-image: url(../../../../assets/images/echart.png);
  background-repeat: no-repeat;
  background-size: 950px 250px;

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
    border: 1px solid #000;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    z-index: 9999;

    div {
      font-size: 20px;
      color: rgba(102, 255, 255, 1);
      height: 40px;
      text-align: center;
      line-height: 40px;
      background: linear-gradient(180deg,
          rgba(20, 62, 146, 1) 0,
          rgb(0, 0, 0, 1) 50%,
          rgba(20, 62, 146, 1) 100%);

      &:hover {
        cursor: default;
      }
    }

    .day {
      background: transparent;
    }
  }

  .echarts {
    width: 830px;
    height: 230px;
  }
}
#setbackground {
    background: linear-gradient(180deg,
            rgba(20, 62, 146, 1) 0,
            rgb(0, 0, 0, 1) 50%,
            rgba(20, 62, 146, 1) 100%) !important;
}

#removebackgound {
    background: transparent !important;
}
</style>