<template>
  <div class="editBox">
    <div class="projectNameTitele">添加{{ addTitle }}</div>
    <div class="containBox" v-for="(list, index) in addList" :key="index">
      <span>{{ list }}</span>
      <input class="itemNo addcommon" ref="getValue" />
    </div>
    <div class="containBox" v-if="isShowCaiijiqiItem">
      <span v-if="addTitle == '采集器'">采集器</span>
      <span v-else>控制器</span>
      <select class="itemNo addcommon" v-model="curdeviceId">
        <option value="" disabled selected v-if="addTitle == '采集器'">选择采集器</option>
        <option value="" disabled selected v-else>选择控制器</option>
        <option v-for="item in deviceList" :key="item.id" :value="item.id">{{ item.deviceName }}</option>
      </select>
    </div>
    <!-- <div class="containBox" v-if="isShowCaiijiqiItem">
      <span>解码器</span>
      <select class="itemNo addcommon" v-model="curDecoder">
        <option value="" disabled selected>选择解码器</option>
        <option v-for="item in decoderArr" :key="item.id" :value="item.id">{{ item.name }}</option>
      </select>
    </div> -->
    <div class="containBox" v-if="addTitle == '学生'">
      <span>学生选择</span>
      <select class="itemNo addcommon" v-model="curStudentId">
        <option value="" disabled selected>选择学生</option>
        <option v-for="item in studentList" :key="item.id" :value="item.id">
          {{ item.account }}
        </option>
      </select>
    </div>
    <div class="containBox" v-if="addTitle == '学生'">
      <span>角色</span>
      <select class="itemNo addcommon" v-model="role">
        <option value="" disabled selected>选择角色</option>
        <option value="1">组长</option>
        <option value="2" selected>组员</option>
      </select>
    </div>
    <div class="containBox" v-if="desp">
      <span>描述</span>
      <textarea class="describe addcommon" v-model="remarks"></textarea>
    </div>
    <div class="selctType">
      <button @click="cancel">取消</button>
      <button @click="submit" id="btn">确定</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["addTitle", "addList"],
  inject: ["reload"],
  data() {
    return {
      isShowCaiijiqiItem: false,
      isShowProjectItem: false,
      desp: false,
      curCreator: sessionStorage.getItem("teacherAccount"),
      adminId: sessionStorage.getItem("teacherId"),
      projectId: this.$route.query.projectId,
      selectAdmin: "",
      addListArr: [],
      addListObj: {},
      projectNameArr: [],
      projectIdArr: [],
      curDecoder: '',
      curdeviceId: '',
      remarks: '',
      fn: function async(addListObj, addListArr) {
        Object.keys(addListObj).map((i, index) => {
          return (addListObj[i] = addListArr[index]);
        });
      },
      role: "",
      curStudentId: "",
    };
  },
  methods: {
    cancel() {
      this.$emit("cancel", false);
    },
    async submit() {
      this.addListArr = [];
      //获取添加的输入框节点
      if (this.addTitle == "项目") {
        let dom = this.$refs.getValue;
        dom.forEach((element) => {
          this.addListArr.push(element.value);
        });
        this.addListObj = {
          name: "",
          number: "",
          creatorId: "",
          info: "",
        };
        // 将数组的值一一填到对象中
        this.fn(this.addListObj, this.addListArr);
        this.addListObj["creatorId"] = this.adminId;
        this.addListObj["info"] = this.remarks;
        if (
          this.addListObj.name !== "" &&
          this.addListObj.number !== "" &&
          !this.projectNameArr.includes(this.addListObj.name) &&
          !this.projectIdArr.includes(this.addListObj.number)
        ) {
          await this.$store.dispatch("project/creatProject", this.addListObj);
          await this.$store.dispatch("project/projectList");
          this.$emit("cancel", false);
        } else {
          this.$message({
            message: "输入框未填写完/项目名称和项目编号存在重复",
            type: "warning",
          });
        }
      }
      if (this.addTitle == "项目组") {
        let dom = this.$refs.getValue;
        dom.forEach((element) => {
          this.addListArr.push(element.value);
        });
        this.addListObj = {
          name: "",
          number: "",
          info: "",
          projectId: "",
          creatorId: "",
        };
        this.fn(this.addListObj, this.addListArr);
        this.addListObj["projectId"] = this.projectId;
        this.addListObj["creatorId"] = this.adminId;
        this.addListObj["info"] = this.remarks;
        if (
          this.addListObj.name !== "" &&
          this.addListObj.number !== "" &&
          !this.projectNameArr.includes(this.addListObj.name) &&
          !this.projectIdArr.includes(this.addListObj.number)
        ) {
          await this.$store.dispatch(
            "userManagement/insertGroup",
            this.addListObj
          );
          this.$emit("cancel", false);
          await this.$store.dispatch("userManagement/findGroup", {
            creatorId: sessionStorage.getItem("teacherId"),
            projectId: this.$route.query.projectId,
          });
        } else {
          this.$message({
            message: "输入框未填写完/项目组名称和项目组编号存在重复",
            type: "warning",
          });
        }
      }
      if (this.addTitle == "学生") {
        this.addListObj = {
          groupId: "",
          id: "",
          projectId: "",
          role: "",
        };
        if (this.role !== "" && this.curStudentId !== "") {
          // 添加学生
          this.addListObj["id"] = this.curStudentId;
          this.addListObj["role"] = this.role;
          this.addListObj["projectId"] = this.projectId;
          this.addListObj["groupId"] = sessionStorage.getItem("groupId");
          await this.$store.dispatch(
            "userManagement/changeStudentList",
            this.addListObj
          );
          this.$emit("cancel", false);
          await this.$store.dispatch("userManagement/studentList", [
            { type: "addList" },
            {
              status: 1,
              groupId: sessionStorage.getItem("groupId"),
              projectId: this.$route.query.projectId,
            },
          ]);
        }
      }
      if (this.addTitle == "采集器") {
        await this.$store.dispatch("device/updateDeviceBinding", {
          binding: '1',
          ids: [this.curdeviceId],
          projectId: this.$route.query.projectId,
          bindingId: sessionStorage.getItem("teacherId")
        })
      //   if (this.remarks !== "" || this.curDecoder !== "") {
      //     await this.$store.dispatch("device/updateDevice", {
      //       decoderId: this.curDecoder,
      //       remarks: this.remarks,
      //       creatorId: sessionStorage.getItem("teacherId"),
      //       projectId: this.$route.query.projectId,
      //       id: this.curdeviceId
      //     })
      //   }
        await this.$store.dispatch('device/findDevice', {
          type: "1",
          binding: "1",
          bindingId: sessionStorage.getItem("teacherId"),
          projectId: this.$route.query.projectId
        })
      }
      if (this.addTitle == "采集器解码器") {
        this.addListObj = {
          number: '',
          name: '',
          path: '',
          port: '',
          model: '',
          manufacturer: '',
          agreement: '',
          remarks: ''
        }
        let dom = this.$refs.getValue;
        dom.forEach(el => {
          this.addListArr.push(el.value);
        })
        this.fn(this.addListObj, this.addListArr);
        this.addListObj["type"] = "1"
        this.addListObj["creatorId"] = sessionStorage.getItem('teacherId')
        let haveEmpty = this.addListArr.some(function (elem) {
          return elem == "";
        });
        if (!haveEmpty) {
          await this.$store.dispatch("decoder/insertDecoder", this.addListObj)
          this.addListArr = []
        } else {
          this.$message({
            message: "输入框未填写完",
            type: "warning"
          })
        }
      }
      if (this.addTitle == "控制器解码器") {
        this.addListObj = {
          number: '',
          name: '',
          path: '',
          port: '',
          model: '',
          manufacturer: '',
          agreement: '',
          remarks: ''
        }
        let dom = this.$refs.getValue;
        dom.forEach(el => {
          this.addListArr.push(el.value);

        })
        this.fn(this.addListObj, this.addListArr);
        this.addListObj["type"] = "2"
        this.addListObj["creatorId"] = sessionStorage.getItem('teacherId')
        let haveEmpty = this.addListArr.some(function (elem) {
          return elem == "";
        });
        if (!haveEmpty) {
          await this.$store.dispatch("decoder/insertDecoder", this.addListObj)
          await this.$store.dispatch('decoder/findDecoder', "2")
          this.addListArr = []
          this.reload()
        } else {
          this.$message({
            message: "输入框未填写完",
            type: "warning"
          })
        }
      }
    },
    async getStudentList() {
      this.$store.dispatch("userManagement/studentList", [
        { type: "apllicationLsit" },
        {
          status: 1,
          creatorId: sessionStorage.getItem("teacherId"),
        },
      ]);
    },
  },
  computed: mapState({
    projectBasicInfo: (state) => state.project.projectBasicInfo,
    studentList: (state) => state.userManagement.studentList,
    groupInfo: (state) => state.userManagement.groupArr,
    decoderArr: state => state.decoder.decoderArr,
    deviceList: state => state.notImportedDevice.deviceList
  }),
  beforeMount() {
    if (this.addTitle == "采集器") {
      this.isShowCaiijiqiItem = true;
      //教师端的采集器
      this.desp = true;
    } else if (this.addTitle == "项目") {
      this.desp = true;
      this.isShowProjectItem = true;
    } else if (this.addTitle == "角色") {
      this.desp = true;
    } else if (this.addTitle == "控制器") {
      this.desp = true;
      this.isShowCaiijiqiItem = true;
    } else if (this.addTitle == "项目组") {
      this.desp = true;
    } else if (this.addTitle == "学生") {
      this.desp = true;
    } else {
      this.desp = false;
    }
  },
  mounted() {
    if (this.addTitle == "项目") {
      this.projectBasicInfo.forEach((el) => {
        this.projectNameArr.push(el.name);
        this.projectIdArr.push(el.number);
      });
    }
    if (this.addTitle == "项目组") {
      this.groupInfo.forEach((el) => {
        this.projectNameArr.push(el.groupName);
        this.projectIdArr.push(el.groudID);
      });
    }
    if (this.addTitle == "学生") {
      this.getStudentList();
    }
    if (this.addTitle == "采集器") {
      // 查询当前项目下的采集器
      this.$store.dispatch('notImportedDevice/findDevice', {
        type: "1",
        binding: "0",
      })
      // 查询当前项目下采集器的解码器
      // this.$store.dispatch('decoder/findDecoder', "1")
    }
  },
};
</script>

<style lang="scss" scoped>
.editBox {
  z-index: 9001;
  width: 695px;
  height: 465px;
  background-size: 1150px 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(../assets/images/operation-prompt-box.png);
  background-repeat: no-repeat;

  .projectNameTitele {
    height: 60px;
    margin-top: 20px;
    margin-left: 20px;
    font-size: 25px;
    font-weight: 700;
    color: rgba(255, 255, 255, 1);
  }

  .containBox {
    font-size: 15px;
    font-weight: 400;
    display: flex;
    margin: 10px;
  }

  .selectadmin {
    width: 500px !important;

    option:disabled {
      color: rgba(255, 255, 255, 0.69);
    }
  }

  @mixin commonStyle {
    background: rgba(0, 0, 0, 0.6);
    color: rgba(255, 255, 255, 1);
    padding-left: 10px;
    padding-right: 10px;
    letter-spacing: 1px;
    overflow: hidden;
    margin-left: 20px;
  }

  .addcommon {
    width: 500px;
    @include commonStyle();
  }

  .selectDecoder {
    width: 240px;
    @include commonStyle();
  }

  @mixin commonStyle {
    white-space: nowrap;
    height: 30px;
    line-height: 30px;
  }

  .groupName {
    @include commonStyle();
  }

  .itemNo {
    @include commonStyle();
  }

  .describe {
    padding: 5px;
    height: 126.35px;
    white-space: pre-line;
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
    box-shadow: 0px 1px 3px rgb(6, 79, 112) inset;
    /*滚动条的内阴影*/
    border-radius: 10px;
    /*滚动条的圆角*/
    background-color: rgb(6, 79, 112);
    /*滚动条的背景颜色*/
  }

  span {
    display: inline-block;
    height: 30px;
    width: 100px;
    text-align: center;
    line-height: 30px;
    background: rgba(0, 0, 0, 0.6);
    color: rgba(255, 255, 255, 1);
    letter-spacing: 1px;
  }
}

@mixin button {
  font-size: 15px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  border: none;
  width: 50px;
  height: 25px;
  border-radius: 9px;
  margin: 20px;
}

.selctType {
  margin-right: 10px;
  text-align: right;

  button:first-child {
    @include button();
    background: rgba(0, 186, 173, 1);
  }

  button:last-child {
    @include button();
    background: rgba(216, 40, 40, 1);
  }

  button:active {
    font-size: 18px;
    box-shadow: inset 0px -6px 4px 0px rgba(255, 255, 255, 0.25);
  }
}
</style>
