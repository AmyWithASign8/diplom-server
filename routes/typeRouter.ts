import * as express from 'express';
const router = express.Router()
const TypeController = require("../controllers/typeController");


router.post("/create", TypeController.create);
router.get("/get_all", TypeController.getAll);
router.delete("/delete", TypeController.delete)


module.exports = router;
