import multer from "multer";
import path from "path";
import { valSchema } from "../models/book.model.js";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads/",
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  }),
  limits: { fileSize: 1024 * 1024 * 3 },
  fileFilter: function (req, file, cb) {
    const fileTypes = /jpeg|jpg|png|gif|webp/;
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = fileTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error! You can only uploads image files.");
    }
  },
});

export const createDataMidd = () =>{
  return (req, res, next) =>{
    try{
      const {error, value} = valSchema.validate(req.body)
      if(error){
        return res.status(400).send({
          message: error.message,
          data: value
        })
      }
      next()
    }
    catch(e){
      next(e)
    }
  }
}



export default upload;
