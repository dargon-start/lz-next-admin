import { message } from 'antd'
import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
})

instance.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    if (response.data.msg) {
      message.success(response.data.msg)
    }
    return response.data
  },
  function (error) {
    if (error && error.response) {
      switch (error.response.status) {
        case 401:
          // 客户端环境
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          // window && (window.location.href = '/user/login')
        case 500:
          message.error(error.response.data.msg)
      }
    }
    return Promise.reject(error)
  }
)

export default instance
