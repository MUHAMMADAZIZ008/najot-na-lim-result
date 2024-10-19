import { validateEmail } from "../helpers/index.js"

export const registerMiddlewars = (req, res, next)  =>{
    const {email, passowrd} = req.body
    if(!email || !passowrd){
        return res.status(400).send("email va password bo'lishi shart")
    }
    if(!passowrd.length <= 5){
        return res.status(400).send("password uzunligi 5 dan bo'lishi kerak")
    }
    if(!validateEmail(email)){
        return res.status(400).send("Email yaroqsiz")
    }
    next()
}


export const loginMiddlewars = (req, res, next)  =>{
    const {email, passowrd} = req.body
    if(!email || !passowrd){
        return res.status(400).send("email va password bo'lishi shart")
    }
    if(!passowrd.length <= 5){
        return res.status(400).send("password uzunligi 5 dan bo'lishi kerak")
    }
    if(validateEmail(email)){
        return res.status(400).send("Email yaroqsiz")
    }
    next()

}