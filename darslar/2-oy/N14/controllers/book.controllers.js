import { Book } from "../models/book.model.js";
import fs from "fs"

export async function getAllData(req, res, next) {
  try {
    const books = await Book.find()
    res.status(200).send({
      status: "Success",
      data: books
    });
  } catch (error) {
    next(error);
  }
}

export async function searchData(req, res, next) {
  try {
    const search = req.query
    const books = await Book.find({...search})
    res.status(200).send({
      status: "Success",
      data: books
    });
  } catch (error) {
    next(error);
  }
}

export async function getById(req, res, next) {
  try {
    const id =  req.params.id
    const book = await Book.findById(id)
    if(!book){
      return res.status(404).send({
        status: "Not Found"
      })
    }

    res.status(200).send({
      status: "Success",
      data: book
    });
  } catch (error) {
    next(error);
  }
}

export async function createData(req, res, next) {
  try {
    let {title, author} = req.body
    if(!title || !author){
      return res.status(400).send({
        status: "Failed"
      })
    }
    const newBook = await Book({
      ...req.body,
      image: req.file.filename
    })
    await newBook.save()


    res.status(200).send({
      status: "Success",
      id: newBook._id
    });
  } catch (error) {
    next(error);
  }
}

export async function updateData(req, res, next) {
  try {
    let update = req.body
    if(req.file){
      const data = await Book.findById(req.params.id)
      const fileUrl = path.join(process.cwd(), "public", "uploads", data.image)
      fs.unlinkSync(fileUrl)
      update = {
        ...req.body,
        image: req.file.filename
      } 
    }

    const editBook = await Book.findByIdAndUpdate(req.params.id, update)
    res.status(200).send({
      satuts: "Updated",
      id: editBook._id
    })
  } catch (error) {
    next(error);
  }
}

export async function removeData(req, res, next) {
  try {
    const data = await Book.findById(req.params.id)
    const fileUrl = path.join(process.cwd(), "public", "uploads", data.image)
    fs.unlinkSync(fileUrl)
    const deleteData = await Book.findByIdAndDelete(req.params.id)
    res.status(200).send({
      status: "Success",
      id: deleteData._id
    });
  } catch (error) {
    next(error);
  }
}
