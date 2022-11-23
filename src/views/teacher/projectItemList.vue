<template>
    <div >
        <div class="topBoxContainer">
        <div class="projectSelection">
            <select name="" class="select_group">
                <option value="">花里胡哨</option>
                <option value="">嘎嘎嘎嘎嘎</option>
                <option value="">红红火火恍恍惚惚</option>
                <option value="">青青菜园</option>
            </select>
        </div>
        <v-day></v-day>
        </div>
        <router-view></router-view>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.topBoxContainer{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.projectSelection {
    width: 657px;
    height: 47px;
    background-image: url(../../assets/images/selectbg.png);
    background-repeat: no-repeat;
    background-size: 675px 47px;
    margin-left: 233.5px;
    margin-top: 10px;
    display: inline-block;
    text-align: center;
    padding-top: 10px;
}


.select_group {
    margin-top: 5px;
    color: rgba(102, 255, 255, 1);
    font-size: 18px;
    border: none;
    background-color: rgb(4, 7, 47);

    // text-align: center;
    option {
        padding: 5px;
    }
}
</style>