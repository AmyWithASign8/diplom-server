import * as express from 'express';
const checkRole = require("../middleware/checkRoleMiddleware");
const router = express.Router()
const ProductController = require("../controllers/productController");


router.post("/create", checkRole('ADMIN'),  ProductController.create);
router.get("/get_one", ProductController.getOne);//DEMO
router.get("/get_all", ProductController.getAll);
router.get("/search", ProductController.getAllByTextSearch);
router.delete("/delete", checkRole('ADMIN'), ProductController.delete);

module.exports = router;
