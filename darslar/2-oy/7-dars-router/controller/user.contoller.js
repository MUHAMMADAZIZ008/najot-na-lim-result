export const getAllUser = (req, res, next) => {
  try {
    throw new Error("xatolik a")
    res.send("Get user controller");
  } catch (error) {
    next(error);
  }
};

export const getUserById = (req, res, next) => {
  try {
    res.send("Get user controller");
  } catch (error) {
    next(error);
  }
};

export const creatUser = (req, res, next) => {
  try {
    res.send("Get user controller");
  } catch (error) {
    next(error);
  }
};

export const deleteUser = (req, res, next) => {
  try {
    res.send("Get user controller");
  } catch (error) {
    next(error);
  }
};
