import * as express from 'express';
const router = express.Router()
const orderController = require("../controllers/orderController");


router.post("/create", orderController.create);
router.get("/get_one", orderController.getOne);
router.get("/get_all", orderController.getAll);
router.delete("/delete", orderController.delete);

module.exports = router;
