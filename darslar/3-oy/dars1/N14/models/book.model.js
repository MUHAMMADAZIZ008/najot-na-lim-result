import mongoose from "mongoose";

import Joi from "joi";

const bookSchema =  mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true,
        maxLenght: [100, "enter name less than 100 characters for author"],
        minLenght: [3, "enter name more than characters for author"]
    },
    price: Number,
    page: Number,
    added: {
        type: Date,
        default: new Date()
    }
})

export const Book = mongoose.model("Book", bookSchema)

export const valSchema = Joi.object({
    title: Joi.string().min(3).message("minimal uzunlik 3").required(),
    image: Joi.string(),
    author: Joi.string().min(3).message("minimak uzunlik 3").required(),
    price: Joi.number().required(),
    page: Joi.number().required()
})