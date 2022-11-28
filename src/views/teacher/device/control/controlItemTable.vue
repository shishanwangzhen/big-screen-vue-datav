<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>
            <span style="margin-left: 30px"></span>
            设备图片
          </th>
          <th>设备名称</th>
          <th>状态</th>
          <th>数据保密性</th>
          <th>创建时间</th>
          <th>备注</th>
          <th >
            操作
            <v-addDevices :addTitle="addTitle" ></v-addDevices>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in controlList" :key="index">
          <td>
            <span style="margin-left: 30px"></span>
            <img
              src="../../../../assets/images/contrlImg.png"
              alt=""
              style="height: 40px; width: 80px"
            />
          </td>
          <td>
            <ul
              v-for="(msg, index) in item.deviceMsg"
              :key="index"
              class="msgList"
            >
              <li>{{ msg.deviceName }}</li>
              <li>型号：{{ msg.model }}</li>
              <li>ID：{{ msg.id }}</li>
              <li>厂商：{{ msg.manufacturer }}</li>
              <li>协议： {{ msg.agreement }}</li>
            </ul>
          </td>
          <td>
            <button
              :class="
                item.state == '在线'
                  ? 'on-line'
                  : item.state == '离线'
                  ? 'off-line'
                  : 'unbound'
              "
            >
              {{ item.state }}
            </button>
          </td>
          <td>
            <select class="selects">
              <option value="">允许所有人查看</option>
              <option value="">数据保密</option>
            </select>
          </td>
          <td>{{ item.createTime }}</td>
          <td>{{ item.remarks }}</td>
          <td class="record">
            <v-edit :editTitle="editTitle" :editType="editType" :editList="editList"></v-edit>
            <v-delect :delectTitle="delectTitle"></v-delect>
            <v-details></v-details>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      delectTitle: "设备",
      editTitle: "当前控制器名称",
      editType: "控制器",
      editList:["设备名称","设备ID","设备型号"],
      addList:['设备名称','设备ID','设备型号'],
      addTitle:'控制器',
      controlList: [
        {
          deviceMsg: [
            {
              deviceName: "联通控制器",
              model: "科瑞威-C02164",
              id: "JY331923046",
              manufacturer: "1",
              agreement: "2",
            },
          ],
          state: "离线",
          createTime: "2022年10月25日15:19:02",
          remarks: "这是一台控制器",
        },
        {
          deviceMsg: [
            {
              deviceName: "联通控制器",
              model: "科瑞威-C02164",
              id: "JY331923046",
              manufacturer: "2",
              agreement: "3",
            },
          ],
          state: "在线",
          createTime: "2022年10月25日15:19:02",
          remarks: "这是一台控制器",
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
    delect() {
      this.showDeleComfirm = true;
    },
  },
};
</script>
  
<style scoped lang="scss">
body {
  background: rgb(4, 7, 47);
}

.table {
  width: 1140px;
  height: 430px;
  margin-left: 10px;
  color: #fff !important;
  border-collapse: collapse;
  table-layout: fixed;
}

thead {
  text-align: left;
  background: rgba(12, 54, 122) !important;
  box-shadow: inset 10px 10px 20px 10px rgba(18, 142, 232, 0.34) !important;
}

thead tr th {
  padding-left: 10px;
  line-height: 40px;
  &:last-child {
    display: flex;
  }
}

.record {
  & > * {
    display: inline-block;
  }
}

tbody {
  overflow-y: scroll;
  display: block;
  max-height: 720px;
  min-height: 720px;
  overflow-x: hidden;
  text-align: left;
  background: rgba(5, 13, 75) !important;
  box-shadow: inset 0px 1px 20px 0px rgba(18, 142, 232, 0.34) !important;
}

tbody tr td {
  padding-top: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 15px;
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
  width: 40px;
  height: 20px;
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
.selects {
  width: 115px;
  height: 26px;
  opacity: 1;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 400;
  background: rgba(166, 166, 166, 0.28);
  color: rgba(166, 166, 166, 1);
}
.msgList {
  li {
    font-size: 12px;
    font-weight: 400;
    color: rgba(229, 229, 229, 0.69);
  }
  & > li:first-child {
    font-size: 13.6px;
    font-weight: 400;
    color: rgba(0, 186, 173, 1);
  }
}
</style>
  