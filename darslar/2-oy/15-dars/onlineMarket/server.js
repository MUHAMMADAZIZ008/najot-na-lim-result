import express from "express"
const app =  express()

app.use(express.json())

app.use("/users", usersRouts)

app.listen(4000, () =>{
    console.log(4000);
})