const express = require("express");
const app = express();


app.use("/user", (req, res) => {
    res.json({ name: "sunny", age: 24 });
});

app.use("/", (req, res) => {
  res.send("Hello from Express!");
});
app.listen(3000, () => {
  console.log(`listening on port 3000`);
});
