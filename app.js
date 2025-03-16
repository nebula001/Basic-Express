require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { products, people } = require("./data.js");

// Middleware to parse JSON
app.use(express.json());

app.get("/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/products/:id", (req, res) => {
  res.status(200).json(products);
});

app.get("/people", (req, res) => {
  res.status(200).json(people);
});

app.get("/people/:id", (req, res) => {
  res.status(200).json(people);
});

app.get("*", (req, res) => {
  res.status(400).send(`<h1>NOT FOUND</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
