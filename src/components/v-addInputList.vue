<template>
  <div class="editBox">
    <div class="projectNameTitele">添加{{ addTitle }}</div>
    <div class="containBox" v-for="(list, index) in addList" :key="index">
      <span>{{ list }}</span>
      <div contenteditable="true" class="itemNo addcommon" ></div>
    </div>
    <div class="containBox" v-if="isShowCaiijiqiItem">
      <span>解码器</span>
      <select class="itemNo  selectDecoder">
        <option value="" disabled selected>选择厂商</option>
      </select>
      <select class="itemNo selectDecoder">
        <option value="" disabled selected>选择协议类型</option>
      </select>
    </div>
<!--    <div class="containBox" v-if="isShowProjectItem">-->
<!--      <span>管理员</span>-->
<!--      <select class="itemNo addcommon selectadmin" v-model="selectAdmin" required>-->
<!--        <option value="" disabled selected>管理员选择</option>-->
<!--        <option :value="adminId">{{ curCreator }}</option>-->
<!--      </select>-->
<!--    </div>-->
    <div class="containBox" v-if="desp">
      <span>描述</span>
      <div contenteditable="true" class="describe addcommon"></div>
    </div>
    <div class="selctType">
      <button @click="cancel">取消</button>
      <button @click="submit" id="btn">确定</button>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
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
      selectAdmin: "",
      addListArr: [],
      addListObj: {
        name: "",
        number: "",
        creatorId: "",
        info: "",
      },
    };
  },
  methods: {
    cancel() {
      this.$emit('cancel',false)
    },
    async submit() {
      if(this.addTitle == '项目'){
        this.addListObj = {
          name: "",
          number: "",
          creatorId: "",
          info: "",
        }
        //获取添加的输入框节点
        let dom = document.getElementsByClassName("addcommon");
        dom.forEach(element=> {
          this.addListArr.push(element.innerText)
        });
        // 将数组的值一一填到对象中
        Object.keys(this.addListObj).map((i, index) => {
          return (this.addListObj[i] = this.addListArr[index]);
        });
        this.addListObj["creatorId"] = this.adminId;
        if(this.addListObj.name !== '' || this.addListObj.number !== ''){
          await this.$store.dispatch("project/creatProject", this.addListObj);
          await this.$store.dispatch('project/projectList')
          this.$emit('cancel',false)
        }else {
                  this.$message({
                    message:'输入框未填写完',
                    type:'warning'
                  })
                }
        // this.projectBasicInfo.map(item => {
        //   Object.keys(item).map(async i => {
        //     if(item['number'] == this.addListObj[i]){
        //       console.log(2222)
        //       return
        //     }else {
        //       this.addListObj["creatorId"] = this.adminId;
        //       if(this.addListObj.name !== '' || this.addListObj.number !== ''){
        //         await this.$store.dispatch("project/creatProject", this.addListObj);
        //         await this.$store.dispatch('project/projectList')
        //       }else {
        //         this.$message({
        //           message:'输入框未填写完',
        //           type:'warning'
        //         })
        //       }
        //       return
        //     }
        //   })
        // })

      }
      this.addListArr = [];

    },
  },
  computed:mapState({
    projectBasicInfo: state=> state.project.projectBasicInfo
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
    }else if(this.addTitle == "控制器"){
      this.desp = true;
      this.isShowCaiijiqiItem = true;
    }else {
      this.desp = false;
    }

  },
  mounted() {
    console.log('projectList222',this.projectBasicInfo)
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

  @mixin  commonStyle{
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
    @include commonStyle()
  }
  .selectDecoder{
    width: 240px;
    @include commonStyle()
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
    box-shadow: inset 0px -6px 4px