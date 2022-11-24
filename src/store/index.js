import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import project from "./project"
import userManagement from './userManagement'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    addBoxIsActive:false,
    showinstructions:false,
    showunbinding:false,
    showDeletCamera:false,
    showAplication:false,
    showDeleteStudent:false,
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
      console.log('state.showDeleteStudent',state.showDeleteStudent)
    },
    changeAddTitle(state,params){
      state.curAddTitle = params
    },
    application(state){
      state.showAplication = !state.showAplication
    }
  },
  actions: {

  },
  modules: {
    user,
    project,
    userManagement
  }
})
