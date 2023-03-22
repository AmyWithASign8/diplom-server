import * as express from 'express';
const router = express.Router()
const CommentController = require("../controllers/commentController");


router.post("/create/:userId", CommentController.create);
router.get("/get_all", CommentController.getAll);
router.delete("/delete/:comment_id", CommentController.delete);

module.exports = router;
