import * as express from 'express';
const router = express.Router()
const ordersController = require("../controllers/ordersController");


router.post("/create/:userId");
router.get("/get_one/:orderId");
router.get("/get_all");
router.delete("/delete/:orderId");

module.exports = router;
