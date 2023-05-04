const express = require('express');
const router = express.Router()
const userRouter = require('./userRouter')
const reviewRouter = require('./reviewRouter')
const productRouter = require('./productRouter')
const ordersRouter = require('./ordersRouter')
const typeRouter = require('./typeRouter')
const brandRouter = require('./brandRouter')
const basketRouter = require('./basketRouter')
const basketProductRouter = require('./basketProductRouter')


router.use('/user', userRouter)
router.use('/review', reviewRouter)
router.use('/orders', ordersRouter)
router.use('/product', productRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/basket', basketRouter)
router.use('/basket-product', basketProductRouter)

module.exports = router

