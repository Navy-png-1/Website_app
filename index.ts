console.log("Hello via Bun!");
import express from "express";

const path = require('path');
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.sendFile("sample.html" {root:path.join(__dirname)});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});