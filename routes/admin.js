const path = require('path')
const express = require('express')

const adminController = require('../controllers/admin')
const router = express.Router()




// /admin/add-product --> Get 
router.get('/add-product', adminController.getAddProduct)

// /admin/products --> Get 
router.get('/products' , adminController.getProducts)


// /admin/add-product --> Post
router.post('/add-product', adminController.postAddProduct)




module.exports = router
 