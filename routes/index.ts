const express = require('express');
const router = express.Router()
const userRouter = require('./userRouter')
const reviewRouter = require('./reviewRouter')
const productRouter = require('./productRouter')
const ordersRouter = require('./ordersRouter')
const typeRouter = require('./typeRouter')
const brandRouter = require('./brandRouter')


router.use('/user', userRouter)
router.use('/review', reviewRouter)
router.use('/orders', ordersRouter)
router.use('/product', productRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)

module.exports = router

