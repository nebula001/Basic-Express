const { products } = require("../data");
const newProduct = (req, res) => {
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
};
module.exports = newProduct;
