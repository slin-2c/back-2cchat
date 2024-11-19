import jwt from "jsonwebtoken";
import User from "../models/User.js";

// On récupère le token dans le header de la requete et on vérifie l'userId
const auth = (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const decodedToken = jwt.verify(token, process.env.PASSWORDTOKEN);
    const userId = decodedToken.userId;

    User.findOne({
      where: { id: userId },
      attributes: { exclude: ["password"] },
    })
      .then((user) => {
        if (!user) {
          res.cookie("jwt", "", { maxAge: 1 });
          res.status(404).json({ message: "User not found !" });
        } else {
          next();
        }
      })
      .catch((err) => res.status(404).json({ err }));
  } catch (err) {
    res.cookie("jwt", "", { maxAge: 1 });
    res.status(401).json("Unauthorized Connection !");
  }
};

export default auth;
