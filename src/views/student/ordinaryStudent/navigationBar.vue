<template>
  <div style="display: flex">
    <div class="left_contain">
      <div class="device_title">
        <div class="list_icon"></div>
        设备管理
      </div>
      <div class="collect navBox" @click="toCollector">
        采集设备 <i class="iconfont icon-shuangyoujiantou-"></i>
      </div>
      <div class="navBox" @click="toControll">
        控制设备<i class="iconfont icon-shuangyoujiantou-"></i>
      </div>
      <div class="navBox" @click="tobeControll">
        被控设备<i class="iconfont icon-shuangyoujiantou-"></i>
      </div>
      <div class="navBox" @click="toCamera">
        视频设备<i class="iconfont icon-shuangyoujiantou-"></i>
      </div>
      <div class="navBox" @click="toFictitious">
        虚拟设备<i class="iconfont icon-shuangyoujiantou-"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  inject: ["reload"],
  methods:{
    toCollector(){
      this.$router.push({
        path:'/studentPage/collector'
      })
    },
    toControll(){
      this.$router.push({
        path:'/studentPage/controll'
      })
    },
    tobeControll(){
      this.$router.push({
        path:'/studentPage/beControll'
      })
    },
    toCamera(){
      this.$router.push({
        path:'/studentPage/camera'
      })
    },
    toFictitious(){
      this.$router.push({
        path:'/studentPage/fictitious'
      })
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
  background-repeat: no-repeat;
  background-size: 370px 760px;
  border-radius: 9px;
  border: 2px solid rgba(8, 72, 138, 1);
  box-shadow: inset 0px 1px 20px 0px rgba(18, 142, 232, 0.34);
  margin-top: 10px;
}

.navBox {
  padding-left: 20px;
  font-size: 20.03px;
  font-weight: 500;
  letter-spacing: 2px;
  line-height: 40px;
  color: rgba(255, 255, 255, 1);
  margin: 20px;
  width: 330.54px;
  height: 40px;
  opacity: 1;
  background: linear-gradient(
    90deg,
    rgba(103, 255, 255, 0.6) 0%,
    rgba(137, 251, 255, 0.26) 41.47%,
    rgba(163, 248, 255, 0) 100%
  );

  &:hover {
    cursor: pointer;
  }

  &:active {
    border: 1px solid rgb(102, 255, 255);
  }

  .iconfont {
    float: right;
    padding-right: 10px;
    font-size: 18px;
    color: rgb(102, 255, 255);
  }
}

.device_title {
  display: flex;
  margin: 30px 20px;
  height: 40px;
  line-height: 26px;
  font-size: 25px;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);

  .list_icon {
    width: 30px;
    height: 30px;
    opacity: 1;
    background: rgba(102, 255, 255, 1);
    clip-path: polygon(0 0, 30% 0, 60% 50%, 30% 100%, 0 100%);
  }
}
</style>