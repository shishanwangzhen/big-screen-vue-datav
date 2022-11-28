<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>
            <span style="margin-left: 20px"></span>
            视频设备名称
          </th>
          <th>状态</th>
          <th>
            操作
            <button class="add_device">添加</button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(device, index) in stu" :key="index">
          <td>
            <!--<label>
               <input
                type="radio"
                name="device"
                :value="device.name"
                @click="itemCheck"
                ref="checkItem"
                :checked="isCheckItem"
                style=""
              />
            </label> -->
            {{ device.name }}
          </td>
          <td>
            <button
              :class="
                device.type == '在线'
                  ? 'on-line'
                  : device.type == '离线'
                  ? 'off-line'
                  : 'unbound'
              "
            >
              {{ device.type }}
            </button>
          </td>
          <td class="record">
            <button class="btn_edit">编辑</button>
            <v-delect :delectTitle="delectTitle"></v-delect>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
    
  <script>
export default {
  name: "app",
  data() {
    return {
      delectTitle: "设备",
      device: { name: "", type: "", operation: "" },
      stu: [
        {
          name: "测试海康球机",
          type: "在线",
          operation: "",
        },
        {
          name: "测试海康球机",
          type: "未绑定",
          operation: "",
        },
        {
          name: "测试海康球机",
          type: "离线",
          operation: "",
        },
        {
          name: "测试海康球机",
          type: "在线",
          operation: "",
        },
        {
          name: "测试海康球机",
          type: "在线",
          operation: "",
        },
        {
          name: "测试海康球机",
          type: "在线",
          operation: "",
        },
        {
          name: "测试海康球机",
          type: "在线",
          operation: "",
        },
        {
          name: "台创台创台创园采集器1台创台创台创园采集器1台创台创台创园采集器1台创台创台创园采集器1",
          type: "在线",
          operation: "",
        },
        {
          name: "测试海康球机",
          type: "在线",
          operation: "",
        },
        {
          name: "测试海康球机",
          type: "在线",
          operation: "",
        },
        {
          name: "测试海康球机",
          type: "在线",
          operation: "",
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
  /* border-radius: 20px !important; */
  /* border-radius: 20px ; */
  width: 400px;
  height: 906px;
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
  // padding-left: 5px;
}

.record {
  button {
    color: white;
    border-radius: 5px;
    width: 42.01px;
    height: 21.3px;
    border: none;
    margin-right: 3px;

    &:first-child {
      background: rgba(0, 186, 173, 1);
    }

    &:last-child {
      background: rgba(216, 40, 40, 1);
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

tbody {
  overflow-y: scroll;
  display: block;
  min-height: 720px;
  max-height: 720px;
  overflow-x: hidden;
  text-align: left;
  background: rgba(5, 13, 75) !important;
  box-shadow: inset 0px 1px 20px 0px rgba(18, 142, 232, 0.34) !important;
}

tbody tr td {
  padding: 15px;
  // width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis
}                                                                                                                                                                                                                                                                                   

table thead,
tbody tr,
tfoot tr,
thead tr {
  display: table;
  text-align: center;
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
</style>
    