import jwt from "jsonwebtoken"
const users = new Map
import bcrypt from "bcrypt"
export const registerContoller = (req, res, next) =>{
    try {
        const {email, password, role} = req.body
        const user = users.has(email)

        if(!user){
            if(!role){
                req.body.role = "user"
            }
            user.set(email, req.body)
            return res.status(201).send("created")
        }

        res.status(409).send("user already exists")
    } catch (error) {
        next(error)
    }
}

export const loginContoller = (req, res, next) =>{
    try {
        const {email} = req.body
        const user = users.has(email)
        if(!user){
            return res.status(404).send("not found")
        }
        const userData = users.get(email)
        const payload = {
            sub: email,
            role: userData.role
        }

        
        const accessSecretKey = "qwer"
        const refreshSecretKey = "qwer123"

        const ttl = {
            expiresIn: "20m"
        }

        const accessToket = jwt.sign(payload, accessSecretKey, ttl)
        const refreshToket = jwt.sign(payload, refreshSecretKey, {
            expiresIn: "7d" 
        })

        return res.send({
            accessToket,
            refreshToket
        })
    } catch (error) {
        next(error)
    }
}