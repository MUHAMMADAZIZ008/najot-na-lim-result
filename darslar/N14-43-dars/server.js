import app from "./src/app.js"
import { connectDb } from "./src/database/mongodb.js";
import {logger} from "./src/utils/index.js"

const startApp = async () =>{
  try {
    await connectDb()
    app.listen(3000, async() => {
      logger.info(`Server started on port  ${3000}`);
    });
  } catch (error) {
    throw new Error(error)
  }
}

startApp()