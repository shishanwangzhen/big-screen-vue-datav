<template>
  <div>
    <div class="decoderContain">
      <!-- 表头 -->
      <ul class="th">
        <li v-for=" (item, index) in thList" :key="index">{{ item }}</li>
        <!-- 添加按钮 -->
        <li>操作<v-addDevices addTitle="控制器" :addList="editList"></v-addDevices></li>
      </ul>
      <div class="tb">
        <!-- 数据内容 -->
        <ul class="content" v-for="( device, index) in deviceList" :key="device.id">
          <li class="list"><img src="../../../../assets/images/contrlImg.png" alt="控制器图片" /></li>
          <li class="list">
            <ul class="msgList">
              <li>{{ device.deviceName }}</li>
              <li>ID：{{ device.deviceId }}</li>
              <li>协议： {{ device.linkType }}</li>
            </ul>
          </li>
          <li class="list">状态</li>
          <li class="list">{{ device.timescale }}</li>
          <li class="list">{{ new Date(device.createTime).toLocaleString() }}</li>
          <li>
            <v-ellipsis :index="index" :curDeviceId="device.id" :curDeviceName="device.deviceName"
              :cueDeviceNum="device.deviceId" @showEditBoxFn="receive"></v-ellipsis>
          </li>
        </ul>
      </div>

    </div>
    <v-editDevice deviceType='控制器'></v-editDevice>
    <v-unbinding deviceType='控制器'></v-unbinding>
    <v-newDelete deviceType='控制器'></v-newDelete>
    <v-deviceDetails deviceType='控制器'></v-deviceDetails>
  </div>
</template>
  
<script>
import { mapState } from 'vuex';
export default {
  name: "app",
  components: {},
  data() {
    return {
      thList: ["设备图片", "设备名称", "状态", "上报周期", "创建时间",],
      editList: ["设备名称", "设备ID", "设备型号"],
    }
  },
  methods: {
    receive() {
      this.$store.commit("isShoweditBox");
    },
  },
  computed: mapState({
    deviceList: state => state.device.deviceList
  }),
  beforeMount() {
    this.$store.dispatch('device/findDevice', {
      type: "2",
      binding: "1",
      bindingId: sessionStorage.getItem("teacherId"),
      projectId: this.$route.query.projectId
    })
  }

};
</script>
<style lang="scss" scoped>
.decoderContain {
  margin-top: 10px;
  margin-left: 20px;
  color: aliceblue;
}

.th {
  text-align: left;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 1150px;
  color: aliceblue;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  border-top-left-radius: 6.29px;
  border-top-right-radius: 6.29px;
  background: rgba(12, 54, 122, 0.58);
  box-shadow: inset 10px 10px 20px 10px rgb(18 142 232 / 34%);

  & li:first-child {
    padding-left: 20px;

  }

  & li:last-child {
    display: flex;
  }
}

.tb {
  font-size: 15px;
  text-align: left;
  width: 1150px;
  border-bottom-left-radius: 6.29px;
  border-bottom-right-radius: 6.29px;
  height: 713px !important;
  overflow-y: scroll;
  background: rgba(5, 13, 75, 1);
  border: 2.92px solid rgba(8, 72, 138, 1);
  box-shadow: inset 0px 1.46px 29.24px 0px rgba(18, 142, 232, 0.34);

  .content {
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    .list {
      margin-top: 5px;
      line-height: 30px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap
    }

    & .list:first-child {
      img {
        margin-top: 5px;
        margin-left: 10px;
        height: 40px;
        width: 80px
      }

    }

    & .list:last-child {
      display: flex;
    }

    & .list:nth-child(7) {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      /*! autoprefixer: off*/
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
  }

  .msgList {
    li {
      font-size: 12px;
      font-weight: 400;
      color: rgba(229, 229, 229, 0.69);
    }

    &>li:first-child {
      font-size: 13.6px;
      font-weight: 400;
      color: rgba(0, 186, 173, 1);
    }
  }


}

/* 自定义滚动条样式开始 */
::-webkit-scrollbar {
  width: 3px;
  /*滚动条宽度*/
  height: 10px;
  /*滚动条高度*/
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: 0px 1px 3px #071e4a inset;
  /*滚动条的背景区域的内阴影*/
  border-radius: 5px;
  /*滚动条的背景区域的圆角*/
  background-color: #071e4a;
  /*滚动条的背景颜色*/
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  box-shadow: 0px 1px 3px #00a0e9 inset;
  /*滚动条的内阴影*/
  border-radius: 5px;
  /*滚动条的圆角*/
  background-color: #00a0e9;
  /*滚动条的背景颜色*/
}
</style>
