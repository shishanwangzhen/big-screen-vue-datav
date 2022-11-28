<template>
  <div class="midle">
    <v-table></v-table>
    <div class="echart_box">
      <div class="_echart" id="echart"></div>
    </div>
  </div>
</template>

<script>
import table from "../../../components/table.vue";
export default {
  data() {
    return {
    
    };
  },
  components: {
    "v-table": table,
  },
  mounted() {
    var myChart = this.$echarts.init(document.getElementById("echart"));
    myChart.setOption(this.option);
  },
  destroyed() {},
};
</script>

<style lang="scss" scoped>
.echart_box {
  position: fixed;
  padding: 20px;
  margin-top: 10px;
  height: 310px;
  width: 944px;
  background-image: url("../../../assets/images/echart.png");
}
._echart {
  height: 250px;
  width: 900px;
}
</style>