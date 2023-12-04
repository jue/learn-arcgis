import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getToken } from '@/utils/token'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 60000,
})

function handleError(response) {
  const err = (text) => {
    ElMessage.error(response?.data?.message ?? text)
  }
  if (!response.data) {
    err('请求超时，服务器无响应！')
    return
  }
  const handleMap = {
    404: () => err('服务器资源不存在'),
    500: () => err('服务器内部错误'),
    403: () => err('没有权限访问该资源'),
    401: () => {
      err('登录状态已过期，需要重新登录')
      removeToken()
      // TODO 跳转实际登录页
      navigateTo(`/login?redirect=${window.location.pathname}`)
    },
  }
  handleMap[response.status] ? handleMap[response.status]() : err('未知错误！')
}

// Request interceptor
http.interceptors.request.use(
  (config) => {
    if (getToken()) { config.headers.Authorization = `Bearer ${getToken()}` }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Response interceptor
http.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const { response } = error
    if (response) {
      // ElMessage.error(response.statusText)
      handleError(response)

      // return Promise.reject(response)
      return response
    }
    else {
      ElMessage.error('Network error')
    }
  },
)

export default http
