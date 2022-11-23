import axios from 'axios'
import nprogress from 'nprogress'
import "nprogress/nprogress.css"
import {getToken} from '../utils/token'

const requests = axios.create(
    {
        //baseURL:'http://192.168.0.66:8081',
        baseURL:'http://192.168.0.107:8088',
        timeout: 5000,
        headers: {'Content-Type': 'application/json'},
    }
)

// 请求拦截器
requests.interceptors.request.use(
    // config本次请求的配置对象
    config => {
        nprogress.start()
        if(sessionStorage.getItem('token')){
            config.headers.token = getToken()
        }
        return config
    }
)
// 响应拦截器
requests.interceptors.response.use(
    res => {
        nprogress.done()
        return res.data
    },
    err => {
        console.log('接口有误')
        return Promise.reject(err)
    }
)
export default requests