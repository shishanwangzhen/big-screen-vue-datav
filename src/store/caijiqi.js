import {reqInsertCollector,reqFindCollector,requpdateCollectorStatus,reqUpdateCollectorr} from '@/api/api'

const state = {
    code:'',
    collectorList:[]
}

const mutations = {
    GETINSERTCOLLECTOR(state,data){
        state.code = data
    },
    GETFINDCOLLECTOR(state,data){
        console.log('采集器列表',data)
        state.collectorList = []
        if(data.length > 0){
           data.map(item => {
            state.collectorList.push({
                id:item.id,
                name:item.name,
                type:item.status,
                ID:item.number,
                model:item.model,
                remarks:item.remarks
            })
           })
        }
        
    },
    GETDELETECONTROLLER(state,data){
        state.code = data
    },
}

const actions = {
    // 添加采集器
    async insertCollector({commit},data){
        let result = await reqInsertCollector(JSON.stringify(data))
        if(result.errcode == 0){
            commit('GETINSERTCOLLECTOR',result.errcode)
            return 'ok'
        } else {
        return new Promise(new Error('failed to add collector item'))
        }
    },
    // 查询采集器
    async findCollector({commit}){
        let result = await reqFindCollector(JSON.stringify({
            creatorId:sessionStorage.getItem('teacherId')
        }))
        if(result.errcode == 0){
            commit('GETFINDCOLLECTOR',result.p2pdata)
            return 'ok'
        } else {
        return new Promise(new Error('failed to find collector item'))
        }
    },
    // 删除采集器
    async deleteController({commit},id){
        let result = await requpdateCollectorStatus(id)
        if(result.errcode == 0){
            commit('GETDELETECONTROLLER',result.errcode)
            return 'ok'
        } else {
        return new Promise(new Error('failed to delete collector item'))
        }
    },
    // 编辑采集器
    async updateController({commit},data){
        let result = await reqUpdateCollectorr(JSON.stringify(data))
        if(result.errcode == 0){
            commit('GETDELETECONTROLLER',result.errcode)
            return 'ok'
        } else {
        return new Promise(new Error('failed to delete collector item'))
        }
    },
}

const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}