<template>
  <div class="controll">
      <v-beControlledList></v-beControlledList>
  </div>
</template>

<script>
import beControlledList from './beControlledList.vue'
export default {
  components: {
    'v-beControlledList': beControlledList,
  }

}
</script>

<style lang="scss" scoped>
.controll {
  display: flex;
}
</style>