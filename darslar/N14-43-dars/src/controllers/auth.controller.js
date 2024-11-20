import jwt from "jsonwebtoken";
import { User } from "../modules/user.module.js";
import { ApiError, errorMessages, statusCodes } from "../utils/index.js";

export const registerController = async(req, res, next) => {
  try {
    const { email, role } = req.body;
    const currentUser = await User.findOne({email})

    if (!currentUser) {
      const newUser = new User(req.body)
      await newUser.save()
      return res.status(statusCodes.CREATED).send("created");
    }

    return res.status(statusCodes.CONFLICT).send(errorMessages.EMAIL_ALREADY_EXISTS);
  } catch (error) {
    next(new ApiError(error.status, error.message));
  }
};

export const loginController = async(req, res, next) => {
  try {
    const { email, password } = req.body;
    const currentUser = await User.findOne({email})


    if (!currentUser) {
      return res.status(statusCodes.NOT_FOUND).send(errorMessages.USER_NOT_FOUND);
    }
    const passwordIsEqual = await currentUser.compare(password)

    if (!passwordIsEqual) {
      return res.status(statusCodes.BAD_REQUEST).send(errorMessages.INVALID_CATEGORY_DATA);
    }

    const payload = {
      _id: currentUser._id,
      email: email,
      role: currentUser.role
    };

    const ttl = {
      expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
    };
    
    const accessSecretKey = process.env.JWT_ACCESS_SECRET;
    const refreshSecretKey = process.env.JWT_REFRESH_SECRET;

    const accessToken = jwt.sign(payload, accessSecretKey, ttl);
    const refreshToken = jwt.sign(payload, refreshSecretKey, {
      expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
    });

    return res.send({
      accessToken,
      refreshToken,
    });
  } catch (error) {
    next(new ApiError(error.status, error.message));
  }
};
