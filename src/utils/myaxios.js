import axios from 'axios'
import router from '../router'
import Element from 'element-ui'

axios.defaults.baseURL = 'http://localhost:9527'
const request = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

request.interceptors.request.use(config => {
  config.headers['token'] = localStorage.getItem('token') // 请求头带上token

  return config
})

request.interceptors.response.use(response => {
  const res = response.data
  console.log('res......')
  console.log(res)
  if (res.code === 200) {
    return response
  } else {
    Element.Message.error(res.msg ? res.msg : '系统异常！', { duration: 3 * 1000 })
    return Promise.reject(response.data.msg)
  }
},
error => {
  console.log(error)
  if (error.response.data) {
    error.message = error.response.data.msg
  }
  if (error.response.status === 401) {
    router.push('/login')
  }
  Element.Message.error(error.message, { duration: 3 * 1000 })
  return Promise.reject(error)
})

export default request
