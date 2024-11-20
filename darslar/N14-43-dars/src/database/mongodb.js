import mongoose from "mongoose"
import { logger } from "../utils/index.js"
import { config } from "dotenv"

config()
export const connectDb = () =>{
    try {
        mongoose.connect(process.env.MONGO_URI,  { useNewUrlParser: true, useUnifiedTopology: true })
        logger.info("conneted to mongodb")
    } catch (error) {
        return error
    }
}