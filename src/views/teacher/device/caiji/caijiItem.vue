<template>
  <div>
    <div class="caijiqiItem">
      <div class="left">
        <table class="table">
          <thead>
            <tr>
              <th>
                <span style="margin-left:20px"></span>
                采集器名称
              </th>
              <th>状态</th>
              <th>设备型号</th>
              <th>设备ID</th>
              <th>备注</th>
              <th>
                操作
                <v-addDevices :addTitle="addTitle" ></v-addDevices>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="device in collectorList" :key="device.id">
              <td>
                <el-radio
                  title="点击选中查看历史曲线和实时数据"
                  v-model="radio"
                  :label="device.id"
                >
                  <span style="color: white">{{ device.name }}</span>
                </el-radio>
              </td>
              <td>
                <button
                  :class="
                    device.type == '1'
                      ? 'on-line'
                      : device.type == '0'
                      ? '2'
                      : 'unbound'
                  "
                >
                  {{ device.type == '1' ? '在线':'离线' }}
                </button>
              </td>
              <td>{{ device.model }}</td>
              <td>{{ device.ID }}</td>
              <td :title="device.remarks">{{ device.remarks }}</td>
              <td class="record">
                <v-edit :editTitle="device.name " editType="采集器" :editList="editList" :Id="device.id"></v-edit>
                <v-delect :delectTitle="device.name " delectType="采集器" :delectId="device.id"></v-delect>
                <v-details></v-details>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="echart_box">
          <div id="echart"></div>
        </div>
      </div>
      <div class="right">
        <div class="tips">
          <div class="tipsTop">
            <i class="iconfont icon-horn"></i>
            <span>最新消息</span>
          </div>
          <div id="wrap">
            <div id="inner">
              <div id="first">本店主营拉面,刀削面,烩面,盖浇饭</div>
              <div id="second">本店主营拉面,刀削面,烩面,盖浇饭</div>
            </div>
          </div>
        </div>
        <realTime></realTime>
        <dv-border-box-12
          style="height: 300px; width: 320px; margin-top: 10px;margin-right: 60px; "
          class="dv12"
        >
          <div class="caozuo">
            <i class="iconfont icon-caozuojilu"></i><span>操作记录</span>
          </div>
          <div class="record_content">
            <div class="open">
              <i class="iconfont icon-circle open_icon"></i>
              <span>张小花打开设备操作成功</span>&nbsp;&nbsp;
              <span>2022-09-22 10:00:03</span>
            </div>
            <div class="close">
              <i class="iconfont icon-circle close_icon"></i>
              <span>张小花打开设备操作成功</span>&nbsp;&nbsp;
              <span>2022-09-22 10:00:03</span>
            </div>
          </div>
        </dv-border-box-12>
      </div>
    </div>
  </div>
</template>
    
<script>
import realTime from "_c/realTime.vue";
import {mapState} from 'vuex'
// import requestsWeather from "../../../../utils/requestWeather"

export default {
  name: "app",
  components: {
    realTime,
  },
  data() {
    return {
      radio: 0,
      delectTitle: "设备",
      device: { name: "", type: "", model: "", ID: "", operation: "" },
      showEditItem: false,
      editTitle: "采集器名称",
      showDetaile: false,
      detailTitl: "台创园采集器",
      showAddBox: false,
      addTitle: "采集器",
      editType:'采集器',
      editList:["设备名称","设备ID","设备型号"],
      option: {
        title: {
          text: "历史曲线",
          textStyle: {
            color: "rgba(255, 255, 255, 1)",
          },
        },
        // 线条颜色
        // lineStyle:{color : "#555"},
        // 显示
        tooltip: {
          trigger: "axis",
        },
        legend: {
          textStyle: {
            // 折线标题
            color: "rgba(255, 255, 255, 1)",
          },
          left: "85px",
          data: [
            "空气温度",
            "空气湿度",
            "光照度",
            "二氧化碳浓度",
            "基质温度",
            "基质湿度",
            "基质pH值",
            "基质EC值",
          ],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          // containLabel显示x轴的刻度
          containLabel: true,
        },
        // 下载
        // toolbox: {
        //   feature: {
        //     saveAsImage: {},
        //   },
        // },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
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
          axisLabel: {
            show: true,
            textStyle: {
              color: "rgba(255, 255, 255, 0.45)",
            },
          },
        },
        yAxis: {
          splitLine: {
            //分割线配置
            show: true,
            lineStyle: {
              color: "rgba(255, 255, 255, 0.15)",
            },
          },
          type: "value",
          axisLabel: {
            show: false,
            textStyle: {
              color: "rgba(255, 255, 255, 0.45)",
            },
          },
          axisLine: {
            show: false, //是否显示轴线
            lineStyle: {
              color: "rgba(255, 255, 255, 0.15)", //刻度线的颜色
            },
          },
        },
        series: [
          {
            name: "空气温度",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "空气湿度",
            type: "line",
            stack: "Total",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "光照度",
            type: "line",
            stack: "Total",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "二氧化碳浓度",
            type: "line",
            stack: "Total",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "基质温度",
            type: "line",
            stack: "Total",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
          {
            name: "基质湿度",
            type: "line",
            stack: "Total",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
          {
            name: "基质pH值",
            type: "line",
            stack: "Total",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
          {
            name: "基质EC值",
            type: "line",
            stack: "Total",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      },
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
      isCheckItem: false,
      hasNoSel: false,
      showDeleComfirm: false,
    };
  },
  methods: {
    // 全选
    // allCheck() {
    //   console.log(this.$refs.checkAll.checked);
    //   if (this.$refs.checkAll.checked) {
    //     this.isCheckItem = true;
    //   } else {
    //     this.isCheckItem = false;
    //   }
    // },
    // 单选
    itemCheck() {
      let itemBoxArray = this.$refs.checkItem;
      // index当前选中表格的索引
      itemBoxArray.forEach((element, index) => {
        if (element.checked) {
          console.log(index);
          this.hasNoSel = true;
        }
        // 全选后取消一个单选，不勾选全选框
        // if(this.isCheckItem && element.checked){
        // this.$refs.checkAll.checked = false
        // return
        // }
      });
    },
    edit() {
      this.showEditItem = true;
    },
    delect() {
      this.showDeleComfirm = true;
    },
    detail() {
      this.showDetaile = true;
    },
    add() {
      this.showAddBox = true;
    },
    // async getWeather(){
    //   let data= {city:"南京"}
    //   const reqFindWeather = () => requestsWeather({method:'GET',url:'/simpleWeather',data})
    //   let res = await reqFindWeather()
    //   if(res.error_code == 0){
    //     console.log('获取天气结果',res)
    //   }
    // }
  },
  computed:mapState({
    collectorList:state => state.caijiqi.collectorList
  }),
  beforeMount(){
    // this.getWeather()
    this.$store.dispatch('caijiqi/findCollector')
  },
  mounted() {
    var myChart = this.$echarts.init(document.getElementById("echart"));
    myChart.setOption(this.option);
  },
};
</script>
    
<style scoped lang="scss">
body {
  background: rgb(4, 7, 47);
}

.caijiqiItem {
  margin-top: 10px;
  margin-left: 20px;
  width: 1260px;
  display: flex;
}

.table {
  width: 860px;
  height: 430px;
  color: #fff !important;
  border-collapse: collapse;
  table-layout: fixed;
}

thead {
  background: rgba(12, 54, 122) !important;
  box-shadow: inset 10px 10px 20px 10px rgba(18, 142, 232, 0.34) !important;
}

thead tr th {
  text-align: left;
  line-height: 40px;
  &:last-child {
    display: flex;
  }
}

.record {
  display: flex;
}

tbody {
  overflow-y: scroll;
  display: block;
  max-height: 390px;
  min-height: 390px;
  overflow-x: hidden;
  background: rgba(5, 13, 75) !important;
  box-shadow: inset 0px 1px 20px 0px rgba(18, 142, 232, 0.34) !important;
}

tbody tr td {
  &:first-child {
    padding-left: 10px;
  }
  text-align: top;
  padding-top: 15px;
  padding-left: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

table thead,
tbody tr,
tfoot tr,
thead tr {
  display: table;
  height: 40px;
  width: 100%;
  table-layout: fixed;
}

/* 自定义滚动条样式开始 */
::-webkit-scrollbar {
  width: 5px;
  /*滚动条宽度*/
  height: 18px;
  /*滚动条高度*/
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: 0px 1px 3px #071e4a inset;
  /*滚动条的背景区域的内阴影*/
  border-radius: 10px;
  /*滚动条的背景区域的圆角*/
  background-color: #071e4a;
  /*滚动条的背景颜色*/
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  box-shadow: 0px 1px 3px #00a0e9 inset;
  /*滚动条的内阴影*/
  border-radius: 10px;
  /*滚动条的圆角*/
  background-color: #00a0e9;
  /*滚动条的背景颜色*/
}

.add_device {
  margin-left: 10px;
  font-size: 11px;
  font-weight: 400;
  color: #fff;
  width: 37px;
  height: 18px;
  line-height: 18px;
  opacity: 1;
  border-radius: 5px;
  background: rgba(6, 8, 31, 1);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
}

.add_device:hover {
  cursor: pointer;
}

.add_device:active {
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
}

@mixin status {
  width: 37px;
  height: 18px;
  border-radius: 5px;
  font-size: 9px;
  font-weight: 400;
  line-height: 15px;
  color: rgba(255, 255, 255, 1);
}

.on-line {
  background: rgba(67, 207, 124, 1);
  @include status();
}

.off-line {
  @include status();
  background: rgba(212, 48, 48, 1);
}

.unbound {
  background: rgba(255, 141, 26, 1);
  width: 45px !important;
  @include status();
}

.echart_box {
  position: absolute;
  padding-top: 20px;
  padding-left: 5px;
  margin-top: 10px;
  height: 310px;
  width: 860px;
  background-image: url("../../../../assets/images/echart.png");
  background-size: 860px 310px;
}

#echart {
  height: 250px;
  width: 850px;
}

.curData {
  background-image: url("../../../../assets/images/echart.png");
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
  padding: 10px;

  span {
    padding: 5px;
    font-size: 20px;
    color: white;
    font-weight: 700;
  }

  .icon-caozuojilu {
    font-size: 20px;
    color: #5cd9e8;
  }
}

@mixin font {
  font-size: 10px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: left;
  vertical-align: top;
  padding: 5px;
  display: contents;
}

@mixin box {
  padding: 10px;
  height: 20px;
  line-height: 20px;
}

.open {
  @include box();

  span {
    @include font();
  }

  .open_icon {
    font-size: 10px;
    padding-right: 10px;
    color: rgba(27, 158, 79, 1);
  }
}

.close {
  @include box();

  span {
    @include font();
  }

  .close_icon {
    font-size: 10px;
    padding-right: 10px;
    color: rgba(212, 48, 48, 1);
  }
}

.record_content {
  height: 70%;
  overflow-y: scroll;
}

/* 自定义滚动条样式开始 */
::-webkit-scrollbar {
  width: 5px;
  /*滚动条宽度*/
  height: 18px;
  /*滚动条高度*/
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: 0px 1px 3px #071e4a inset;
  /*滚动条的背景区域的内阴影*/
  border-radius: 10px;
  /*滚动条的背景区域的圆角*/
  background-color: #071e4a;
  /*滚动条的背景颜色*/
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  box-shadow: 0px 1px 3px #00a0e9 inset;
  /*滚动条的内阴影*/
  border-radius: 10px;
  /*滚动条的圆角*/
  background-color: #00a0e9;
  /*滚动条的背景颜色*/
}

.right {
  margin-left: 10px;
  .tips {
    padding: 10px;
    color: #fff;
    width: 320px;
    height: 73px;
    margin-bottom: 10px;

    .tipsTop {
      color: rgba(255, 235, 59, 1);
    }
  }
}

#wrap {
  width: 320px;
  height: 50px;
  overflow: hidden;
  position: relative;
  margin-top: 20px;
  white-space: nowrap;
}

#inner {
  position: absolute;
  animation: slide 5s linear infinite;
}

#first {
  display: inline-block;
}

#second {
  display: inline-block;
  padding-left: 10px;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>
    