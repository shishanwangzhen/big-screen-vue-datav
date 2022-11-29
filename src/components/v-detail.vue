<template>
    <div>
      <button class="btn_xiangqing" @click="isActive = !isActive">详情</button>
      <div v-show="isActive">
      <dv-border-box-10 class="dv10">
        <div class="detailContainbox">
          <div class="detailTitle">{{ detailTitle }}-设备详情</div>
          <ul class="msg">
            <li>设备名称：{{ detailTitle }}</li>
            <li>设备ID：{{deviceId}}</li>
            <li>设备型号：{{model}}</li>
            <li>
              设备解码器：
                  <ul class="decoderMsg">
                      <li>解码器名称：</li>
                      <li>解码器路径：</li>
                      <li>解码器端口：</li>
                      <li>解码器厂商：</li>
                      <li>协议类型：</li>
                  </ul>
            </li>
            <li>备注：{{remarks}}</li>
          </ul>
        </div>
        <div class="selctType">
          <button @click="isActive = !isActive">取消</button>
          <button>确定</button>
        </div>
      </dv-border-box-10>
      <v-mask :isActive="isActive"></v-mask>
    </div>
    </div>
    
  </template>
  
  <script>
  export default {
    inject: ["reload"],
    props: ["showDetaileBox", "detailTitle","model","deviceId","remarks"],
    data() {
      return {
        curDeviceName: "台创园采集器",
        isActive:false
      };
    },
    created() {
      if (this.showDetaileBox) {
        this.isShow = true;
      }
    },
    methods: {
      _cancel() {
        this.isShow = false;
        this.reload();
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .btn_xiangqing{
    color: white;
    border-radius: 5px;
    width: 42px;
    height: 20px;
    border: none;
    margin-right: 10px;
    font-size: 10px;
    background: rgba(255, 141, 26, 1);
    &:active {
      box-shadow: 1px 1px 1px rgba(255, 141, 26, 1);
    }

    &:hover {
      cursor: pointer;
    }
  }
  .dv10 {
    z-index: 9001;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(3, 72, 80, 0.5);
    width: 708px;
    height: 741px;
    border-radius: 20px;
  }
  .detailContainbox {
    .detailTitle {
      height: 60px;
      margin-top: 25px;
      margin-left: 20px;
      font-size: 25px;
      font-weight: 700;
      color: rgba(255, 255, 255, 1);
    }
    .msg {
      margin: 20px;
      li {
        padding: 10px;
        margin-top: 20px;
        font-size: 24px;
        font-weight: 400;
        width: 700px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        letter-spacing: 1px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
        vertical-align: top;
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
  .decoderMsg{
      li{
          padding:5px 5px 5px 30px !important;
          font-size: 20px !important;
      }
  }
  </style>