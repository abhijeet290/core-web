const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello from the server");
  }
  if (req.url == "/contact") {
    res.end("Hello from the contact");
  }
  if (req.url == "/about") {
    res.end("Hello from about");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
