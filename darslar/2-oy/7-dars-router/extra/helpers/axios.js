import axios from "axios"
import express from "express"

axios.defaults.baseURL = "https://dummyjson.com"
axios.interceptors.request.use(
    (config) =>{
        config.headers.Authorization = "Token"
        config.headers["Accept-Language"] = "uz"
        return config
    },
    (err) =>{
        console.log(err)
        return err
    }
)

axios.interceptors.response.use(
    (config) => config,
    (err) => err
)
export function cencellationFn(tiem){
    const contriller = new AbortController()
    setTimeout(() =>{
        contriller.abort()
    }, tiem || 0)
    return contriller.signal
}
export default axios