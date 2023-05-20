import * as express from 'express';
const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware')
const BasketProductController = require("../controllers/basketProductController");

router.get("/get_one", BasketProductController.getOne);
router.post("/create", authMiddleware, BasketProductController.create);
router.delete("/delete", authMiddleware, BasketProductController.delete);

module.exports = router;
