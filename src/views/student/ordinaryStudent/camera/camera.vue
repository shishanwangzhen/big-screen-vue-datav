<template>
  <div style="display:flex">
    <v-navBar></v-navBar>
     <div class="playback_box">
    <div class="header">
      <img src="../../../../assets/images/camera.png" alt="" />
      <p>实时监控</p>
    </div>
    <div class="camera_contain " v-if="enlarge">
      <div class="grid" v-for="(list,index) in camera" :key="index" v-show="index == currentIdex">
      <div class="camera" v-for="(item,indexs) in list" :key="indexs">
        <div class="camera_name">
          {{item.name}}
          <i class="iconfont icon-fangda" @click="enlarge = !enlarge"></i>
        </div>
        <div></div>
      </div>
      </div>
      <div class="switch_camera">
        <i class="iconfont icon-shuangjiantouzuo" @click="currentIdex--"></i>
        <i class="iconfont icon-shuangjiantouyou" @click="currentIdex++"></i>
      </div>
    </div>
    <div class="bigCamera" v-else>
      <div class="camera_name">
        海康摄像头1
        <i class="iconfont icon-suoxiao1" @click="enlarge = !enlarge"></i>
      </div>
      <div class="bigPlayer"></div>
    </div>
  </div>
  </div>
 
</template>

<script>
import navBar from './navBar.vue'
export default {
  components:{
    "v-navBar":navBar
  },
  data(){
    return{
      cameraName:'摄像头1',
      currentIdex:0,
      enlarge:true,
      camera:[
              [
                {
                  id:'001',
                  name:'海康摄像头1',
                  src:''
                },
                {
                  id:'002',
                  name:'海康摄像头2',
                  src:''
                },
                {
                  id:'003',
                  name:'海康摄像头3',
                  src:''
                },
                {
                  id:'001',
                  name:'海康摄像头1',
                  src:''
                },
                {
                  id:'002',
                  name:'海康摄像头2',
                  src:''
                },
                {
                  id:'003',
                  name:'海康摄像头3',
                  src:''
                },
                {
                  id:'001',
                  name:'海康摄像头1',
                  src:''
                },
                {
                  id:'002',
                  name:'海康摄像头2',
                  src:''
                },
                {
                  id:'003',
                  name:'海康摄像头3',
                  src:''
                }
              ],
              [
                {
                  id:'002',
                  name:'海康摄像头2',
                  src:''
                },
                {
                  id:'003',
                  name:'海康摄像头3',
                  src:''
                },
                {
                  id:'002',
                  name:'海康摄像头2',
                  src:''
                },
                {
                  id:'003',
                  name:'海康摄像头3',
                  src:''
                }
              ],
              [
                {
                  id:'003',
                  name:'海康摄像头3',
                  src:''
                },
                {
                  id:'003',
                  name:'海康摄像头3',
                  src:''
                }
              ]
      ]
    }
  },
  watch:{
    currentIdex:{
      handler(newIndex){
        if(newIndex < 0){
          this.currentIdex = 0
        }
        if(newIndex > this.camera.length-1){
          this.currentIdex = this.camera.length-1
        }
        console.log('new',newIndex)
      }
    }
  }
};
</script>

<style scoped lang="scss">
.playback_box {
  width: 1065px;
  height: 870px;
  margin-top: 10px;
  margin-left: 20px;
  background-image: url("../../../../assets/images/menberBg.png");
  background-size: 1055px 755px;
  background-repeat: no-repeat;
  position: relative;

  .header {
    display: flex;
    margin-left: 20px;
    margin-top: 20px;
    img{
      width: 70px;
      height: 70px;
    }
    & > p {
      width: 158px;
      height: 58px;
      opacity: 1;
      font-size: 25px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 58px;
      color: rgba(31, 242, 228, 1);
      text-align: left;
      vertical-align: top;
    }
  }
}
.camera_contain{
  padding-top: 15px;
  margin: auto;
  width: 1000px;
  height: 600px;
  background-image: url("../../../../assets/images/vedioBox.png");
  background-size: 1000px 600px;
  background-repeat: no-repeat;
  // border: 1px solid rgb(237, 8, 8);
  .grid{
    padding-top: 10px;
    margin: auto 50px;
    display: grid;
    grid-template-columns:  repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap:8px;
    grid-row-gap:5px;
    .camera{
    border: 1px solid #000;
    height: 170px;
    width: 300px;
    background-color: black;
    &>div:first-child{
      height: 30px;
      width: 100%;
      background-color: #fff;
      padding: 5px;
    }
  }
  }
  .switch_camera{
    position: absolute;
    bottom: 200px;
    right:50px;
    margin-top: 20px;
    color: rgba(103, 255, 255, 1);
    i{
      font-size: 25px;
      padding: 10px;
    }
  }

}
.bigCamera{
    margin: auto;
    width: 1000px;
    height: 600px;
  .camera_name{
    padding-left: 10px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    background: white;
    font-size: 20px;
  }
  .bigPlayer{
    height: 570px;
    width: 100%;
    background: #0f1325;
  }
  }
</style>