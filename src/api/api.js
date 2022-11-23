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

// 学生申请同意与拒绝
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