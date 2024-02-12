const asyncHandler = require('express-async-handler');
const ApiError = require('../utiles/ApiError');


exports.deleteOne=(model)=>

    asyncHandler(async(req,res,next)=>{
        const {id}=req.params;
        const document=await model.findByIdAndDelete(id);
        if(!document){
            return next(new ApiError(`there is no document with this id:${id}`,404));
        }
        res.status(204).send()});

exports.updateOne=(model)=>asyncHandler(async(req,res,next)=>{
  
    const document=await model.findByIdAndUpdate(
           req.params.id,
           req.body,
           {new:true});
       if(!document){
           return next(new ApiError("there is no document with this id",404));
       }
          res.status(200).json({data:document});
   })
exports.createOne=(model)=>asyncHandler(async(req,res)=>{
    
    const document=await model.create(
    req.body
 );
     res.status(201).json({data:document})
    
 
 });
 

 exports.getONe=(Model) =>
 asyncHandler(async (req, res, next) => {
   const { id } = req.params;
   const document = await Model.findById(id);
   if (!document) {
     return next(new ApiError(`No document for this id ${id}`, 404));
   }
   res.status(200).json({ data: document });
 });
