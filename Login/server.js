import express from "express"
import fs from "fs"
import path from "path"
import { promisify } from "util"

const app = express()
let usersJsonPath = path.join(process.cwd(), "database", "users.json")

const writeFile = promisify(fs.writeFile)

app.use(express.json())

app.post("/users", async (req, res) => {
    try {
        let body = req.body
        await writeFile(usersJsonPath, JSON.stringify(body))
        res.status(200).send(true)
    } catch (error) {
        console.error("Xato:", error)
        res.status(500).send(false)
    }
})

app.get("/users", (req, res) => {
    let pathIndex = path.join(process.cwd(), "index.ejs")
    let indexHtml = fs.readFileSync(pathIndex)
    res.send(indexHtml)
})


app.listen(3001, () => {
    console.log("Server ishga tushdi")
})
