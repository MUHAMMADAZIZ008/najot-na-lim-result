import { creatUser } from "../services/users.js"

export const registerCon = async (req, res, next) =>{
    try{
        // res.send(req.body)
        let body = await req.body
        let user = creatUser(body)
        res.send(user)
    }
    catch(e){
        next(e)
    }
}


export const loginCon = (req, res, next) =>{
    try{
    }
    catch(e){
        next(e)
    }
}

export const logoutCon = (req, res, next) =>{
    try{

    }
    catch(e){
        next(e)
    }
}