import * as express from 'express';
const router = express.Router()
const TypeController = require("../controllers/typeController");
const checkRole = require('../middleware/checkRoleMiddleware')


router.post("/create", checkRole('ADMIN'), TypeController.create);
router.get("/get_all", TypeController.getAll);
router.delete("/delete", checkRole('ADMIN'), TypeController.delete)


module.exports = router;
