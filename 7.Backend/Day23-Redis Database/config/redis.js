const redis = require("redis");

const redisClient = redis.createClient({
  username: "default",
  password: "uNn5AMjjg6RflxPzLHzpvHLU20yflmRM",
  socket: {
    host: "redis-14903.c212.ap-south-1-1.ec2.redns.redis-cloud.com",
    port: 14903,
  },
});

// we have written function to connect to redis in index.js

// const connectRedis = async () => {
//   await redisClient.connect();
//   console.log("connected to redis");
// };

// connectRedis();

module.exports = redisClient;
