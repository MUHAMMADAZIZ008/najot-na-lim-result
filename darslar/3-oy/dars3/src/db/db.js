import { connect } from "mongoose"

export const connectMonog = async (mongo_uri) =>{
    connect(mongo_uri)
    console.log("connect to mongodb")   
}