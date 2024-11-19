import User from "../models/User.js";
import jwt from "jsonwebtoken";

const isAdmin = (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const decodedToken = jwt.verify(token, process.env.passwordToken);
    const isAdmin = decodedToken.isAdmin;

    if (isAdmin === false) {
      throw "Admin permissions required !";
    } else {
      next();
    }
  } catch (err) {
    res.status(401).json("Unauthorized Connection  !");
  }
};

export default isAdmin;
