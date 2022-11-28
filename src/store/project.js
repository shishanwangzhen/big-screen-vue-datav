import { reqProjectList,reqCreateProject,reqDeleteProject,reqUpdateProject,reqClearAllProject } from '../api/api'

const state = {
    projectList:[],
    projectBasicInfo:[],
    code:'',

}

const mutations = {
    GETPROJECTLIST(state,data){
        state.projectList = []
        state.projectBasicInfo = []
        data.map(el => {
            state.projectList.push({
                id:el.id,
                name:el.name,
                creatorName:el.creatorName,
                number:el.number,
                info:el.info
            })
        })
        data.map(el => {
            state.projectBasicInfo.push({
                name:el.name,
                number:el.number,
            })
        })
    },
    GETCREATEPROJECT(state,data){
        state.code = data
    },
    DELETEPROJECT(state,data){
        state.code = data
    },
    UPDATEPROJECT(state,data){
        state.code = data
    },
    CLEARALLPROJECT(state,data){
    state.code = data
    }
}

const actions = {
    // 获取项目列表
    async projectList({commit}){
        state.projectList = []
        let teacherId = sessionStorage.getItem('teacherId')
        let result  = await reqProjectList(JSON.stringify({creatorId:teacherId}))
        if(result.errcode == 0){
            commit('GETPROJECTLIST',result.p2pdata)
            return 'ok'
        }else{
            return new Promise(new Error('failed to get item list information'))
        }
    },
    // 新建项目
    async creatProject({ commit }, data) {
        let result = await reqCreateProject(JSON.stringify(data))
        if (result.errcode == 0) {
            commit('GETCREATEPROJECT',result.errcode)
            return 'ok'
        } else {
            return new Promise(new Error('new item failed'))
        }
    },
    // 删除项目
    async deleteProject({commit},delectId){
        let result = await reqDeleteProject(delectId)
        if(result.errcode == 0){
            commit('DELETEPROJECT',result.errcode)
            return 'ok'
        } else {
        return new Promise(new Error('failed to delete project item'))
        }
    },
    // 修改项目
    async updateProject({commit},data){
        let result = await reqUpdateProject(JSON.stringify(data))
        if(result.errcode == 0){
            commit('UPDATEPROJECT',result.errcode)
            return 'ok'
        } else {
            return  new Promise(new Error('failed to modify item'))
        }

    },
    // 一键清空所有项目组
    async clearAllProject({commit}){
        console.log('清空')
        let teacherId = sessionStorage.getItem('teacherId')
        let result = await reqClearAllProject(teacherId)
        if(result.errcode == 0){
            commit('CLEARALLPROJECT',result.errcode)
            return 'ok'
        }else {
            return  new Promise(new Error('one click clearing failed'))
        }
    }

}

const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}