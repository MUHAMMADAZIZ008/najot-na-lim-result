import mongoose from 'mongoose';
const { connect, model, Schema} = mongoose;

import { config } from 'dotenv';

config()
const MONGO_URI = process.env.MONGO_URI


connect(MONGO_URI);

const userSchema = new Schema({
    name: String,
    age: Number,
    email: {
        type: String,
        unique: true
    },
    passowrd: String,
    birthday: String,
    skills: [String],
    isMerried: Boolean,
    group: {
        coding: [String],
        study: [String]
    }
},
{
    timestamps:true
})


const User = model('user', userSchema)
const user = new User({
    name: 'Muhammadziz', 
    age: 16, 
    email: 'm@email.com',
    passowrd: '12345qwert',
    birthday: "21 Augst",
    skills: ["css", "html", "js", "nodeJs"],
    isMerried: false,
    group:{
        coding: ["psotgres", "mongoDb"],
        study: ["najot na'mil", "everest"]
    } 

})

user.save()
    .then(() => console.log('saved'))