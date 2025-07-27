const express = require("express");
const app = express();
const main = require("./database");
const User = require("./models/user");

app.use(express.json());

app.get("/info", async (req, res) => {
  const ans = await User.find({});
  res.send(ans);
});

app.post("/info", async (req, res) => {
  // const ans= new User(req.body)
  // await ans.save()

  try {
    await User.create(req.body);
    res.send("added successfully");
  } catch (error) {
    res.send(error);
  }
});

app.delete("/info", async (req, res) => {
  await User.deleteOne({ name: "Anmol" });
  res.send("Deleted");
});

app.put('/info',async(req,res)=>{
  await User.updateOne({name:"sunny"},{age:40,city:"katihar"})
  res.send('updated successfully')
})

main()
  .then(async () => {
    console.log("Conneected to DB");
    app.listen(3000, () => {
      console.log("listening on port 3000");
    });
  })
  .catch((err) => console.log(err));
