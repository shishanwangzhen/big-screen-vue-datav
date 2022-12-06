<template>
  <div class="rightBox">
    <v-latestNews></v-latestNews>

    <dv-border-box-10 class="details">
      <div class="middle">
        <ul class="msg">
          <li>设备名称：台创园采集器</li>
          <li>序列号：</li>
          <li>设备协议：</li>
          <li>上报周期：</li>
        </ul>
        <ul>
          <li>传感器列表：</li>
          <li>
            <ul class="sensorList">
              <li>传感器1传感器1传感器1传感器1</li>
              <li>传感器1</li>
              <li>传感器1</li>
              <li>传感器1</li>
              <li>传感器1</li>
              <li>传感器1</li>
              <li>传感器1</li>
              <li>传感器1</li>
              <li>传感器1</li>
              <li>传感器1</li>
              <li>传感器1</li>
              <li>传感器1</li>
              <li>传感器1</li>
              <li>传感器1</li>
              <li>传感器1</li>
              <li>传感器1</li>
              <li>传感器1</li>
              <li>传感器1</li>
            </ul>
          </li>
        </ul>
      </div>
    </dv-border-box-10>
    <div class="bottomBox">
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
                <span class="checked">查看</span>
              </div>
              <div class="box">
                <div class="top"><span>23°C</span></div>
                <div class="bottom air_humidity">
                  <span class="">空气湿度</span>
                </div>
                <div class="sonleft air_humidity"></div>
                <div class="sonright"></div>
                <span class="checked">查看</span>
              </div>
              <div class="box">
                <div class="top"><span>23°C</span></div>
                <div class="bottom Illuminance"><span>光照度</span></div>
                <div class="sonleft Illuminance"></div>
                <div class="sonright"></div>
                <span class="checked">查看</span>
              </div>
              <div class="box">
                <div class="top"><span>23°C</span></div>
                <div class="bottom dioxide_concentration">
                  <span>二氧化碳浓度</span>
                </div>
                <div class="sonleft dioxide_concentration"></div>
                <div class="sonright"></div>
                <span class="checked">查看</span>
              </div>
              <div class="box">
                <div class="top"><span>23°C</span></div>
                <div class="bottom matrix_temperature"><span>基质温度</span></div>
                <div class="sonleft matrix_temperature"></div>
                <div class="sonright"></div>
                <span class="checked">查看</span>
              </div>
              <div class="box">
                <div class="top"><span>23°C</span></div>
                <div class="bottom matrix_humidity"><span>基质湿度</span></div>
                <div class="sonleft matrix_humidity"></div>
                <div class="sonright"></div>
                <span class="checked">查看</span>
              </div>
              <div class="box">
                <div class="top"><span>23°C</span></div>
                <div class="bottom matrix_pH"><span>基质pH值</span></div>
                <div class="sonleft matrix_pH"></div>
                <div class="sonright"></div>
                <span class="checked">查看</span>
              </div>
              <div class="box">
                <div class="top"><span>23°C</span></div>
                <div class="bottom matrix_EC"><span>基质EC值</span></div>
                <div class="sonleft matrix_EC"></div>
                <div class="sonright"></div>
                <span class="checked">查看</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.rightBox {
  margin-left: 20px;

  .details {
    width: 500px;
    height: 330px;

    .middle {
      display: grid;
      grid-template-columns: 1fr 2fr;

      ul {
        height: 330px;
        padding: 10px;
        color: rgba(255, 255, 255, 0.66);
        text-align: left;
        overflow: hidden;

        &:nth-child(2) {
          .sensorList {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-row-gap: 5px;
            grid-column-gap: 5px;

            li {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }

      .msg {
        line-height: 40px;
      }
    }

  }

  .bottomBox {
    border-radius: 6.53px;
    background: rgba(5, 13, 75, 1);
    border: 1.45px solid rgba(8, 72, 138, 1);
    box-shadow: inset 0px 0.73px 14.51px 0px rgba(18, 142, 232, 0.34);
    width: 500px;
    height: 350px;
    margin-top: 10px;
  }

  .top_contain {
    display: flex;
    justify-content: space-between;
    padding-right: 30px;
  }

  .real_time_data {
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
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2.1fr);
    gap: 50px 20px;

    .box {
      text-align: center;
      border: 1px solid rgba(53, 115, 252, 1);
      height: 100px;
      width: 100px;
      border-radius: 50%;
      margin: 100px auto;
      position: relative;
      background-color: rgba(5, 13, 75, 1);
      top: 20px;
      left: 15px;
      right: 0;
      bottom: 0;
      margin: auto;
      .checked{
        color: rgba(102, 255, 255, 1);
        text-decoration: underline;
        &:hover{
          cursor: pointer;
        }
      }
    }

    .top {
      height: 50px;
      width: 80px;
      border-top-right-radius: 50px;
      border-top-left-radius: 50px;
      text-align: center;
      line-height: 50px;
    }

    .top span {
      font-size: 18px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }

    .bottom {
      height: 50px;
      width: 100px;
      border-bottom-right-radius: 50px;
      border-bottom-left-radius: 50px;
      text-align: center;
      line-height: 50px;
    }

    .bottom span {
      font-size: 15px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }

    .sonleft {
      position: absolute;
      width: 50px;
      height: 25px;
      border-radius: 100%;
      -o-border-radius: 100%;
      -ms-border-radius: 100%;
      -moz-border-radius: 100%;
      -webkit-border-radius: 100%;
      top:40px;
      left: 0;
    }

    .sonright {
      width: 50px;
      height: 25px;
      position: absolute;
      border-radius: 100%;
      -o-border-radius: 100%;
      -ms-border-radius: 100%;
      -moz-border-radius: 100%;
      -webkit-border-radius: 100%;
      top: 32px;
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
}
</style>