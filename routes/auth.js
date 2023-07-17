import express from 'express'
import { auth, login, register } from '../controllers/authController.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/auth', auth)

export default router