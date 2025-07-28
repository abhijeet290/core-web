const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(
    "mongodb+srv://admin100x:iOTzlOYLVj8jPNfv@100xdev.ktn5siu.mongodb.net/UserDetails"
  );
}

module.exports = main;
