<template>
    <div>
        <div class="instructionsBox" v-show="showinstructions">
            <v-editInstructionsList></v-editInstructionsList>
        </div>
        <v-mask :isActive="showinstructions"></v-mask>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import editInstructionsList from './v-editInstructionsList'
    export default {
        components:{
            "v-editInstructionsList": editInstructionsList
        },
        computed:mapState({
            showinstructions:state => state.showinstructions
        }),
        mounted() {
            console.log('wochulail')
        }
    }
</script>

<style scoped lang="scss">

</style>