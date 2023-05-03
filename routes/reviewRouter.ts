import * as express from 'express';
const router = express.Router()
const ReviewController = require("../controllers/reviewController");


router.post("/create", ReviewController.create);
router.get("/get_all", ReviewController.getAll);
router.delete("/delete", ReviewController.delete);

module.exports = router;
