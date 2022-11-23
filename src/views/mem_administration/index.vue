<template>
  <div>
    <div class="top">
      <projectTop></projectTop>
    </div>
    <!-- 成员管理 -->
    <v-memberMain v-show="showMember"></v-memberMain>
    <!-- 设备管理 -->
    <v-device v-show="showDevice"></v-device>
  </div>
</template>

<script>

import memberMain from "./main.vue";
import device from "../device/index.vue"
export default {
  data() {
    return {
      datetime: "",
      nowDate: "",
      nowYear: "",
      nowWeek: "",
      dataType: "",
      showDevice:false,
      showMember:true
    };
  },
  components: {
    "v-memberMain": memberMain,
    "v-device":device,
  },
  mounted() {
  },
  beforeMount(){
    this.$bus.$on('deviceAdministration',res =>{
      if(res){
        this.showDevice = true
        this.showMember = false
      }else{
        this.showDevice = false
        this.showMember = true
      }
    })
    if(sessionStorage.getItem("key") == '设备管理'){
        this.showDevice = true
        this.showMember = false
    }
    if(sessionStorage.getItem("key") == '成员管理'){
        this.showDevice = false
        this.showMember = true
    }
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: rgb(4, 7, 47);
}

.liner {
  display: inline-block;
  margin-right: 30px;
  margin-top: 20px;
  width: 65vw;
  height: 2px;
  background: linear-gradient(to right,
      rgb(200, 200, 200),
      rgb(0, 255, 244) 51.7%,
      rgb(151, 151, 151) 100%);
  /* border: 1px solid        */
}

span {
  font-size: 16.36px;
  font-weight: 400;
  color: rgba(180, 181, 193, 1);
}

span span:nth-child(1) {
  color: rgba(102, 255, 255, 1);
}

span span:nth-child(2) {
  font-size: 24px;
  font-weight: 500;
  color: rgba(102, 255, 255, 1);
}
</style>