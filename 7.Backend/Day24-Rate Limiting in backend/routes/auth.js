const express = require("express");
const authRouter = express.Router();
const User = require("../models/user");
const validateUser = require("../utils/validateUser");
const bcrypt = require("bcrypt");
const redisClient = require("../config/redis");
const jwt = require("jsonwebtoken");
const userAuth = require("../middleware/userAuth");

authRouter.post("/user", async (req, res) => {
  try {
    // validate user before creating it
    validateUser(req.body);

    // converting password into hash
    req.body.password = await bcrypt.hash(req.body.password, 10);

    await User.create(req.body);
    res.send("user added successfully");
  } catch (err) {
    console.log(err);
    res.send("Error " + err.message);
  }
});

// user login
authRouter.post("/login", async (req, res) => {
  try {
    // validating user details
    const user = await User.findOne({ emailId: req.body.emailId });

    const isAllowed = user.verifyPassword(req.body.password);
    if (!isAllowed) throw new Error("Invalid credentials");

    // JWT token
    const token = user.getJWT();
    res.cookie("token", token);

    res.send("Logged in succussfully");
  } catch (err) {
    res.send("Error " + err.message);
  }
});

// we have to add the blocked tokens in the redis DB

authRouter.post("/logout", userAuth, async (req, res) => {
  try {
    const { token } = req.cookies;
    // console.log(token);

    const payload = jwt.decode(token);
    // console.log(payload);
    // console.log(payload.exp - payload.iat);

    await redisClient.set(`token:${token}`, "Blocked");
    // await redisClient.expire(`tokekn:${token}`, 1800);
    await redisClient.expireAt(`tokekn:${token}`, payload.exp);

    res.cookie("token", null, { expires: new Date(Date.now()) });
    res.send("Logged Out Successfully");
  } catch (err) {
    res.send("Error: " + err.message);
  }
});

module.exports = authRouter;
