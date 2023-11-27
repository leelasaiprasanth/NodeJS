const http = require("http");
const casual = require("casual");

const server = http.createServer((req, res) => {
  res.end(casual.sentence);
});

server.listen(4200, () => {
  console.log("Server Started at port 4200.");
});
