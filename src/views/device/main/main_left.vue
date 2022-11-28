<template>
  <div class="left_contain" @click="curEquipment">
    <div class="device_title">
      <div class="list_icon"></div>
      设备列表
    </div>
    <div class="collect box"  data-equipment="caijiqi" >
      采集设备 <i class="iconfont icon-shuangyoujiantou-"></i>
    </div>
    <div class="control box" data-equipment="control">
      控制设备<i class="iconfont icon-shuangyoujiantou-"></i>
    </div>
    <div class="video box" data-equipment="camera" >
      视频设备<i class="iconfont icon-shuangyoujiantou-"></i>
    </div>
  </div>
</template>

<script>
export default {
  inject:["reload"],
  methods:{
    // 获取当前点击的设备
    curEquipment(e){
      // this.reload()
      let equipment = e.target.dataset.equipment
      sessionStorage.setItem('curEquipment',equipment)
      this.$bus.$emit('curEquipment',equipment)
    }
  }
};
</script>
<style lang="scss" scoped>
.left_contain {
  margin-left: 20px;
  width: 370px;
  height: 760px;
  background-image: url("../../../assets/images/list.png");
  border-radius: 9px;
  border: 2px solid rgba(8, 72, 138, 1);
  box-shadow: inset 0px 1px 20px 0px rgba(18, 142, 232, 0.34);
}
.box {
  padding-left: 20px;
  font-size: 20.03px;
  font-weight: 500;
  letter-spacing: 2px;
  line-height: 49.53px;
  color: rgba(255, 255, 255, 1);
  margin: 20px;
  width: 330.54px;
  height: 49.53px;
  opacity: 1;
  background: linear-gradient(
    90deg,
    rgba(103, 255, 255, 0.6) 0%,
    rgba(137, 251, 255, 0.26) 41.47%,
    rgba(163, 248, 255, 0) 100%
  );
  &:hover{
    cursor: pointer;
  }
  &:active {
    border: 1px solid rgb(102, 255, 255);
  }
  .iconfont {
    font-size: 18px;
    color: rgb(102, 255, 255);
    padding-left: 170px;
  }
}
.device_title {
    display: flex;
    margin: 30px 20px;
    height: 50px;
    line-height: 50px;
    font-size: 34px;
    font-weight: 700;
    color: rgba(255, 255, 255, 1);
  .list_icon {
    width: 50px;
    height: 50px;
    opacity: 1;
    background: rgba(102, 255, 255, 1);
    clip-path: polygon(0 0, 30% 0, 60% 50%, 30% 100%, 0 100%);
  }
  
}
</style>