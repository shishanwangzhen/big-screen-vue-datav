<template>
    <div >
        <div class="topBoxContainer">
        <div class="projectSelection">
            <select name="" class="select_group" v-model="curProjectId" @change="getCurData(curProjectId)">
                <option :value="item.id" v-for="item in projectList" :key="item.id" :selected='item.id == projectId' >{{item.name}}</option>
            </select>
        </div>
        <v-day></v-day>
        </div>
        <router-view></router-view>
    </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
    inject:['reload'],
    data(){
        return {
            projectId:'',
            curProjectId:'',
        }
    },
    methods:{
        getCurData(id){
            this.projectId = sessionStorage.getItem('projectId')
            sessionStorage.setItem('projectId',id)
            this.reload()
        }
    },
    computed:mapState({
        projectList: state => state.project.projectList
    }),
    watch:{
    },
    beforeMount(){
        this.curProjectId = sessionStorage.getItem('projectId')
        this.projectId = sessionStorage.getItem('projectId')
    },
    mounted(){}
    

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