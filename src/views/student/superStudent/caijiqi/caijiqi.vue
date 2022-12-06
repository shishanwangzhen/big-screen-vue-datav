<template>
  <div class="caijiqiContainer">
    <v-left></v-left>
    <v-right></v-right>
  </div>
</template>

<script>
import left from './left.vue'
import right from './right.vue';
export default {
    components:{
        "v-right":right,
        "v-left":left
    }

}
</script>

<style lang="scss" scoped>
.caijiqiContainer{
  display: flex;
}

</style>