import * as express from 'express';
const router = express.Router()
const BasketController = require("../controllers/basketController");
const authMiddleware = require('../middleware/authMiddleware')

router.get("/get_one/:id", authMiddleware,BasketController.getOne);

module.exports = router;
