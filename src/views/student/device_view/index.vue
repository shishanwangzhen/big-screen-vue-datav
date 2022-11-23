<template>
  <div class="device_view_contain">
    <Left></Left>
    <div class="conten">
     <v-caiji v-show="showCaijiqi"></v-caiji>
     <v-camera v-show="showCamera"></v-camera>
    </div>
  </div>
</template>

<script>
import left from './left.vue'
import caiji from './caiji/index.vue'
import camera from './camera/index.vue'
export default {
    components:{
        'Left':left,
        'v-caiji':caiji,
        'v-camera':camera
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

<style>
  body{
    background-color: rgb(4,7,47);
  }
.device_view_contain{ 
  margin-top: 20px;
  display: flex;
}
.conten{
  margin-left: 20px;
}
</style>