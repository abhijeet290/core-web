const express = require("express");
const app = express();
const main = require("./database");
const User = require("./models/user");
const validateUser = require("./utils/validateUser");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const redisClient = require("./config/redis");

const userAuth = require("./middleware/userAuth");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const commentRouter = require("./routes/comment");
const rateLimiter = require("./middleware/rateLimiter");

app.use(express.json());
app.use(cookieParser());

app.use(rateLimiter)

// Routing

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/comment", commentRouter);

const InitializeConnection = async () => {
  try {
    // await redisClient.connect()
    // console.log('connected to redisDB')

    // await main()
    // console.log('connected to DB')

    await Promise.all([redisClient.connect(), main()]);
    console.log("RedisDB and mongoDB connected");

    app.listen(process.env.port, () => {
      console.log(`listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log("Error: " + err);
  }
};

InitializeConnection();

// main()
//   .then(async () => {
//     console.log("Conneected to DB");
//     app.listen(process.env.port, () => {
//       console.log(`listening on port ${process.env.PORT}`);
//     });
//   })
//   .catch((err) => console.log(err));
