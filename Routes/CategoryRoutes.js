const express = require('express');
const {
  getCategoryValidator,
  createCategoryValidator,
  updateCategoryValidator,
  deleteCategoryValidator,
} = require('../utiles/validators/categoryValidators');

const {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../services/categoryService');


const subcategoryRoutes=require('./subcategoryRoutes');


const router = express.Router();
router.use('/categoryId/subcategories',subcategoryRoutes)

router
  .route('/')
  .get(getAllCategories)
  .post(createCategoryValidator, createCategory);
router
  .route('/:id')
  .get(getCategoryValidator, getCategory)
  .put(updateCategoryValidator, updateCategory)
  .delete(deleteCategoryValidator, deleteCategory);

module.exports = router;