

// 存储token
export const setToken = (token)=> sessionStorage.setItem('token',token)

// 获取token
export const getToken = () => sessionStorage.getItem('token')

// 移除token
export const removeToken = () => sessionStorage.removeItem('token')