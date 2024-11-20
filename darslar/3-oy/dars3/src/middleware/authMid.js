import jwt from "jsonwebtoken"
export const authGuard = (req, res, next) =>{
    try{
        if(!req.headers.authorization){
            return res.status(409),send("token not found")
        }
        const [type, token] = req.headers.authorization().split(" ")
        if(type !== "Bearer" || !token){
            return res.status(409).send("not valid data")
        }
        jwt.verify(token, "qwer", (err, payload) =>{
            if(err){
                return res.status(403).send(403).send("forbidden")
            }
            req.user = payload
            next()
        })
    }
    catch(e){
        next(e)
    }
}