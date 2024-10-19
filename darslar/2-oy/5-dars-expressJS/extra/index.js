import express from "express"

const app = express()

app.use(express.json())
app.use(express.static("public"))

const myLogs = (req, res, next) =>{
    let token = req.headers.authorization;
    console.log(token);
    if(!token){
        return res.status(401).send("Unauthorized")
    }
    next()
}

let users = []
app.get("/user",(req, res) =>{
    return res.status(200).send(users)
})


app.post("/user", (req, res) =>{
    users.push(req.body)
    res.status(201).send("created")
})

app.listen(5050, ()=>{
    console.log("5050-da ishladi");
})