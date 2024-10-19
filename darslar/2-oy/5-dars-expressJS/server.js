import express from "express"
const app = express()

app.use(express.json())

let users = [
    {id:1, name: "Axror"},
    {id:2, name: "Husniddin"},
    {id:3, name: "Hoji"}
]

app.get("/test1", (req, res) =>{
    res.send("Hello")
})

app.get("/user", (req, res) =>{ 
    res.send(users)
})

app.post("/user", (req, res) =>{
    let body = req.body
    users.push({...body, id: users.length})
    return res.send("ok")
})

app.put("user/:id", (req, res) =>{
    let body = req.body
    let param = req.params
    users.forEach(user =>{
        if(user.id === +param.id){
            user.name = body.name
        }
    })

    return res.send(users)
})

app.listen(3000, ()=>{
    console.log("3000 - port");
})