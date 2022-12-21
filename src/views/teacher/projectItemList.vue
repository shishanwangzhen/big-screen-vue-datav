<template>
    <div>
        <div class="topBoxContainer">
            <div class="projectSelection">
                <select name="" class="select_group" v-model="curProjectId" @change="getCurData(curProjectId)">
                    <option :value="item.id" v-for="item in projectList" :key="item.id"
                        :selected='(item.id == curProjectId)'>{{ item.name }}</option>
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
    inject: ['reload'],
    data() {
        return {
            projectId: '',
            curProjectId: '',
        }
    },
    methods: {
        async getCurData(id) {
            await this.$store.dispatch('device/findDevice', {
                type: this.$route.query.deviceType,
                binding: "1",
                bindingId: sessionStorage.getItem("teacherId"),
                projectId: id
            })
            await this.$store.dispatch('userManagement/findGroup', {
                creatorId: sessionStorage.getItem('teacherId'),
                projectId: id
            })
            if (this.curGroupId == '') {
                this.$store.commit("userManagement/clearStudentList")
            } else {
                await this.$store.dispatch('userManagement/studentList', [
                    { type: 'addList' },
                    {
                        status: 1,
                        groupId: this.curGroupId,
                        projectId: this.$route.query.projectId
                    }
                ])
            }
        },
    },
    computed: mapState({
        projectList: state => state.project.projectList,
        curGroupId: state => state.userManagement.curGroupId
    }),
    watch: {
        curProjectId: {
            handler(newProjectId) {
                // 使用replace发生警告
                try {
                    this.projectList.forEach(item => {
                        if (item.id == newProjectId) {
                            this.$router.replace({
                                query: {
                                    projectName: item.name,
                                    projectId: newProjectId,
                                    deviceType:this.$route.query.deviceType
                                }
                            })
                            throw new Error('OK')
                        }
                    })

                } catch (e) { return }

            }
        }
    },
    beforeMount() {
        this.curProjectId = this.$route.query.projectId
        this.$store.dispatch('project/projectList')
    },
    mounted() { }


}
</script>

<style lang="scss" scoped>
.topBoxContainer {
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