const slugify=require('slugify');
const CategoryModel=require('../models/CategoryModel');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utiles/ApiError');
const factory=require('./factoryHandellers');




exports.getAllCategories=asyncHandler(async(req,res)=>{
    const page =req.query.page * 1||1;
    const limit=req.query.limit * 1 ||5; 
    const skip=(page-1)*limit
 const categories=await CategoryModel.find({}).skip(skip).limit(limit);
 res.status(200).json({results:categories.length,page,data:categories})

})


exports.getCategory=factory.getONe(CategoryModel);
exports.updateCategory=factory.updateOne(CategoryModel);
exports.createCategory=factory.createOne(CategoryModel);
exports.deleteCategory=factory.deleteOne(CategoryModel);