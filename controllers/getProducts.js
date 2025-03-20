const { products } = require("../data");

const getAllProducts = (req, res) => {
  return res.status(200).json(products);
};

const getSingleProduct = (req, res) => {
  const { id } = req.params;
  const prod = products.find((product) => product.id === id);
  if (prod) {
    return res.status(200).json(prod);
  }
  return res
    .status(400)
    .json({ status: false, result: `No Product with id = ${id} exists` });
};

module.exports = { getAllProducts, getSingleProduct };
