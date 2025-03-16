require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { products, people } = require("./data.js");

// Middleware to parse JSON
app.use(express.json());

app.get("/api/v1/products", (req, res) => {
  return res.status(200).json(products);
});

app.get("/api/v1/products/:id", (req, res) => {
  const { id } = req.params;
  const prod = products.find((product) => product.id === Number(id));
  if (prod) {
    return res.status(200).json(prod);
  }
  return res.status(400).json({ status: false, result: "notfound" });
});

app.get("/api/v1/people", (req, res) => {
  return res.status(200).json(people);
});

app.get("/api/v1/people/:id", (req, res) => {
  const { id } = req.params;
  const per = people.find((person) => person.id === Number(id));
  if (per) {
    return res.status(200).json(per);
  }
  return res.status(400).json({ status: false, result: "notfound" });
});

app.post("/api/v1/products", (req, res) => {
  const { id, name } = req.body;
  const newProduct = {};
  if (id) {
    newProduct.id = id;
  }
  if (name) {
    newProduct.name = name;
  }
  const isEmpty = Object.keys(newProduct).length === 0;
  if (isEmpty) {
    return res.status(400).json({
      status: false,
      result: "Please provide atleast id or name or both",
    });
  }
  const finalProduct = [...products, newProduct];
  return res.status(200).json(finalProduct);
});

app.post("/api/v1/people", (req, res) => {
  const { id, name } = req.body;
  const newPerson = {};
  if (id) {
    newPerson.id = id;
  }
  if (name) {
    newPerson.name = name;
  }
  const isEmpty = Object.keys(newPerson).length === 0;
  if (isEmpty) {
    return res.status(400).json({
      status: false,
      result: "Please provide atleast id or name or both",
    });
  }
  const finalPeople = [...people, newPerson];
  return res.status(200).json(finalPeople);
});

app.put("/api/v1/products/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const product = products.find((prod) => prod.id === Number(id));
  if (!product) {
    return res
      .status(400)
      .json({ status: false, result: `No product with ID of ${id} exists` });
  }
  const newProduct = products.map((product) => {
    if (product.id === Number(id)) {
      product.name = name;
    }
    return product;
  });
  return res.status(200).json(newProduct);
});

app.put("/api/v1/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((per) => per.id === Number(id));
  if (!person) {
    return res
      .status(400)
      .json({ status: false, result: `No person with ID of ${id} exists` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  return res.status(200).json(newPeople);
});

app.delete("/api/v1/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((prod) => prod.id === Number(id));
  if (!product) {
    return res
      .status(400)
      .json({ status: false, result: `No product with ID of ${id} exists` });
  }
  const newProducts = products.filter((product) => product.id !== Number(id));
  return res.status(200).json(newProducts);
});

app.delete("/api/v1/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((per) => per.id === Number(id));
  if (!person) {
    return res
      .status(400)
      .json({ status: false, result: `No person with ID of ${id} exists` });
  }
  const newPeople = people.filter((person) => person.id !== Number(id));
  return res.status(200).json(newPeople);
});

app.get("*", (req, res) => {
  return res.status(400).send(`<h1>NOT FOUND</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
