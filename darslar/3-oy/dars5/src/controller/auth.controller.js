import { config } from "dotenv"
import { createToken } from "../jwt.js"
import { Users } from "../models/authModels.js"
import jwt from "jsonwebtoken"
import { statusCodes } from "../utils/constants/statusCodes.js" 
import { errorMessages } from "../utils/constants/errorMessages.js"
import { logger } from "../utils/logger.js"
config()

export const registerAuthController = async(req, res, next) =>{
    try{
        const body = req.body
        if(!body.role){
            body.role = "User"
        }
        const newUser = await Users(body)
        await newUser.save()
        return res.status(200).send({
            message: "created",
            date: newUser._id
        })
    }
    catch(e){
        next(e)
    }
}

export const loginAuthController = async(req, res, next) =>{
    try{
        const {email, password} = req.body
        const findUser = await Users.find({email, password})
        console.log(findUser);
        
        if(!findUser[0].email || !findUser[0].password){
            return res.send({
                message: "Email or password is wrong"
            })
        }
        
        const payload = {
            id: findUser[0]._id,
            email,
            role: findUser[0].role
        }
        
        const tokens = createToken(payload)
        return res.status(200).send({
            message: "Welcome",
            token: tokens
        })
    }
    catch(e){
        next(e)
    }
}


export const refreshTokenController = async (req, res, next) =>{
    try {   
        const {token} = req.body;
        jwt.verify(token, process.env.REFRESH_SECRET_KEY, (err,  decode) =>{
            if(err){
                throw new Error(statusCodes.FORBIDDEN, errorMessages.FORBIDDEN)
            }
            logger.info({decode})
            const accsessToken = jwt.sign({
                id: decode.id,
                email: decode.email,
                role: decode.role
            },
            
                process.env.ACCESS_SECRET_KEY,
            {
                expiresIn:process.env.ACCESS_TIME
            })
            return res.send({
                accsessToken,
                refreshToken: token
            })
        })

    } catch (error) {
        next(error)
    }
}

export const adminController = (req, res, next) =>{
    try {
        console.log(req.body);
        
        return res.send(req.body)
    } catch (error) {
        next(error)
    }
}
export const checkOtp = async(req, next, next) =>{
    try {
        res.send({
            messege: "resiter have been finished"
        })
    } catch (error) {
        next(e)
    }
}