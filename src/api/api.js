import requests from "../utils/request";

// 学生登录
export const reqStudentLogin = (data) => requests({ method:'POST',url:'/login/loginStudent',data})

// 教师登录
export const reqTeacherLogin = (data) => requests({method:'POST',url:'/login/loginTeacher',data})

// 退出登录
export const reqLogout = () => requests({method:'POST',url:'/login/loginOut'})

// 注册
export const reqRegister = (data) => requests({method:'POST',url:'/login/registerStudent',data})

// 获取教师列表
export const reqTeacherList = () => requests({method:'POST',url:'/teacher/findTeacher'})

// 获取学生申请列表
export const reqAplicationList = (data) => requests({method:'POST',url:'/core/student/selectStudent',data})

// 学生申请同意与拒绝、项目组添加学生、修改学生
// @params status （0.待审核，1.审核通过，2.审核未通过）
export const reqUpdateStudent = (data) => requests({method:'POST',url:'/core/student/updateStudent',data})

// 获取项目列表
export const reqProjectList = (data) => requests({method:'POST',url:'/core/project/findProject',data})

// 新建项目
export const reqCreateProject = (data) => requests({method:'POST',url:'/core/project/insertProject',data})

//删除项目
export const reqDeleteProject = (id) => requests({method:'POST',url:`/core/project/updateProjectStatus?id=${id}`})

//修改项目
export const reqUpdateProject = (data) => requests({method:'POST',url:'/core/project/updateProject',data})

//一键清空所有项目
export const  reqClearAllProject=(id) => requests({method:'POST',url:`/core/project/updateProjectStatusByCreatorId?creatorId=${id}`})

//查看项目组列表
export const reqFindGroup = (data) => requests({method:'POST',url:'/core/group/findGroup',data})

//添加项目组
export const reqInsertGroup = (data) => requests({method:'POST',url:'/core/group/insertGroup',data})

//修改项目组
export const reqUpdateGroup = (data) => requests({method:'POST',url:'/core/group/updateGroup',data})

//删除项目组
export const reqUpdateGroupStatus = (id) =>  requests({method:'POST',url:`/core/group/updateGroupStatus?id=${id}`})

// 删除项目组中的学生
export const reqUpdateGroupStudent = (id) =>  requests({method:'POST',url:`/core/group/updateGroupStudent?id=${id}`})

// 添加采集设备
export const reqInsertCollector = (data) => requests({method:'POST',url:'/core/Collector/insertCollector',data})

// 查询采集器
export const reqFindCollector = (data) => requests({method:'POST',url:'/core/Collector/findCollector',data})

// 查询解码器
export const reqFindDecoder = (data) => requests({method:'POST',url:'/core/decoder/findDecoder',data})






