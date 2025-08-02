const express = require("express");
const userRouter = express.Router();
const User = require("../models/user");

const userAuth = require("../middleware/userAuth");

userRouter.get("/", userAuth, async (req, res) => {
  try {
    res.send(req.result); // accessing result from request object
  } catch (err) {
    res.send("Error " + err.message);
  }
});

// delete user by id
userRouter.delete("/:id", userAuth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("Deleted successfully");
  } catch (error) {
    res.send("Error " + err.message);
  }
});

// update user details
userRouter.patch("/", userAuth, async (req, res) => {
  try {
    const { _id, ...updates } = req.body;
    await User.findByIdAndUpdate(_id, updates, { runValidators: true });
    res.send("updated successfully");
  } catch (err) {
    res.send("Error " + err.message);
  }
});

module.exports = userRouter;
