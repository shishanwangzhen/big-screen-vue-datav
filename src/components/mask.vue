<template>
    <!-- 蒙版 -->
    <div class="backdrop_" v-show="isActive"></div>
</template>

<script>
export default {
    props:["isActive"]

}
</script>

<style lang="scss" scoped>
.backdrop_ {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(8, 7, 7, 0.6);
    z-index: 100;
    transition: all 0.2s ease;
    backdrop-filter: saturate(180%) blur(1px);
}

.showBackdrop {
    opacity: 1;
}

.hidBackdrop {
    opacity: 0;
}
</style>