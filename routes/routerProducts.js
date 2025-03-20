const express = require("express");
const router = express.Router();
const { validateProductId } = require("../middlewares/validateId");
const {
  getAllProducts,
  getSingleProduct,
} = require("../controllers/getProducts");

const newProduct = require("../controllers/createProduct");

const productUpdate = require("../controllers/updateProduct");

const productDelete = require("../controllers/deleteProduct");

router.get("/", getAllProducts);
router.get("/:id", validateProductId, getSingleProduct);

router.post("/", newProduct);

router.put("/:id", validateProductId, productUpdate);

router.delete("/:id", validateProductId, productDelete);

module.exports = router;
