import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.routes.js";
import mongoose from "mongoose";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { logger } from "./helpers/logger.js";
import passport from "passport";
import session from "express-session";
import LocalStrategy from 'passport-local'
import cookieParser from "cookie-parser";
import { User } from "./models/user.model.js";


dotenv.config();
const app = express();
const limiter = rateLimit({
  windowMs: 1000 * 60,
  max: 100,
  message: "Ushbu IP dan so'rov ko'payib ketdi",
});

app.use(express.json());
app.use(express.static("public"));
app.use(helmet());
app.use(limiter);
app.use(session({
  secret: 'qwer',
  resave: false,
  saveUninitialized: true,
  cookie:{
    secure: true
  }
}))
app.use(passport.initialize())
app.use(passport.session())

passport.use(new localStorage(async function (username, passport, done) {
  try {
    const currentUser = await User.find({username})
    if(!currentUser){
      return done(null, false, {message: 'incorrect username or password'})
    }
    done(null, currentUser)
  } catch (error) {
    done(error)
  }
}))


app.use('/test', passport.authenticate('local', {
  session: false
}), (req, res, next) =>{
  try {
    console.log(req.session);
    res.send('ok')
  } catch (error) {
    next(error)
  }
})



app.use("/api/v1", routes);

// Catch-all for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Oops, something went wrong.",
    error: err.message,
  });
});


//unhadles error

process.on("unhandledRejection", (err) =>{
  console.log(`unhandledRejection: ${err.message}`);
  process.exit(1)
  
})

//uncaughtException
process.on("uncaughtException", (err) =>{
  console.log(`uncaughtException: ${err.message}`);
  process.exit(1)
  
})

const port = process.env.PORT || 3001;
const db_url = process.env.DATABASE_URI;
app.listen(port, async () => {
  try {
    await mongoose.connect(db_url);
    logger.info("Connecting to DB")
    logger.info(`Project is running on port: ${port}`)
  } catch (error) {
    console.log(error);
  }
});
