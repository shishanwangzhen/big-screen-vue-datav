<template>
  <div class="stu_caijiqi_contain">
    <div class="top_contain">
      <div class="real_time_data">
        <div class="title">
          <i class="iconfont icon-shuiweitu"></i>
          <span>传感器实时数据</span>
        </div>
        <ul class="th">
          <li>名称</li>
          <li>数据值</li>
          <li>单位</li>
          <li>历史数据</li>
        </ul>
        <div class="tb">
          <ul class="tbList" v-for="item in 9" :key="item">
            <li>二氧化碳浓度</li>
            <li>800</li>
            <li>%</li>
            <li>查看</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>
  
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      lines: {
        curData: "二氧化碳浓度",
        color: "rgba(166, 166, 166, 1)",
      },
    };
  },
  computed: mapState({
    // 获取socket实时数据
    deviceList: state => state.deviceList
  }),
  watch: {
    deviceList: {
      handler(newList) {
        console.log('newList', newList)
      }
    }
  }
};
</script>
  
<style lang="scss" scoped>
.top_contain {
  display: flex;
  justify-content: space-between;
  padding-right: 30px;
}

.stu_caijiqi_contain {}

.real_time_data {
  width: 320px;
  height: 350px;
  background-image: url(../assets/images/dataImg.png);
  background-size: 320px 350px;
  background-repeat: no-repeat;

  .th {
    padding-left: 10px;
    color: white;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background: #0c367a !important;
    box-shadow: inset 0.625rem 0.625rem 1.25rem 0.625rem rgb(18 142 232 / 34%) !important;
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    li{
        text-align: center;
      }
  }

  .tb {
    background: rgba(0, 0, 0, 0.6);
    color: white;
    height: 265px;
    overflow-y: scroll;
    .tbList {
      padding-left: 10px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      height: 30px;
      line-height: 30px;
      li{
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  .title {
    margin: 5px 10px 5px 10px;
    width: 217px;
    height: 31.56px;
    font-weight: 700;
    line-height: 31.56px;

    span {
      font-size: 20px;
      padding-left: 10px;
      color: rgba(255, 255, 255, 1);
    }

    .iconfont {
      font-size: 25px;
      color: rgba(102, 255, 255, 1);
    }
  }
}
</style>