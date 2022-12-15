<template>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th><span style="margin-left: 30px"></span>角色</th>
            <th>描述</th>
            <th>
              操作
              <v-addDevices :addTitle="addTitle"  :addList="addList"></v-addDevices>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(role, index) in role" :key="index">
            <td>
              <span style="padding-right: 10px">{{ index + 1 }}</span>
              <span>{{ role.roleType }}</span>
            </td>
            <td :title="role.desp">{{ role.desp }}</td>
            <td class="record">
              <v-edit :editTitle="editTitle" :editType="editType"></v-edit>
              <v-delect :delectTitle="delectTitle"></v-delect>
              <v-configuration :configurationTitle="configurationTitle"></v-configuration>
            </td>
          </tr>
        </tbody>
      </table>
      <router-view></router-view>
    </div>
  </template>

  <script>
  export default {
    inject: ["reload"],
    data() {
      return {
        role:[
            {
                roleType:'管理员',
                desp:'111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
            },
            {
                roleType:'普通用户',
                desp:''
            }
        ],
        showDeleComfirm:false,
        delectTitle:'成员',
        showEditItem:false,
        isShowConfigaration:false,
        isShowClear:false,
        isShowSelct:true,
        configurationTitle:"角色权限",
        editTitle:'角色',
        isAddDevice:false,
        addTitle:'角色',
        editType:'角色编辑',
        addList:['角色名']
      };
    },
    methods:{
      clear(){
         this.isShowClear = true
      },
      deleteProjrct(){
        this.showDeleComfirm = true;
      },
      editItemproject(){
        this.showEditItem = true
      },
      prjecConfigaration(){
        this.isShowConfigaration = true
      },
      additionRole(){
        this.isAddDevice = true
      }
    },
    beforeMount (){
    },
    computed:{
    }
  };
  </script>

  <style lang="scss" scoped>
  .table {
    width: 1450px;
    color: #fff !important;
    border-collapse: collapse;
    table-layout: fixed;
    margin-left: 40px;
    margin-top: 10px;
  }

  thead {
    text-align: left;
    background: rgba(12, 54, 122) !important;
    box-shadow: inset 10px 10px 20px 10px rgba(18, 142, 232, 0.34) !important;
  }

  thead tr th {
    padding-left: 25px;
    line-height: 40px;
    &:last-child{
      display: flex;
    }
  }

  .record {
    display: flex;
    button {
      color: white;
      border-radius: 5px;
      width: 42.01px;
      height: 21.3px;
      border: none;
      margin-right: 10px;

      &:first-child {
        margin-left: 20px;
        background: rgba(0, 186, 173, 1);
      }

      &:nth-child(2) {
        background: rgba(216, 40, 40, 1);
      }

      &:nth-child(3) {
        background: rgba(42, 130, 228, 1);
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
      border-radius: 5px;
      color: rgba(255, 255, 255, 1);
      text-shadow: 0 0 5px rgba(255, 141, 26, 1),0 0 5px rgba(255, 141, 26, 1),0 0 5px rgba(255, 141, 26, 1),0 0 15px rgba(255, 141, 26, 1);
      border: 1px solid rgba(255, 141, 26, 1);
      box-shadow: inset 0px -5.23px 3.48px 0px rgba(255, 255, 255, 0.25);
      cursor: default;
      &:active{
          text-shadow: 0 0 5px rgba(67, 207, 124, 1),0 0 5px rgba(67, 207, 124, 1),0 0 5px rgba(67, 207, 124, 1),0 0 15px rgba(67, 207, 124, 1);
          border: 1px solid rgba(67, 207, 124, 1);
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
    // position:relative;
  }
  table::before{
    content: "";
    position: absolute;
    width: 500px;
    height:500px;
    top: 430px;
    left: 1275px;
    // z-index: 1;
    opacity: 0.5;
    background: url(../../../assets/images/roleTableImg.png )  ;
    background-size: 500px 500px;
  }
  tbody tr td {
    padding: 15px 15px 15px 10px;
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
  tr td:first-child{
    padding-left: 30px;
  }

//   tbody tr:nth-child(2){
//     width: 80%;
//   }
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

  .clear_project {
    height: 18px;
    width: 70px;
    margin-left: 10px;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 11px;
    font-weight: 400;
    border-radius: 5px;
    background: rgb(8, 31, 71);
    box-shadow: inset 0px 2px 2px 0px rgb(95, 96, 97);
    color: rgba(255, 255, 255, 0.64);
    border: none;
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
