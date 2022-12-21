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
    addBoxIsActive: false,
    showinstructions: false,
    showunbinding: false,
    showDeletCamera: false,
    showAplication: false,
    showDeleteStudent: false,
    showDeleteDevice: false,
    showEdeitStudent: false,
    showDeviceDetails: false,
    editBoxIsActive: false,
    curAddTitle: '',
    deviceList: [],
  },
  mutations: {
    isShowAddBox(state) {
      state.addBoxIsActive = !state.addBoxIsActive
    },
    editInstructions(state) {
      state.showinstructions = !state.showinstructions
    },
    unbinding(state) {
      state.showunbinding = !state.showunbinding
    },
    deletCamera(state) {
      state.showDeletCamera = !state.showDeletCamera
    },
    deleteStudent(state) {
      state.showDeleteStudent = !state.showDeleteStudent
    },
    deleteDevice(state) {
      state.showDeleteDevice = !state.showDeleteDevice
    },
    deviceDetails(state) {
      state.showDeviceDetails = !state.showDeviceDetails
    },
    editStudent(state) {
      state.showEdeitStudent = !state.showEdeitStudent
    },
    changeAddTitle(state, params) {
      state.curAddTitle = params
    },
    application(state) {
      state.showAplication = !state.showAplication
    },
    isShoweditBox(state) {
      state.editBoxIsActive = !state.editBoxIsActive
    },
    getDeviceList(state, data) {
      let deviceList = JSON.parse(JSON.parse(JSON.stringify(data)))
      let sameDeviceIdIndex = ''
      // 去除相同的数组对象元素
      let removeDeviceDuplicateObj = (arr) => {
        // 缓存用于记录
        const newArr = [];
        for (const t of arr) {
          // 检查缓存中是否已经存在
          if (newArr.find((c) => c.deviceId === t.deviceId)) {
            // 已经存在说明以前记录过，现在这个就是多余的，直接忽略
            continue;
          }
          // 不存在就说明以前没遇到过，把它记录下来
          newArr.push(t);
        }
        // 记录结果就是过滤后的结果
        return newArr;
      }
      let removeSensorDuplicateObj = (arr) => {
        // 缓存用于记录
        const newArr = [];
        for (const t of arr) {
          // 检查缓存中是否已经存在
          if (newArr.find((c) => c.sensorsId === t.sensorsId)) {
            // 已经存在说明以前记录过，现在这个就是多余的，直接忽略
            continue;
          }
          // 不存在就说明以前没遇到过，把它记录下来
          newArr.push(t);
        }
        // 记录结果就是过滤后的结果
        return newArr;
      }
      let res = state.deviceList.some((item, index) => {
        // 判断设备是否已经存在
        if (item.deviceId == deviceList.deviceId) {
          sameDeviceIdIndex = index
          return true
        } else {
          return false
        }
      })
      // res为true存在相同的设备id，
      if (res) {
        state.deviceList[sameDeviceIdIndex].sensorsDates.forEach((oldSensorItem, oldSensorIndex) => {
          deviceList.sensorsDates.forEach((newSensorItem, newSensorIndex) => {
            // 判断是否存在相同的传感器id
            if (oldSensorItem.sensorsId == newSensorItem.sensorsId) {
              state.deviceList[sameDeviceIdIndex].sensorsDates[oldSensorIndex] = deviceList.sensorsDates[newSensorIndex]
            } else {
              state.deviceList[sameDeviceIdIndex].sensorsDates.push(deviceList.sensorsDates[newSensorIndex])
            }
          })
        })
        state.deviceList[sameDeviceIdIndex].sensorsDates = removeSensorDuplicateObj(state.deviceList[sameDeviceIdIndex].sensorsDates)
      } else {
        if (typeof deviceList == 'object') {
          state.deviceList.push(deviceList)
        }
      }
      state.deviceList = removeDeviceDuplicateObj(state.deviceList)
      console.log('state.deviceList',state.deviceList)
    }
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
