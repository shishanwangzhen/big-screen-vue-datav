<template>
  <div class="controll">
    <div>
      <v-beControlledList></v-beControlledList>
    </div>
    <div>
      <v-rightContent></v-rightContent>
    </div>

  </div>
</template>

<script>
import beControlledList from './beControlledList.vue'
import rightContent from './rightContent.vue'
export default {
  components: {
    'v-beControlledList': beControlledList,
    'v-rightContent':rightContent
  }

}
</script>

<style lang="scss" scoped>
.controll {
  display: flex;
}
</style>