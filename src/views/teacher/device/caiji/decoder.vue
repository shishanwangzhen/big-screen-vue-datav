<template>
  <div>
    <div class="decoderContain">
      <div class="decoderLeft">
        <table class="table">
          <thead>
            <tr>
              <th>解码器名称</th>
              <th>解码器路径</th>
              <th>解码器端口</th>
              <th>型号</th>
              <th>厂商/协议</th>
              <th>备注</th>
              <th>
                操作
                <button class="add_device" @click="add">添加</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="decoder in decoderArr" :key="decoder.id">
              <td>
                <span>{{ decoder.name }}</span>
              </td>
              <td>{{decoder.path}}</td>
              <td>{{decoder.port}}</td>
              <td>{{decoder.model}}</td>
              <td>
                <div>厂商：</div>
                <div>协议：</div>
              </td>
              <td>{{decoder.remarks}}</td>
              <td class="record">
                <div>
                  <button class="btn_edit" @click="editItemproject">编辑</button>
                </div>
                <v-delect :delectTitle="delectTitle"></v-delect>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="decoderRight">
        <v-latestNews></v-latestNews>
        <div class="editDocoder">
          <div class="icons"></div>
          <div class="editTitle">{{title}}</div>
          <ul>
            <li>
              <span>名称：</span>
              <input class="ipu" />
            </li>
            <li>
              <span>ID：</span>
              <input class="ipu" />
            </li>
            <li>
              <span>型号：</span>
              <input class="ipu" />
            </li>
            <li>
              <span>路径：</span>
              <input class="ipu" />
            </li>
            <li>
              <span>端口号：</span>
              <input class="ipu" />
            </li>
            <li>
              <span>厂商：</span>
              <select name="" id="">
                <option value="">厂家A</option>
                <option value="">厂家B</option>
              </select>
            </li>
            <li>
              <span>协议类型：</span>
              <select name="" id="litle">
                <option value="">TCP</option>
                <option value="">MQTT</option>
                <option>CoAP</option>
                <option>HTTP</option>
              </select>
            </li>
            <li>
              <span>备注：</span>
              <textarea class="remarks"></textarea>
            </li>
          </ul>
          <div class="selctType">
            <button>取消</button>
            <button>确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  inject: ["reload"],
 
  data() {
    return { 
      title:'添加解码器',
      docoderItem: [
        {
          docoderName: "",
          docoderPath: "",
          docoderIP: "",
          ctreatTime: "",
          updataTime: "",
        },
      ],
      role: [
        {
          roleType: "管理员",
          desp: "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        },
        {
          roleType: "普通用户",
          desp: "",
        },
      ],
      showDeleComfirm: false,
      delectTitle: "解码器",
    };
  },
  methods: {
    clear() {
      this.isShowClear = true;
    },
    deleteProjrct() {
      this.showDeleComfirm = true;
    },
    editItemproject() {
      this.showEditItem = true;
      this.title = '编辑-解码器名称'
    },
    add(){
      this.title = '添加解码器'
    }
  },
  beforeMount() {
    this.$store.dispatch('decoder/findDecoder')
  },
  computed:mapState({
    decoderArr:state => state.decoder.decoderArr
  }) ,
};
</script>

<style lang="scss" scoped>
.decoderContain {
  margin-left: 20px;
  width: 1260px;
  // position: relative;
  display: flex;
}
.table {
  width: 918px;
  color: #fff !important;
  border-collapse: collapse;
  table-layout: fixed;
  margin-top: 10px;
}

thead {
  text-align: left;
  background: rgba(12, 54, 122) !important;
  box-shadow: inset 10px 10px 20px 10px rgba(18, 142, 232, 0.34) !important;
}

thead tr th {
  text-align: center;
 
}

.record {
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
tbody {
  overflow-y: scroll;
  display: block;
  max-height: 720px;
  min-height: 720px;
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
  height: 400px;
  top: 500px;
  left: 1070px;
  z-index: 1;
  background: url(../../../../assets/images/decodersImg.png) no-repeat;
  background-size: 500px 400px;
}
tbody tr td {
  padding: 15px 15px 15px 10px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:last-child{
    display: flex;
  }
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
tr td:first-child {
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

@mixin status {
  width: 37px;
  height: 18px;
  border-radius: 5px;
  font-size: 9px;
  font-weight: 400;
  line-height: 15px;
  color: rgba(255, 255, 255, 1);
}
.decoderRight {
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
  @mixin inputStyle {
    width: 150px;
    height: 25px;
    opacity: 1;
    border-radius: 6px;
    background: rgba(119, 165, 255, 0.33);
    color: rgba(255, 255, 255, 1);
    overflow: hidden;
    padding: 5px;
    font-size: 15px;
    line-height: 25px;
  }
  .editDocoder {
    padding: 20px;
    width: 259px;
    height: 676px;
    opacity: 1;
    border-radius: 12px;
    background: rgba(5, 13, 75, 1);
    box-shadow: inset 0px 0.97px 19.4px 0px rgba(18, 142, 232, 0.34);
    font-size: 15px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    margin-left: 10px;
    .editTitle {
      font-size: 20px;
      font-weight: 700;
      display: inline-block;
    }
    ul {
      
      li {
        display: grid;
        grid-template-columns: 1fr 1fr ;
        margin-top: 30px;
        .ipu {
          @include inputStyle();
        }
        select {
          @include inputStyle();
          border: none;
        }
        #litle{
          width: 130px;
        }
        .remarks {
          padding: 5px;
          font-size: 15px;
          margin-top: 5px;
          width: 200px;
          height: 125px;
          opacity: 1;
          border-radius: 6px;
          color: rgba(255, 255, 255, 1);
          background: rgba(119, 165, 255, 0.33);
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
          box-shadow: 0px 1px 3px rgb(7, 68, 160) inset;
          /*滚动条的内阴影*/
          border-radius: 10px;
          /*滚动条的圆角*/
          background-color: rgb(7, 68, 160);
          /*滚动条的背景颜色*/
        }
      }
    }
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
.icons {
  width: 20px;
  height: 20px;
  opacity: 1;
  background: #66ffff;
  clip-path: polygon(0 0, 30% 0, 60% 50%, 30% 100%, 0 100%);
  display: inline-block;
}
</style>