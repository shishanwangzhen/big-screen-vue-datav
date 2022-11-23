<template>
    <div>
      <div class="editBox" :class="isShow ? 'showBackdrop' : 'hidBackdrop'">
        <div class="projectNameTitele">添加{{ addType }}</div>
        <div class="containBox" v-show="isShowCaiijiqiItem || isShowProjectItem ||isShowRoleItem">
          <span v-show="isShowCaiijiqiItem">设备名称</span>
          <span v-show="isShowProjectItem">项目描述</span>
          <span v-show="isShowRoleItem">角色</span>
          <div contenteditable="true" class="groupName common">1</div>
        </div>
        <div class="containBox" v-show="isShowCaiijiqiItem || isShowProjectItem">
          <span v-show="isShowCaiijiqiItem">设备ID</span>
          <span v-show="isShowProjectItem">项目名称</span>
          <div contenteditable="true" class="itemNo common">2</div>
        </div>
        <div class="containBox" v-show="isShowCaiijiqiItem || isShowProjectItem">
          <span v-show="isShowCaiijiqiItem">设备型号</span>
          <span v-show="isShowProjectItem">项目编号</span>
          <div contenteditable="true" class="itemNo common">2</div>
        </div>
        <div class="containBox" v-show="isShowProjectItem">
          <span >管理员</span>
          <select class="itemNo common selectadmin">
            <option value="" disabled selected>管理员选择</option>
            <option value="" >1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>
        </div>
        <div class="containBox" v-show="isShowCaiijiqiItem">
          <span >解码器</span>
          <select class="itemNo selectDecoder">
            <option value="" disabled selected>选择厂商</option>
            <option value="" >1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>
          <select class="itemNo selectDecoder">
            <option value="" disabled selected>选择协议类型</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>
        </div>
        <div class="containBox">
        <span>描述</span>
        <div contenteditable="true" class="describe common">3</div>
      </div>
        <div class="selctType">
          <button @click="_cancel">取消</button>
          <button>确定</button>
        </div>
      </div>
      <v-mask :isActive="isShow"></v-mask>
    </div>
  </template>
  
  <script>
  export default {
    inject: ["reload"],
    props: ["addDeviceBox","addType"],
    data() {
      return {
        projectName: "当前项目名称",
        isShow:false,
        isShowCaiijiqiItem:false,
        isShowProjectItem:false,
        isShowRoleItem:false
      };
    },
    created() {
      if (this.addDeviceBox) {
        this.isShow = true;
      }
    },
    methods: {
      _cancel() {
        this.isShow = false;
        // this.reload();
      },
    },
    beforeMount(){
      if(this.addType == '采集器'){
        this.isShowCaiijiqiItem= true
      }else if(this.addType == '项目'){
        this.isShowProjectItem = true
      }else if(this.addType == '角色'){
        this.isShowRoleItem = true
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .select{
    width: 240px !important;
    margin-top:0px;
    option:disabled{
      color: rgba(255, 255, 255, 0.69)
    }
  }
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
      margin-top: 25px;
      margin-left: 20px;
      font-size: 25px;
      font-weight: 700;
      color: rgba(255, 255, 255, 1);
    }
    .containBox{
      display: flex;
      margin:10px;
    }
    .selectadmin{
      width: 500px !important;
      option:disabled{
      color: rgba(255, 255, 255, 0.69)
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
    .common {
      width: 500px;
      @include commonStyle
    }
    .selectDecoder{
      width: 240px;
      @include commonStyle
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
      white-space: wrap;
      overflow-y: scroll;
      padding:5px;
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
    font-size: 15 px;
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
  select{
  
  }
  </style>