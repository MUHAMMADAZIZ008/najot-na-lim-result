import jwt from "jsonwebtoken";

export const authGuard = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(409).send("token not found");
    }

    const [type, token] = req.headers.authorization?.split(" ");

    if (type !== "Bearer" || !token) {
      return res.status(409).send("Not valid data");
    }

    jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, payload) => {
      if (err) {
        return res.status(403).send("Forbidden");
      }
      req.user = payload;
      console.log(payload);
      
      next();
    });
  } catch (error) {
    next(error);
  }
};

export const isSelfGuard = (req, res, next) => {
  try {
    const id = req.params.id
    const currnetUser = req.user

    if(currnetUser._id === id){
      next()
    }
    return res.send("forbitten")
  } catch (error) {
    next(error);
  }
};