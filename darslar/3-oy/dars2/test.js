import express from "express"
import jwt from "jsonwebtoken"

const app = express()
const users = new Map()

app.post("/auth/register", (req, res) =>{
    const {email, password} = req.body
    const user = users.has(email)
    if(!user){
        users.set(email, req.body)
        return res.status(201).send("created")
    }
    return res.status(201).send("user alraedy")
})

app.post("/auth/login", (req, res) =>{
    try{
        const {email} = req.body
        const user = users.has(email)

        if(!user){
            return res.status(404).send("not found")
        }
        const payload = {
            email
        }
        const secretKey = "qwert"
        const token = jwt.sign(payload, secretKey)
        res.send({
            token
        })
    }
    catch(e){
    }
})

app.get("/auth/me", (req, res) =>{
    try{
        const token = req.headers?.authorization.split(" ")[1]
        jwt.verify(token, "qwert", (err, decode) =>{
            if(err){
                return res.status(401).send("un auth")
            }
            const user = users.get(decode?.email)
            console.log(user);
            res.send(user)
        })
    }
    catch(e){}
})

app.listen(3000, () =>{
    console.log("3000")
})

