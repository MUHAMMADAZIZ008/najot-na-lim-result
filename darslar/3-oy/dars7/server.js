import express from "express"
import morgan from "morgan"

import { config } from "dotenv"
import { connect } from "mongoose"
import { commentsRouter, 
  authRouter, 
  categoryRouter, 
  userRouter, 
  articlesRouter 
} from "./src/router/index.js"
import { rateLimit } from 'express-rate-limit'
import { winstonLogger } from "./src/utils/winstonLogger.js"


const limiter = rateLimit({
	windowMs: 2 * 30 * 1000,
	limit: 100, 
})

config()
const app = express()
app.use(express.json())
app.use(limiter)
app.use(morgan("dev"))

app.use("/auth", authRouter)
app.use("/category", categoryRouter)
app.use("/users", userRouter)
app.use("/articles", articlesRouter)
app.use("/comments", commentsRouter)


process.on('uncaughtException', (err) =>{
  winstonLogger.error('Uncaught Exceptioin:', err)
  process.exit(1)
})

process.on('unhandledRejection', (reason, promise) =>{
  winstonLogger.error('Unhandled Rejectioin at:', promise, "reason:", reason)
  process.exit(1)
})




app.use((err, req, res, next) =>{
  return res.status(500).send(err.message)
})

const port = process.env.PORT
const mongo_uri = process.env.MONGO_URI
app.listen(port, async() =>{
    await connect(mongo_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    console.log("connec to mongo");
    console.log(`seerver is running on ${port}`);
})
