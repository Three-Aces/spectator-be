import express from'express'
const router = express.Router()
import {login, signup} from '../controllers/userController'

router.get('/', signup)
router.get('/',login)

export default router