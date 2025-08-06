const validator = require("validator");

function validateUser(data) {
  const mandatoryField = ["firstName", "emailId", "age", "password"];

  // const isAllowed= Object.keys(req.body).every((keys)=>mandatoryField.includes(keys)) // return false for other keys in req.body
  const isAllowed = mandatoryField.every((k) => Object.keys(data).includes(k));

  if (!isAllowed) {
    throw new Error("Fields Missing");
  }

  // emailId validation
  if (!validator.isEmail(data.emailId)) throw new Error("Invalid Email");
  // password validation(for strong password)
  if (!validator.isStrongPassword(data.password))
    throw new Error("Weak Password");
  // firstname > 3 max <= 20
  if (!(data.firstName.length >= 3 && data.firstName.length <= 20))
    throw new Error("Name should be in range(3-20) char ");
}

module.exports = validateUser;
