const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>Hello World from NodeJs</h1>
  `);
});

app.get("/error", (req, res) => {
  process.exit(1);
});

app.listen(8080);
