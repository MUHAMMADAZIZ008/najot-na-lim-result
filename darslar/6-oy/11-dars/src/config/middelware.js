import axios from "axios";


const request = axios.create({baseURL: import.meta.env.VITE_APP_URL})

request.interceptors.request.use((config) =>{
    config.headers['Authorization'] = 'sdfakljlkjasdlkfjsdkdlhjgdfsjakfdljfkdaskdfjlaskdjflasdkjflsdkjaflksjfhdfalkghoievaknkjvajkhdsb';
    return config
})
request.interceptors.response.use((res) =>{
    return res
})

export default request;