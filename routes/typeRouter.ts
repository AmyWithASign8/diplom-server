import * as express from 'express';
const router = express.Router()
const typeController = require("../controllers/typeController");


router.get("/get_one/:pizza_type_id", typeController);
router.get("/get_all", typeController);


module.exports = router;
