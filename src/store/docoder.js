import {reqFindDecoder} from '@/api/api'

const state = {
    decoderArr:[]
}

const mutations = {
    GETFINDDECODER(state,data){
        state.decoderArr = []
        if(data.length>0){
            data.map(item => {
                state.decoderArr.push({
                    id:item.id,
                    name:item.name,
                    number:item.number,
                    model:item.model,
                    path:item.path,
                    port:item.port,
                    remarks:item.remarks
                })
            })
            console.log('state.decoderArr',data)
        }
    }
}

const actions = {
    // 查询解码器
    async findDecoder({commit}){
        let result = await reqFindDecoder(JSON.stringify({
            creatorId:sessionStorage.getItem('teacherId')
        }))
        if(result.errcode == 0){
            commit('GETFINDDECODER',result.p2pdata)
            return 'ok'
        } else {
        return new Promise(new Error('failed to get decoder item'))
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