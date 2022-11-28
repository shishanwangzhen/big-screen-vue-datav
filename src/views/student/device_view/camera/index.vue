<template>
  <div class="camera_box">
    <cameraTableVue></cameraTableVue>
    <camera_playbackVue style="margin-left:20px"></camera_playbackVue>
  </div>
</template>

<script>
    import cameraTableVue from './cameraTable.vue';
    import camera_playbackVue from './camera_playback.vue';
export default {
    components:{
        cameraTableVue,
        camera_playbackVue
    }
}
</script>

<style lang="scss" scoped>
    .camera_box{
        display: flex;
    }
</style>