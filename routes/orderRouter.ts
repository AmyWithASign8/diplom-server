import * as express from 'express';
const checkRole = require("../middleware/checkRoleMiddleware");
const router = express.Router()
const orderController = require("../controllers/orderController");
const authMiddleware = require('../middleware/authMiddleware')



router.post("/create", orderController.create);
router.get("/get_one", orderController.getOne);
router.get("/get_all/:id", authMiddleware,orderController.getAll);
router.delete("/delete", checkRole('ADMIN'), orderController.delete);

module.exports = router;
