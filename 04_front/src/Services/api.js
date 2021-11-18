import axios from "axios"

const { REACT_APP_BASE_URL } = process.env

const api = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: { "Access-Control-Allow-Origin": "*" },
})

api.interceptors.request.use(async (config) => {
  return config
})

api.interceptors.response.use(
  async (response) => {
    return response
  },
  async function (error) {
    return error.response
  }
)

export default api
