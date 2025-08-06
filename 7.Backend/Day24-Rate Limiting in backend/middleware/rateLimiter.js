const redisClient = require("../config/redis");

const rateLimiter = async (req, res, next) => {
  try {
    const ip = req.ip;

    const count = await redisClient.incr(ip);

    if (count > 60) throw new Error("User Limit Exceeded");

    if (count == 1) await redisClient.expire(3600);

    next()
  } catch (err) {
    res.send("Error: " + err.message);
  }
};

module.exports = rateLimiter;
