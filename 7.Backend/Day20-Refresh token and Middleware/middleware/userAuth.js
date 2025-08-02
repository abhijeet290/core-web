const User = require("../models/user");
const jwt = require("jsonwebtoken");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) throw new Error("Invalid token");
    const payload = jwt.verify(token, "Rohan@123");

    const { _id } = payload;
    if (!_id) {
      throw new Error("Id is missing");
    }

    const result = await User.findById(_id);

    if (!result) {
      throw new Error("User does not exist");
    }
    req.result = result; // include result in result to avoid db query fron /user route, req is a js object so we can include result like this
    // console.log('userAuth')
    next();
  } catch (err) {
    res.send("Error: " + err.message);
  }
};

module.exports = userAuth;
