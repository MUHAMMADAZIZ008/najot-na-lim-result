import { User } from "../models/index.js";
import bcrypt from "bcrypt";
import { createTokens } from "../helpers/jwt.js";
import { verifyToken } from "../helpers/jwt.js";
import nodemailer from "nodemailer"
import { v4 } from "uuid"; 

export async function getAllData(req, res, next) {
  try {
    const users = await User.find();
    // .select({ _id: 0, added: 0, __v: 0 });
    res.status(200).send({
      status: "Success",
      data: users,
    });
  } catch (error) {
    next(error);
  }
}

export async function searchData(req, res, next) {
  try {
    const search = req.query;
    const users = await User.find({ ...search });
    res.status(200).send({
      status: "Success",
      data: users,
    });
  } catch (error) {
    next(error);
  }
}

export async function getById(req, res, next) {
  try {
    const id = req.params.id;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).send({
        status: "Not Found",
      });
    }

    res.status(200).send({
      status: "Success",
      data: user,
    });
  } catch (error) {
    next(error);
  }
}

export async function createData(req, res, next) {
  try {
    const { fullname, email, password, role } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    })
    let activate_link_id = v4()
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Aktiv",
      html: `
      <h1>
        Sizning aktivlashtiruv linkigiz: 
        <a href="${`http://localhost:3000/api/v1/user/avtivate/${activate_link_id}`}"> activate link</a> 
      </h1>
      `
    })

    const newUser = new User({ ...req.body, password: hashPassword, activate_link_id });
    await newUser.save();

    // create OTP
    // Save DB
    // Save Time
    // send OTP to user.email

    res.status(200).send({
      status: "Sign Up",
      id: newUser._id,
    });
  } catch (error) {
    next(error);
  }
}
export const activeUser = async(req, res, next) =>{
  try {
    const {id} = req.params
    const userData = await User.findOne({activate_link_id: id})
    if(!userData){
      return res.status(404).send({
        msg: "Bunday user yoq"
      })
    }
    await User.updateOne({
      activate_link_id: id,
      is_active: true
    })
    return res.status(200).send({
      msg: "user activlashdi"
    })
  } catch (error) {
    next(error)
  }
}

export async function loginData(req, res, next) {
  try {
    const { email, password } = req.body;
    // console.log(req.body);

    if (!email && !password) {
      console.log(email, password);
      res.status(400).send("wrong");
    }
    const oldUser = await User.findOne({ email });
    const resPass = await bcrypt.compare(password, oldUser.password);

    const payload = {
      sub: oldUser._id,
      role: oldUser.role,
    };
    const tokens = createTokens(payload);

    res.status(200).send({
      status: "Login",
      tokens,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateData(req, res, next) {
  try {
    let updated = req.body;
    if (req.file) {
      const data = await User.findById(req.params.id);
      const fileUrl = path.join(process.cwd(), "public", "uploads", data.image);
      fs.unlinkSync(fileUrl);

      updated = {
        ...req.body,
        image: req.file.filename,
      };
    }

    const editUser = await User.findByIdAndUpdate(req.params.id, updated);

    res.status(200).send({
      status: "Updated",
      id: editUser._id,
    });
  } catch (error) {
    next(error);
  }
}

export async function removeData(req, res, next) {
  try {
    const data = await User.findById(req.params.id);
    const fileUrl = path.join(process.cwd(), "public", "uploads", data.image);
    fs.unlinkSync(fileUrl);

    const deletedData = await User.findByIdAndDelete(req.params.id);
    res.status(200).send({
      status: "Deleted",
      id: deletedData._id,
    });
  } catch (error) {
    next(error);
  }
}

export async function refreshToken(req, res, next) {
  try {
    const refreshtoken = req.headers?.authorization?.split(" ")?.[1];
    if (!refreshtoken) {
      return res.status(401).send({
        msg: "Oldin ro'yxatdan o'ting",
      });
    }
    const pay = verifyToken("refresh", refreshtoken);
    const user = await User.findById(pay.sub);
    if (!user) {
      return res.status(401).send("User ro'yxatdan o'tmagan");
    }

    const payload = {
      sub: user._id,
      role: user.role,
    };
    const tokens = createTokens(payload);

    res.status(200).send({
      status: "New Tokens",
      tokens,
    });
  } catch (error) {
    next(error);
  }
}

export async function checkOtp(req, res, next) {
  try {
    const { otp } = req.body;

    // get OTP from DB
    // compare
    // update user.is_active

    res.status(200).send({
      msg: "Register have been finished successfully!",
    });
  } catch (error) {
    next(error);
  }
}


export async function restorePassword(req, res, next) {
  try {
    const { email } = req.body;
    const userData = await User.findOne({email})
    if(!userData){
      return res.status(404).send({
        msg: "Bunday user yoq"
      })
    }

    const newPass = v4()
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(newPass, salt);

    await User.updateOne({_id: userData._id},{
      password: hashPassword
    })

    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    })

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Yangi parol",
      html: `
      <h1>
        Sizning yangi parolingia: ${newPass}
      </h1>
      `
    })

    res.status(200).send({
      msg: "Yangi parol yuborildi!",
    });
  } catch (error) {
    next(error);
  }
}



