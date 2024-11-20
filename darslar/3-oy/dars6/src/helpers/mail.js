import nodemailer from "nodemailer"
import { config } from "dotenv"
config()
const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD

    }
})
    


export const sendMail = (to, subject, text)=>{
    transport.sendMail({
        from: process.env.MAILTRAP_USERNAME,
        to,
        subject,
        text
    }, 
    function (error, info){
        if(error){
            console.log(error);
        }else{
            console.log(`email sent:${info.response}`);
        }
    })

}

