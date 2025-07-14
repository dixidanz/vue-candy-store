import axios from 'axios'

export const request = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/${import.meta.env.VITE_CUSTOM_PATH}`,
  headers: {},
  timeout: 5000
})

request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    const { data, status } = response
    return status === 200 && data.success ? data : Promise.reject(data)
  },
  error => {
    const {
      data: err
    } = error.response
    return Promise.reject(err)
  }
)

export default request
