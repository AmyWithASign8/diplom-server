const express = require('express');
const router = express.Router()
const commentRouter = require('./commentRouter')
const newsImagesRouter = require('./newsImagesRouter')

router.use('/user', )
router.use('/basket')
router.use('/comment', commentRouter)
router.use('/news')
router.use('/newsImages', newsImagesRouter)

module.exports = router

