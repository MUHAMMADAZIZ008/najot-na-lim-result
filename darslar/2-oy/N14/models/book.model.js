import mongoose from "mongoose";

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