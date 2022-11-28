<template>
  <div class="device_box">
    <v-mainLeft style="margin-left:30px"></v-mainLeft>
    <v-main_caijiqi_midle class="midle" v-show="showCaijiqi" style="margin-left:20px"></v-main_caijiqi_midle>
    <v-main_caijiqi_right class="right" v-show="showCaijiqi" style="margin-left:20px" ></v-main_caijiqi_right>
    <v-main_camera_midle v-show="showCamera" style="margin-left:20px"></v-main_camera_midle>
    <v-main_camera_righ v-show="showCamera" style="margin-left:20px"></v-main_camera_righ>
  </div>
</template>

<script >
import main_left from "./main_left.vue";
import main_caijiqi_right from "./main_right.vue"
import main_caijiqi_midle from './main_midle.vue'
import main_camera_midle from "../camera/cameraTable.vue"
import main_camera_right from "../camera/camera_playback.vue"
export default {
  inject:["reload"],
  components: {
    "v-mainLeft": main_left,
    "v-main_caijiqi_midle":main_caijiqi_midle,
    "v-main_caijiqi_right":main_caijiqi_right,
    "v-main_camera_righ":main_camera_right,
    "v-main_camera_midle":main_camera_midle 
  },
  data(){
    return{
      showCaijiqi:true,
      showCamera:false,
      showControl:false
    }
  },
  created(){
    let curEquipment = sessionStorage.getItem('curEquipment')
    console.log(curEquipment)
    if(curEquipment == 'control'){
      this.showControl = true
      this.showCaijiqi = false
      this.showCamera = false
    }else if(curEquipment == 'camera'){
      this.showControl = false
      this.showCaijiqi = false
      this.showCamera = true
    }else{
      this.showControl = false
      this.showCaijiqi = true
      this.showCamera = false
    }
    
  }
}


   

</script>

<style lang="scss" scoped>
  .device_box{
    margin-top: 20px;
    width: 100vw;
    display: flex;
    .midle{
      // margin-left:30px
    }
    .right{
      margin-right: 20px;
    }
  }
</style>