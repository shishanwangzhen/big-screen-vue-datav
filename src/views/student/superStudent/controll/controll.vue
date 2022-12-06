<template>
  <div class="controll">
    <div>
      <v-controllList></v-controllList>
    </div>
    <div>
      <v-rightContent></v-rightContent>
    </div>

  </div>
</template>

<script>
import controllList from './controllList.vue'
import rightContent from './rightContent.vue'
export default {
  components: {
    'v-controllList': controllList,
    'v-rightContent':rightContent
  }

}
</script>

<style lang="scss" scoped>
.controll {
  display: flex;
}
</style>