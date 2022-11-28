<template>
  <div :class="isShow ? 'showBackdrop' : 'hidBackdrop'">
    <dv-border-box-12 class="dvBox12">
      <div class="configurationBox">
        <span class="title"> {{title}}配置 </span>
        <i class="iconfont icon-24gl-cross" @click="_cancel"></i>
        <div class="specific-equipment">
            <ul>
            <li v-for="(caijiqi, index) in caijiqi" :key="caijiqi+index">
                <input type="checkbox" :value="caijiqi"/>
                {{ caijiqi }}
            </li>
        </ul>
        <ul>
            <li v-for="(control, index) in control" :key="control+index">
                <input type="checkbox" :value="control"/>
                {{ control }}
            </li>
        </ul>
        <ul>
            <li v-for="(camera, index) in camera" :key="camera+index">
                <input type="checkbox" :value="camera"/>
                {{ camera }}
            </li>
        </ul>
        <ul>
            <li v-for="(becontrol, index) in becontrol" :key="becontrol+index">
                <input type="checkbox" :value="becontrol"/>
                {{ becontrol }}
            </li>
        </ul>
        </div>
      </div>
      <div class="selctType">
        <button @click="_cancel">取消</button>
        <button>确定</button>
      </div>
    </dv-border-box-12>
    <v-mask :isActive="isShow"></v-mask>
  </div>
</template>

<script>
export default {
  props: ["showConfigaration","title"],
  inject: ["reload"],
  data() {
    return {
      isShow: false,
      caijiqi: [
        "台创园采集器1",
        "台创园采集器1",
        "台创园采集器1",
        "台创园采集器1",
        "台创园采集器1",
        "台创园采集器1",
        "台创园采集器1",
        "台创园采集器1",
        "台创园采集器1",
      ],
      control: [
        "台创园控制器1",
        "台创园控制器1",
        "台创园控制器1",
        "台创园控制器1",
        "台创园控制器1",
        "台创园控制器1",
        "台创园控制器1",
      ],
      camera: [
        "台创园视频设备1",
        "台创园视频设备1",
        "台创园视频设备1",
        "台创园视频设备1",
        "台创园视频设备1",
        "台创园视频设备1",
      ],
      becontrol: [
        "台创园被控设备1",
        "台创园被控设备1",
        "台创园被控设备1",
        "台创园被控设备1",
        "台创园被控设备1",
        "台创园被控设备1",
      ],
    };
  },
  created() {
    if (this.showConfigaration) {
      this.isShow = true;
    }
  },
  methods: {
    _cancel() {
      this.isShow = false;
      // this.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.dvBox12 {
  z-index: 9001;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(3, 72, 80, 0.5);
  width: 708px;
  height: 741px;
  border-radius: 20px;
  .specific-equipment {
    display: grid;
    grid-template-columns:1fr 1fr 1fr 1fr ;
    height: 600px;
    width: 90%;
    margin: auto;
    color: rgba(255, 255, 255, 1);
    ul{
        li{
           
            padding:5px
        }
    }
    
  }
  i {
    color: rgba(196, 196, 196, 1);
    font-size: 30px;
    font-weight: 400;
    float: right;
    padding-right: 20px;
    margin-top: 30px;
  }
}
.configurationBox {
  .title {
    display: inline-block;
    height: 60px;
    margin-top: 30px;
    margin-left: 20px;
    font-size: 25px;
    font-weight: 700;
    color: rgba(255, 255, 255, 1);
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
  margin: 10px 20px 20px 20px;
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