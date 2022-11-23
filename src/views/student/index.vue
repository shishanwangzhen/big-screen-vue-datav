<template>
  <div>
    <div class="top">
      <projectTop></projectTop>
    </div>
    <v-device-view></v-device-view>
  </div>
</template>
<script>
import deviceView from "./device_view/index.vue";
// import left from './'
export default {
  components: {
    "v-device-view": deviceView,
  },
  data() {
    return {
    };
  },
 
  methods: {
   
  },
};
</script>
  
<style lang="scss" scoped>
 body{
  background-color: rgb(4,7,47);
}
.liner {
  display: inline-block;
  margin-right: 30px;
  margin-top: 20px;
  width: 65vw;
  height: 2px;
  background: linear-gradient(
    to right,
    rgb(200, 200, 200),
    rgb(0, 255, 244) 51.7%,
    rgb(151, 151, 151) 100%
  );
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