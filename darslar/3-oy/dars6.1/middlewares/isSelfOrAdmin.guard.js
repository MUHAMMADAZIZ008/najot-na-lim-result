export function isSelfOrAdminGuard(req, res, next) {
  try {
    const payload = req.user;

    if (payload.role === "admin" || payload.sub === req.params.id) {
      next();
    } else {
      return res.status(403).send({
        status: "FORBIDDEN",
        msg: "Ushbu ma'lumotlarga huquqi yo'q",
      });
    }
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
}
