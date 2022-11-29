<template>
  <div class="controll">
    <div>
      <v-controllList></v-controllList>
      <v-echart></v-echart>
    </div>
    <div>
      <v-rightContent></v-rightContent>
    </div>

  </div>
</template>

<script>
import controllList from './controllList.vue'
import echart from './echart.vue'
import rightContent from './rightContent.vue'
export default {
  components: {
    'v-controllList': controllList,
    'v-echart': echart,
    'v-rightContent':rightContent
  }

}
</script>

<style lang="scss" scoped>
.controll {
  display: flex;
}
</style>