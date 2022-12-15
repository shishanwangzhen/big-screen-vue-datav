<template>
  <div>
    <div style="display:flex;align-items: baseline;justify-content: space-between">
      <!-- <div class="topLft">
        <div class="btn" @click="toImport">导入设备</div>
        <img src="../../assets/images/youjiantou.png" alt="">
      </div> -->
      <v-day class="dataList"></v-day>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th><span style="margin-left: 30px"></span>项目名称</th>
          <th>管理员</th>
          <th>项目编号</th>
          <th>项目描述</th>
          <th>
            操作
            <v-addDevices :addTitle="addTitle" :addList="addList"></v-addDevices>
            <div>
              <v-clearAll></v-clearAll>
            </div>
          </th>
          <th>{{ null }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(list, index) in projectlist" :key="list.id">
          <td>
            <span style="padding-right: 20px">{{ index + 1 }}</span>
            <span :title="list.name">{{ list.name }}</span>
          </td>
          <td>{{ list.creatorName }}</td>
          <td>{{ list.number }}</td>
          <td :title="list.info">{{ list.info }}</td>
          <td class="record">
            <v-edit editType="项目" :editTitle="list.name" :editList="editList" :Id="list.id"></v-edit>
            <v-delect :delectTitle="`${list.name}项目组`" :delectId="list.id" delectType="项目"></v-delect>
            <button class="configuration" @click="toCongiguration(list.id, list.name)">配置</button>
          </td>
          <td>
            <span class="enter" @click="enter(list.id, list.name)">进入该项目</span>
          </td>
        </tr>
      </tbody>
    </table>
    <router-view></router-view>
  </div>
</template>

<script>
import clearAll from '../../components/clearAll.vue'
import { mapState } from 'vuex';
export default {
  components: {
    'v-clearAll': clearAll,
  },
  inject: ["reload"],
  data() {
    return {
      showDeleComfirm: false,
      delectTitle: '项目组',
      showEditItem: false,
      isShowConfigaration: false,
      isShowClear: false,
      isShowSelct: true,
      title: "项目组权限",
      editTitle: '当前项目组名称',
      isAddDevice: false,
      addTitle: '项目',
      configurationTitle: '',
      addList: ['项目名称', '项目编号'],
      editList: ['项目名称', '项目编号']
    };
  },
  methods: {
    clear() {
      this.isShowClear = true
    },
    deleteProjrct() {
      this.showDeleComfirm = true;
    },
    editItemproject() {
      this.showEditItem = true
    },
    prjecConfigaration() {
      this.isShowConfigaration = true
    },
    async enter(id, name) {
      //存储项目id
      this.$router.push({
        path: '/teacherPage/projectDetails',
        query: {
          projectName: name,
          projectId: id
        }
      })
      await this.$store.dispatch("userManagement/findGroup", {
        creatorId: sessionStorage.getItem("teacherId"),
        projectId: this.$route.query.projectId,
      });
    },
    toImport() {
      this.$router.push({
        path: '/teacherPage/importDevice'
      })
    },
    toCongiguration(id, name) {
      this.$router.push({
        path: '/teacherPage/configuration',
        query: {
          projectId: id,
          projectName: name
        }
      })
    }
  },
  computed: mapState({
    projectlist: state => state.project.projectList
  }),
  beforeMount() {
    this.$store.dispatch('project/projectList')
  },
  mounted() {
    var host = window.location.host;
    console.log('host',host)
    const socket = new WebSocket(`ws://192.168.0.66:8081/socketServer/${sessionStorage.getItem('teacherId')}`)
    socket.addEventListener('open', function () {
      console.log('链接成功')
      // socket.send('客户端连接上服务端的socket')
    })
    socket.addEventListener('message', function (event) {
      console.log('socketEvent', event.data)
    })

    // 服务断开
    socket.addEventListener('close', function () {
      console.log('服务器断开连接')
    })
  }
};
</script>

<style lang="scss" scoped>
.dataList {
  position: absolute;
  right: 40px;
  top: 120px;
}

.table {
  width: 1850px;
  color: #fff !important;
  border-collapse: collapse;
  table-layout: fixed;
  margin-left: 40px;
  margin-top: 80px;
}

thead {
  text-align: left;
  background: rgba(12, 54, 122) !important;
  box-shadow: inset 10px 10px 20px 10px rgba(18, 142, 232, 0.34) !important;
}

thead tr th {
  padding-left: 10px;
  line-height: 40px;

  &:nth-child(5) {
    display: flex;
  }
}

.record {
  display: flex;

  .configuration {
    color: white;
    border-radius: 5px;
    width: 42.01px;
    height: 21.3px;
    border: none;
    background: rgba(42, 130, 228, 1);

    &:active {
      box-shadow: 1px 1px 1px rgba(42, 130, 228, 1);
    }
  }

  .btn_edit {
    &:active {
      box-shadow: 1px 1px 1px rgba(0, 186, 173, 1);
    }

    &:hover {
      cursor: pointer;
    }
  }

  .btn_delete {
    &:active {
      box-shadow: 1px 1px 1px rgba(216, 40, 40, 1);
    }

    &:hover {
      cursor: pointer;
    }
  }
}

.enter {
  margin-left: 20px;
  display: inline-block;
  text-align: center;
  width: 150px;
  height: 23px;
  opacity: 1;
  font-size: 15px;
  border-radius: 5px;
  color: rgba(255, 255, 255, 1);
  text-shadow: 0 0 5px rgba(255, 141, 26, 1), 0 0 5px rgba(255, 141, 26, 1), 0 0 5px rgba(255, 141, 26, 1), 0 0 15px rgba(255, 141, 26, 1);
  border: 1px solid rgba(255, 141, 26, 1);
  box-shadow: inset 0px -5.23px 3.48px 0px rgba(255, 255, 255, 0.25);
  cursor: default;

  &:active {
    text-shadow: 0 0 5px rgba(67, 207, 124, 1), 0 0 5px rgba(67, 207, 124, 1), 0 0 5px rgba(67, 207, 124, 1), 0 0 15px rgba(67, 207, 124, 1);
    border: 1px solid rgba(67, 207, 124, 1);
  }
}

tbody {
  overflow-y: scroll;
  display: block;
  max-height: 700px;
  min-height: 700px;
  overflow-x: hidden;
  text-align: left;
  background: rgba(5, 13, 75) !important;
  box-shadow: inset 0px 1px 20px 0px rgba(18, 142, 232, 0.34) !important;
  // position: relative;
}

table::before {
  content: "";
  position: absolute;
  width: 500px;
  height: 500px;
  top: 350px;
  left: 500px;
  // z-index: 1;
  opacity: 0.5;
  background: url(../../assets/images/blockImg.png ) no-repeat;
  background-size: 500px 500px;
  transform: rotate(340deg)
}

tbody tr td {
  padding: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  //   text-align: left;
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

.topLft {
  margin-top: 20px;
  display: flex;
  align-items: center;

  .btn {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 14px;
    line-height: 60px;
    color: rgba(255, 255, 255, 0.81);
    text-align: center;
    margin-left: 40px;
    width: 281px;
    opacity: 1;
    border-radius: 2.76px;
    background: linear-gradient(180deg, rgba(0, 102, 255, 0.8) 0%, rgba(0, 10, 37, 0) 49.98%, rgba(0, 102, 255, 0.9) 100%);
    border: 0.82px solid rgba(0, 102, 255, 1);

    &:active {
      font-size: 20px;
    }

    &:hover {
      cursor: default;
    }
  }

  img {
    margin-left: 20px;
    width: 15px;
    height: 40px;
  }
}
</style>
