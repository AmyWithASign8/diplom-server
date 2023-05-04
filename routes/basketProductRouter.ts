import * as express from 'express';
const router = express.Router()
const BasketProductController = require("../controllers/basketProductController");

router.get("/get_one", BasketProductController.getOne);
router.post("/create", BasketProductController.create);
router.delete("/delete", BasketProductController.delete);

module.exports = router;
