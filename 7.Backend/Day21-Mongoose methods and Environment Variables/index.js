const express = require("express");
const app = express();
const main = require("./database");
const User = require("./models/user");
const validateUser = require("./utils/validateUser");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

const userAuth = require("./middleware/userAuth");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const commentRouter = require("./routes/comment");

app.use(express.json());
app.use(cookieParser());

// Routing

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/comment", commentRouter);

// find users by id

main()
  .then(async () => {
    console.log("Conneected to DB");
    app.listen(process.env.port, () => {
      console.log(`listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
