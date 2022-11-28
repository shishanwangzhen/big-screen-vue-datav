<template>
    <div class="cell">
        <div class="cell-tool">
            <div class="bk-button-group">
                <bk-button @click="cellCount = 1" size="small">1</bk-button>
                <bk-button @click="cellCount = 4" size="small">4</bk-button>
                <bk-button @click="cellCount = 6" size="small">6</bk-button>
                <bk-button @click="cellCount = 9" size="small">9</bk-button>
                <bk-button @click="cellCount = 16" size="small">16</bk-button>
            </div>
        </div>
        <div class="cell-player">
            <div :class="cellClass(i)" v-for="i in cellCount" :key="i">
                <hw-cell-player :title="i" v-if="cellCount != 6"></hw-cell-player>
                <hw-cell-player :title="i" v-if="cellCount == 6 && i != 2 && i != 3"></hw-cell-player>
                <template v-if="cellCount == 6 && i == 2">
                    <div class="cell-player-6-2-cell">
                        <hw-cell-player :title="i"></hw-cell-player>
                        <hw-cell-player :title="(++i)"></hw-cell-player>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import HwCellPlayer from './HwCellPlayer.vue'
export default {
    components: { HwCellPlayer },
    data() {
        return {
            cellCount: 4
        }
    },
    computed: {
        cellClass() {
            return function (index) {
                switch (this.cellCount) {
                    case 1:
                        return ['cell-player-1']
                    case 4:
                        return ['cell-player-4']
                    case 6:
                        if (index == 1)
                            return ['cell-player-6-1']
                        if (index == 2)
                            return ['cell-player-6-2']
                        if (index == 3)
                            return ['cell-player-6-none']
                        return ['cell-player-6']
                    case 9:
                        return ['cell-player-9']
                    case 16:
                        return ['cell-player-16']
                    default:
                        break;
                }

            }
        },

    },
}
</script>

<style scoped>
.cell-tool {
    height: 40px;
    line-height: 30px;
    padding: 0 7px;
}
.cell-player {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.cell-player-4 {
    width: 50%;
    height: 50% !important;
    box-sizing: border-box;
}
.cell-player-1 {
    width: 100%;
    box-sizing: border-box;
}
.cell-player-6-1 {
    width: 66.66%;
    height: 66.66% !important;
    box-sizing: border-box;
}
.cell-player-6-2 {
    width: 33.33%;
    height: 66.66% !important;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}
.cell-player-6-none {
    display: none;
}
.cell-player-6-2-cell {
    width: 100%;
    height: 50% !important;
    box-sizing: border-box;
}
.cell-player-6 {
    width: 33.33%;
    height: 33.33% !important;
    box-sizing: border-box;
}
.cell-player-9 {
    width: 33.33%;
    height: 33.33% !important;
    box-sizing: border-box;
}
.cell-player-16 {
    width: 25%;
    height: 25% !important;
    box-sizing: border-box;
}
.cell {
    display: flex;
    flex-direction: column;
    height: 100%;
}
</style>