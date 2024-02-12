const express=require('express');
const morgan=require('morgan');
const ApiError=require('./utiles/ApiError');
const dotenv=require('dotenv');
dotenv.config({path:'config.env'});
const dbConnection=require('./config/DatabasConfig');
const categoryRoute = require('./Routes/CategoryRoutes');
const productRoute = require('./Routes/productRoutes');
const subcategoryRoute = require('./Routes/subcategoryRoutes');
const globaleError = require('./middleware/errMiddleware');

//connection with db
dbConnection();

const app=express();

//middlewares
app.use(express.json());

if(process.env.NODE_ENV==='development')
{
app.use(morgan('dev'));
console.log(`running on ${process.env.NODE_ENV} mode ` )

}


// Mount Routes
app.use('/api/v1/categories', categoryRoute);
app.use('/api/v1/subcategories',subcategoryRoute);
app.use('/api/v1/products', productRoute);
 app.all('*',(req,res,next)=>{
    next(new ApiError(`cant find this rout:${req.originalUrl}`,400));
 })
app.use(globaleError)

const port=process.env.PORT;
const server=app.listen(port,()=>{
    console.log(`listenting on port :${port}` );
})

process.on('unhandledRejection',(err)=>{
    console.log(`unhandledRejection error is :${err.name}|${err.message}`);
    server.close(()=>{
        console.log('server shuting down...');
        process.exit(1);
    });
})