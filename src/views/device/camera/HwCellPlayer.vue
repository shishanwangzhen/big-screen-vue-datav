<template>
    <div class="player">player{{ title }}</div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
    },
}
</script>

<style scoped>
.player {
    background-color: black;
    height: 100%;
    border: 1px solid white;
    color: white;
    text-align: center;
}
</style>