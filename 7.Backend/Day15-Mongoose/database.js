const mongoose = require("mongoose");
require("dotenv").config({ quiet: true });

async function main() {
  await mongoose.connect(process.env.DB_URL);

  // const userSchema = new Schema({
  //   name: String,
  //   age: Number,
  //   city: String,
  //   gender: String,
  // });

  // // creating model simply means creating the collection

  // const User = mongoose.model("User", userSchema);

  // // created a document or object
  //   const user1 = new User({
  //     name: "Rohan",
  //     age: 20,
  //     city: "Delhi",
  //     gender: "male",
  //   });
  //   await user1.save();

  //   await User.create({ name: "Anmol", city: "gurgaon", age: 30 }); // it will create and save document

  //   // // to create multiple document at the same time
  //   await User.insertMany([
  //     { name: "raman", age: 32 },
  //     { name: "sunny", age: 12 },
  //   ]);

  //   const response=await User.find({})
  //   // console.log(response)

  //   // find by name
  //   const ans=await User.find({name:'sunny'})
  //   console.log(ans)
}

module.exports = main;
