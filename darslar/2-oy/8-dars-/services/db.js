import fs from "fs"
import path from "path"

const dbFilePath = path.join(process.cwd(), "..", "database", "users.json")

export const readUsersDB = () =>{
    const data = fs.readFileSync(dbFilePath, "utf-8")
    const users = JSON.parse(data)
    return users
}

export const writeUsersDB = (user) =>{
    const data = fs.writeFileSync(dbFilePath, josn.stringify(user), "utf-8")
}