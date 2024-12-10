import { verifyToken } from "../helpers/jwt.js";

export function checkUserGuard(req, res, next) {
  try {
    const token = req.headers?.authorization?.split(" ")?.[1];
    if (!token) {
      return res.status(401).send({
        msg: "Oldin ro'yxatdan o'ting",
      });
    }

    const decode = verifyToken("access", token);
    req.user = decode;

    next();
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
}
