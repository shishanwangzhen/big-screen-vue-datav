<template>
  <div style="display: flex">
    <div class="left_contain">
      <div class="device_title">
        <div class="list_icon"></div>
        用户管理
      </div>
      <div class="navBox" @click="toManege">
        <i
          class="iconfont icon-yonghuzhuce"
          style="float: left; color: white"
        ></i>
        用户管理<i class="iconfont icon-shuangyoujiantou-"></i>
      </div>
      <div class="device_title">
        <div class="list_icon"></div>
        设备管理
      </div>
      <div class="collect navBox" @click="caijiqi">
        采集设备 <i class="iconfont icon-shuangyoujiantou-"></i>
      </div>
      <div class="navBox" @click="control">
        控制设备<i class="iconfont icon-shuangyoujiantou-"></i>
      </div>
      <div class="navBox" @click="toBecontrol">
        被控设备<i class="iconfont icon-shuangyoujiantou-"></i>
      </div>
      <div class="navBox" @click="toCamera">
        视频设备<i class="iconfont icon-shuangyoujiantou-"></i>
      </div>
      <div class="navBox" @click="toFictitious">
        虚拟设备<i class="iconfont icon-shuangyoujiantou-"></i>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  inject: ["reload"],
  data(){
    return{

    }
  },
  methods: {
    curEquipment() {
    },
    toRole() {
      this.$router.push({
        path:'/teacherPage/projectDetails/curProject/roleTable'
      })
    },
    toManege(){
      this.$router.push({
        path:'/teacherPage/projectDetails/curProject/manage',
        query:{
          projectName:this.$route.query.projectName,
          projectId:this.$route.query.projectId
        }
      });
    },
    caijiqi(){
      this.$router.push({
        path:'/teacherPage/projectDetails/curProject/caijiqi',
        query:{
          projectName:this.$route.query.projectName,
          projectId:this.$route.query.projectId,
          deviceType:1
        }
      });
    },
    control(){
      this.$router.push({
        path:'/teacherPage/projectDetails/curProject/control',
        query:{
          projectName:this.$route.query.projectName,
          projectId:this.$route.query.projectId,
          deviceType:2
        }
      })
    },
    toBecontrol(){
      this.$router.push({
        path:'/teacherPage/projectDetails/curProject/becontroled',
        query:{
          projectName:this.$route.query.projectName,
          projectId:this.$route.query.projectId
        }
      })
    },
    toCamera(){
      this.$router.push({
        path:'/teacherPage/projectDetails/curProject/camera',
        query:{
          projectName:this.$route.query.projectName,
          projectId:this.$route.query.projectId
        }
      })
    },
    toFictitious(){
      this.$router.push({
        path:'/teacherPage/projectDetails/curProject/fictitious',
        query:{
          projectName:this.$route.query.projectName,
          projectId:this.$route.query.projectId
        }
      })
    },
    toregisterPhone() {},
    tojurisdiction() {},
  },
  beforeMount(){
    let arrDom = document.getElementsByClassName("navBox")
    arrDom.forEach(( item,index)=> {
      item.setAttribute('index',index)
    })
  }
};
</script>
<style lang="scss" scoped>
.left_contain {
  margin-left: 20px;
  width: 370px;
  height: 760px;
  background-image: url("../../assets/images/list.png");
  background-repeat: no-repeat;
  background-size: 370px 760px;
  border-radius: 9px;
  border: 2px solid rgba(8, 72, 138, 1);
  box-shadow: inset 0px 1px 20px 0px rgba(18, 142, 232, 0.34);
  margin-top: 65px;
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