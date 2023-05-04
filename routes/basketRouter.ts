import * as express from 'express';
const router = express.Router()
const BasketController = require("../controllers/basketController");

router.get("/get_one", BasketController.getOne);

module.exports = router;
