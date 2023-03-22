import * as express from 'express';
const router = express.Router()
const UserController = require('../controllers/userController')

router.post('/create', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', UserController.check)
router.get('/get_one/:id', UserController.getOne)
router.get('/get_all', UserController.getAll)
router.delete('/delete/:id', UserController.deleteAccount)

module.exports = router
