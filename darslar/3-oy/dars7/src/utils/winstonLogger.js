import { createLogger, format, transports } from "winston";
import { Logtail } from "@logtail/node";
import { LogtailTransport } from "@logtail/winston";
import "winston-mongodb"


const logtail = new Logtail(process.env.LOGGER_TOKEN)
    
export const winstonLogger  = createLogger({
    level: "silly",
    format: format.combine(
        format.timestamp(),
        format.json(),
        format.colorize({all: true})
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename: "error.log", level: "error"}),
        new transports.File({filename: "application.log"}),
        new LogtailTransport(logtail)
        // new transports.MongoDB ({
        //     level: 'error',
        //     db: "mongodb://localhost:27017/logs",
        //     collection: "erorr_logs"
        //     // options: {useUnifiedTopology: true}
        // })
    ]
})



// logger.error('this is an error message')
// logger.warn('this is a warning message')
// logger.info('this is an info message')
// // logger.varbose('this is an varbose message')
// logger.debug('this is an debug message')
// logger.silly('this is an silly message')