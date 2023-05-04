import * as express from 'express';
const router = express.Router()
const UserController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/create', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', authMiddleware, UserController.check)
router.get('/get_one/:id', UserController.getOne)
router.get('/get_all', UserController.getAll)
router.delete('/delete/:id', UserController.deleteAccount)
router.post('/update_email', UserController.updateEmail)
router.post('/update_password', UserController.updatePassword)
router.post('/update_total-spent', UserController.updateTotalSpent)
router.post('/update_orders-count', UserController.updateOrdersCount)

module.exports = router
