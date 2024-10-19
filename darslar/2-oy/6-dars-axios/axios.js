import axios from "axios"
import fs from "fs"
import path from "path"
import { title } from "process"

const url = "http://localhost:3000/todo"
const getData = () =>{
    axios
        .get(url)
        .then(res =>{
            console.log(res.data)
        })
        .catch(e =>{
            console.log(e.message);
        })
}
// getData()

let data = {
    title : "anything"
}
const postData = (data) => {
    axios
        .post(url, data)
        .then(res =>{
            console.log(res.data);
        })
        .catch(e =>{
            console.log(e);
        })
}
// postData(data)


const putData = (data, id)=>{
    axios
        .put(path.join(url, String(id)), data)
        .then(res =>{
            console.log(res.data);
        })
        .catch(e =>{
            console.log(e);
        })
}


const patchData = (data, id)=>{
    axios
        .patch(path.join(url, String(id)), data)
        .then(res =>{
            console.log(res.data);
        })
        .catch(e =>{
            console.log(e);
        })
}

const deleteData = (id)=>{
    axios
        .patch(path.join(url, String(id)))
        .then(res =>{
            console.log(res.data);
        })
        .catch(e =>{
            console.log(e);
        })
}
deleteData(1)