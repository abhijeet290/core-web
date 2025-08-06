const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 20,
    },
    lastName: {
      type: String,
    },
    age: {
      type: Number,
      min: 14,
      max: 70,
      required: true,
    },
    gender: {
      type: String,
      // enum: ["male", "female", "others"],
      validate(value) {
        if (!["male", "female", "others"].includes(value))
          throw new Error("Invalid Gender");
      },
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      immutable: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "this is the default photo link",
    },
  },
  { timestamps: true }
);

// Creating methods in mongoose

userSchema.methods.getJWT = function () {
  const ans = jwt.sign(
    { _id: this._id, emailId: this.emailId }, //here we have to replace user with this, it holds the reference of user object
    process.env.SECRET_KEY,
    { expiresIn: "30min" }
  );
  return ans;
};

userSchema.methods.verifyPassword = async function (userPassword) {
  const ans = await bcrypt.compare(userPassword, this.password);
  return ans;
};

// creating model simply means creating the collection

const User = mongoose.model("user", userSchema);

module.exports = User;
