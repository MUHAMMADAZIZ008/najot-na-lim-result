import { config } from "dotenv"
import { createToken } from "../jwt.js"
import { Users } from "../models/authModels.js"
import jwt from "jsonwebtoken"
import { statusCodes } from "../utils/constants/statusCodes.js"
import { errorMessages } from "../utils/constants/errorMessages.js"
import { winstonLogger } from "../utils/winstonLogger.js"
import { logger } from "../utils/logger.js"
import { otpGenerate, sendMail } from "../helpers/index.js"
import { Otp } from "../models/otp.js"
config()

export const registerAuthController = async (req, res, next) => {
    try {
        throw new Error("error")

        const body = req.body
        if (!body.role) {
            body.role = "User"
        }
        const user = await Users.findOne({ email: body.email })
        if (user) {
            return res.status(400).send({
                message: "already exists!"
            })
        }
        //otp start
        const otp = otpGenerate()

        const newUser = await Users(body)

        await sendMail(body.email, "otp", `this is your otp: ${otp}`)

        const newOtp = new Otp({ 
            user_id: newUser._id,
            otp_code: otp
        })

        await newUser.save()
        await newOtp.save()
        //otp end


        return res.status(200).send({
            message: "created",
            date: newUser._id
        })
    }
    catch (e) {
        winstonLogger.error(e)
        next(e)
    }
}

export const loginAuthController = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const findUser = await Users.find({ email, password })
        console.log(findUser);

        if (!findUser[0].email || !findUser[0].password) {
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
    catch (e) {
        winstonLogger.error(e)
        next(e)
    }
}


export const refreshTokenController = async (req, res, next) => {
    try {
        const { token } = req.body;
        jwt.verify(token, process.env.REFRESH_SECRET_KEY, (err, decode) => {
            if (err) {
                throw new Error(statusCodes.FORBIDDEN, errorMessages.FORBIDDEN)
            }
            logger.info({ decode })
            const accsessToken = jwt.sign({
                id: decode.id,
                email: decode.email,
                role: decode.role
            },

                process.env.ACCESS_SECRET_KEY,
                {
                    expiresIn: process.env.ACCESS_TIME
                })
            return res.send({
                accsessToken,
                refreshToken: token
            })
        })

    } catch (error) {
        winstonLogger.error(error)
        next(error)
    }
}

export const adminController = (req, res, next) => {
    try {
        console.log(req.body);

        return res.send(req.body)
    } catch (error) {
        winstonLogger.error(error)
        next(error)
    }
}
export const checkOtp = async (req, res, next) => {
    try {
        const { otp, email } = req.body

        const currentUser = await Users.findOne({ email })
        const currentOtp = await Otp.findOne({ user_id: currentUser._id })
        const isEqual = currentOtp.verify(otp)

        if (!isEqual) {
            return res.send("opt is valid")
        }
        await Otp.deleteOne({ user_id: currentUser._id })
        await Users.updateOne(
            { email },
            {
                is_active: true
            }
        )
        res.send({
            messege: "user id actice"
        })
    } catch (error) {
        winstonLogger.error(error)
        next(e)
    }
}