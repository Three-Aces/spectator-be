import express from'express'
const router = express.Router()
import {login, signup} from '../controllers/authControllers'

router.get('/', signup)
router.get('/',login)

export default router