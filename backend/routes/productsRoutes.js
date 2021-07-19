const { Router } = require('express');
const express  = require('express');
const router =  express.Router() ;
const {getAllproduct,getProduct} = require('../controller/productController')
// @desc get all products 
//  @route /api/products
// @access  pulic 
router.get('/', getAllproduct)


// @desc get a product 
//  @route /api/products/:id
// @access  pulic 
router.get('/:id', getProduct)

module.exports = router ;
