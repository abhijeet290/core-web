const mongoose = require("mongoose");
require("dotenv").config({ quiet: true });

async function main() {
  await mongoose.connect(process.env.DB_URL);
}

module.exports = main;
