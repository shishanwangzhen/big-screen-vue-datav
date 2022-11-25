
import {reqFindGroup,reqInsertGroup,reqUpdateGroup,reqUpdateGroupStatus,reqAplicationList,reqUpdateStudent,reqUpdateGroupStudent} from '../api/api'

const state = {
    projectId:'',
    groupArr:[],
    code:'',
    studentList:[],
    addStudentList:[],
    curGroupId:''
}

const mutations = {
    GETFINDGROUP(state,data){
        state.groupArr = []
        if(data.resData.length !== 0){
            console.log('data.resData22222',data.resData)
            let res = data.resData.map(el => {
                console.log('项目组id',el.id)
                state.groupArr.push({
                    groupName:el.name,
                    groudID:el.number,
                    groupDesp:el.info,
                    id:el.id
                })
                return res
            })
            sessionStorage.setItem('groupId',state.groupArr[0].id)
        }
        sessionStorage.setItem('groupId',0)
        state.projectId = data.projectId
        
    },
    GETINSERTGROUP(state,data){
        state.code = data
    },
    GETUPDATEGROUP(state,data){
        state.code = data
    },
    GETUPDATEGROUPSTATUS(state,data){
        state.code = data
    },
    GETSTUDENTLIST(state,data){
        console.log('这是结果result.p2pdata',data)
        // 获取申请通过的学生列表
        if(data.type == 'apllicationLsit'){
            state.studentList = []
            data.res.map(el => {
                state.studentList.push({
                    id:el.id,
                    account:el.account
                })
            })
        }
        //获取添加到项目组的学生列表
        if(data.type == 'addList'){
            state.addStudentList = []
            data.res.map(el => {
                console.log('hahhaid',el.id)
                state.addStudentList.push({
                    id:el.id,
                    account:el.account,
                    role:el.role
                })
            })
            console.log('state.addStudentList',state.addStudentList)
            
            
        }
    },
    GETCHANGESTUDENTLIST(){
        // state.code = data
    },
    GETUPDATEGROUPSTUDENT(){},
    changeGroupId(state,id){
        state.curGroupId = id
    }
}

const actions = {
    // 获取项目组列表
    async findGroup({commit},data){
        let result = await reqFindGroup(JSON.stringify(data))
        if(result.errcode == 0){
            commit('GETFINDGROUP',{
                projectId:data.data,
                resData:result.p2pdata
            })
            return 'ok'
        }else {
            return new Promise(new Error('failed to get item group'))
        }
    },
    // 添加项目组
    async insertGroup({commit},data){
        let result = await reqInsertGroup(JSON.stringify(data))
        if(result.errcode == 0){
            commit('GETINSERTGROUP',result.errcode)
            return 'ok'
        }else {
            return new Promise(new Error('failed to add item group/student'))
        }
    },
    // 编辑项目组
    async updateGroup({commit},data){
        let result = await reqUpdateGroup(JSON.stringify(data))
        console.log('result.errcode',result.errcode)
        if(result.errcode == 0){
            commit('GETUPDATEGROUP',result.errcode)
            return 'ok'
        }else {
            return new Promise(new Error('failed to edit item group'))
        }
    },
    // 删除项目组
    async updateGroupStatus({commit},id){
        let result = await reqUpdateGroupStatus(id)
        console.log('result.errcode',result.errcode)
        if(result.errcode == 0){
            commit('GETUPDATEGROUPSTATUS',result.errcode)
            return 'ok'
        }else {
            return new Promise(new Error('failed to delete item group'))
        }
    },
    // 查询通过的学生列表、添加到项目组的学生
    async studentList({commit},data){
        let result = await reqAplicationList(JSON.stringify(data[1]))
        if(result.errcode == 0){
            commit('GETSTUDENTLIST',{
                type:data[0].type,
                res:result.p2pdata
            })
            return 'ok'
        }else {
            return new Promise(new Error('failed to query student lis'))
        }
    },
    // 添加学生、修改学生
    async changeStudentList({commit},data){
        let result = await reqUpdateStudent(JSON.stringify(data))
        if(result.errcode == 0){
            commit('GETCHANGESTUDENTLIST',result.p2pdata)
            return 'ok'
        }else {
            return new Promise(new Error('failed to change student lis'))
        }
    },
    // 删除项目组内的学生
    async updateGroupStudent({commit},id){
        let result = await reqUpdateGroupStudent(id)
        if(result.errcode == 0){
            commit('GETUPDATEGROUPSTUDENT',result.errcode)
            return 'ok'
        }else {
            return new Promise(new Error('failed to delete student'))
        }
    }


}

const getters = {

}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
