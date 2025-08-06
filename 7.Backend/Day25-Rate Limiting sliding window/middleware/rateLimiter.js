const redisClient = require("../config/redis");

// Total time: 60 min
const windowSize = 3600;
const maxRequest = 60;

const rateLimiter = async (req, res, next) => {
  try {
    const key = `IP:${req.ip}`;
    const current_time = Date.now() / 1000;
    const window_time = current_time - windowSize;

    await redisClient.zRemRangeByScore(key, 0, window_time);

    const numberOfRequest = await redisClient.zCard(key);
    // total number of value

    if (numberOfRequest >= maxRequest) {
      throw new Error("Number of request exceeded");
    }
    await redisClient.zAdd(key, [
      { score: current_time, value: `${current_time}:${Math.random()}` },
    ]);
    // request is added

    // increase the ttl of key

    await redisClient.expire(key, windowSize);
    next()
  } catch (err) {
    res.send("Error: " + err.message);
  }
};

module.exports = rateLimiter;
