import jwt from "jsonwebtoken";

const getUserId = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.PASSWORDTOKEN, async (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.status(404).json("no User Found");
      } else {
        res.locals.userId = decodedToken.userId;
        next();
      }
    });
  } else {
    res.status(400).json("no token");
  }
};

export default getUserId;
