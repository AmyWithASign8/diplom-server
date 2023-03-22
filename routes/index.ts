const express = require('express');
const router = express.Router()
const userRouter = require('./userRouter')
const commentRouter = require('./commentRouter')
const productRouter = require('./productRouter')
const ordersRouter = require('./ordersRouter')
const pizzaTypesRouter = require('./pizzaTypesRouter')


router.use('/user', userRouter)
router.use('/comment', commentRouter)
router.use('/orders', ordersRouter)
router.use('/product', productRouter)
router.use('/pizza_types', pizzaTypesRouter)

module.exports = router

