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

/** 
 *  @tips 查询设备接口已经更改为/core/Device/findDevice 查询设备的条件可以根据查询设备的类型进行查询
*/
// 查询设备 设备类型（1.采集设备，2.控制设备，3.被控设备，4.视频设备，5.虚拟设备）
export const reqFindDevice = (data) => requests({method:'POST',url:'/core/Device/findDevice',data})

// 添加设备
export const reqInsertDevice = (data) => requests({method:'POST',url:'/core/Device/insertDevice',data})

// 将设备导入项目组
export const reqUpdateDeviceBinding = (data) => requests({method:'POST',url:'/core/Device/updateDeviceBinding',data})

// 删除设备
export const reqDeleteDevice = (id) => requests({method:'POST',url:`/core/Device/deleteDevice?deviceId=${id}`})

// 解绑设备
export const reqUpdateDeviceBindingById = (id) => requests({method:'POST',url:`/core/Device/updateDeviceBindingById?id=${id}`})

// 修改设备
export const reqUpdateDevice = (data) => requests({method:'POST',url:'/core/Device/updateDevice',data})

// 查询解码器
export const reqFindDecoder = (data) => requests({method:'POST',url:'/core/decoder/findDecoder',data})

// 添加解码器
export const reqInsertDecoder = (data) => requests({method:'POST',url:'/core/decoder/insertDecoder',data})

// 修改解码器
export const reqUpdateDecoder = (data) => requests({method:'POST',url:'/core/decoder/updateDecoder',data})

// 删除解码器
export const reqUpdateDecoderStatus = (id) => requests({method:'POST',url:`/core/decoder/updateDecoderStatus?id=${id}`})

// 获取序列号
export const reqDeviceNumber = () => requests({method:'POST',url:'/core/deviceNumber/findDeviceNumber'})

// 获取设备详情
export const reqFindDeviceDetails = (id) => requests({method:'POST',url:`/core/Device/findDeviceByDeviceId?deviceId=${id}`})

// 开关下行控制
export const reqSwitcherController = (data) => requests({method:'POST',url:'/core/Device/switcherController',data})















// 添加采集设备
export const reqInsertCollector = (data) => requests({method:'POST',url:'/core/Collector/insertCollector',data})

// 查询采集器
export const reqFindCollector = (data) => requests({method:'POST',url:'/core/Collector/findCollector',data})

// 编辑采集器 
export const reqUpdateCollectorr = (data) => requests({method:'POST',url:'/core/Collector/updateCollector',data})

// 删除采集器
export const requpdateCollectorStatus = (id) =>  requests({method:'POST',url:`/core/Collector/updateCollectorStatus?id=${id}`})









