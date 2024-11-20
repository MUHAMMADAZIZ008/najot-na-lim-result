export function roleGuard(req, res, next) {
  try {
    const payload = req.user;

    if (payload.role !== "admin") {
      return res.status(403).send({
        status: "FORBIDDEN",
        msg: "Ushbu ma'lumotlarga huquqi yo'q",
      });
    }

    next();
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
}
