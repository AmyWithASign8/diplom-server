import * as express from 'express';
const router = express.Router()
const pizzaTypesController = require("../controllers/pizzaTypesController");


router.get("/get_one/:pizza_type_id");
router.get("/get_all");


module.exports = router;
