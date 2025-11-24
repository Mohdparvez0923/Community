
import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_ACC_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

export const axiosPost = axios.create({
    baseURL: import.meta.env.VITE_POST_URL,
    headers:{
            "Content-Type":"application/json"
    }
})