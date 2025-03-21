import { User } from "../models/index.js";
import path from "path"
export const authRegisterCon = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.send("Email already taken");
    }
    req.body.full_name = req.body.fullName
    const user = new User(req.body);
    console.log(user);
    await user.save();

    res.send(user);
  } catch (error) {
    next(error);
  }
};

export const authLoginCon = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select({
      full_name: 1,
      email: 1,
      password: 1,
    });
    if (!user) return res.send("user not found!");

    const isEqual = await user.compare(password);

    if (!isEqual) return res.send("Email or password is not valid!");

    res.send(user);
  } catch (error) {
    next(error);
  }
};


export const authGetRegisterCon = (req, res, next) =>{
  const registerHtmlPath = path.join(process.cwd(), "src", "public", "register.html")
  res.sendFile(registerHtmlPath)
}