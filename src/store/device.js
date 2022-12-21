import {reqFindDevice,reqInsertDevice,reqUpdateDeviceBinding,reqDeleteDevice,reqUpdateDevice,reqDeviceNumber,reqUpdateDeviceBindingById,reqFindDeviceDetails,reqSwitcherController} from '@/api/api'

const state = {
 deviceList:[],
 code:'',
 deviceNumberList:[],
 deviceDetailsList:[],
 cellectId:''

}

const mutations = {
    GETFINDDEVICE(state,data){
        state.deviceList = []
        if (data.length > 0) {
           state.deviceList = data 
           state.cellectId = data[0].deviceId
        }
    },
    GETINSERTDEVICE(state,code){
        state.code = code
    },
    GETUPDATADEVICEBINDING(state,code){
        state.code = code
    },
    GETDELETEDEVICE(state,code){
        state.code = code
    },
    GETUPDATADEVICE(state,code){
        state.code = code
    },
    GETDEVICENUMBER(state,data){
        state.deviceNumberList = data
    },
    GETUNBINDING(state,code){
        state.code = code
    },
    GEFINDDEVICEDETAILS(state,data){
        state.deviceDetailsList = []
        if(data.length > 0){
             state.deviceDetailsList = data
        }
       
    },
    GETSWITCHERCONTROLLER(state,code){
        state.code = code
    },
}

const actions = {
    // 查询设备
    async findDevice({commit},data){
        let result = await reqFindDevice(JSON.stringify(data))
        if(result.errcode == 0){
            commit('GETFINDDEVICE',result.p2pdata)
            return 'ok'
        } else {
        return new Promise(new Error('failed to get decoder item'))
        }
    },
    // 添加设备
    async insertDevice({commit},data){
        let result = await reqInsertDevice(JSON.stringify(data))
        if(result.errcode == 0){
            commit('GETINSERTDEVICE',result.errcode)
            return 'ok'
        } else {
        return new Promise(new Error('failed to add device item'))
        }
    },
    // 导入设备
    async updateDeviceBinding({commit},data){
        let result = await reqUpdateDeviceBinding(JSON.stringify(data))
        if(result.errcode == 0){
            commit('GETUPDATADEVICEBINDING',result.errcode)
            return 'ok'
        } else {
        return new Promise(new Error('failed to insert device item'))
        }
    },
    // 删除设备
    async deleteDevice({commit},id){
        let result = await reqDeleteDevice(id)
        if(result.errcode == 0){
            commit('GETDELETEDEVICE',result.errcode)
            return 'ok'
        } else {
        return new Promise(new Error('failed to delete device item'))
        }
    },
    // 修改设备 reqUpdateDevice
    async updateDevice({commit},data){
        let result = await reqUpdateDevice(JSON.stringify(data))
        if(result.errcode == 0){
            commit('GETUPDATADEVICE',result.errcode)
            return 'ok'
        } else {
        return new Promise(new Error('failed to edit device item'))
        }
    },
    // 获取序列号
    async deviceNumber({commit}){
        let result = await reqDeviceNumber()
        if(result.errcode == 0){
            commit('GETDEVICENUMBER',result.p2pdata)
            return 'ok'
        } else {
        return new Promise(new Error('failed to get device number item'))
        }
    },
    // 解绑设备
    async unbindingDevice({commit},id){
        let result = await reqUpdateDeviceBindingById(id)
        if(result.errcode == 0){
            commit('GETUNBINDING',result.errcode)
            return 'ok'
        } else {
        return new Promise(new Error('failed to unbinding device item'))
        }
    },
    // 获取设备详情
    async findDeviceDetails({commit},id){
        let result = await reqFindDeviceDetails(id)
        if(result.errcode == 0){
            commit('GEFINDDEVICEDETAILS',result.p2pdata)
            return result.p2pdata
        } else {
        return new Promise(new Error('failed to find device details item'))
        }
    },
    // 设备开关下行控制 reqSwitcherController
    async switcherController({commit},data){
        let result = await reqSwitcherController(data)
        if(result.errcode == 0){
            commit('GETSWITCHERCONTROLLER',result.errcode)
            return 'ok'
        } else {
        return new Promise(new Error('failed to switcher device item'))
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