const express = require('express');
const {
  getProductValidator,
  createProductValidator,
  updateProductValidator,
  deleteProductValidator,
} = require('../utiles/validators/productValidators');

const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../services/productService');
// const subcategoryRoutes=require('./subcategoryRoutes');
const router = express.Router();
// router.use('/categoryId/subcategories',subcategoryRoutes)
router
  .route('/')
  .get(getAllProducts)
  .post(createProductValidator, createProduct);
router
  .route('/:id')
  .get(getProductValidator, getProduct)
  .put(updateProductValidator, updateProduct)
  .delete(deleteProductValidator, deleteProduct);

module.exports = router;