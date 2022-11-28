<template>
  <div>
    <div class="curData">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-bar" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text_title mx-2">实时数据</span>
          <dv-decoration-3 class="dv-dec-3" />
        </div>
      </div>
      <div class="dv-contain">
        <!-- <dv-decoration-9
          style="width: 150px; height: 150px"
          dur="4"
        ></dv-decoration-9> -->
        <div class="bottom-data">
          <div
            class="item-box mt-2"
            v-for="(item, index) in numberData"
            :key="index"
          >
            <div class="d-flex">
              <dv-digital-flop class="dv-digital-flop" :config="item.number" />
            </div>
            <p class="text">
              {{ item.text }}
              <span class="colorYellow">{{ item.unit }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <dv-border-box-10
      style="height: 430px; width: 487px;margin-top: 10px;"
      class="dv-contain_caozuo"
    >
      <div class="caozuo">
        <i class="iconfont icon-caozuojilu"></i><span>操作记录</span>
      </div>
      <div class="record_content">
        <div class="open">
          <i class="iconfont icon-circle open_icon"></i>
          <span>用户张小花打开设备操作成功</span>
          <span>2022-09-22 10:00:03</span>
        </div>
        <div class="close">
          <i class="iconfont icon-circle close_icon"></i>
          <span>用户张小花关闭设备操作成功</span>
          <span>2022-09-22 10:00:03</span>
        </div>
        <div class="open">
          <i class="iconfont icon-circle open_icon"></i>
          <span>用户张小花打开设备操作成功</span>
          <span>2022-09-22 10:00:03</span>
        </div>
        <div class="close">
          <i class="iconfont icon-circle close_icon"></i>
          <span>用户张小花关闭设备操作成功</span>
          <span>2022-09-22 10:00:03</span>
        </div>
        <div class="open">
          <i class="iconfont icon-circle open_icon"></i>
          <span>用户张小花打开设备操作成功</span>
          <span>2022-09-22 10:00:03</span>
        </div>
        <div class="close">
          <i class="iconfont icon-circle close_icon"></i>
          <span>用户张小花关闭设备操作成功</span>
          <span>2022-09-22 10:00:03</span>
        </div>
        <div class="open">
          <i class="iconfont icon-circle open_icon"></i>
          <span>用户张小花打开设备操作成功</span>
          <span>2022-09-22 10:00:03</span>
        </div>
        <div class="close">
          <i class="iconfont icon-circle close_icon"></i>
          <span>用户张小花关闭设备操作成功</span>
          <span>2022-09-22 10:00:03</span>
        </div>
        <div class="open">
          <i class="iconfont icon-circle open_icon"></i>
          <span>用户张小花打开设备操作成功</span>
          <span>2022-09-22 10:00:03</span>
        </div>
        <div class="close">
          <i class="iconfont icon-circle close_icon"></i>
          <span>用户张小花关闭设备操作成功</span>
          <span>2022-09-22 10:00:03</span>
        </div>
      </div>
    </dv-border-box-10>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberData: [
        {
          number: {
            number: [15],
            toFixed: 1,
            textAlign: "left",
            content: "{nt}",
            style: {
              fontSize: 24,
            },
          },
          text: "空气温度",
          unit: "°C",
        },
        {
          number: {
            number: [1144],
            toFixed: 1,
            textAlign: "left",
            content: "{nt}",
            style: {
              fontSize: 24,
            },
          },
          text: "空气湿度",
          unit: "%",
        },
        {
          number: {
            number: [361],
            toFixed: 1,
            textAlign: "left",
            content: "{nt}",
            style: {
              fontSize: 24,
            },
          },
          text: "光照度",
          unit: "hPa",
        },
        {
          number: {
            number: [157],
            toFixed: 1,
            textAlign: "left",
            content: "{nt}",
            style: {
              fontSize: 24,
            },
          },
          text: "二氧化碳浓度",
          unit: "Lux",
        },
        {
          number: {
            number: [157],
            toFixed: 1,
            textAlign: "left",
            content: "{nt}",
            style: {
              fontSize: 24,
            },
          },
          text: "基质温度",
          unit: "°C",
        },
        {
          number: {
            number: [157],
            toFixed: 1,
            textAlign: "left",
            content: "{nt}",
            style: {
              fontSize: 24,
            },
          },
          text: "基质湿度",
          unit: "%",
        },
        {
          number: {
            number: [157],
            toFixed: 1,
            textAlign: "left",
            content: "{nt}",
            style: {
              fontSize: 24,
            },
          },
          text: "基质pH值",
          unit: "pH",
        },
        {
          number: {
            number: [157],
            toFixed: 1,
            textAlign: "left",
            content: "{nt}",
            style: {
              fontSize: 24,
            },
          },
          text: "基质EC值",
          unit: "uS/cm",
        },
      ],
    };
  },
  mounted() {
    // let roseEchart = this.$echarts.init(document.getElementById("rose"));
    // roseEchart.setOption(this.option);
  },
};
</script>

<style lang="scss" scoped>
.curData {
  background-image: url(../../../assets/images/echart.png);
  background-repeat: no-repeat;
  background-size: 487px 310px;
  width: 487px;
  height: 310px;
  margin-top: 10px;

  .text-icon {
    width: 20px;
    height: 20px;
  }

  .text_title {
    font-size: 20px;
    font-weight: 700;
    color: rgba(255, 255, 255, 1);
  }
}

#rose {
  height: 225px;
  width: 250px;
}

.dv-dec-3 {
  position: relative;
  width: 120px;
  height: 30px;
  top: -3px;
}

.pt-2 {
  padding: 20px;
}

.bottom-data {
  .item-box {
    & > div {
      padding-left: 90px;
    }

    font-size: 14px;
    float: right;
    position: relative;
    width: 50%;
    color: #d3d6dd;

    .dv-digital-flop {
      font-size: 20px;
      width: 100px;
      height: 20px;
    }

    .colorYellow {
      color: yellowgreen;
    }

    p {
      padding-left: 100px;
    }
  }
}

.dv-contain {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.caozuo {
  padding: 20px;
  span {
    padding: 5px;
    font-size: 20px;
    color: white;
    font-weight: 700;
  }

  .icon-caozuojilu {
    font-size: 25px;
    color: #5cd9e8;
  }
}

@mixin font {
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 0px;
  color: rgba(255, 255, 255, 1);
  text-align: left;
  vertical-align: top;
  padding: 15px;
  height: 21px;
  line-height: 21px;
}

@mixin box {
  padding: 20px;
  height: 25px;
  line-height: 25px;
}

.open {
  @include box();

  span {
    @include font();
  }

  .open_icon {
    font-size: 20px;
    color: rgba(27, 158, 79, 1);
  }
}

.close {
  @include box();

  span {
    @include font();
  }

  .close_icon {
    font-size: 20px;
    color: rgba(212, 48, 48, 1);
  }
}
.record_content{
    height: 80%;
  overflow-y: scroll;
}
/* 自定义滚动条样式开始 */
::-webkit-scrollbar {
  width: 5px; /*滚动条宽度*/
  height: 18px; /*滚动条高度*/
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: 0px 1px 3px #071e4a inset; /*滚动条的背景区域的内阴影*/
  border-radius: 10px; /*滚动条的背景区域的圆角*/
  background-color: #071e4a; /*滚动条的背景颜色*/
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  box-shadow: 0px 1px 3px #00a0e9 inset; /*滚动条的内阴影*/
  border-radius: 10px; /*滚动条的圆角*/
  background-color: #00a0e9; /*滚动条的背景颜色*/
}
</style>