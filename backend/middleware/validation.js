const { body, validationResult } = require("express-validator");

exports.registervalidation = [
  body("email", "please enter a valid email").isEmail(),
  body("password", "password must at least 6 caracters").isLength({ min: 6 }),
];
exports.loginvalidation = [
  body("email", "please enter a valid email").isEmail(),
  body("password", "password must at least 6 caracters").isLength({ min: 6 }),
];
exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};