import * as express from 'express';
const checkRole = require("../middleware/checkRoleMiddleware");
const router = express.Router()
const UserController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/create', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', authMiddleware, UserController.check)
router.get('/get_one', UserController.getOne)
router.get('/get_all', checkRole('ADMIN'), UserController.getAll)
router.delete('/delete', authMiddleware, UserController.deleteAccount)
router.post('/update_email', authMiddleware, UserController.updateEmail)
router.post('/update_password', authMiddleware, UserController.updatePassword)
router.post('/update_total-spent', authMiddleware, UserController.updateTotalSpent)
router.post('/update_orders-count',authMiddleware, UserController.updateOrdersCount)

module.exports = router
