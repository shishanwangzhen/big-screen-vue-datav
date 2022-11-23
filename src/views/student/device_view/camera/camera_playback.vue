<template>
  <div class="playback_box">
    <div class="header">
      <img src="../../../../assets/images/camera.png" alt="" />
      <p>实时监控</p>
    </div>
    <div class="camera_contain ">
      <div class="grid">
        <div class="camera">
        <div class="camera_name">
          {{cameraName}}
          <i class="iconfont icon-fangda"></i>
        </div>
        <div></div>
      </div>
      <div class="camera">
        <div class="camera_name">
          {{cameraName}}
          <i class="iconfont icon-fangda"></i>
        </div>
        <div></div>
      </div>
      <div class="camera">
        <div class="camera_name">
          {{cameraName}}
          <i class="iconfont icon-fangda"></i>
        </div>
        <div></div>
      </div>
      <div class="camera">
        <div class="camera_name">
          {{cameraName}}
          <i class="iconfont icon-fangda"></i>
        </div>
        <div></div>
      </div>
      <div class="camera">
        <div class="camera_name">
          {{cameraName}}
          <i class="iconfont icon-fangda"></i>
        </div>
        <div></div>
      </div>
      <div class="camera">
        <div class="camera_name">
          {{cameraName}}
          <i class="iconfont icon-fangda"></i>
        </div>
        <div></div>
      </div>
      <div class="camera">
        <div class="camera_name">
          {{cameraName}}
          <i class="iconfont icon-fangda"></i>
        </div>
        <div></div>
      </div>
      <div class="camera">
        <div class="camera_name">
          {{cameraName}}
          <i class="iconfont icon-fangda"></i>
        </div>
        <div></div>
      </div>
      <div class="camera">
        <div class="camera_name">
          {{cameraName}}
          <i class="iconfont icon-fangda"></i>
        </div>
        <div></div>
      </div>
      </div>
      <div class="switch_camera">
        <i class="iconfont icon-shuangjiantouzuo"></i>
        <i class="iconfont icon-shuangjiantouyou"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components:{
  },
  data(){
    return{
      cameraName:'摄像头1'
    }
  }
};
</script>

<style scoped lang="scss">
.playback_box {
  width: 1065px;
  height: 870px;
  background-image: url(../../../../assets/images/menberBg.png);
  background-size: 1055px 755px;
  background-repeat: no-repeat;
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
  background-image: url(../../../../assets/images/vedioBox.png);
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
    margin-top: 20px;
    color: rgba(103, 255, 255, 1);
    margin-left: 850px;
    i{
      font-size: 25px;
      padding: 10px;
    }
  }
  
}
</style>