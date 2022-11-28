import axios from 'axios'

const requestsWeather = axios.create(
    {
        baseURL:'http://apis.juhe.cn',
        timeout: 5000,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    }
)



export default requestsWeather