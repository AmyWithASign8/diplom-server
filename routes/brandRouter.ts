import * as express from 'express';
const checkRole = require("../middleware/checkRoleMiddleware");
const router = express.Router()
const BrandController = require("../controllers/brandController");


router.post("/create", checkRole('ADMIN'), BrandController.create);
router.get("/get_all", BrandController.getAll);
router.delete("/delete", checkRole('ADMIN'), BrandController.delete)


module.exports = router;
