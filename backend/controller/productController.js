const productModel = require('../model/product')

const getAllproduct = async (req,res) =>{
  try {
     const products = await productModel.find({}) ;
    res.json(products) ; 
    
  } catch (error) {
      console.log(error) ;
      res.status(500).json({"message" : error}) ;
  }
    
    

}

const getProduct = async (req,res) =>{
    try {
      const product =await productModel.findById(req.params.id) ;
      res.json(product) ; 
      
    } catch (error) {
        console.log(error) ;
        res.status(500).json({"message" : error}) ;
    }
      
      
  
  }

  module.exports = {
    getAllproduct , 
    getProduct
  }