import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import project from "./project"
import userManagement from './userManagement'
import caijiqi from './caijiqi'
import decoder from './docoder'
import device from './device'
import notImportedDevice from './notImportedDevice'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    addBoxIsActive:false,
    showinstructions:false,
    showunbinding:false,
    showDeletCamera:false,
    showAplication:false,
    showDeleteStudent:false,
    showDeleteDevice:false,
    showEdeitStudent:false,
    showDeviceDetails:false,
    editBoxIsActive:false,
    curAddTitle:''
  },
  mutations: {
    isShowAddBox(state){
      state.addBoxIsActive = !state.addBoxIsActive
    },
    editInstructions(state){
      state.showinstructions = !state.showinstructions
    },
    unbinding(state){
      state.showunbinding = !state.showunbinding
    },
    deletCamera(state){
      state.showDeletCamera = !state.showDeletCamera
    },
    deleteStudent(state){
      state.showDeleteStudent = !state.showDeleteStudent
    },
    deleteDevice(state){
      state.showDeleteDevice = !state.showDeleteDevice
    },
    deviceDetails(state){
      state.showDeviceDetails = !state.showDeviceDetails
    },
    editStudent(state){
      state.showEdeitStudent = !state.showEdeitStudent
    },
    changeAddTitle(state,params){
      state.curAddTitle = params
    },
    application(state){
      state.showAplication = !state.showAplication
    },
    isShoweditBox(state){
      state.editBoxIsActive = !state.editBoxIsActive
    },
  },
  actions: {

  },
  modules: {
    user,
    project,
    userManagement,
    caijiqi,
    decoder,
    device,
    notImportedDevice
  }
})
