import {v4} from "uuid"
import { readUsersDB, writeUsersDB } from "./db.js"
export const creatUser = async (user) =>{
    const id = v4
    user.id = id
    
    const salt = await genSalt(10)
    const hashPassword = await hash(user.password, salt)
    user.password = hashPassword
  
    const users = await readUsersDB()
  
    users.push(user)
    writeUsersDB(users)
    delete user.password
    return user

    // console.log(users);
}


