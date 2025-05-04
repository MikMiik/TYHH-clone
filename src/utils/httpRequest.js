import axios from "axios"

const httpRequest = axios.create({
    baseURL: import.meta.env.VITE_LOCAL_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
})
// access token
httpRequest.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

httpRequest.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        return Promise.reject(error)
    }
)

const request = async (method, url, data, config) => {
    try {
        const res = await httpRequest.request({ method, url, data, ...config })
        return res.data
    } catch (error) {
        console.error(error)
        return error.response?.data
    }
}

export const get = (url, config) => {
    return request("GET", url, null, config)
}

export const post = (url, data, config) => {
    return request("POST", url, data, config)
}

export const put = (url, data, config) => {
    return request("PUT", url, data, config)
}

export const patch = (url, data, config) => {
    return request("PATCH", url, data, config)
}

export const remove = (url, data, config) => {
    return request("DELETE", url, data, config)
}

export const setToken = (token) => {
    localStorage.setItem("token", token)
    httpRequest.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`
}

export default {
    get,
    post,
    put,
    patch,
    remove,
    setToken,
}
