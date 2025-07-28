const express = require("express");
const app = express();
const main = require("./database");
const User = require("./models/user");

app.use(express.json());

// to register user
app.post("/user", async (req, res) => {
  try {
    // validate user before creating it
    //  req.body should contain firstName
    const mandatoryField = ["firstName", "emailId", "agee"];

    // const isAllowed= Object.keys(req.body).every((keys)=>mandatoryField.includes(keys)) // return false for other keys in req.body
    const isAllowed = mandatoryField.every((keys) =>
      Object.keys(req.body).includes(keys)
    );

    if (!isAllowed) {
      throw new Error("Fields Missing");
    }

    await User.create(req.body);
    res.send("user added successfully");
  } catch (err) {
    console.log(err);
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
app.get("/user", async (req, res) => {
  try {
    const result = await User.find({});
    res.send(result);
  } catch (err) {
    res.send("Error " + err.message);
  }
});

// find users by id
app.get("/user/:id", async (req, res) => {
  try {
    // const id = req.params.id;
    // const result = await User.findById(id);
    const result = await User.findById(req.params.id);
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
