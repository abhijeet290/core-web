const express = require("express");
const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("first");
    next();

    // res.send("Middleware"); // ised to send response not a return statement
    console.log("am first");
  },

  (req, res,next) => {
    console.log("second");
    next()
    console.log('I am second')
    // res.send("i am second");
  },
  (req, res,) => {
    console.log("third");
    res.send("i am third");
    console.log('i am third')
  }
);

app.listen(4000, () => {
  console.log(`Listening on port 4000`);
});
