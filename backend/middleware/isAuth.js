const jwt = require("jsonwebtoken");
const users = require("../models/userModel")

exports.isAuth = async (req, res, next) => {
  const token = req.header("token");
  try {
    const decode = jwt.verify(token, process.env.SecretorKey);
    if (!decode) {
      res.status(400).send("you are not auth");
    }
    const user = await users.findById(decode.id);
    req.user = user;

    next()
  } catch (error) {
    console.log(error);
  }
};