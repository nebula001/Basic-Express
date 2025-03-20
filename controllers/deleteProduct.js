const { products } = require("../data");
const productDelete = (req, res) => {
  const { id } = req.params;
  const product = products.find((prod) => prod.id === id);
  if (!product) {
    return res
      .status(400)
      .json({ status: false, result: `No product with ID of ${id} exists` });
  }
  const newProducts = products.filter((product) => product.id !== id);
  return res.status(200).json(newProducts);
};
module.exports = productDelete;
