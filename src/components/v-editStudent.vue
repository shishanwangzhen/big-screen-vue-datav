<template>
    <div>
        <div class="editBox" v-if="showEdeitStudent">
            <div class="projectNameTitele">编辑{{curStudentName}}</div>
            <div class="containBox" v-for="(list, index) in editList" :key="index">
                <span>{{ list }}</span>
                <input class="itemNo editcommon" ref="getValue"/>
            </div>
            <div class="containBox">
                <span>角色</span>
                <select class="itemNo editcommon" v-model="role">
                    <option value="" disabled selected>选择角色</option>
                    <option value="1">组长</option>
                    <option value="2">组员</option>
                </select>
            </div>
            <div class="selctType">
                <button @click="cancel">取消</button>
                <button @click="submit">确定</button>
            </div>
        </div>
        <v-mask :isActive="showEdeitStudent"></v-mask>
    </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "v-editList",
    props: ["editList","curStudentName","studentId"],
    data(){
        return{
            role:'',
            value:'',
            inputValue:[],
            information:{
                account:'',
                name:'',
                phone:'',
                password:'',
                email:'',
                major:'',
                role:'',
            }
            
        }
    },
    methods: {
        cancel() {
            this.$store.commit('editStudent')
        },
        async submit() {
            console.log('this.studentId',this.studentId)
            // this.$store.commit('editStudent')
            this.$refs.getValue.map(item => {
               this.inputValue.push(item.value)
            })
            Object.keys(this.information).map((item,index) => {
                this.information[item] = this.inputValue[index]
            })
            console.log('this.information',this.information)
            this.information['role'] = this.role
            this.$set(this.information,"projectId",sessionStorage.getItem('projectId'))
            this.$set(this.information,"groupId",sessionStorage.getItem('groupId'))
            this.$set(this.information,"teacherId",sessionStorage.getItem('teacherId'))
            this.$set(this.information,"id",this.studentId)
            await this.$store.dispatch('userManagement/changeStudentList',this.information)
            this.$store.commit('editStudent')
            await this.$store.dispatch('userManagement/studentList',[
                    {type:'addList'},
                    {
                    status:1,
                    groupId:sessionStorage.getItem('groupId'),
                    projectId:sessionStorage.getItem('projectId')
                }])
        }
    },
    computed: mapState({
        showEdeitStudent: state => state.showEdeitStudent
    })
}
</script>

<style scoped lang="scss">
.select {
    width: 240px !important;
    margin-top: 0px;

    option:disabled {
        color: rgba(255, 255, 255, 0.69)
    }
}

.editBox {
    z-index: 9001;
    width: 695px;
    height: 465px;
    background-size: 1150px 700px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(../assets/images/operation-prompt-box.png);
    background-repeat: no-repeat;

    .projectNameTitele {
        height: 60px;
        margin-top: 25px;
        margin-left: 20px;
        font-size: 25px;
        font-weight: 700;
        color: rgba(255, 255, 255, 1);
    }

    .containBox {
        display: flex;
        margin: 10px;
        text-align: left;
    }

    .editcommon {
        width: 500px;
        background: rgba(0, 0, 0, 0.6);
        color: rgba(255, 255, 255, 1);
        letter-spacing: 1px;
        overflow: hidden;
        margin-left: 20px;
        padding-left: 5px;
    }

    @mixin commonStyle {
        white-space: nowrap;
        height: 30px;
        line-height: 30px;
    }

    .groupName {
        @include commonStyle();
        padding-left: 5px
    }

    .itemNo {
        @include commonStyle();
    }

    .describe {
        height: 126.35px;
        white-space: wrap;
        overflow-y: scroll;
        padding: 5px;
        text-align: left;
    }

    /* 自定义滚动条样式开始 */
    ::-webkit-scrollbar {
        width: 5px;
        /*滚动条宽度*/
        height: 18px;
        /*滚动条高度*/
    }

    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track {
        box-shadow: 0px 1px 3px #071e4a inset;
        /*滚动条的背景区域的内阴影*/
        border-radius: 10px;
        /*滚动条的背景区域的圆角*/
        background-color: #071e4a;
        /*滚动条的背景颜色*/
    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb {
        box-shadow: 0px 1px 3px rgb(6, 79, 112) inset;
        /*滚动条的内阴影*/
        border-radius: 10px;
        /*滚动条的圆角*/
        background-color: rgb(6, 79, 112);
        /*滚动条的背景颜色*/
    }

    span {
        display: inline-block;
        height: 30px;
        width: 100px;
        text-align: center;
        line-height: 30px;
        background: rgba(0, 0, 0, 0.6);
        color: rgba(255, 255, 255, 1);
        letter-spacing: 1px;
    }
}

@mixin button {
    font-size: 15 px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    border: none;
    width: 50px;
    height: 25px;
    border-radius: 9px;
    margin: 20px;
}

.selctType {
    margin-right: 10px;
    text-align: right;

    button:first-child {
        @include button();
        background: rgba(0, 186, 173, 1);
    }

    button:last-child {
        @include button();
        background: rgba(216, 40, 40, 1);
    }

    button:active {
        font-size: 18px;
        box-shadow: inset 0px -6px 4px 0px rgba(255, 255, 255, 0.25);
    }
}

.selectadmin {
    width: 500px !important;

    option:disabled {
        color: rgba(255, 255, 255, 0.69);
    }
}
</style>
