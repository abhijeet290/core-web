const express = require("express");
const commentRouter = express.Router();

commentRouter.get("/", (req, res) => {
  res.send("comment");
});
commentRouter.patch("/", (req, res) => {
  res.send("comment updated");
});
commentRouter.delete("/", (req, res) => {
  res.send("comment deleted");
});

module.exports = commentRouter;
