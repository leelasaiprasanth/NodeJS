const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(
    '<a href="/contact">Contact US </a> <br> <a href="/about">About US </a>'
  );
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact US Page </h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Us Page </h1>");
});

app.get("*", (req, res) => {
  res.send('404. This page does not exist. <a href="/"> Go To HomePage</a>');
});

app.listen(3000, () => {
  console.log("Server started on port 3000.");
});

// https://ejs.co/
// https://pugjs.org/api/getting-started.html
// https://handlebarsjs.com/guide/