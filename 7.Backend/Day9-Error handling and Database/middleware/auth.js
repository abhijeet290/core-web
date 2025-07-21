const Auth = (req, res, next) => {
  // add item to food menu
  // need to authenticate for admin access
  const token = "ABCDE";
  const Access = token === "ABCDE" ? 1 : 0;

  if (!Access) {
    res.status(403).send("No permission");
  }
  next();
};

module.exports = { Auth };
