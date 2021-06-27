import axios from "axios"

import { API_URL } from "./constants"
import { toast } from "react-toastify"

export const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 3000,
})

axiosInstance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    toast.error(error?.message)
    return Promise.reject(error)
  }
)
