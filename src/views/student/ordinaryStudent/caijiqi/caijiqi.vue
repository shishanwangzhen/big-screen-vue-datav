<template>
  <div class="caijiqi">
    <div>
      <v-collectorList></v-collectorList>
      <v-echart></v-echart>
    </div>
    <div>
      <v-rightContent></v-rightContent>
    </div>

  </div>
</template>

<script>
import collectorList from './collectorList.vue'
import echart from './echart.vue'
import rightContent from './rightContent.vue'
export default {
  components: {
    'v-collectorList': collectorList,
    'v-echart': echart,
    'v-rightContent':rightContent
  }

}
</script>

<style lang="scss" scoped>
.caijiqi {
  display: flex;
}
</style>