<template>
  <div id="right">
    <v-latestNews style="margin-left: 10px;"></v-latestNews>
    <div class="detailMsg">
      <div class="top">
        <i class="iconfont icon-caijiqi1"></i>
        <span>设备信息</span>
      </div>
      <div class="bottom">
        <ul class="deviceMsg">
          <li>设备名称：{{ deviceMsg.deviceName }}</li>
          <li>设备ID：{{ deviceMsg.deviceId }}</li>
          <li>设备型号：{{ deviceMsg.model }}</li>
          <li>备注：{{ deviceMsg.remarks }}</li>
        </ul>
        <ul class="decoderMsg">
          <li>设备解码器：</li>
          <li>解码器名称：{{ decoderMsg.decoderName }}</li>
          <li>解码器路径：{{ decoderMsg.path }}</li>
          <li>解码器端口：{{ decoderMsg.port }}</li>
          <li>解码器厂商：{{ decoderMsg.manufacturer }}</li>
          <li>协议：{{ decoderMsg.agreementType }}</li>
        </ul>
      </div>
    </div>
    <div class="top_contain">
      <div class="real_time_data">
        <div class="title">
          <i class="iconfont icon-shuiweitu"></i>
          <span>实时数据</span>
        </div>
        <!-- <div class="real_time_data_content">
          <div class="box">
            <div class="top"><span>23°C</span></div>
            <div class="bottom air_temperature">
              <span class="">空气温度</span>
            </div>
            <div class="sonleft air_temperature"></div>
            <div class="sonright"></div>
            <span class="check">查看</span>
          </div>
          <div class="box">
            <div class="top"><span>23°C</span></div>
            <div class="bottom air_humidity">
              <span class="">空气湿度</span>
            </div>
            <div class="sonleft air_humidity"></div>
            <div class="sonright"></div>
            <span class="check">查看</span>
          </div>
          <div class="box">
            <div class="top"><span>23°C</span></div>
            <div class="bottom Illuminance"><span>光照度</span></div>
            <div class="sonleft Illuminance"></div>
            <div class="sonright"></div>
            <span class="check">查看</span>
          </div>
          <div class="box">
            <div class="top"><span>23°C</span></div>
            <div class="bottom dioxide_concentration">
              <span>二氧化碳浓度</span>
            </div>
            <div class="sonleft dioxide_concentration"></div>
            <div class="sonright"></div>
            <span class="check">查看</span>
          </div>
          <div class="box">
            <div class="top"><span>23°C</span></div>
            <div class="bottom matrix_temperature"><span>基质温度</span></div>
            <div class="sonleft matrix_temperature"></div>
            <div class="sonright"></div>
            <span class="check">查看</span>
          </div>
          <div class="box">
            <div class="top"><span>23°C</span></div>
            <div class="bottom matrix_humidity"><span>基质湿度</span></div>
            <div class="sonleft matrix_humidity"></div>
            <div class="sonright"></div>
            <span class="check">查看</span>
          </div>
          <div class="box">
            <div class="top"><span>23°C</span></div>
            <div class="bottom matrix_pH"><span>基质pH值</span></div>
            <div class="sonleft matrix_pH"></div>
            <div class="sonright"></div>
            <span class="check">查看</span>
          </div>
          <div class="box">
            <div class="top"><span>23°C</span></div>
            <div class="bottom matrix_EC"><span>基质EC值</span></div>
            <div class="sonleft matrix_EC"></div>
            <div class="sonright"></div>
            <span class="check">查看</span>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deviceMsg: {
        deviceName: '台创园采集器',
        deviceId: '1006D',
        model: '科瑞威',
        remarks: '这用于采集二氧化碳浓度'
      },
      decoderMsg: {
        decoderName: '新普惠采集器解码器',
        path: 'Decoder32610',
        port: '32610',
        manufacturer: '',
        agreementType: ''
      }
    }
  }

}
</script>

<style lang="scss" scoped>
#right {
  margin-left: 20px;

  .detailMsg {
    width: 375px;
    height: 343px;
    opacity: 1;
    border: 1px solid rgb(29, 109, 184);
    background: rgba(5, 13, 75, 0.4);

    .top {
      display: flex;
      margin-top: 10px;
      margin-left: 10px;

      i {
        color: aqua;
        font-size: 25px;
        font-weight: 700;
      }

      span {
        margin-left: 10px;
        font-size: 25px;
        font-weight: 700;
        color: rgba(255, 255, 255, 1);
      }
    }

    .bottom {
      margin: 20px;
      display: flex;
      font-size: 16px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.66);
      ul{
        li{
          padding: 10px;
        }
      }
    }
  }
}

.top_contain {
  display: flex;
  justify-content: space-between;
  padding-right: 30px;
}

.real_time_data {
  margin-top: 20px;
  width: 3750px;
  height: 320px;
  background-image: url(../../../../assets/images/dataImg.png);
  background-size: 375px 320px;
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 50px 20px;

  .box {
    text-align: center;
    border: 1px solid rgba(53, 115, 252, 1);
    height: 70px;
    width: 70px;
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
    height: 35px;
    width: 70px;
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
    text-align: center;
    line-height: 40px;
  }

  .top span {
    font-size: 13px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }

  .bottom {
    height: 35px;
    width: 70px;
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 40px;
    text-align: center;
    line-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgba(255, 255, 255, 1);
  }

  .bottom span {
    font-size: 10px;

    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }

  .sonleft {
    position: absolute;
    width: 35px;
    height: 19px;
    border-radius: 100%;
    -o-border-radius: 100%;
    -ms-border-radius: 100%;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    top: 29px;
  }

  .sonright {
    width: 35px;
    height: 19px;
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

  .check {
    width: 50px;
    font-size: 12.26px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 0px;
    color: rgba(102, 255, 255, 1);
    text-decoration: underline;
    cursor: pointer;
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
    // background-image: url(../assets/images/echart.png);
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
        background: linear-gradient(180deg,
            rgba(20, 62, 146, 1) 0,
            rgb(0, 0, 0, 1) 50%,
            rgba(20, 62, 146, 1) 100%);

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
  background: linear-gradient(180deg,
      rgba(20, 62, 146, 1) 0,
      rgb(0, 0, 0, 1) 50%,
      rgba(20, 62, 146, 1) 100%) !important;
}

#removebackgound {
  background: transparent !important;
}
</style>