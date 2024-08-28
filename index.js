require("dotenv").config();
const express = require("express");
const app = express();
// const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/game", (req, res) => {
  res.send("welcome game");
});

app.get("/login", (req, res) => {
  res.send("<h1>I am billionaire</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<a>www.youtube.com</a>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
