import winston, { format, transports } from "winston";
const {combine, timestamp, label, printf} = format

const myFormat = printf(({level, message, timestamp}) =>{
    return `${timestamp} ${level}: ${message}`
})

export const logger = winston.createLogger({
    level: "info",
    format: combine(timestamp(), myFormat),//, format.colorize({all: true})

    transports: [
        new transports.Console({level: "silly"}),
        new transports.File({
            filename: "logs/development.log",
            level: "silly"
        })
    ],
    exceptionHandlers: [new transports.File({filename: "logs/exception.log"})],
    rejectionHandlers: [new transports.File({filename: "logs/rejection.log"})]
})