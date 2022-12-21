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
              <th>设备ID</th>
              <th>协议</th>
              <th>上报周期</th>
              <th>
                操作
                <v-addDevices :addTitle="addTitle"></v-addDevices>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for=" ( device, index) in deviceList" :key="device.id">
              <td>
                <el-radio title="点击查看传感器实时数据" v-model="curCellectId" :label="device.deviceId">
                  <span style="color: white">{{ device.deviceName }}</span>
                </el-radio>
              </td>
              <td>
                <button :class="
                  device.type == '1'
                    ? 'on-line'
                    : device.type == '0'
                      ? '2'
                      : 'unbound'
                ">
                  {{ device.type == '1' ? '在线' : '离线' }}
                </button>
              </td>
              <td>{{ device.deviceId }}</td>
              <td>{{ device.linkType }}</td>
              <td>{{ device.timescale }}</td>
              <td>
                <v-ellipsis :index="index" :curDeviceId="device.id" :curDeviceName="device.deviceName"
                  :curDeviceNum="device.deviceId"></v-ellipsis>
              </td>
            </tr>
          </tbody>
        </table>
        <v-echart></v-echart>
      </div>
      <div class="right">
        <v-latestNews></v-latestNews>
        <realTime></realTime>
        <dv-border-box-12 style="height: 300px; width: 320px; margin-top: 10px;margin-right: 60px; " class="dv12">
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
    <v-editDevice deviceType='采集器'></v-editDevice>
    <v-unbinding deviceType='采集器'></v-unbinding>
    <v-newDelete deviceType='采集器'></v-newDelete>
    <v-deviceDetails deviceType='采集器'></v-deviceDetails>
  </div>
</template>
    
<script>
import realTime from "_c/realTime.vue";
import echart from '_c/v-echart.vue'
import { mapState } from 'vuex'
export default {
  name: "app",
  components: {
    realTime,
    'v-echart': echart
  },
  data() {
    return {
      isOperation: false,
      curOperationIndex: '',
      curCellectId: '',
      delectTitle: "设备",
      device: { name: "", type: "", model: "", ID: "", operation: "" },
      editTitle: "采集器名称",
      detailTitl: "台创园采集器",
      addTitle: "采集器",
      editType: '采集器',
      editList: ["设备名称", "设备ID", "设备型号"],
      collectorList: [],
      isCheckItem: false,
      hasNoSel: false,
      realDeviceList: {},
      filterDeviceList:{}
    };
  },
  methods: {
    // 单选
    itemCheck() {
      let itemBoxArray = this.$refs.checkItem;
      // index当前选中表格的索引
      itemBoxArray.forEach((element, index) => {
        if (element.checked) {
          console.log(index);
          this.hasNoSel = true;
        }
      });
    },
    receive() {
      this.$store.commit("isShoweditBox");
    },
    edit() {
      this.$store.commit("isShoweditBox");
    },
    delect() {
    },
    detail() {
    },
    add() {
    },
    async getDeviceList() {
      await this.$store.dispatch('device/findDevice', {
        type: "1",
        binding: "1",
        bindingId: sessionStorage.getItem("teacherId"),
        projectId: this.$route.query.projectId
      })
    },
    show(index) {
      this.isOperation = true
      this.curOperationIndex = index
    },
    hide(index) {
      this.isOperation = false
      this.curOperationIndex = index
    }
  },
  watch: {
    curCellectId: {
      handler(newDeviceId) {
        // 返回匹配的实时数据
        this.realDeviceList = this.realDeviceListMsg.filter(item => {
          if (item.deviceId == newDeviceId) {
            return item
          }
        })
        this.$store.dispatch('device/findDeviceDetails', newDeviceId)
          .then(device => {
            this.filterDeviceList = this.realDeviceListMsg.filter(item => {
              console.log('item.deviceId',item.deviceId)
              console.log('device.deviceId',device.deviceId)
              if (item.deviceId == device.id) {
                return device
              }
            })
            console.log('this.filterDeviceList',this.filterDeviceList)
          })
          .catch(err => {
            console.log('获取采集设备详情错误', err)
          })
        // this.realSensorList = getRealSensorList
        // console.log('getRealSensorList',getRealSensorList)
      }
    },
    immediate: true
  },
  computed: mapState({
    deviceList: state => state.device.deviceList,
    realDeviceListMsg: state => state.deviceList,
    cellectId: state => state.device.cellectId,
    deviceDetailsList: state => state.device.deviceDetailsList
  }),
  beforeMount() {
    this.getDeviceList()
  },
  mounted() {
    this.curCellectId = this.cellectId
  }
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
  position: absolute;

  span {
    font-size: 25px;
    font-weight: 900px;
    letter-spacing: 2px;

    &:hover {
      cursor: pointer;
    }
  }

  .operationList {
    width: 130px;

    li {
      font-size: 15px;
      background: rgba(18, 142, 232, 0.34);
      padding-left: 5px;
      line-height: 30px;

      &:hover {
        cursor: default;
        background: rgba(18, 142, 232, 0.5);
      }

      &:active {
        font-size: 12px;
      }
    }

  }

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
thead tr {
  display: table;
  // height: 40px;
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
    &>div {
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
    