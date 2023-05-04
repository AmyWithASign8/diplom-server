import * as express from 'express';
const router = express.Router()
const ProductController = require("../controllers/productController");


router.post("/create", ProductController.create);
router.get("/get_one", ProductController.getOne);//DEMO
router.get("/get_all", ProductController.getAll);
router.delete("/delete", ProductController.delete);

module.exports = router;
