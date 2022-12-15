import { reqFindDecoder, reqInsertDecoder,reqUpdateDecoder,reqUpdateDecoderStatus } from '@/api/api'

const state = {
    decoderArr: [],
    code:''
}

const mutations = {
    GETFINDDECODER(state, data) {
        state.decoderArr = []
        if (data.length > 0) {
            state.decoderArr = data
        }
    },
    GETINSERTDECODER(state,code){
        state.code = code
    },
    GETUPDATEDECODER(state,code){
        state.code = code
    },
    GETDELETEDECODER(state,code){
        state.code = code
    },
}

const actions = {
    // 查询解码器
    async findDecoder({ commit }, type) {
        let result = await reqFindDecoder(JSON.stringify({
            type,
            creatorId: sessionStorage.getItem('teacherId'),
        }))
        if (result.errcode == 0) {
            commit('GETFINDDECODER', result.p2pdata)
            return 'ok'
        } else {
            return new Promise(new Error('failed to get decoder item'))
        }
    },
    // 添加解码器
    async insertDecoder({ commit }, data) {
        let result = await reqInsertDecoder(JSON.stringify(data))
        if (result.errcode == 0) {
            commit('GETINSERTDECODER', result.errcode)
            return 'ok'
        } else {
            return new Promise(new Error('failed to get decoder item'))
        }
    },
    // 修改解码器
    async updateDecoder({ commit }, data) {
        let result = await reqUpdateDecoder(JSON.stringify(data))
        if (result.errcode == 0) {
            commit('GETUPDATEDECODER', result.errcode)
            return 'ok'
        } else {
            return new Promise(new Error('failed to get decoder item'))
        }
    },
    // 删除解码器
    async deleteDecoder({ commit }, id) {
        let result = await reqUpdateDecoderStatus(id)
        if (result.errcode == 0) {
            commit('GETDELETEDECODER', result.errcode)
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