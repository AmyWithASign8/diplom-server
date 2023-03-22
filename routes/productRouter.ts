import * as express from 'express';
const router = express.Router()
const productController = require("../controllers/productController");


router.post("/create");
router.get("/get_one/:productId");//DEMO
router.get("/get_all");
router.delete("/delete/:productId");

module.exports = router;
