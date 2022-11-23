
import {reqStudentLogin,reqTeacherLogin,reqLogout,reqRegister,reqTeacherList,reqAplicationList,reqUpdateStudent,} from '../api/api'
import {setToken,getToken,removeToken} from '../utils/token'

const state = {
    token:getToken('token'),
    code:'',
    findTeacherList:[],
    teacherId:sessionStorage.getItem('teacherId'),
    userName:sessionStorage.getItem('teacherAccount'),
    aplicationList:[],
}
const mutations = {
    GETSTUDENTLOGIN(state,code){
        state.code = code
    },
    GETTEACHERLOGIN(state,msg){
        sessionStorage.setItem('teacherId',msg.id)
        sessionStorage.setItem('teacherAccount',msg.account)
    },
    CLEAR(state){
        state.token = ''
        removeToken()
    },
    GETREGISTERSTUDENT(state,code){
        state.code = code
    },
    GETTEACHERLIST(state,list){
        list.map(el => {
            state.findTeacherList.push({
                id:el.id,
                name:el.name
            })
        })
        console.log('教师列表',state.findTeacherList)
    },
    GETAPLICATIONLIST(state,list){
        list.map(el => {
            state.aplicationList.push({
                id:el.id,
                account:el.account,
                phone:el.phone
            })
        })
        console.log('state.aplicationList', state.aplicationList)
    },
    GETUPDATEAPLICATIONLIST(state,code){
        state.code = code
    },

}
const actions = {
    // 学生登录
    async studentLogin({commit},params){
        let result = await reqStudentLogin(params)
        if(result.errcode == 0){
            commit("GETSTUDENTLOGIN",result.p2pdata.errcode)
            setToken(result.p2pdata.token)
            return 'ok'
        }else{
            console.log("调用学生登录接口错误")
            return Promise.reject(new Error('student login failed'))
        }
    },
    // 教师登录
    async teacherLogin({commit},params){
        let result = await reqTeacherLogin(params)
        if(result.errcode == 0){
            commit('GETTEACHERLOGIN',result.p2pdata)
            setToken(result.p2pdata.token)
            return 'ok'
        }else{
            console.log("调用教师登录接口错误")
            return Promise.reject(new Error('teacher login failed'))
        }
    },
    // 退出登录
    async logout({commit}){
        let result = await reqLogout()
        if(result.errcode == 0){
            commit('CLEAR')
            return 'ok'
        }else{
            return Promise.reject(new Error('log out failed'))
        }
    },
    // 学生注册
    async registerStudent({commit},params){
        let result = await reqRegister(params)
        if(result.errcode == 0){
            commit('GETREGISTERSTUDENT',result.errcode)
            return 'ok'
        }else{
            return Promise.reject(new Error('register failed'))
        }
    },
    // 获取教师列表
    async teacherList({commit,state}){
        state.findTeacherList = []
        let result = await reqTeacherList()
        if(result.errcode == 0){
            commit('GETTEACHERLIST',result.p2pdata)
            return 'ok'
        }else{
            return Promise.reject(new Error('failed to get teacher list'))
        }
    },
    // 获取学生申请列表
    async aplicationList({commit,state},data){
        state.aplicationList = []
        let teacherId = sessionStorage.getItem('teacherId')
        let result = await reqAplicationList(JSON.stringify({teacherId:teacherId,status:data.status}))
        if(result.errcode == 0){
            commit('GETAPLICATIONLIST',result.p2pdata)
            return 'ok'
        }else{
            return Promise.reject(new Error('failed to get student list'))
        }
    },
    // 学生申请列表同意与拒绝
    async updateAplicationList({commit},data){
        let result = await reqUpdateStudent(JSON.stringify({id:data.id,status:data.status}))
        if(result.errcode == 0 || result.errcode == 1){
            commit('GETUPDATEAPLICATIONLIST',result.errcode)
            return 'ok'
        }else{
            return Promise.reject('there are problems in list approval')
        }
    },
}
const getters = {}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}