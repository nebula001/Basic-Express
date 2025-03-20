require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const productRouter = require("./routes/routerProducts.js");
const peopleRouter = require("./routes/routerPeople.js");

// Middleware to parse JSON when Using POST methods
app.use(express.json());

//PRODUCTS Router
app.use("/api/v1/products", productRouter);

//PEOPLE router
app.use("/api/v1/people", peopleRouter);

//router for all other paths other than specified ones
app.get("*", (req, res) => {
  return res.status(400).send(`<h1>NOT FOUND</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
