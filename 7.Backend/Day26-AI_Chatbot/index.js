const express = require("express");
const app = express();
const main = require("./aiChat");

app.use(express.json());

const chattingHistory = [];
// save user chat history here
// key: value pair
// key = id
// value = array

app.post("/chat", async (req, res) => {
  const { id, msg } = req.body;

  if (!chattingHistory[id]) {
    chattingHistory[id] = [];
  }

  const history = chattingHistory[id];
//   if (history.length > 0) {
//   console.log(history[0].parts);
// }

  const promptMessage = [
    ...history,
    {
      role: "user",
      parts: [{ text: msg }],
    },
  ];
  const answer = await main(promptMessage);

  history.push({ role: "user", parts: [{ text: msg }] });
  history.push({ role: "model", parts: [{ text: answer }] });
  res.send(answer);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
