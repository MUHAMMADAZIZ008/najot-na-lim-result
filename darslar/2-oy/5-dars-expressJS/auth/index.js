import express from "express"
const app = express()

app.use(express.json())

let users = [
    {username : "m", password: 11}
]

app.post("/login", (req, res) =>{
    let body = req.body
    for(const user of users){
        if(body.username === user.username && +body.password === +user.password){
            res.send(`Xush kelibliz ${body.username}`)
            return
        }
    }
    res.send(`Username yoki password xato`)
})

app.post("/register", (req, res) =>{
    let body = req.body
    if(String(body.password).length >= 8 ){
        res.send("Password length 8 katta bo'ladi")
    }
    for (const user of users) {
        if(user.username === body.username){
            res.send(`${body.username} vajut username`)
            return
        }
    }
    users.push({...body, id: users.length})
    res.send("Ro'yhatdan o'tildi")
})



app.listen(4000, () =>{
    console.log("4000-port");
})