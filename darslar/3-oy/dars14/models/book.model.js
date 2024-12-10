import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    maxLength: [100, "Enter name less than 100 characters for author"],
    minLength: [3, "Enter name more than 3 characters for author"],
  },
  price: Number,
  page: Number,
  added: {
    type: Date,
    default: new Date(),
  },
});

export const Book = mongoose.model("Book", bookSchema);
