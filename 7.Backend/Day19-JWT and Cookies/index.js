const express = require("express");
const app = express();
const main = require("./database");
const User = require("./models/user");
const validateUser = require("./utils/validateUser");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cookieParser());

// to register user
app.post("/user", async (req, res) => {
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
app.post("/login", async (req, res) => {
  try {
    // validating user details

    const user = await User.findOne({ emailId: req.body.emailId });
    // if (!(req.body.emailId === user.emailId))
    //   throw new Error("Invalid credentials");

    const isAllowed = await bcrypt.compare(req.body.password, user.password);
    if (!isAllowed) throw new Error("Invalid credentials");

    // sending jwt token on sucessful login
    // res.cookie("token", "thisisajsonwebtoken");

    // JWT token

    const token = jwt.sign(
      { _id: user._id, emailId: user.emailId },
      "Rohan@123",
      { expiresIn: 10 }
    );
    res.cookie("token", token);

    res.send("Logged in succussfully");
  } catch (err) {
    res.send("Error " + err.message);
  }
});

// to add multiple users
app.post("/users", async (req, res) => {
  try {
    await User.insertMany(req.body);
    res.send("Users added");
  } catch (err) {
    res.send("Error " + err.message);
  }
});

// fetch all users
app.get("/users", async (req, res) => {
  try {
    // validate the user first with jwt
    const payload = jwt.verify(req.cookies.token, "Rohan@123");
    console.log(payload);
    const result = await User.find({});
    // console.log(req.cookies);
    res.send(result);
  } catch (err) {
    res.send("Error " + err.message);
  }
});

// find users by id
app.get("/user", async (req, res) => {
  try {
    // const id = req.params.id;
    // const result = await User.findById(id);
    // const result = await User.findById(req.params.id);
    const payload = jwt.verify(req.cookies.token, "Rohan@123");

    const result = await User.findById(payload._id);
    res.send(result);
  } catch (err) {
    res.send("Error " + err.message);
  }
});

// delete user by id
app.delete("/user/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("Deleted successfully");
  } catch (error) {
    res.send("Error " + err.message);
  }
});

// update user details
app.patch("/user", async (req, res) => {
  try {
    const { _id, ...updates } = req.body;
    await User.findByIdAndUpdate(_id, updates, { runValidators: true });
    res.send("updated successfully");
  } catch (err) {
    res.send("Error " + err.message);
  }
});

main()
  .then(async () => {
    console.log("Conneected to DB");
    app.listen(3000, () => {
      console.log("listening on port 3000");
    });
  })
  .catch((err) => console.log(err));
