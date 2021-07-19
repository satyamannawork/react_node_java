require('dotenv').config() ;
const productData =  require('./data/product') ; 
const connectDB = require('./config/db')
const product =  require('./model/product') ; 
connectDB() ; 

const importData  = async () => {
 try {
    await product.deleteMany({}) ;
    await product.insertMany(productData) ; 
    console.log("Loaded data successfully") ;
    process.exit();
 } catch (error) {
     console.log("Error in feed") ;
     process.exit(1);
 }
 
}

importData();
