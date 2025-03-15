require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send(`Hello World`);
});

app.get("/about", (req, res) => {
  res.status(200).send(`About Page`);
});

app.get("*", (req, res) => {
  res.status(400).send(`<h1>NOT FOUND</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
