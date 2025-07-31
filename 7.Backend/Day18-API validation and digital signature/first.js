const bcrypt = require("bcrypt");

const password = "Akash@123";

async function hashing() {
  // hashcode + salt
  //   console.time("hash");
  const salt = await bcrypt.genSalt(10);
  const hashedpass = await bcrypt.hash(password, salt);
  // const hashedpass = await bcrypt.hash(password, 10); // it is a time taking process, it add the salt and generate hash
  //   in general we use 10-12 rounds if we use high round it will impact user experience as it take more time
  //   console.timeEnd("hash");

  const ans = await bcrypt.compare(password, hashedpass);
  console.log(hashedpass);
  console.log(salt);
  console.log(ans);
}
hashing();
