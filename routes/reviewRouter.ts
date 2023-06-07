import * as express from 'express';
const router = express.Router()
const ReviewController = require("../controllers/reviewController");
const checkRole = require('../middleware/checkRoleMiddleware')


router.post("/create", ReviewController.create);
router.get("/get_all", ReviewController.getAll);
router.delete("/delete", checkRole('ADMIN'), ReviewController.delete);
router.get("/admin/get_all", checkRole('ADMIN'), ReviewController.getAllForAdmin);
router.post("/admin/approved", checkRole('ADMIN'), ReviewController.ApprovedReview);

module.exports = router;
