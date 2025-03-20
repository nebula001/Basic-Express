const { products } = require("../data");
const productUpdate = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const product = products.find((prod) => prod.id === id);
  if (!product) {
    return res
      .status(400)
      .json({ status: false, result: `No product with ID of ${id} exists` });
  }
  const newProduct = products.map((product) => {
    if (product.id === id) {
      product.name = name;
    }
    return product;
  });
  return res.status(200).json(newProduct);
};
module.exports = productUpdate;
