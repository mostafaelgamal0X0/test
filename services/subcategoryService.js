const slugify=require('slugify');
const subCategoryModel=require('../models/subcategoryModel');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utiles/ApiError');
const factory=require('./factoryHandellers');
const subcategoryModel = require('../models/subcategoryModel');


exports.getAllsubcategories=asyncHandler(async(req,res)=>{
  const page =req.query.page * 1||1;
  const limit=req.query.limit * 1 ||5; 
    const skip=(page-1)*limit
    let filterObject = {};
  if (req.params.categoryId) filterObject = { category: req.params.categoryId };
     const subcategories=await subCategoryModel.find({filterObject})
     .skip(skip)
     .limit(limit)
     .populate({path:"category",select:'name-_id'});
     res.status(200).json({results:subcategories.length,page,data:subcategories})
    
    })

exports.getsubcategory=factory.getONe(subcategoryModel);
exports.updatesubcategory=factory.updateOne(subcategoryModel);
exports.createsubcategory=factory.createOne(subcategoryModel);
exports.deletesubcategory=factory.deleteOne(subCategoryModel);
