import * as express from 'express';
const router = express.Router()
const BrandController = require("../controllers/brandController");


router.post("/create", BrandController.create);
router.get("/get_all", BrandController.getAll);
router.delete("/delete", BrandController.delete)


module.exports = router;
