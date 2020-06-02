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

router.get('/edit-product/:productId',adminController.getEditProduct)

router.post('/edit-product',adminController.postEditProduct)

router.post('/delete-product', adminController.postDelete)



module.exports = router
 